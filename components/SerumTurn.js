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
const COUNT = { d: 480, m: 480 };
// frames 0-299: the closed tube turns once and the cap lifts. Frames 300-479: the open tube turns once more;
// that last stretch is a loop (frame 479 runs straight on into frame 300).
const MOVE = 300;
const LOOP = 180;
// Scroll track: from the section's top edge 92% down the screen to the section's end (3.62 screens).
//   0 .. PLAY  the scroll runs the closed turn, the growth and the cap lift
//   after that the open tube is a turntable: it turns by itself at a steady pace (time, not scroll), so the
//   turn is always even; scrolling only nudges it faster or backwards for a moment
// At the end nothing is staged: the travelling layer simply lets go and the tube leaves with the page.
const PLAY = 0.42;
const TURN_FPS = 22; // loop frames per second while idling = 44 degrees a second
const START_SCALE = { d: 0.44, m: 0.36 };
const frameSrc = (set, i) => `/images/serum-turn/${set}/f_${String(i).padStart(3, "0")}.webp`;

// The ingredient notes are ordinary page content laid out down the section: they scroll past the tube at the
// page's own speed, alternating sides, each hanging off the tube by a short hairline.
const NOTES = [
  { title: "Zero prostaglandins", body: "No prostaglandin analogs. Fragrance-free." },
  { title: "Capixyl™ peptide complex", body: "Acetyl tetrapeptide-3 with red clover extract, for fuller-looking lashes." },
  { title: "Biotin", body: "A B-vitamin and building block of keratin, for stronger-looking lashes." },
  { title: "Panthenol", body: "A humectant for flexible, less brittle lashes." },
  { title: "Centella asiatica", body: "Tiger grass extract that soothes the delicate lash line." },
  { title: "Hyaluronic acid", body: "Binds to lash fibres and locks in moisture." },
];

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
      const c = Math.min(FRAMES - 1, Math.round(shown()));
      const from = lastDir >= 0 ? c - WIN_BACK : c - WIN_AHEAD;
      const to = lastDir >= 0 ? c + WIN_AHEAD : c + WIN_BACK;
      for (let k = Math.max(0, from); k <= to; k++) decode(k < FRAMES ? k : MOVE + ((k - MOVE) % LOOP));
      if (bitmaps.size > KEEP + 12) {
        for (const [i, bm] of bitmaps) {
          // distance around the loop for frames inside it
          const far = Math.abs(i - c) > KEEP && !(i >= MOVE && c >= MOVE && LOOP - Math.abs(i - c) <= KEEP);
          if (far) {
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
      const next = bitmaps.get(i + 1 >= FRAMES ? MOVE : i + 1);
      if (!phone && f > 0.02 && next) {
        ctx2d.globalAlpha = f;
        ctx2d.drawImage(next, 0, 0);
        ctx2d.globalAlpha = 1;
      }
      drawn = cur;
    };

    // position inside the open-tube loop (frames, 0..LOOP), advanced by time once the cap is off
    let phase = 0;
    let boost = 0; // extra loop frames per second from recent scrolling, decays
    const shown = () => (phase > 0 || current >= MOVE - 1 ? MOVE + (phase % LOOP) : current);

    const apply = () => {
      const t = Math.min(1, current / (MOVE - 1));
      // wide screens grow the tube with CSS; the phone frames are rendered with that zoom already in the camera
      const s0 = START_SCALE[key];
      rig.style.setProperty("--s", phone ? "1" : (s0 + (1 - s0) * ease(Math.min(1, t / 0.82))).toFixed(4));
      // phones show whole frames only (one draw), wide screens the blended in-between
      const v = shown();
      let show = phone ? Math.round(v) : v;
      if (show >= FRAMES) show = MOVE;
      if (Math.abs(show - drawn) > 0.01) draw(show);
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

    let inView = false;
    let lastNow = 0;
    let lean = 0;
    const tick = (now) => {
      const dt = lastNow ? Math.min(0.05, (now - lastNow) / 1000) : 0.016;
      lastNow = now;
      const open = target >= MOVE - 1;
      if (Math.abs(target - current) > 0.5) lastDir = target > current ? 1 : -1;
      if (!open && phase > 0) {
        // the reader went back up: finish the turn quickly to the front, then hand back to the scroll
        phase += Math.max(3, (LOOP - phase) / 10);
        if (phase >= LOOP) phase = 0;
      } else {
        const goal = reach(current, Math.min(target, MOVE - 1));
        current += (goal - current) * 0.2;
        if (Math.abs(goal - current) < 0.01) current = goal;
        if (open && current >= MOVE - 1.01 && inView) {
          // turntable: steady by the clock; only moves on if the next frame is ready
          const next = (((phase + (TURN_FPS + boost) * dt) % LOOP) + LOOP) % LOOP;
          if (bitmaps.has(MOVE + Math.floor(next))) phase = next || 0.0001;
          lastDir = TURN_FPS + boost >= 0 ? 1 : -1;
        }
      }
      boost *= 0.93;
      // the tube leans a touch into the scroll, like something with weight
      lean += (Math.max(-1, Math.min(1, boost / 90)) - lean) * 0.08;
      rig.style.setProperty("--lean", lean.toFixed(3));
      warm();
      apply();
      const idle = open && inView;
      raf = current !== target && !(open && current >= MOVE - 1) || idle || phase > 0 || Math.abs(lean) > 0.01 ? requestAnimationFrame(tick) : 0;
      if (!raf) lastNow = 0;
    };
    const seen = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      if (inView && !raf) raf = requestAnimationFrame(tick);
    });
    seen.observe(follow);

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

    /* ---- notes: each comes up out of depth and arrives, flat and full size, at the middle of the screen ---- */
    // Its position on screen sets how far "back" it still is (--d: 1 = deep below, 0 = arrived). Once it
    // has arrived it stays as it is on the way up: it does not shrink back.
    let enterT = 0;
    const noteEls = Array.from(stage.querySelectorAll(".turn-note"));
    const noteOn = noteEls.map(() => null);
    const placeNotes = () => {
      const vh = window.innerHeight;
      const unit = follow.clientHeight; // one screen in the section's own unit (svh)
      const top = stage.getBoundingClientRect().top;
      noteEls.forEach((el, n) => {
        const y = top + (1.2 + n * 0.3) * unit; // where its centre line is on screen
        const d = Math.min(1, Math.max(0, (y - vh * 0.52) / (vh * 0.5)));
        el.style.setProperty("--d", d.toFixed(3));
        const on = y <= vh * 0.6;
        if (on !== noteOn[n]) {
          noteOn[n] = on;
          el.classList.toggle("is-on", on);
        }
      });
    };
    placeNotes();

    setLive(true);
    apply();
    let lastP = 0;
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 92%",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;
        placeNotes();
        target = Math.min(1, p / PLAY) * (MOVE - 1);
        // scrolling nudges the turntable: faster going down, backwards for a moment going up
        boost = Math.max(-160, Math.min(160, boost + (p - lastP) * 1500));
        lastP = p;
        // Only after the scroll has truly come to rest, drift onto the nearest whole frame so the print is
        // crisp. The wait is long on purpose: a short one fired between the small steps of a slow scroll and
        // snapped the tube back and forth, which read as stutter.
        clearTimeout(settle);
        settle = setTimeout(() => {
          if (target < MOVE - 1) target = Math.round(target);
          if (!raf) raf = requestAnimationFrame(tick);
        }, 700);
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
        stage.style.setProperty("--w", enterT.toFixed(4));
      },
    });
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 60);

    return () => {
      clearTimeout(refresh);
      clearTimeout(settle);
      io.disconnect();
      st.kill();
      enter.kill();
      dead = true;
      for (const bm of bitmaps.values()) if (bm.close) bm.close();
      bitmaps.clear();
      if (raf) cancelAnimationFrame(raf);
      seen.disconnect();
    };
  }, []);

  const cls = ["turn", live ? "is-live" : ""].filter(Boolean).join(" ");

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



        <div className="turn-buy">
          <p className="turn-meta">10 mL · $55.00 CAD</p>
          <Link href="/product" className="turn-link">
            Discover the serum
            <span className="turn-link-arrow"><Arrow /></span>
          </Link>
          <Link href="/science" className="turn-sublink">
            Full ingredient list
          </Link>
        </div>
        </div>

        <ol className="turn-track">
          {NOTES.map((n, i) => (
            <li key={n.title} className={`turn-note turn-note--${i % 2 ? "r" : "l"}`} style={{ "--n": i }}>
              <span className="turn-note-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="turn-note-t">{n.title}</span>
              <span className="turn-note-d">{n.body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
