"use client";

// Truekind-style scroll choreography for the homepage.
// GSAP ScrollTrigger drives: hero intro + parallax exit, the diagonal-ellipse
// pillars scene (cards drop in, arrow draws itself, ellipse rotates subtly),
// sticky-split collection sections (media zoom, cards slide in), the oversized
// ethos display lines, quality/waitlist reveals, journal staggers and the
// gallery finale.

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      /* ---------- 01 Hero ---------- */
      const heroIntro = gsap
        .timeline({ paused: true, defaults: { ease: "power3.out" } })
        .fromTo(".hero-media img", { scale: 1.18 }, { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
        .from(".hero-overline", { y: 34, opacity: 0, duration: 0.9 }, 0.25)
        .from(".hero-title", { y: 60, opacity: 0, duration: 1.1 }, 0.4)
        .from(".hero-description", { y: 40, opacity: 0, duration: 0.9 }, 0.65)
        .from(".hero-cta", { y: 60, opacity: 0, duration: 0.9 }, 0.8);

      if (window.__recosmReady) {
        heroIntro.play();
      } else {
        window.addEventListener("recosm:ready", () => heroIntro.play(), { once: true });
      }

      gsap.to(".hero-inner", {
        y: -140,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-media", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      /* ---------- 02 Pillars scene ---------- */
      gsap.from(".pillars-heading", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillars-heading", start: "top 86%" },
      });

      gsap.from(".pillars-ellipse", {
        opacity: 0,
        y: 90,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillars-scene", start: "top 74%" },
      });

      // image parallax inside the rotated ellipse frame
      gsap.fromTo(
        ".pillars-ellipse img",
        { y: "-6%" },
        {
          y: "6%",
          ease: "none",
          scrollTrigger: { trigger: ".pillars-scene", start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );

      gsap.utils.toArray(".pillars-scene .pillar-card").forEach((card, i) => {
        gsap.from(card, {
          y: 120,
          opacity: 0,
          rotate: i % 2 ? 6 : -6,
          duration: 1,
          delay: (i % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 92%" },
        });
      });

      // hand-drawn arrow draws itself
      const arrowPath = document.querySelector(".pillars-arrow-path");
      if (arrowPath) {
        const len = arrowPath.getTotalLength();
        gsap.fromTo(
          arrowPath,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: ".pillars-arrow", start: "top 85%", end: "top 35%", scrub: true },
          }
        );
      }

      gsap.from(".pillars-orange", {
        scale: 0,
        rotate: -30,
        duration: 0.9,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".pillars-orange", start: "top 92%" },
      });

      /* ---------- 03/04 Collections ---------- */
      gsap.utils.toArray(".collection").forEach((section) => {
        const media = section.querySelector(".collection-media-inner img");
        const title = section.querySelector(".collection-title");
        const arrow = section.querySelector(".collection-arrow");
        const cards = section.querySelectorAll(".collection-card");
        const caption = section.querySelector(".collection-caption");

        if (media) {
          gsap.fromTo(
            media,
            { yPercent: -9, scale: 1.2 },
            {
              yPercent: 9,
              scale: 1.2,
              ease: "none",
              scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.6 },
            }
          );
        }

        if (title) {
          gsap.from(title, {
            y: 90,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 84%" },
          });
        }

        if (arrow) {
          gsap.from(arrow, {
            scale: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: title || arrow, start: "top 84%" },
          });
        }

        if (cards.length) {
          gsap.from(cards, {
            x: 260,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: cards[0], start: "top 88%" },
          });
        }

        if (caption) {
          gsap.from(caption, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: caption, start: "top 94%" },
          });
        }
      });

      /* ---------- 05 Ethos ---------- */
      gsap.from(".ethos-chip", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ethos", start: "top 78%" },
      });

      gsap.utils.toArray(".ethos-line").forEach((line, i) => {
        gsap.from(line, {
          y: 130,
          opacity: 0,
          duration: 1.1,
          delay: i * 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: line, start: "top 92%" },
        });
      });

      gsap.fromTo(
        ".ethos-float",
        { yPercent: 26, rotate: -12 },
        {
          yPercent: -14,
          rotate: -2,
          ease: "none",
          scrollTrigger: { trigger: ".ethos", start: "top bottom", end: "bottom top", scrub: 1 },
        }
      );

      gsap.from(".ethos-feature", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ethos-features", start: "top 84%" },
      });

      /* ---------- 06 Quality + waitlist ---------- */
      gsap.from(".quality-copy > *", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".quality", start: "top 76%" },
      });

      const qArrow = document.querySelector(".quality-arrow-path");
      if (qArrow) {
        const len = qArrow.getTotalLength();
        gsap.fromTo(
          qArrow,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: ".quality-arrow", start: "top 92%", end: "top 45%", scrub: true },
          }
        );
      }

      gsap.from(".waitlist-panel > *", {
        y: 46,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".waitlist-panel", start: "top 78%" },
      });

      /* ---------- 07 Journal ---------- */
      gsap.from(".journal .section-header > *", {
        y: 46,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".journal .section-header", start: "top 82%" },
      });

      gsap.from(".journal-card--feature", {
        y: 110,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".journal-feature-grid", start: "top 84%" },
      });

      gsap.from(".journal-side .journal-card", {
        y: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".journal-feature-grid", start: "top 84%" },
      });

      gsap.from(".journal-seeall", {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".journal-seeall", start: "top 94%" },
      });

      /* ---------- 08 Gallery finale ---------- */
      gsap.fromTo(
        ".gallery-center img",
        { yPercent: -10, scale: 1.22 },
        {
          yPercent: 10,
          scale: 1.22,
          ease: "none",
          scrollTrigger: { trigger: ".gallery-strip", start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );

      gsap.from(".gallery-heading", {
        y: 110,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-heading", start: "top 92%" },
      });

      gsap.fromTo(
        ".gallery-side",
        { yPercent: 30 },
        {
          yPercent: -20,
          ease: "none",
          scrollTrigger: { trigger: ".gallery-strip", start: "top bottom", end: "bottom top", scrub: 1 },
        }
      );

      gsap.from([".gallery-note", ".gallery-pill"], {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-note", start: "top 94%" },
      });
    });

    // Recalculate positions once images have loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 1200);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return null;
}
