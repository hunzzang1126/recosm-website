"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "./StoreContext";

const NAV = [
  { href: "/product", label: "The Serum" },
  { href: "/science", label: "Our Science" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { cartCount, setCartOpen } = useStore();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  // Only the homepage has a dark full-bleed hero behind the header
  const onDarkHero = pathname === "/";
  const solid = !onDarkHero || scrolled;

  return (
    <>
      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${solid && !scrolled ? " is-solid is-scrolled" : ""}`}
        id="site-header"
      >
        <div className="header-inner">
          <Link href="/" className="header-logo">
            Re<em>:</em>Cosm
          </Link>

          <nav className="header-nav" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname.startsWith(item.href) ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/stockists" className="header-icon-btn" aria-label="Where to buy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </Link>
            <span className="divider" aria-hidden="true"></span>
            <button className="header-icon-btn cart-btn" aria-label="Shopping bag" onClick={() => setCartOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className={`cart-count${cartCount > 0 ? " has-items" : ""}`}>{cartCount}</span>
            </button>
          </div>

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
      </header>

      <div className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-nav-links" aria-label="Mobile">
          <Link href="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
