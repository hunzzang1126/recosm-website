"use client";

// Truekind-style scroll choreography for the homepage.
// Scrub-driven: typography and cards travel WITH the scrollbar (not one-shot
// toggles) — word-mask title reveals, parallax card rises around the diagonal
// ellipse, sequenced collection entrances, staggered ethos display lines.

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Wrap each word in an overflow-hidden mask so lines can rise truekind-style.
// Keeps nested <em>/<br> intact.
function splitWords(el) {
  if (!el) return [];
  if (el.dataset.split === "1") return el.querySelectorAll(".w-inner");

  const wrapTextNode = (textNode) => {
    const frag = document.createDocumentFragment();
    textNode.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        return;
      }
      const outer = document.createElement("span");
      outer.className = "w";
      const inner = document.createElement("span");
      inner.className = "w-inner";
      inner.textContent = part;
      outer.appendChild(inner);
      frag.appendChild(outer);
    });
    textNode.parentNode.replaceChild(frag, textNode);
  };

  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3 && child.textContent.trim()) {
        wrapTextNode(child);
      } else if (child.nodeType === 1 && child.tagName !== "BR" && !child.classList.contains("w")) {
        walk(child);
      }
    });
  };

  walk(el);
  el.dataset.split = "1";
  return el.querySelectorAll(".w-inner");
}

export default function HomeScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      /* ---------- 01 Hero ---------- */
      const heroWords = splitWords(document.querySelector(".hero-title"));
      const heroIntro = gsap
        .timeline({ paused: true, defaults: { ease: "power3.out" } })
        .fromTo(".hero-media img", { scale: 1.16 }, { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
        .from(".hero-overline", { y: 34, opacity: 0, duration: 0.9 }, 0.2)
        .from(heroWords, { yPercent: 118, rotate: 4, duration: 1.1, stagger: 0.06, ease: "power4.out" }, 0.35)
        .from(".hero-description", { y: 40, opacity: 0, duration: 0.9 }, 0.9)
        .from(".hero-cta", { y: 60, opacity: 0, duration: 0.9 }, 1.05);

      if (window.__recosmReady) {
        heroIntro.play();
      } else {
        window.addEventListener("recosm:ready", () => heroIntro.play(), { once: true });
      }
      // Background tabs throttle rAF and can freeze the intro mid-flight —
      // guarantee the hero ends fully revealed.
      setTimeout(() => {
        if (heroIntro.progress() < 1) heroIntro.progress(1);
      }, 4500);

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
      // Heading: word-mask rise, scrubbed so the type "acts" as you scroll.
      const pillarWords = splitWords(document.querySelector(".pillars-heading"));
      gsap.from(pillarWords, {
        yPercent: 120,
        rotate: 5,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".pillars-heading",
          start: "top 94%",
          end: "top 55%",
          scrub: 0.4,
        },
      });

      gsap.from(".pillars-ellipse", {
        opacity: 0,
        y: 110,
        ease: "power1.out",
        scrollTrigger: { trigger: ".pillars-scene", start: "top 92%", end: "top 45%", scrub: 0.4 },
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

      // Cards: continuous parallax rise at different speeds + soft fade-in.
      const isDesktopScene = window.matchMedia("(min-width: 881px)").matches;
      gsap.utils.toArray(".pillars-scene .pillar-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: { trigger: card, start: "top 97%", toggleActions: "play none none reverse" },
        });
        if (isDesktopScene) {
          gsap.fromTo(
            card,
            { y: 170 + (i % 3) * 110 },
            {
              y: -(70 + (i % 4) * 55),
              ease: "none",
              scrollTrigger: { trigger: ".pillars-scene", start: "top bottom", end: "bottom top", scrub: 0.5 },
            }
          );
        } else {
          gsap.from(card, {
            y: 90,
            ease: "power1.out",
            scrollTrigger: { trigger: card, start: "top 96%", end: "top 70%", scrub: 0.4 },
          });
        }
      });

      // hand-drawn arrow draws itself with the scroll
      const arrowPath = document.querySelector(".pillars-arrow-path");
      if (arrowPath) {
        const len = arrowPath.getTotalLength();
        gsap.fromTo(
          arrowPath,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: ".pillars-arrow", start: "top 90%", end: "top 30%", scrub: 0.4 },
          }
        );
      }

      gsap.from(".pillars-orange", {
        scale: 0,
        rotate: -30,
        ease: "power1.out",
        scrollTrigger: { trigger: ".pillars-orange", start: "top 98%", end: "top 72%", scrub: 0.4 },
      });

      /* ---------- 03/04 Collections — sequenced scrub entrance ---------- */
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

        const words = splitWords(title);
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "top 6%",
            scrub: 0.5,
          },
        });

        if (words.length) {
          tl.from(words, { yPercent: 125, rotate: 5, duration: 0.55, stagger: 0.09 }, 0);
        }
        if (arrow) {
          tl.from(arrow, { scale: 0, rotate: -60, duration: 0.4 }, 0.18);
        }
        if (cards.length) {
          tl.from(cards, { x: 340, opacity: 0, duration: 0.7, stagger: 0.14 }, 0.22);
        }
        if (caption) {
          tl.from(caption, { y: 44, opacity: 0, duration: 0.35 }, ">-0.15");
        }
      });

      /* ---------- 05 Ethos — display lines travel with the scroll ---------- */
      const etl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: { trigger: ".ethos", start: "top 82%", end: "top -4%", scrub: 0.5 },
      });
      etl
        .from(".ethos-chip", { y: 40, opacity: 0, duration: 0.25 }, 0)
        .from(".ethos-line-1", { y: 170, opacity: 0, duration: 0.5 }, 0.08)
        .from(".ethos-line-2", { y: 170, opacity: 0, duration: 0.5 }, 0.28)
        .from(".ethos-line-3", { y: 170, opacity: 0, duration: 0.5 }, 0.48);

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
        y: 70,
        opacity: 0,
        stagger: 0.12,
        ease: "power1.out",
        scrollTrigger: { trigger: ".ethos-features", start: "top 92%", end: "top 55%", scrub: 0.5 },
      });

      /* ---------- 06 Quality + waitlist ---------- */
      gsap.from(".quality-copy > *", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: { trigger: ".quality", start: "top 85%", end: "top 40%", scrub: 0.5 },
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
            scrollTrigger: { trigger: ".quality-arrow", start: "top 95%", end: "top 45%", scrub: 0.4 },
          }
        );
      }

      gsap.from(".waitlist-panel > *", {
        y: 56,
        opacity: 0,
        stagger: 0.08,
        ease: "power1.out",
        scrollTrigger: { trigger: ".waitlist-panel", start: "top 85%", end: "top 42%", scrub: 0.5 },
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
        ease: "power1.out",
        scrollTrigger: { trigger: ".journal-feature-grid", start: "top 92%", end: "top 55%", scrub: 0.5 },
      });

      gsap.from(".journal-side .journal-card", {
        y: 130,
        opacity: 0,
        stagger: 0.12,
        ease: "power1.out",
        scrollTrigger: { trigger: ".journal-feature-grid", start: "top 92%", end: "top 45%", scrub: 0.5 },
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

      const galleryWords = splitWords(document.querySelector(".gallery-heading"));
      gsap.from(galleryWords, {
        yPercent: 120,
        rotate: 4,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gallery-heading", start: "top 96%", end: "top 58%", scrub: 0.4 },
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
