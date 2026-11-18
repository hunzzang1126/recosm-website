"use client";

// Scroll-driven product scene for the home page: the tube turns once on its axis while the
// reasons to believe pass by, then the cap lifts to show the applicator for the ritual.
// 108 pre-rendered frames (transparent WebP) are drawn to a canvas. Without JavaScript, or with
// reduced motion, the same chapters read as an ordinary stacked section with a still tube.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAMES = 108;
const TURN_END = 72; // frames 0-71 = one full turn, 72-107 = cap lifts
const frameSrc = (set, i) => `/images/serum-turn/${set}/f_${String(i).padStart(3, "0")}.webp`;

// where each chapter starts on the 0-1 scroll track
const STARTS = [0, 0.17, 0.35, 0.53, 0.72];

const CHAPTERS = [
  {
    side: "right",
    photo: { src: "/images/model/turn-1.jpg", width: "122%", left: "-20%" },
    kicker: "The Serum",
    title: <>Re:<em>define</em> Lash Conditioning Serum</>,
    body: "A peptide lash conditioning serum with zero prostaglandins. Korean clean beauty in a 10 mL tube.",
    meta: "$55.00 CAD",
    link: { href: "/product", label: "Discover the serum" },
  },
  {
    side: "left",
    photo: { src: "/images/model/turn-2.jpg", width: "160%", left: "0%", position: "50% 28%" },
    kicker: "01",
    title: <>Prostaglandin-free, <em>beyond reproach</em></>,
    body: "No prostaglandin analogs, the ingredient class linked to iris darkening and orbital fat loss. Ever.",
    link: { href: "/guides/prostaglandin-free-lash-serums", label: "Why it matters" },
  },
  {
    side: "right",
    photo: { src: "/images/model/turn-3.jpg", width: "134%", left: "-34%" },
    kicker: "02",
    title: <>Capixyl™ <em>peptide complex</em></>,
    body: "With biotin, panthenol and centella. No black boxes: we disclose our full formula, so you never have to guess what's in it.",
    link: { href: "/science", label: "Our science" },
  },
  {
    side: "left",
    photo: { src: "/images/model/turn-4.jpg", width: "130%", left: "0%" },
    kicker: "03",
    title: <>Made in Korea, <em>by Kolmar</em></>,
    body: "Formulated and manufactured by Kolmar Korea, the lab behind the world's leading K-beauty brands. Fragrance-free, for sensitive eyes and contact lens wearers.",
  },
  {
    side: "right",
    kicker: "The Ritual",
    title: <>One minute, <em>every night</em></>,
    steps: [
      ["01", "Cleanse", "Remove all makeup. Lashes clean and completely dry."],
      ["02", "Apply", "A thin line of serum along the upper lash line, close to the roots."],
      ["03", "Brush", "Brush through from root to tip with the spoolie."],
    ],
    body: "Fuller-looking lashes in 4 to 6 weeks.",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
);

export default function SerumTurn() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [live, setLive] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const stage = section && section.querySelector(".turn-stage");
    if (!section || !canvas || !stage) return;
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
      // nearest frame that has arrived, so the tube never blanks while the rest load
      let k = i;
      for (let d = 0; d < FRAMES && !(imgs[k] && imgs[k].complete && imgs[k].naturalWidth); d++) {
        k = Math.max(0, i - d - 1);
        if (k === 0) break;
      }
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

    const tick = () => {
      current += (target - current) * 0.2;
      if (Math.abs(target - current) < 0.02) current = target;
      const i = Math.round(current);
      if (i !== shown) draw(i);
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
          if (i === Math.round(current) || shown < 0) draw(Math.round(current));
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
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      // pinned by ScrollTrigger: an ancestor clips overflow, which disables position: sticky
      pin: stage,
      pinSpacing: false,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress;
        const turnShare = STARTS[4];
        target =
          p < turnShare
            ? (p / turnShare) * TURN_END
            : TURN_END + Math.min(1, (p - turnShare) / 0.2) * (FRAMES - 1 - TURN_END);
        let ch = 0;
        for (let i = 0; i < STARTS.length; i++) if (p >= STARTS[i]) ch = i;
        setActive(ch);
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

  return (
    <section ref={sectionRef} className={live ? "turn is-live" : "turn"} id="home-serum" aria-label="The serum">
      <div className="turn-stage">
        <div className="turn-photos" aria-hidden="true">
          {CHAPTERS.map((c, i) =>
            c.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={c.photo.src}
                src={c.photo.src}
                alt=""
                loading="lazy"
                decoding="async"
                className={i === active ? "turn-photo is-on" : "turn-photo"}
                style={{ width: c.photo.width, left: c.photo.left, objectPosition: c.photo.position }}
              />
            ) : null
          )}
        </div>

        <div className="turn-tube">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="turn-still"
            src={frameSrc("d", 0)}
            alt="Re:Cosm Re:define Lash Conditioning Serum, white 10 mL tube"
            width={600}
            height={1400}
            loading="lazy"
            decoding="async"
          />
          <canvas ref={canvasRef} className="turn-canvas" width={600} height={1400} aria-hidden="true" />
        </div>

        <div className="turn-chapters">
          {CHAPTERS.map((c, i) => (
            <article
              key={c.kicker}
              className={`turn-chapter turn-chapter--${c.side}${i === active ? " is-on" : ""}`}
              aria-hidden={live && i !== active ? "true" : undefined}
            >
              <p className="turn-kicker">{c.kicker}</p>
              <h2 className="turn-title">{c.title}</h2>
              {c.steps ? (
                <ol className="turn-steps">
                  {c.steps.map(([n, t, d]) => (
                    <li key={n}>
                      <span className="turn-step-n">{n}</span>
                      <span className="turn-step-t">{t}</span>
                      <span className="turn-step-d">{d}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
              <p className="turn-body">{c.body}</p>
              {c.meta ? <p className="turn-meta">{c.meta}</p> : null}
              {c.link ? (
                <Link href={c.link.href} className="turn-link" tabIndex={live && i !== active ? -1 : undefined}>
                  {c.link.label}
                  <span className="turn-link-arrow"><Arrow /></span>
                </Link>
              ) : null}
            </article>
          ))}
        </div>

        <div className="turn-progress" aria-hidden="true">
          {CHAPTERS.map((c, i) => (
            <span key={c.kicker} className={i === active ? "is-on" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}
