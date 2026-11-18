"use client";

import { useEffect, useRef, useState } from "react";

// Brand film behind the home hero. The poster paints first (it is the LCP image),
// then the right cut for the screen shape is attached and played, muted and looping.
// People who ask for reduced motion keep the still poster.
const SOURCES = {
  desktop: { video: "/videos/hero-desktop-v2.mp4", poster: "/images/hero-poster-desktop-v2.jpg" },
  mobile: { video: "/videos/hero-mobile-v3.mp4", poster: "/images/hero-poster-mobile-v3.jpg" },
};

export default function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const portrait = window.matchMedia("(max-aspect-ratio: 4/5)");
    const attach = () => {
      const next = portrait.matches ? SOURCES.mobile.video : SOURCES.desktop.video;
      if (el.getAttribute("src") === next) return;
      setPlaying(false);
      el.setAttribute("src", next);
      el.load();
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    };
    attach();
    portrait.addEventListener("change", attach);
    return () => portrait.removeEventListener("change", attach);
  }, []);

  return (
    <div className="hero-media hero-media--video">
      <picture>
        <source media="(max-aspect-ratio: 4/5)" srcSet={SOURCES.mobile.poster} />
        <img
          className="hero-poster"
          src={SOURCES.desktop.poster}
          alt="Model on a vivid orange backdrop, from the Re:Cosm lash serum film"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <video
        ref={ref}
        className={playing ? "hero-video is-playing" : "hero-video"}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
      />
    </div>
  );
}
