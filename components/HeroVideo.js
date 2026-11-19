"use client";

import { useEffect, useRef, useState } from "react";

// Brand film behind the home hero. The poster paints first (it is the LCP image),
// then the right cut for the screen shape is attached and played, muted and looping.
// If the phone refuses autoplay, it starts on the visitor's first touch or scroll.
const SOURCES = {
  desktop: { video: "/videos/hero-desktop-v2.mp4", poster: "/images/hero-poster-desktop-v2.jpg" },
  mobile: { video: "/videos/hero-mobile-v5.mp4", poster: "/images/hero-poster-mobile-v5.jpg" },
};

export default function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // iOS only autoplays a video that is muted and inline as real attributes, not just as properties
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");

    let waiting = false;
    const tryPlay = () => {
      const p = el.play();
      if (p && p.catch) {
        p.catch(() => {
          // Autoplay was refused (iPhone Low Power Mode, data saver, some in-app browsers).
          // Those allow playback after any touch, so start on the visitor's first one.
          if (waiting) return;
          waiting = true;
          const go = () => {
            waiting = false;
            window.removeEventListener("touchend", go);
            window.removeEventListener("click", go);
            window.removeEventListener("scroll", go);
            const again = el.play();
            if (again && again.catch) again.catch(() => {});
          };
          window.addEventListener("touchend", go, { passive: true });
          window.addEventListener("click", go);
          window.addEventListener("scroll", go, { passive: true });
        });
      }
    };

    const portrait = window.matchMedia("(max-aspect-ratio: 4/5)");
    const attach = () => {
      const next = portrait.matches ? SOURCES.mobile.video : SOURCES.desktop.video;
      if (el.getAttribute("src") === next) return;
      setPlaying(false);
      el.setAttribute("src", next);
      el.load();
      tryPlay();
    };
    attach();

    // a tab that was in the background, or a phone that was locked, comes back paused
    const resume = () => {
      if (!document.hidden && el.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", resume);

    // older Safari has addListener only
    if (portrait.addEventListener) portrait.addEventListener("change", attach);
    else if (portrait.addListener) portrait.addListener(attach);
    return () => {
      document.removeEventListener("visibilitychange", resume);
      if (portrait.removeEventListener) portrait.removeEventListener("change", attach);
      else if (portrait.removeListener) portrait.removeListener(attach);
    };
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
