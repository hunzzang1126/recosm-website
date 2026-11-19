"use client";

// Scroll-driven product scene for the home page. One move, then the reveal: the model slides in, the tube
// turns once on its axis while it grows to fill the screen, the cap lifts to show the applicator, and then the
// formula appears around it as a linked graph of ingredients.
// 160 pre-rendered frames (transparent WebP, 3 degrees apart) are drawn to a canvas and cross-blended while
// moving, so the turn is continuous at any scroll speed; at rest it settles on a whole frame, so it stays crisp. The section is not pinned: it scrolls with the page and the move plays as it comes into view. Without JavaScript,
// or with reduced motion, the same ingredients read as an ordinary list beside a still tube.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// A phone's address bar sliding away changes the viewport height; do not recalculate (and jump) on that.
ScrollTrigger.config({ ignoreMobileResize: true });

// frames per set: 240 for the turn (1.5 degrees a frame) and 60 for the cap lift
const COUNT = { d: 300, m: 300 };
// One scroll track for the whole scene (from the section's top edge 92% down the screen to its end):
//   0 .. PLAY        the tube turns, grows and opens
//   PLAY .. EXIT     the ingredient notes are up, to be read
//   EXIT .. EXIT_END the tube and the model sweep out and the statement comes in, tied to the scroll
// The next block of the page is part of this same scene, so nothing is cut at a block edge.
const PLAY = 0.5;
const EXIT = 0.7;
const EXIT_END = 0.93;
const START_SCALE = { d: 0.44, m: 0.36 };
const frameSrc = (set, i) => `/images/serum-turn/${set}/f_${String(i).padStart(3, "0")}.webp`;

// Positions are percentages of the stage: d = wide screens (tube stands at 69%), m = phones (tube centred).
const HUB = { d: [69, 60], m: [50, 50] };
const NODES = [
  { id: "pg", title: "Zero prostaglandins", body: "No prostaglandin analogs. Fragrance-free.", d: [58, 22], m: [15, 30], sats: [{ label: "Fragrance-free", d: [62, 11] }] },
  { id: "cap", title: "Capixyl™ peptide complex", body: "For fuller-looking lashes.", d: [80.5, 27], m: [85, 30], sats: [{ label: "Acetyl tetrapeptide-3", d: [89, 15] }, { label: "Red clover extract", d: [77.5, 12] }] },
  { id: "bio", title: "Biotin", body: "A B-vitamin and building block of keratin.", d: [57.5, 47], m: [15, 50], sats: [{ label: "Keratin", d: [61.5, 37] }] },
  { id: "pan", title: "Panthenol", body: "A humectant for flexible, less brittle lashes.", d: [81.5, 52], m: [85, 50], sats: [{ label: "Flexibility", d: [90, 42] }] },
  { id: "cen", title: "Centella asiatica", body: "Tiger grass extract that soothes the lash line.", d: [58, 72], m: [15, 70], sats: [{ label: "Tiger grass", d: [61.5, 84] }] },
  { id: "ha", title: "Hyaluronic acid", body: "Binds to lash fibres and locks in moisture.", d: [80.5, 78], m: [85, 70], sats: [{ label: "Moisture", d: [89, 89] }] },
];
// links between neighbours, so it reads as a web and not a list
const CROSS = [["pg", "bio"], ["bio", "cen"], ["cap", "pan"], ["pan", "ha"]];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
);

const ease = (t) => t * t * (3 - 2 * t);

export default function SerumTurn() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const rigRef = useRef(null);
  const [live, setLive] = useState(false);
  const [graph, setGraph] = useState(false);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const rig = rigRef.current;
    const stage = section && section.querySelector(".turn-stage");
    const follow = section && section.querySelector(".turn-follow");
    const finalImg = section && section.querySelector(".turn-final");
    if (!section || !canvas || !rig || !stage || !follow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const phone = window.matchMedia("(max-width: 880px)").matches;
    // Phones get their own render: phone-shaped frames (600 x 1300) that fill the screen, zoom included, and a
    // 1170 x 2535 still of the last frame once it has come to rest. Wide screens draw the 720 x 1680 set.
    const set = phone ? "m" : "d";
    const key = phone ? "m" : "d";
    const FRAMES = COUNT[set];
    const ctx2d = canvas.getContext("2d");
    // How the frames get to the screen without hitching (the usual recipe for scroll-scrubbed sequences):
    //  1. every frame's file is downloaded once and kept as a blob;
    //  2. a moving window of frames around the current position is decoded ahead of time, off the main thread
    //     (createImageBitmap), so by the time a frame is needed it only has to be copied to the canvas;
    //  3. the canvas gets one cheap draw per tick (two on wide screens, where neighbours are blended);
    //  4. playback never skips over a frame that is not ready, so nothing pops.
    const blobs = new Array(FRAMES);
    const bitmaps = new Map(); // frame index -> decoded bitmap (or a decoded <img> where bitmaps are unavailable)
    const pending = new Set();
    const WIN_BACK = phone ? 6 : 8;
    const WIN_AHEAD = phone ? 16 : 22;
    const KEEP = phone ? 26 : 36;
    const canBitmap = typeof createImageBitmap === "function";
    let target = 0;
    let current = 0;
    let drawn = -1;
    let raf = 0;
    let started = false;
    let settle = 0;
    let held = false;
    let dead = false;
    let lastDir = 1;

    const decode = (i) => {
      if (i < 0 || i >= FRAMES || !blobs[i] || bitmaps.has(i) || pending.has(i)) return;
      pending.add(i);
      const done = (bm) => {
        pending.delete(i);
        if (dead) return bm && bm.close && bm.close();
        if (bm) bitmaps.set(i, bm);
        if (drawn < 0 || Math.abs(i - current) < 2) draw(current);
        if (!raf) raf = requestAnimationFrame(tick);
      };
      if (canBitmap) {
        createImageBitmap(blobs[i]).then(done, () => done(null));
      } else {
        const im = new Image();
        const url = URL.createObjectURL(blobs[i]);
        im.src = url;
        const fin = () => { URL.revokeObjectURL(url); done(im.naturalWidth ? im : null); };
        (im.decode ? im.decode() : Promise.reject()).then(fin, () => { im.onload = fin; im.onerror = fin; });
      }
    };

    // keep the window of decoded frames centred a little ahead of where the scroll is going
    const warm = () => {
      const c = Math.round(current);
      const from = lastDir >= 0 ? c - WIN_BACK : c - WIN_AHEAD;
      const to = lastDir >= 0 ? c + WIN_AHEAD : c + WIN_BACK;
      for (let i = Math.max(0, from); i <= Math.min(FRAMES - 1, to); i++) decode(i);
      if (bitmaps.size > KEEP + 12) {
        for (const [i, bm] of bitmaps) {
          if (i < c - KEEP || i > c + KEEP) {
            bitmaps.delete(i);
            if (bm.close) bm.close();
          }
        }
      }
    };

    const draw = (cur) => {
      const i = Math.floor(cur);
      const f = cur - i;
      const bm = bitmaps.get(i);
      if (!bm) return; // keep what is on screen; the tick will not have moved past a missing frame anyway
      const w = bm.width || bm.naturalWidth;
      const h = bm.height || bm.naturalHeight;
      if (canvas.width !== w) {
        canvas.width = w;
        canvas.height = h;
      }
      ctx2d.globalAlpha = 1;
      ctx2d.clearRect(0, 0, w, h);
      ctx2d.drawImage(bm, 0, 0);
      // wide screens blend toward the next frame for in-between positions; phones do a single draw per tick
      const next = bitmaps.get(i + 1);
      if (!phone && f > 0.02 && next) {
        ctx2d.globalAlpha = f;
        ctx2d.drawImage(next, 0, 0);
        ctx2d.globalAlpha = 1;
      }
      drawn = cur;
    };

    const apply = () => {
      const t = current / (FRAMES - 1);
      // wide screens grow the tube with CSS; the phone frames are rendered with that zoom already in the camera
      const s0 = START_SCALE[key];
      rig.style.setProperty("--s", phone ? "1" : (s0 + (1 - s0) * ease(Math.min(1, t / 0.82))).toFixed(4));
      // phones show whole frames only (one draw), wide screens the blended in-between
      const show = phone ? Math.round(current) : current;
      if (Math.abs(show - drawn) > 0.01) draw(show);
      // at the end of the move the crisp still takes over from the canvas
      // (and only once that still has itself arrived, so there is never an empty moment between the two)
      const atEnd = current >= FRAMES - 1.001 && !!finalImg && finalImg.complete && finalImg.naturalWidth > 0;
      if (atEnd !== held) {
        held = atEnd;
        setHold(atEnd);
      }
    };

    // how far playback may go from `from` toward `to` without stepping over a frame that is not decoded yet
    const reach = (from, to) => {
      const dir = to >= from ? 1 : -1;
      let i = dir > 0 ? Math.floor(from) : Math.ceil(from);
      const end = dir > 0 ? Math.floor(to) : Math.ceil(to);
      if (!bitmaps.has(i)) return from;
      while (i !== end && bitmaps.has(i + dir)) i += dir;
      return i === end ? to : i;
    };

    const tick = () => {
      if (Math.abs(target - current) > 0.5) lastDir = target > current ? 1 : -1;
      warm();
      const goal = reach(current, target);
      current += (goal - current) * 0.2;
      if (Math.abs(goal - current) < 0.01) current = goal;
      apply();
      // keep ticking while there is distance to cover, including distance that is waiting on a decode
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };

    const load = () => {
      if (started) return;
      started = true;
      // a few at a time, in order, so the first frames are never stuck behind the last ones
      let nextIndex = 0;
      const pump = () => {
        if (dead || nextIndex >= FRAMES) return;
        const i = nextIndex++;
        fetch(frameSrc(set, i))
          .then((r) => (r.ok ? r.blob() : null))
          .then((blob) => {
            if (dead) return;
            blobs[i] = blob;
            if (Math.abs(i - current) <= WIN_AHEAD) warm();
            if (!raf) raf = requestAnimationFrame(tick);
          })
          .catch(() => {})
          .finally(pump);
      };
      for (let k = 0; k < 8; k++) pump();
    };

    // start fetching frames a little before the scene scrolls in
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "150% 0px" }
    );
    io.observe(section);

    /* ---- ingredient graph: nodes drift a little, links follow ---- */
    const nodeEls = Array.from(stage.querySelectorAll("[data-node]"));
    const lineEls = Array.from(stage.querySelectorAll("[data-line]"));
    const svg = stage.querySelector(".turn-links");
    const base = { hub: HUB[key] };
    nodeEls.forEach((el, n) => {
      const xy = (el.dataset[key] || el.dataset.d).split(",").map(Number);
      base[el.dataset.node] = { xy, phase: n * 1.7, el };
    });
    let graphRaf = 0;
    let graphOn = false;
    // once the move is done the graph shows
    let moveDone = false;
    let leaving = false;
    let enterT = 0;
    let exitT = 0;
    const sync = () => {
      const g = moveDone && !leaving;
      if (g !== graphOn) {
        graphOn = g;
        setGraph(g);
        if (g && inView && !graphRaf) graphRaf = requestAnimationFrame(loop);
      }
    };
    const place = (time) => {
      const w = follow.clientWidth;
      const h = follow.clientHeight;
      const amp = phone ? 0 : 7; // px of drift (phones keep the notes still)
      // links are drawn in real pixels, so their draw-on animation measures correctly
      if (svg.getAttribute("viewBox") !== `0 0 ${w} ${h}`) svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const pos = { hub: base.hub };
      nodeEls.forEach((el) => {
        const b = base[el.dataset.node];
        const x = b.xy[0] + (Math.sin(time * 0.00042 + b.phase) * amp * 100) / w;
        const y = b.xy[1] + (Math.cos(time * 0.00035 + b.phase * 1.3) * amp * 100) / h;
        pos[el.dataset.node] = [x, y];
        el.style.left = x + "%";
        el.style.top = y + "%";
      });
      lineEls.forEach((ln) => {
        const a = pos[ln.dataset.a];
        const b = pos[ln.dataset.b];
        if (!a || !b) return;
        ln.setAttribute("d", `M${((a[0] * w) / 100).toFixed(1)} ${((a[1] * h) / 100).toFixed(1)}L${((b[0] * w) / 100).toFixed(1)} ${((b[1] * h) / 100).toFixed(1)}`);
      });
    };
    // the drift only runs while the graph is showing and the scene is on screen
    let inView = false;
    const loop = (time) => {
      place(time);
      graphRaf = graphOn && inView ? requestAnimationFrame(loop) : 0;
    };
    const watch = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      if (inView && graphOn && !graphRaf) graphRaf = requestAnimationFrame(loop);
    });
    watch.observe(follow);
    place(0);

    setLive(true);
    apply();
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 92%",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;
        target = Math.min(1, p / PLAY) * (FRAMES - 1);
        // the hand-over is scrubbed straight from the scroll position: no timers, no transitions to catch up
        const x = Math.min(1, Math.max(0, (p - EXIT) / (EXIT_END - EXIT)));
        exitT = x;
        stage.style.setProperty("--x", x.toFixed(4));
        stage.style.setProperty("--w", (enterT * (1 - x)).toFixed(4));
        leaving = p >= EXIT - 0.02;
        // Only after the scroll has truly come to rest, drift onto the nearest whole frame so the print is
        // crisp. The wait is long on purpose: a short one fired between the small steps of a slow scroll and
        // snapped the tube back and forth, which read as stutter.
        clearTimeout(settle);
        settle = setTimeout(() => {
          target = Math.round(target);
          if (!raf) raf = requestAnimationFrame(tick);
        }, 700);
        moveDone = p >= PLAY + 0.02;
        sync();
        if (!raf) raf = requestAnimationFrame(tick);
      },
    });
    // the model comes in as the scene arrives
    const enter = ScrollTrigger.create({
      trigger: section,
      start: "top 100%",
      end: "top 30%",
      onUpdate: (self) => {
        enterT = 1 - Math.pow(1 - self.progress, 3);
        stage.style.setProperty("--w", (enterT * (1 - exitT)).toFixed(4));
      },
    });
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 60);

    return () => {
      clearTimeout(refresh);
      clearTimeout(settle);
      io.disconnect();
      watch.disconnect();
      st.kill();
      enter.kill();
      graphOn = false;
      dead = true;
      for (const bm of bitmaps.values()) if (bm.close) bm.close();
      bitmaps.clear();
      if (raf) cancelAnimationFrame(raf);
      if (graphRaf) cancelAnimationFrame(graphRaf);
    };
  }, []);

  const cls = ["turn", live ? "is-live" : "", graph ? "is-graph" : "", hold ? "is-hold" : ""].filter(Boolean).join(" ");
  let order = 0;

  return (
    <section ref={sectionRef} className={cls} id="home-serum" aria-label="The formula">
      <div className="turn-stage">
        {/* this layer travels with the reader as one group: the model, the tube, its notes and the price.
            The ground and its grid scroll past behind them, so the page is visibly moving the whole time. */}
        <div className="turn-follow">
          <div className="turn-bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/model/turn-tall.jpg" alt="" loading="lazy" decoding="async" />
          </div>
        <svg className="turn-links" viewBox="0 0 100 100" aria-hidden="true">
          {NODES.map((n, i) => (
            <path key={n.id} data-line data-a="hub" data-b={n.id} pathLength="1" style={{ "--i": i }} />
          ))}
          {CROSS.map(([a, b], i) => (
            <path key={a + b} className="turn-link-cross" data-line data-a={a} data-b={b} pathLength="1" style={{ "--i": 6 + i }} />
          ))}
          {NODES.flatMap((n) =>
            n.sats.map((s, j) => (
              <path key={n.id + j} className="turn-link-sat" data-line data-a={n.id} data-b={`${n.id}-${j}`} pathLength="1" style={{ "--i": 8 + j }} />
            ))
          )}
        </svg>

        <header className="turn-head">
          <p className="turn-kicker">The Formula</p>
          <h2 className="turn-title">Re:<em>define</em> Lash Conditioning Serum</h2>
        </header>

        <div className="turn-rig" ref={rigRef}>
          <span className="turn-glow" aria-hidden="true" />
          <span className="turn-floor" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="turn-still"
            src="/images/serum-turn/still.webp"
            alt="Re:Cosm Re:define Lash Conditioning Serum, white 10 mL tube"
            width={600}
            height={1400}
            loading="lazy"
            decoding="async"
          />
          <canvas ref={canvasRef} className="turn-canvas" width={720} height={1680} aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <picture>
            <source media="(max-width: 880px)" srcSet="/images/serum-turn/final-m.webp" />
            <img className="turn-final" src="/images/serum-turn/final.webp" alt="" width={1440} height={3360} decoding="async" aria-hidden="true" />
          </picture>
        </div>

        <ul className="turn-nodes">
          {NODES.map((n) => (
            <li
              key={n.id}
              className={`turn-node turn-node--${n.d[0] < HUB.d[0] ? "l" : "r"}`}
              data-node={n.id}
              data-d={n.d.join(",")}
              data-m={n.m.join(",")}
              style={{ "--i": order++ }}
            >
              <span className="turn-node-dot" aria-hidden="true" />
              <span className="turn-node-label">
                <span className="turn-node-t">{n.title}</span>
                <span className="turn-node-d">{n.body}</span>
              </span>
            </li>
          ))}
          {NODES.flatMap((n) =>
            n.sats.map((s, j) => (
              <li key={n.id + j} className="turn-node turn-node--sat" data-node={`${n.id}-${j}`} data-d={s.d.join(",")} aria-hidden="true" style={{ "--i": 7 + j }}>
                <span className="turn-node-dot" />
                <span className="turn-node-label"><span className="turn-node-t">{s.label}</span></span>
              </li>
            ))
          )}
        </ul>

        <p className="turn-say" aria-label="No prostaglandins. No black boxes. Nothing to hide.">
          <span>No prostaglandins.</span>
          <span>No black boxes.</span>
          <span><em>Nothing</em> to hide.</span>
        </p>

        <div className="turn-buy">
          <p className="turn-meta">10 mL · $55.00 CAD</p>
          <Link href="/product" className="turn-link" tabIndex={live && !graph ? -1 : undefined}>
            Discover the serum
            <span className="turn-link-arrow"><Arrow /></span>
          </Link>
          <Link href="/science" className="turn-sublink" tabIndex={live && !graph ? -1 : undefined}>
            Full ingredient list
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
