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
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
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
