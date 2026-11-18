"use client";

// Scroll-driven product scene for the home page. One move, then the reveal: the tube turns once on its
// axis while it grows to fill the screen, the cap lifts to show the applicator, and then every note
// appears at once around it like a blueprint. The model photo behind it never changes.
// 160 pre-rendered frames (transparent WebP) are drawn to a canvas. Without JavaScript, or with reduced
// motion, the same notes read as an ordinary list beside a still tube.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAMES = 160;
const PLAY = 0.68; // share of the scroll track the move takes; the blueprint holds for the rest
const START_SCALE = 0.44;
const frameSrc = (set, i) => `/images/serum-turn/${set}/f_${String(i).padStart(3, "0")}.webp`;

// y = where the part sits in the final frame (fraction of its height); e = half-width of that part (fraction of frame width)
const NOTES = [
  { side: "l", y: 0.14, e: 0.0925, n: "01", title: "Zero prostaglandins", body: "No prostaglandin analogs. Fragrance-free." },
  { side: "r", y: 0.475, e: 0.027, n: "02", title: "Capixyl™ peptide complex", body: "Acetyl tetrapeptide-3 with red clover extract, for fuller-looking lashes." },
  { side: "l", y: 0.535, e: 0.025, n: "03", title: "Biotin", body: "A B-vitamin and building block of keratin, for stronger-looking lashes." },
  { side: "r", y: 0.66, e: 0.091, n: "04", title: "Panthenol", body: "A humectant for flexible, less brittle lashes." },
  { side: "l", y: 0.745, e: 0.091, n: "05", title: "Centella asiatica", body: "Tiger grass extract that soothes the delicate lash line." },
  { side: "r", y: 0.845, e: 0.091, n: "06", title: "Hyaluronic acid", body: "Binds to lash fibres and locks in moisture." },
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
  const [blueprint, setBlueprint] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const rig = rigRef.current;
    const stage = section && section.querySelector(".turn-stage");
    if (!section || !canvas || !rig || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const set = window.matchMedia("(max-width: 880px)").matches ? "m" : "d";
    const ctx2d = canvas.getContext("2d");
    const imgs = new Array(FRAMES);
    let target = 0;
    let shown = -1;
    let current = 0;
    let raf = 0;
    let started = false;

    const draw = (i) => {
      // nearest earlier frame that has arrived, so the tube never blanks while the rest load
      let k = i;
      while (k > 0 && !(imgs[k] && imgs[k].complete && imgs[k].naturalWidth)) k--;
      const im = imgs[k];
      if (!im || !im.complete || !im.naturalWidth) return;
      if (canvas.width !== im.naturalWidth) {
        canvas.width = im.naturalWidth;
        canvas.height = im.naturalHeight;
      }
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      ctx2d.drawImage(im, 0, 0);
      shown = i;
    };

    const apply = () => {
      const t = current / (FRAMES - 1);
      rig.style.setProperty("--s", (START_SCALE + (1 - START_SCALE) * ease(Math.min(1, t / 0.82))).toFixed(4));
      const i = Math.round(current);
      if (i !== shown) draw(i);
    };

    const tick = () => {
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.02) current = target;
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
          if (shown < 0 || i === Math.round(current)) draw(Math.round(current));
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

    setLive(true);
    apply();
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      // pinned by ScrollTrigger: an ancestor clips overflow, which disables position: sticky
      pin: stage,
      pinSpacing: false,
      anticipatePin: 1,
      onUpdate: (self) => {
        target = Math.min(1, self.progress / PLAY) * (FRAMES - 1);
        setBlueprint(self.progress >= PLAY + 0.03);
        if (!raf) raf = requestAnimationFrame(tick);
      },
    });
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 60);

    return () => {
      clearTimeout(refresh);
      io.disconnect();
      st.kill();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const cls = ["turn", live ? "is-live" : "", blueprint ? "is-blueprint" : ""].filter(Boolean).join(" ");

  return (
    <section ref={sectionRef} className={cls} id="home-serum" aria-label="The serum">
      <div className="turn-stage">
        <div className="turn-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/model/turn-bg-v2.jpg" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="turn-scrim" aria-hidden="true" />

        <header className="turn-head">
          <p className="turn-kicker">The Formula</p>
          <h2 className="turn-title">Re:<em>define</em> Lash Conditioning Serum</h2>
        </header>

        <div className="turn-rig" ref={rigRef}>
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
        </div>

        <ol className="turn-notes">
          {NOTES.map((c, i) => (
            <li key={c.n} className={`turn-note turn-note--${c.side}`} style={{ "--y": c.y, "--e": c.e, "--i": i }}>
              <span className="turn-note-n">{c.n}</span>
              <span className="turn-note-t">{c.title}</span>
              <span className="turn-note-d">{c.body}</span>
            </li>
          ))}
        </ol>

        <div className="turn-buy">
          <p className="turn-meta">10 mL · $55.00 CAD</p>
          <Link href="/product" className="turn-link" tabIndex={live && !blueprint ? -1 : undefined}>
            Discover the serum
            <span className="turn-link-arrow"><Arrow /></span>
          </Link>
          <Link href="/science" className="turn-sublink" tabIndex={live && !blueprint ? -1 : undefined}>
            Full ingredient list
          </Link>
        </div>
      </div>
    </section>
  );
}
