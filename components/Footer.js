"use client";

import Link from "next/link";
import { useStore } from "./StoreContext";

export default function Footer() {
  const { showToast } = useStore();

  function onSubscribe(e) {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input");
    if (input && input.value) {
      input.value = "";
      showToast("Thank you for subscribing!");
    }
  }

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Re<span>:</span>Cosm</div>
            <p>Korean beauty science meets Canadian clean beauty standards. Peptide-powered lash care, made responsibly.</p>
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
              <Link href="/faq">Shipping &amp; Returns</Link>
              <Link href="/faq">How to Use</Link>
              <a href="mailto:info@recosm.co">info@recosm.co</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p>Join our community for exclusive offers and clean beauty insights.</p>
            <form className="newsletter-form" onSubmit={onSubscribe}>
              <input type="email" placeholder="Your email" required aria-label="Email address" />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Re:Cosm. All rights reserved. Made in Korea 🇰🇷 · Toronto, Canada</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
