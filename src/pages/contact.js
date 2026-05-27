// ============================================
// Re:Cosm — Contact Page
// ============================================

import { icons } from '../utils/icons.js';

export function renderContact() {
  return `
    <div class="contact-page">
      <div class="container container-narrow">
        <div class="section-header">
          <p class="section-overline reveal">Get in Touch</p>
          <h1 class="section-title reveal delay-1">Contact Us</h1>
          <p class="section-desc reveal delay-2">Have a question or just want to say hello? We'd love to hear from you.</p>
        </div>

        <div class="contact-grid">
          <!-- Form -->
          <div class="reveal">
            <div class="contact-form-msg" id="contact-success">
              Thank you! Your message has been sent. We'll get back to you within 24 hours.
            </div>
            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">Name</label>
                <input class="form-input" type="text" id="contact-name" name="name" required placeholder="Your name">
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">Email</label>
                <input class="form-input" type="email" id="contact-email" name="email" required placeholder="your@email.com">
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-message">Message</label>
                <textarea class="form-textarea" id="contact-message" name="message" required placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
            </form>
          </div>

          <!-- Info -->
          <div class="contact-info-card reveal delay-2">
            <div class="contact-info-item">
              <div class="contact-info-icon">${icons.mail}</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@recosm.com">info@recosm.com</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${icons.mapPin}</div>
              <div>
                <h4>Location</h4>
                <p>Toronto, ON<br>Canada</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${icons.truck}</div>
              <div>
                <h4>Shipping</h4>
                <p>Free standard shipping<br>across all of Canada</p>
              </div>
            </div>

            <div style="margin-top: var(--space-8); padding-top: var(--space-6); border-top: 1px solid var(--color-border);">
              <h4 style="font-size: var(--text-xs); font-weight: var(--font-weight-semibold); letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-3);">Response Time</h4>
              <p style="font-size: var(--text-sm); color: var(--color-text-body); line-height: 1.6;">We typically respond within 24 hours during business days (Mon–Fri, 9 AM – 6 PM EST).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initContact() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show success message
      if (successMsg) {
        successMsg.classList.add('success');
      }

      // Reset form
      form.reset();

      // Toast
      document.dispatchEvent(new CustomEvent('showToast', { detail: 'Message sent! We\'ll be in touch.' }));

      // Scroll to top of form
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}
