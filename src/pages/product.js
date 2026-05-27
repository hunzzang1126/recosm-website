// ============================================
// Re:Cosm — Product Page
// ============================================

import { icons } from '../utils/icons.js';
import { addToCart, formatPrice } from '../utils/cart.js';

const PRICE = 55.00;

export function renderProduct() {
  return `
    <div class="product-page">
      <div class="container">
        <div class="product-grid">

          <!-- Gallery -->
          <div class="product-gallery reveal-left">
            <div class="gallery-main">
              <div class="img-placeholder" id="gallery-main-img" style="aspect-ratio: 3/4; border-radius: 8px;">
                <span>Product — Front View</span>
              </div>
            </div>
            <div class="gallery-thumbs">
              <button class="gallery-thumb active" data-view="Front View" aria-label="Front view">
                <div class="img-placeholder" style="font-size: 8px;"><span>Front</span></div>
              </button>
              <button class="gallery-thumb" data-view="Applicator Detail" aria-label="Applicator detail">
                <div class="img-placeholder" style="font-size: 8px;"><span>Tip</span></div>
              </button>
              <button class="gallery-thumb" data-view="Packaging" aria-label="Packaging">
                <div class="img-placeholder" style="font-size: 8px;"><span>Box</span></div>
              </button>
              <button class="gallery-thumb" data-view="Ingredients" aria-label="Ingredients label">
                <div class="img-placeholder" style="font-size: 8px;"><span>Label</span></div>
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="product-info reveal-right">
            <p class="product-brand">Re:Cosm</p>
            <h1 class="product-name">Lash Conditioning Serum</h1>
            <p class="product-subtitle">Peptide-Powered · 7 mL · Made in Korea</p>
            <p class="product-price" id="product-price">${formatPrice(PRICE)}</p>

            <p class="product-desc">
              A daily lash conditioning serum formulated with Acetyl Tetrapeptide-3 (Capixyl™), Biotin, Panthenol, and Centella Asiatica. Our prostaglandin-free, fragrance-free formula is designed to nourish and strengthen lashes without irritation. Features a dual applicator with precision rounded tip and spoolie brush.
            </p>

            <!-- Add to Cart -->
            <div class="product-add">
              <div class="qty-selector">
                <button class="qty-btn" id="qty-decrease" aria-label="Decrease quantity">−</button>
                <span class="qty-value" id="qty-value">1</span>
                <button class="qty-btn" id="qty-increase" aria-label="Increase quantity">+</button>
              </div>
              <button class="btn btn-primary btn-lg" id="add-to-cart">Add to Bag</button>
            </div>

            <!-- Shipping -->
            <div class="product-shipping">
              ${icons.truck}
              <span>Free shipping across Canada on all orders</span>
            </div>

            <!-- Product Details Accordion -->
            <div class="product-details-section">
              ${renderAccordion([
                {
                  title: 'Key Ingredients',
                  content: `
                    <ul style="list-style: none; padding: 0;">
                      <li style="margin-bottom: 12px;"><strong>Acetyl Tetrapeptide-3 (Capixyl™)</strong> — Biomimetic peptide that anchors to hair follicles, stimulating growth and reducing fallout.</li>
                      <li style="margin-bottom: 12px;"><strong>Biotin (Vitamin B7)</strong> — Essential cofactor in keratin synthesis, strengthening the structural protein of lashes.</li>
                      <li style="margin-bottom: 12px;"><strong>Panthenol (Pro-Vitamin B5)</strong> — Deeply hydrates and improves lash flexibility, preventing breakage.</li>
                      <li style="margin-bottom: 12px;"><strong>Centella Asiatica Extract</strong> — Calming botanical that soothes the sensitive lash line area.</li>
                      <li><strong>Hyaluronic Acid</strong> — Locks in moisture for plump, healthy-looking lashes.</li>
                    </ul>
                  `
                },
                {
                  title: 'Full Ingredient List',
                  content: `<p style="font-size: 13px; line-height: 1.7; color: var(--color-text-secondary);">Aqua, Betaine, Pentylene Glycol, Glycerin, Propanediol, 1,2-Hexanediol, Sodium Polyacryloyldimethyl Taurate, Butylene Glycol, Hydroxyethylcellulose, Panthenol, Xanthan Gum, Dipotassium Glycyrrhizate, Saccharide Isomerate, Hydroxypropyl Trimonium Hyaluronate, Ethylhexylglycerin, Tromethamine, Disodium EDTA, Centella Asiatica Extract, Houttuynia Cordata Extract, Glycine Soja (Soybean) Seed Extract, Biotin, Disodium Phosphate, Polysorbate 60, Sodium Citrate, Citric Acid, Dextran, Sodium Phosphate, Acetyl Tetrapeptide-3, Trifolium Pratense (Clover) Flower Extract.</p>`
                },
                {
                  title: 'How to Use',
                  content: `
                    <ol style="padding-left: 20px; line-height: 1.8;">
                      <li style="margin-bottom: 8px;"><strong>Cleanse</strong> — Remove all makeup. Ensure lashes are clean and completely dry.</li>
                      <li style="margin-bottom: 8px;"><strong>Apply</strong> — Using the rounded applicator tip, apply a thin line of serum along the upper lash line, as close to the roots as possible.</li>
                      <li style="margin-bottom: 8px;"><strong>Brush</strong> — Flip the applicator to the spoolie brush side. Gently brush through lashes from root to tip to evenly distribute serum.</li>
                      <li><strong>Repeat nightly</strong> — For best results, use every evening before bed. Allow serum to absorb fully before applying other products.</li>
                    </ol>
                  `
                },
                {
                  title: 'Shipping & Returns',
                  content: `
                    <p style="margin-bottom: 12px;">We ship across Canada with standard and express options:</p>
                    <ul style="padding-left: 20px; line-height: 1.8;">
                      <li><strong>Standard Shipping:</strong> 5-7 business days — Free</li>
                      <li><strong>Express Shipping:</strong> 2-3 business days — $9.99 CAD</li>
                    </ul>
                    <p style="margin-top: 12px;">Returns accepted within 30 days of delivery for unopened products. See our return policy for details.</p>
                  `
                },
                {
                  title: 'FAQ',
                  content: `
                    <div style="line-height: 1.8;">
                      <p style="margin-bottom: 12px;"><strong>Is it safe for sensitive eyes?</strong><br>Yes. Our formula is ophthalmologist-tested, fragrance-free, and prostaglandin-free — making it suitable for sensitive eyes and contact lens wearers.</p>
                      <p style="margin-bottom: 12px;"><strong>Can I use it with lash extensions?</strong><br>Absolutely. Our formula is safe for use with lash extensions and after lash lifts.</p>
                      <p style="margin-bottom: 12px;"><strong>How long does one tube last?</strong><br>One 7 mL tube lasts approximately 3 months with nightly use.</p>
                      <p><strong>When will I see results?</strong><br>Most users notice visible improvement in lash density and length within 4-6 weeks of consistent nightly application.</p>
                    </div>
                  `
                }
              ])}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAccordion(items) {
  return items.map((item, i) => `
    <div class="accordion-item ${i === 0 ? 'is-open' : ''}" data-accordion>
      <button class="accordion-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}">
        <span>${item.title}</span>
        <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <div class="accordion-content" style="${i === 0 ? 'max-height: 500px;' : ''}">
        <div class="accordion-body">${item.content}</div>
      </div>
    </div>
  `).join('');
}

export function initProduct() {
  // Quantity selector
  let qty = 1;
  const qtyValue = document.getElementById('qty-value');
  const decrease = document.getElementById('qty-decrease');
  const increase = document.getElementById('qty-increase');

  if (decrease) {
    decrease.addEventListener('click', () => {
      if (qty > 1) {
        qty--;
        qtyValue.textContent = qty;
      }
    });
  }

  if (increase) {
    increase.addEventListener('click', () => {
      if (qty < 10) {
        qty++;
        qtyValue.textContent = qty;
      }
    });
  }

  // Add to cart
  const addBtn = document.getElementById('add-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      addToCart(qty);
      document.dispatchEvent(new CustomEvent('showToast', { detail: 'Added to your bag!' }));
      document.dispatchEvent(new CustomEvent('openCart'));
    });
  }

  // Gallery thumbnails
  const thumbs = document.querySelectorAll('.gallery-thumb');
  const mainImg = document.getElementById('gallery-main-img');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImg) {
        const view = thumb.dataset.view;
        mainImg.querySelector('span').textContent = `Product — ${view}`;
      }
    });
  });

  // Accordion
  document.querySelectorAll('[data-accordion]').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Close all
        document.querySelectorAll('[data-accordion]').forEach(a => {
          a.classList.remove('is-open');
          a.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
          a.querySelector('.accordion-content').style.maxHeight = '0';
        });
        // Open clicked if it wasn't open
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          item.querySelector('.accordion-content').style.maxHeight = '500px';
        }
      });
    }
  });
}
