"use client";

// Lenis smooth scrolling driven by GSAP's ticker so ScrollTrigger
// choreography stays perfectly in sync with the inertia scroll.
// Every page load and route change starts pinned to the very top —
// browser scroll restoration is disabled so Lenis and Next never fight
// over a stale scroll position.

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function jumpToTop() {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo(0, 0);
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Never let the browser restore a previous scroll position on
    // refresh/back-forward — the choreography assumes a top start.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    jumpToTop();

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Route change → hard reset to the top and re-measure triggers.
  useEffect(() => {
    jumpToTop();
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      jumpToTop();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
