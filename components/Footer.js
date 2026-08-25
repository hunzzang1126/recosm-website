"use client";

import Link from "next/link";
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <p className="footer-tagline">
          Honest lash care, <em>made kind</em> to sensitive eyes.
        </p>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Re<span>:</span>Cosm</div>
            <p>Korean beauty science meets Canadian clean beauty standards. Peptide-powered lash care, made responsibly by Kolmar Korea.</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Navigate</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/product">The Serum</Link>
              <Link href="/science">Our Science</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <div className="footer-links">
              <Link href="/guides">Lash Care Guides</Link>
              <Link href="/stockists">Where to Buy</Link>
              <Link href="/faq">Shipping &amp; Returns</Link>
              <a href="mailto:info@recosm.co">info@recosm.co</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p>Join the waitlist for launch news and clean beauty insights.</p>
            <EmailForm className="newsletter-form" buttonLabel="Join" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Re:Cosm. All rights reserved. Made in Korea 🇰🇷 · Toronto, Canada</p>
          <div className="footer-legal">
            <Link href="/faq">Privacy Policy</Link>
            <Link href="/faq">Terms of Service</Link>
            <Link href="/contact">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
