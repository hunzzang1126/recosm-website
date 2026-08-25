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
            <div className="header-topbar-left"></div>
            <div className="header-topbar-right">
              <div className="lang-toggle">
                <a href="#" className="active">EN</a>
                <a href="#">FR</a>
              </div>
              <button className="header-icon-btn" aria-label="Search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /></svg>
              </button>
              <button className="header-icon-btn" aria-label="Account">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </button>
              <button className="header-icon-btn cart-btn" aria-label="Shopping bag" onClick={() => setCartOpen(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                <span className={`cart-count${cartCount > 0 ? " has-items" : ""}`}>{cartCount}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="header-logo-row">
          <Link href="/" className="header-logo">Re:Cosm</Link>
        </div>

        <nav className="header-nav-row" id="header-nav">
          <div className="header-nav-inner">
            <Link href="/product">The Serum</Link>
            <Link href="/science">Our Science</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <button
          className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-nav-links">
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
          <Link href="/product" className="mobile-nav-link" onClick={closeMenu}>The Serum</Link>
          <Link href="/science" className="mobile-nav-link" onClick={closeMenu}>Our Science</Link>
          <Link href="/faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
