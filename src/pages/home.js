// ============================================
// Re:Cosm — Homepage
// ============================================

import { icons } from '../utils/icons.js';

export function renderHome() {
  return `
    <!-- Hero -->
    <section class="hero" id="home-hero">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="hero-overline reveal">Korean Clean Beauty</p>
          <h1 class="hero-title reveal delay-1">Re<em>:</em>define<br>your lashes.</h1>
          <p class="hero-description reveal delay-2">
            Clinically formulated with Acetyl Tetrapeptide-3. Prostaglandin-free. Made in Korea by Kolmar.
          </p>
          <div class="hero-cta-group reveal delay-3">
            <a href="#/product" class="btn btn-dark btn-lg">Discover</a>
            <a href="#/science" class="btn btn-ghost">Our Science →</a>
          </div>
        </div>
        <div class="hero-image reveal-right delay-2">
          <div class="img-placeholder" style="aspect-ratio: 3/4; border-radius: 12px; max-width: 480px; width: 100%;">
            <span>Product Hero Image</span>
          </div>
          <div class="hero-badge">
            <span class="dot"></span>
            Made in Korea
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Strip -->
    <section class="benefits-strip">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefit-item reveal delay-1">
            <div class="benefit-icon">${icons.shield}</div>
            <span class="benefit-label">Prostaglandin-Free</span>
          </div>
          <div class="benefit-item reveal delay-2">
            <div class="benefit-icon">${icons.molecule}</div>
            <span class="benefit-label">Peptide-Powered</span>
          </div>
          <div class="benefit-item reveal delay-3">
            <div class="benefit-icon">${icons.flag}</div>
            <span class="benefit-label">Made in Korea</span>
          </div>
          <div class="benefit-item reveal delay-4">
            <div class="benefit-icon">${icons.leaf}</div>
            <span class="benefit-label">Fragrance-Free</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Highlight -->
    <section class="product-highlight" id="home-highlight">
      <div class="container">
        <div class="highlight-grid">
          <div class="highlight-image reveal-left">
            <div class="img-placeholder" style="aspect-ratio: 1; border-radius: 12px;">
              <span>Product Close-up</span>
            </div>
          </div>
          <div class="highlight-content">
            <p class="text-overline highlight-overline reveal">The Science</p>
            <h2 class="heading-2 highlight-title reveal delay-1">Powered by peptides,<br>not side effects</h2>
            <p class="text-body-lg highlight-text reveal delay-2">
              Unlike prostaglandin-based serums that can cause irritation, discoloration, and orbital fat loss, Re:Cosm's formula uses Acetyl Tetrapeptide-3 (Capixyl™) to nourish lash follicles naturally.
            </p>
            <div class="ingredients-grid reveal delay-3">
              <div class="ingredient-card">
                <div class="ingredient-name">Acetyl Tetrapeptide-3</div>
                <div class="ingredient-desc">Strengthens & lengthens lashes at the follicle level</div>
              </div>
              <div class="ingredient-card">
                <div class="ingredient-name">Biotin</div>
                <div class="ingredient-desc">Essential B-vitamin for keratin production</div>
              </div>
              <div class="ingredient-card">
                <div class="ingredient-name">Panthenol</div>
                <div class="ingredient-desc">Pro-vitamin B5 for deep hydration & flexibility</div>
              </div>
              <div class="ingredient-card">
                <div class="ingredient-name">Centella Asiatica</div>
                <div class="ingredient-desc">Soothes & protects the delicate lash line</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Use -->
    <section class="how-to-use" id="home-howto">
      <div class="container">
        <div class="section-header">
          <p class="section-overline reveal">How to Use</p>
          <h2 class="section-title reveal delay-1">Three simple steps</h2>
          <p class="section-desc reveal delay-2">Apply nightly for best results. Each tube lasts approximately 3 months.</p>
        </div>
        <div class="steps-grid">
          <div class="step-card reveal delay-1">
            <div class="step-image">
              <div class="img-placeholder" style="aspect-ratio: 1; border-radius: 12px;">
                <span>Step 1</span>
              </div>
            </div>
            <span class="step-number">1</span>
            <h3 class="step-title">Cleanse</h3>
            <p class="step-desc">Remove all makeup and ensure lashes are clean and dry.</p>
          </div>
          <div class="step-card reveal delay-2">
            <div class="step-image">
              <div class="img-placeholder" style="aspect-ratio: 1; border-radius: 12px;">
                <span>Step 2</span>
              </div>
            </div>
            <span class="step-number">2</span>
            <h3 class="step-title">Apply</h3>
            <p class="step-desc">Use the rounded applicator tip to apply serum along the upper lash line.</p>
          </div>
          <div class="step-card reveal delay-3">
            <div class="step-image">
              <div class="img-placeholder" style="aspect-ratio: 1; border-radius: 12px;">
                <span>Step 3</span>
              </div>
            </div>
            <span class="step-number">3</span>
            <h3 class="step-title">Brush</h3>
            <p class="step-desc">Use the spoolie brush to coat individual lashes from root to tip.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="reviews-section" id="home-reviews">
      <div class="container">
        <div class="section-header">
          <p class="section-overline reveal">Real Results</p>
          <h2 class="section-title reveal delay-1">What our community says</h2>
        </div>
        <div class="reviews-grid">
          ${renderReview('My lashes have never looked this full. After 6 weeks, even my aesthetician noticed the difference.', 'Sarah M.', 'Toronto, ON', 5, 1)}
          ${renderReview("Finally a serum that doesn't irritate my eyes. I've tried prostaglandin-based ones before and they made my eyelids dark. This one — zero side effects.", 'Jessica L.', 'Vancouver, BC', 5, 2)}
          ${renderReview("I was skeptical about peptide serums but the results speak for themselves. My lashes are visibly longer and I feel confident without falsies.", 'Priya K.', 'Calgary, AB', 5, 3)}
        </div>
      </div>
    </section>

    <!-- Email CTA -->
    <section class="email-cta" id="home-cta">
      <div class="container">
        <p class="section-overline reveal" style="color: rgba(255,255,255,0.7);">Stay in the Loop</p>
        <h2 class="section-title reveal delay-1" style="color: white;">Join the Re:Cosm community</h2>
        <p class="section-desc reveal delay-2" style="color: rgba(255,255,255,0.8);">Be the first to know about new launches, exclusive offers, and clean beauty insights.</p>
        <form class="email-form reveal delay-3" id="home-email-form">
          <input type="email" placeholder="Enter your email" required aria-label="Email address" id="home-email-input">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}

function renderReview(text, author, location, stars, delay) {
  const starHtml = Array(stars).fill(0).map(() =>
    `<span class="star">${icons.star}</span>`
  ).join('');

  return `
    <div class="review-card reveal delay-${delay}">
      <div class="review-stars stars">${starHtml}</div>
      <p class="review-text">"${text}"</p>
      <div class="review-author">${author}</div>
      <div class="review-meta">${location}</div>
    </div>
  `;
}

export function initHome() {
  const form = document.getElementById('home-email-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('home-email-input');
      if (input && input.value) {
        input.value = '';
        document.dispatchEvent(new CustomEvent('showToast', { detail: 'Welcome to Re:Cosm! Check your inbox.' }));
      }
    });
  }
}
