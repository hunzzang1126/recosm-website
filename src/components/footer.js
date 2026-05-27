// ============================================
// Re:Cosm — Footer Component
// ============================================

export function renderFooter() {
  return `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">Re<span>:</span>Cosm</div>
            <p>Korean beauty science meets Canadian clean beauty standards. Peptide-powered lash care, made responsibly.</p>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Navigate</h4>
            <div class="footer-links">
              <a href="#/">Home</a>
              <a href="#/product">The Serum</a>
              <a href="#/science">Our Science</a>
              <a href="#/faq">FAQ</a>
              <a href="#/contact">Contact</a>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Support</h4>
            <div class="footer-links">
              <a href="#/faq">Shipping & Returns</a>
              <a href="#/faq">How to Use</a>
              <a href="mailto:info@recosm.com">info@recosm.com</a>
            </div>
          </div>

          <div class="footer-newsletter">
            <h4 class="footer-heading">Stay Updated</h4>
            <p>Join our community for exclusive offers and clean beauty insights.</p>
            <form class="newsletter-form" id="footer-newsletter-form">
              <input type="email" placeholder="Your email" required aria-label="Email address">
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Re:Cosm. All rights reserved. Made in Korea 🇰🇷</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  const form = document.getElementById('footer-newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && input.value) {
        input.value = '';
        showToast('Thank you for subscribing!');
      }
    });
  }
}

function showToast(message) {
  const event = new CustomEvent('showToast', { detail: message });
  document.dispatchEvent(event);
}
