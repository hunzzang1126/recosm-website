"use client";

import Link from "next/link";
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-wordmark" aria-hidden="true">Re<em>:</em>Cosm</div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p>Korean beauty science meets Canadian clean beauty standards. Peptide-powered lash care, made responsibly.</p>
            <p className="footer-spec">
              Lash Conditioning Serum<br />
              Sérum revitalisant pour les cils<br />
              Net. 10 mL · Made in Korea by Kolmar
            </p>
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
            <p>Be first to know when we launch online — plus clean beauty insights, no noise.</p>
            <EmailForm className="newsletter-form" buttonLabel="Join" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Re:Cosm · Made in Korea · Toronto, ON, Canada</p>
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
