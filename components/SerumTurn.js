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

const FRAMES = 160;
// The move is spread over the whole time the scene is with the visitor: it starts when the section's top edge
// is 92% down the screen, keeps playing while the stage follows the scroll, and is finished with roughly half a
// screen of following still to go, which is when the ingredient notes are read.
const PLAY = 0.66;
const START_SCALE = { d: 0.44, m: 0.36 };
const frameSrc = (set, i) => `/images/serum-turn/${set}/f_${String(i).padStart(3, "0")}.webp`;

// Positions are percentages of the stage: d = wide screens (tube stands at 69%), m = phones (tube centred).
const HUB = { d: [69, 60], m: [50, 50] };
const NODES = [
  { id: "pg", title: "Zero prostaglandins", body: "No prostaglandin analogs. Fragrance-free.", d: [58, 22], m: [17, 30], sats: [{ label: "Fragrance-free", d: [62, 11] }] },
  { id: "cap", title: "Capixyl™ peptide complex", body: "For fuller-looking lashes.", d: [80.5, 27], m: [83, 30], sats: [{ label: "Acetyl tetrapeptide-3", d: [89, 15] }, { label: "Red clover extract", d: [77.5, 12] }] },
  { id: "bio", title: "Biotin", body: "A B-vitamin and building block of keratin.", d: [57.5, 47], m: [17, 50], sats: [{ label: "Keratin", d: [61.5, 37] }] },
  { id: "pan", title: "Panthenol", body: "A humectant for flexible, less brittle lashes.", d: [81.5, 52], m: [83, 50], sats: [{ label: "Flexibility", d: [90, 42] }] },
  { id: "cen", title: "Centella asiatica", body: "Tiger grass extract that soothes the lash line.", d: [58, 72], m: [17, 70], sats: [{ label: "Tiger grass", d: [61.5, 84] }] },
  { id: "ha", title: "Hyaluronic acid", body: "Binds to lash fibres and locks in moisture.", d: [80.5, 78], m: [83, 70], sats: [{ label: "Moisture", d: [89, 89] }] },
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
    if (!section || !canvas || !rig || !stage || !follow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const phone = window.matchMedia("(max-width: 880px)").matches;
    // Phones get their own render: phone-shaped frames (600 x 1300) that fill the screen, zoom included, and a
    // 1170 x 2535 still of the last frame once it has come to rest. Wide screens draw the 720 x 1680 set.
    const set = phone ? "m" : "d";
    const key = phone ? "m" : "d";
    const ctx2d = canvas.getContext("2d");
    const imgs = new Array(FRAMES);
    const ready = (k) => imgs[k] && imgs[k].complete && imgs[k].naturalWidth;
    let target = 0;
    let current = 0;
    let drawn = -1;
    let raf = 0;
    let started = false;
    let settle = 0;
    let held = false;

    const draw = (cur) => {
      let i = Math.floor(cur);
      const f = cur - i;
      // nearest earlier frame that has arrived, so the tube never blanks while the rest load
      let k = i;
      while (k > 0 && !ready(k)) k--;
      if (!ready(k)) return;
      const im = imgs[k];
      if (canvas.width !== im.naturalWidth) {
        canvas.width = im.naturalWidth;
        canvas.height = im.naturalHeight;
      }
      ctx2d.globalAlpha = 1;
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      ctx2d.drawImage(im, 0, 0);
      // blend toward the next frame for the in-between positions, so a slow scroll turns the tube smoothly
      // instead of stepping from frame to frame
      if (k === i && f > 0.02 && i + 1 < FRAMES && ready(i + 1)) {
        ctx2d.globalAlpha = f;
        ctx2d.drawImage(imgs[i + 1], 0, 0);
        ctx2d.globalAlpha = 1;
      }
      drawn = cur;
    };

    const apply = () => {
      const t = current / (FRAMES - 1);
      // wide screens grow the tube with CSS; the phone frames are rendered with that zoom already in the camera
      const s0 = START_SCALE[key];
      rig.style.setProperty("--s", phone ? "1" : (s0 + (1 - s0) * ease(Math.min(1, t / 0.82))).toFixed(4));
      if (Math.abs(current - drawn) > 0.01) draw(current);
      // at the end of the move the crisp still takes over from the canvas
      const atEnd = current >= FRAMES - 1.001;
      if (atEnd !== held) {
        held = atEnd;
        setHold(atEnd);
      }
    };

    const tick = () => {
      current += (target - current) * 0.16;
      if (Math.abs(target - current) < 0.01) current = target;
      apply();
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };

    const load = () => {
      if (started) return;
      started = true;
      for (let i = 0; i < FRAMES; i++) {
        const im = new Image();
        im.decoding = "async";
        im.src = frameSrc(set, i);
        im.onload = () => {
          if (drawn < 0 || Math.abs(i - current) < 1.5) draw(current);
        };
        imgs[i] = im;
      }
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
    const sync = () => {
      if (moveDone !== graphOn) {
        graphOn = moveDone;
        setGraph(moveDone);
        if (moveDone && inView && !graphRaf) graphRaf = requestAnimationFrame(loop);
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
        target = Math.min(1, self.progress / PLAY) * (FRAMES - 1);
        // Only after the scroll has truly come to rest, drift onto the nearest whole frame so the print is
        // crisp. The wait is long on purpose: a short one fired between the small steps of a slow scroll and
        // snapped the tube back and forth, which read as stutter.
        clearTimeout(settle);
        settle = setTimeout(() => {
          target = Math.round(target);
          if (!raf) raf = requestAnimationFrame(tick);
        }, 700);
        moveDone = self.progress >= PLAY + 0.02;
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
        stage.style.setProperty("--w", (1 - Math.pow(1 - self.progress, 3)).toFixed(4));
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
            <img className="turn-final" src="/images/serum-turn/final.webp" alt="" width={1440} height={3360} loading="lazy" decoding="async" aria-hidden="true" />
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
