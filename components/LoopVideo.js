"use client";

import { useEffect, useRef } from "react";

// A short silent loop used as a moving thumbnail. It shows its poster until it scrolls into view,
// plays only while it is on screen, and stays a still for people who ask for reduced motion.
export default function LoopVideo({ src, poster, className, alt }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!el.getAttribute("src")) el.setAttribute("src", src);
          const p = el.play();
          if (p && p.catch) p.catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return <video ref={ref} className={className} poster={poster} muted loop playsInline preload="none" aria-label={alt} />;
}
