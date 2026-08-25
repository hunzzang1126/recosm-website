"use client";

// Truekind-style scroll choreography for the homepage.
// GSAP ScrollTrigger drives: hero intro + parallax exit, a PINNED pillars
// sequence (cards fly in around the portrait as you scroll), parallax on
// the product showcase, ethos scrub reveals, journal staggers.

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      /* ---------- Hero: intro after preloader, parallax on exit ---------- */
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
        const onReady = () => heroIntro.play();
        window.addEventListener("recosm:ready", onReady, { once: true });
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

      /* ---------- Pillars: pinned sequence, truekind's signature ---------- */
      gsap.from(".pillars-heading", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillars-heading", start: "top 86%" },
      });

      ScrollTrigger.matchMedia({
        "(min-width: 981px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".pillars-stage",
              start: "top 18%",
              end: "+=160%",
              pin: ".pillars",
              scrub: 1,
              anticipatePin: 1,
            },
            defaults: { ease: "power2.out" },
          });

          tl.fromTo(
            ".pillars-portrait",
            { scale: 0.45, borderRadius: "50%" },
            { scale: 1, duration: 1.2 },
            0
          )
            .from(".pillars-col-left .pillar-card:nth-child(1)", { x: -560, y: 120, rotate: -14, opacity: 0, duration: 1 }, 0.25)
            .from(".pillars-col-right .pillar-card:nth-child(1)", { x: 560, y: -90, rotate: 12, opacity: 0, duration: 1 }, 0.55)
            .from(".pillars-col-left .pillar-card:nth-child(2)", { x: -560, y: -120, rotate: 10, opacity: 0, duration: 1 }, 0.85)
            .from(".pillars-col-right .pillar-card:nth-child(2)", { x: 560, y: 140, rotate: -12, opacity: 0, duration: 1 }, 1.15)
            .to(".pillars-portrait img", { scale: 1.08, duration: 1.4, ease: "none" }, 0.4);
        },
        "(max-width: 980px)": () => {
          gsap.from(".pillars-portrait", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".pillars-portrait", start: "top 85%" },
          });
          gsap.utils.toArray(".pillar-card").forEach((card, i) => {
            gsap.from(card, {
              y: 90,
              opacity: 0,
              rotate: i % 2 ? 3 : -3,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 90%" },
            });
          });
        },
      });

      /* ---------- Product highlight: parallax + staggered copy ---------- */
      gsap.fromTo(
        ".highlight-image .oval-frame img",
        { yPercent: -10, scale: 1.12 },
        {
          yPercent: 10,
          scale: 1.12,
          ease: "none",
          scrollTrigger: { trigger: ".highlight-grid", start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      gsap.fromTo(
        ".tube-float",
        { y: -30, rotate: -7 },
        {
          y: 46,
          rotate: 6,
          ease: "none",
          scrollTrigger: { trigger: ".highlight-grid", start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      gsap.from(".highlight-content > *", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".highlight-content", start: "top 78%" },
      });
      gsap.from(".highlight-image .oval-frame", {
        scale: 0.82,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: ".highlight-image", start: "top 82%" },
      });

      /* ---------- Ethos: dark act with scrub reveals ---------- */
      gsap.from(".ethos-statement", {
        y: 90,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ethos-statement", start: "top 80%" },
      });
      gsap.from(".ethos-copy > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ethos-copy", start: "top 82%" },
      });
      gsap.fromTo(
        ".ethos-image img",
        { scale: 1.22, yPercent: -6 },
        {
          scale: 1,
          yPercent: 0,
          ease: "none",
          scrollTrigger: { trigger: ".ethos", start: "top bottom", end: "center center", scrub: true },
        }
      );
      gsap.fromTo(
        ".ethos-orange",
        { yPercent: 30 },
        {
          yPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: ".ethos", start: "top bottom", end: "bottom top", scrub: true },
        }
      );

      /* ---------- Journal: header + card staggers ---------- */
      gsap.from(".journal .section-header > *", {
        y: 46,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".journal .section-header", start: "top 82%" },
      });
      gsap.from(".journal-card", {
        y: 130,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".journal-grid", start: "top 86%" },
      });

      /* ---------- Waitlist: scale in ---------- */
      gsap.from(".email-cta", {
        scale: 0.9,
        y: 90,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".email-cta", start: "top 86%" },
      });

      /* ---------- Marquee: direction follows scroll velocity ---------- */
      const track = document.querySelector(".marquee-track");
      if (track && track.getAnimations) {
        const speed = { rate: 1 };
        ScrollTrigger.create({
          trigger: ".marquee",
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const target = 1 + Math.min(Math.abs(self.getVelocity()) / 800, 3.5);
            gsap.to(speed, {
              rate: target,
              duration: 0.4,
              overwrite: true,
              onUpdate: () => {
                track.getAnimations().forEach((a) => {
                  a.playbackRate = speed.rate;
                });
              },
            });
          },
        });
      }
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
