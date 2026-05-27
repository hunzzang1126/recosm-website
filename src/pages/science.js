// ============================================
// Re:Cosm — Our Science Page
// ============================================

import { icons } from '../utils/icons.js';

export function renderScience() {
  return `
    <!-- Hero -->
    <section class="science-hero">
      <div class="container container-narrow">
        <p class="section-overline reveal">Our Science</p>
        <h1 class="section-title reveal delay-1" style="font-size: clamp(2rem, 4vw, 3.5rem);">Korean beauty science<br>meets Canadian standards</h1>
        <p class="section-desc reveal delay-2">We believe what goes near your eyes should be held to the highest standard. That's why we chose peptides over prostaglandins, and Kolmar Korea over shortcuts.</p>
      </div>
    </section>

    <!-- Brand Story -->
    <section class="science-section section-white">
      <div class="container">
        <div class="science-grid">
          <div class="science-image reveal-left">
            <div class="img-placeholder" style="aspect-ratio: 4/3; border-radius: 12px;">
              <span>Brand Story Image</span>
            </div>
          </div>
          <div class="science-content reveal-right">
            <p class="text-overline" style="margin-bottom: var(--space-4);">The Story</p>
            <h2 class="heading-3">Born from a question:<br>why compromise?</h2>
            <p>Most lash serums on the market rely on prostaglandin analogs — synthetic compounds originally developed for glaucoma treatment. While effective at stimulating lash growth, they come with well-documented side effects: iris darkening, periorbital fat loss, and eyelid pigmentation.</p>
            <p>Re:Cosm was founded on a simple premise: you shouldn't have to choose between results and safety. By combining Korean cosmetic innovation with Canadian regulatory standards, we created a lash serum that delivers visible results through peptide science — without the trade-offs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Kolmar Korea -->
    <section class="science-section section-warm">
      <div class="container">
        <div class="science-grid">
          <div class="science-content reveal-left" style="order: 1;">
            <p class="text-overline" style="margin-bottom: var(--space-4);">Manufacturing Excellence</p>
            <h2 class="heading-3">Made by Kolmar Korea</h2>
            <p>Our serum is manufactured by Kolmar Korea, one of the world's largest and most respected cosmetic manufacturers. With over 30 years of experience and clients ranging from global luxury brands to innovative K-beauty startups, Kolmar's GMP-certified facilities represent the gold standard in cosmetic manufacturing.</p>
            <p>Every batch is produced under strict quality control protocols, ensuring consistency, purity, and safety in every tube of Re:Cosm Lash Conditioning Serum.</p>
            <div style="display: flex; gap: var(--space-6); margin-top: var(--space-6); flex-wrap: wrap;">
              <div style="text-align: center;">
                <div style="font-size: var(--text-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary);">30+</div>
                <div style="font-size: var(--text-xs); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.1em;">Years Experience</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: var(--text-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary);">GMP</div>
                <div style="font-size: var(--text-xs); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.1em;">Certified</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: var(--text-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary);">ISO</div>
                <div style="font-size: var(--text-xs); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.1em;">22716 Compliant</div>
              </div>
            </div>
          </div>
          <div class="science-image reveal-right" style="order: 2;">
            <div class="img-placeholder" style="aspect-ratio: 4/3; border-radius: 12px;">
              <span>Kolmar Korea Facility</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ingredient Deep Dive -->
    <section class="ingredients-deep">
      <div class="container">
        <div class="section-header">
          <p class="section-overline reveal">Hero Ingredients</p>
          <h2 class="section-title reveal delay-1">What's inside</h2>
          <p class="section-desc reveal delay-2">Every ingredient is chosen with purpose. Here's the science behind our formula.</p>
        </div>
        <div class="ingredient-detail">
          <div class="ingredient-detail-card reveal delay-1">
            <div class="ingredient-icon">Ac</div>
            <h4>Acetyl Tetrapeptide-3</h4>
            <p class="ingredient-scientific">Capixyl™ Complex</p>
            <p>A biomimetic peptide that works at the dermal papilla level to anchor hair follicles, reduce fallout, and stimulate the anagen (growth) phase. Clinically studied to improve hair density by up to 46% in 4 months.</p>
          </div>
          <div class="ingredient-detail-card reveal delay-2">
            <div class="ingredient-icon">B7</div>
            <h4>Biotin</h4>
            <p class="ingredient-scientific">Vitamin B7 / Vitamin H</p>
            <p>An essential water-soluble B-vitamin that serves as a cofactor in keratin synthesis — the primary structural protein of lashes. Supports stronger, more resilient lash structure from within.</p>
          </div>
          <div class="ingredient-detail-card reveal delay-3">
            <div class="ingredient-icon">B5</div>
            <h4>Panthenol</h4>
            <p class="ingredient-scientific">Pro-Vitamin B5</p>
            <p>A powerful humectant that penetrates the lash cuticle to deliver deep hydration. Improves lash flexibility, reduces brittleness, and creates a natural, healthy sheen.</p>
          </div>
          <div class="ingredient-detail-card reveal delay-4">
            <div class="ingredient-icon">Ca</div>
            <h4>Centella Asiatica</h4>
            <p class="ingredient-scientific">Tiger Grass Extract</p>
            <p>A time-honored botanical in Korean skincare, known for its soothing and repairing properties. Calms the delicate lash line, reduces inflammation, and supports healthy follicle conditions.</p>
          </div>
          <div class="ingredient-detail-card reveal delay-5">
            <div class="ingredient-icon">Ha</div>
            <h4>Hyaluronic Acid</h4>
            <p class="ingredient-scientific">Hydroxypropyl Trimonium Hyaluronate</p>
            <p>A modified form of HA that binds to lash fibers, locking in moisture for up to 72 hours. Creates a protective film that shields lashes from environmental stress.</p>
          </div>
          <div class="ingredient-detail-card reveal delay-6">
            <div class="ingredient-icon">Gc</div>
            <h4>Glycyrrhizate</h4>
            <p class="ingredient-scientific">Dipotassium Glycyrrhizate</p>
            <p>Derived from licorice root, this anti-inflammatory compound soothes and protects the sensitive periorbital skin. Helps reduce redness and irritation around the lash line.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Leave Out -->
    <section class="leave-out">
      <div class="container">
        <div class="section-header">
          <p class="section-overline reveal">Clean Commitment</p>
          <h2 class="section-title reveal delay-1">What we leave out</h2>
          <p class="section-desc reveal delay-2">We believe in transparency. Here's what you'll never find in our formula — and why.</p>
        </div>
        <div class="leave-out-grid">
          <div class="leave-out-card reveal delay-1">
            <div class="leave-out-icon">${icons.noSign}</div>
            <h4>No Prostaglandins</h4>
            <p>Prostaglandin analogs (bimatoprost, isopropyl cloprostenate) can cause iris darkening, fat atrophy around the eyes, and permanent pigmentation changes. We use peptides instead.</p>
          </div>
          <div class="leave-out-card reveal delay-2">
            <div class="leave-out-icon">${icons.noSign}</div>
            <h4>No Fragrance</h4>
            <p>Synthetic fragrances are among the top sensitizers for the delicate eye area. Our formula is 100% fragrance-free for maximum comfort.</p>
          </div>
          <div class="leave-out-card reveal delay-3">
            <div class="leave-out-icon">${icons.noSign}</div>
            <h4>No Parabens</h4>
            <p>We use modern, gentle preservative systems instead of parabens. Our formula meets the strictest international cosmetic safety standards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Peptide vs Prostaglandin -->
    <section class="comparison-section">
      <div class="container">
        <div class="section-header">
          <p class="section-overline reveal" style="color: var(--color-primary);">The Difference</p>
          <h2 class="section-title reveal delay-1" style="color: white;">Peptide-based vs. Prostaglandin-based</h2>
          <p class="section-desc reveal delay-2" style="color: rgba(255,255,255,0.6);">Not all lash serums are created equal. Here's how the two approaches compare.</p>
        </div>
        <div class="reveal delay-3" style="overflow-x: auto;">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th class="highlight-col">Peptide-Based (Re:Cosm)</th>
                <th>Prostaglandin-Based</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Active Mechanism</td>
                <td class="highlight-col">Nourishes follicles naturally</td>
                <td>Mimics hormonal signaling</td>
              </tr>
              <tr>
                <td>Iris Color Change Risk</td>
                <td class="highlight-col"><span class="check">✓ No risk</span></td>
                <td><span class="cross">✗ Documented risk</span></td>
              </tr>
              <tr>
                <td>Periorbital Fat Loss</td>
                <td class="highlight-col"><span class="check">✓ No risk</span></td>
                <td><span class="cross">✗ Documented risk</span></td>
              </tr>
              <tr>
                <td>Eyelid Darkening</td>
                <td class="highlight-col"><span class="check">✓ No risk</span></td>
                <td><span class="cross">✗ Common side effect</span></td>
              </tr>
              <tr>
                <td>Safe for Sensitive Eyes</td>
                <td class="highlight-col"><span class="check">✓ Yes</span></td>
                <td><span class="cross">✗ May cause irritation</span></td>
              </tr>
              <tr>
                <td>Lash Extension Safe</td>
                <td class="highlight-col"><span class="check">✓ Yes</span></td>
                <td>Varies by product</td>
              </tr>
              <tr>
                <td>Results Timeline</td>
                <td class="highlight-col">4-6 weeks</td>
                <td>4-8 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Compliance -->
    <section class="science-section">
      <div class="container container-narrow text-center">
        <p class="section-overline reveal">Compliance</p>
        <h2 class="section-title reveal delay-1">Health Canada compliant</h2>
        <p class="section-desc reveal delay-2" style="max-width: 600px;">
          Re:Cosm Lash Conditioning Serum is formulated in compliance with Health Canada's Cosmetic Regulations. All labeling is bilingual (English/French) as required by the Consumer Packaging and Labelling Act. Our product is classified as a cosmetic, not a drug, and does not require a Drug Identification Number (DIN).
        </p>
      </div>
    </section>
  `;
}

export function initScience() {
  // No special initialization needed — all scroll reveals handled by main.js
}
