"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "./StoreContext";

export default function Header() {
  const { cartCount, setCartOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="site-header">
        <div className="header-topbar">
          <div className="header-topbar-inner">
            <p className="topbar-note">
              Launching online Nov 2026 <em>:</em> now at Jacob &amp; Sebastian, Toronto{" "}
              <span className="fr">— Lancement en ligne nov. 2026</span>
            </p>
          </div>
        </div>

        <div className="header-bar">
          <Link href="/" className="header-logo">Re<em>:</em>Cosm</Link>

          <nav className="header-nav" id="header-nav">
            <Link href="/product">The Serum</Link>
            <Link href="/science">Our Science</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <button className="header-icon-btn cart-btn" aria-label="Shopping bag" onClick={() => setCartOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className={`cart-count${cartCount > 0 ? " has-items" : ""}`}>{cartCount}</span>
            </button>
            <button
              className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-nav-links">
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
          <Link href="/product" className="mobile-nav-link" onClick={closeMenu}>The Serum</Link>
          <Link href="/science" className="mobile-nav-link" onClick={closeMenu}>Our Science</Link>
          <Link href="/guides" className="mobile-nav-link" onClick={closeMenu}>Guides</Link>
          <Link href="/faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
