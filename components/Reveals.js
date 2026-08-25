"use client";

// Scroll-reveal driver. IntersectionObserver handles the entrance timing;
// a throttled scroll fallback catches anything the observer missed during
// fast (Lenis-inertia) scrolling so no section can stay invisible.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-mask";

export default function Reveals() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll(SELECTOR));
    const pending = new Set(reveals.filter((el) => !el.classList.contains("is-visible")));

    if (!("IntersectionObserver" in window)) {
      pending.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const show = (el) => {
      el.classList.add("is-visible");
      pending.delete(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    pending.forEach((el) => observer.observe(el));

    // Fallback sweep: reveal anything in or above the viewport that the
    // observer missed (fast programmatic scrolls can skip callbacks).
    let ticking = false;
    const sweep = () => {
      ticking = false;
      if (!pending.size) return;
      const vh = window.innerHeight;
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.94 || rect.bottom < 0) {
          observer.unobserve(el);
          show(el);
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const settle = setInterval(() => onScroll(), 900);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearInterval(settle);
    };
  }, [pathname]);

  return null;
}
