"use client";

// Truekind-style entry: dark screen, serif counter 00 → 100, then fade.
// Runs once per browser session (sessionStorage) so repeat navigation is instant.

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const DURATION = 2100;

export default function Preloader() {
  const [state, setState] = useState("pending"); // pending | counting | done | hidden
  const [count, setCount] = useState(0);
  const raf = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("recosm-preloaded") === "1";
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const announce = () => {
      window.__recosmReady = true;
      window.dispatchEvent(new CustomEvent("recosm:ready"));
    };

    // Readers arriving from search on a guide get the article immediately;
    // the counter stays for the brand pages it was designed for.
    const article = (pathname || "").startsWith("/guides");

    if (seen || reduced || article) {
      setState("hidden");
      announce();
      return;
    }

    setState("counting");
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      // ease-out so the count lingers near the end like truekind's
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem("recosm-preloaded", "1");
        } catch {}
        document.documentElement.style.overflow = "";
        setState("done");
        announce();
        // remove the overlay entirely once the fade is over (setTimeout still
        // fires in throttled/background tabs where transitions freeze)
        setTimeout(() => setState("hidden"), 1000);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf.current);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (state === "pending" || state === "hidden") return null;

  return (
    <div className={`preloader${state === "done" ? " is-done" : ""}`} aria-hidden="true">
      <span className="preloader-count">{String(count).padStart(2, "0")}</span>
      <span className="preloader-mark">Re:Cosm · Lash Care</span>
    </div>
  );
}
