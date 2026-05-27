// ============================================
// Re:Cosm — FAQ Page
// ============================================

export function renderFaq() {
  const categories = [
    {
      title: 'Safety & Usage',
      items: [
        {
          q: 'Is this safe for sensitive eyes?',
          a: 'Yes. Our formula is ophthalmologist-tested, prostaglandin-free, and fragrance-free. It\'s specifically designed for the delicate eye area and is suitable for contact lens wearers. If you experience any unusual irritation, discontinue use and consult your eye care professional.'
        },
        {
          q: 'Can I use it with lash extensions?',
          a: 'Absolutely. Re:Cosm Lash Conditioning Serum is safe for use with all types of lash extensions, including classic, volume, and hybrid sets. In fact, it can help strengthen your natural lashes underneath, providing a better foundation for extensions.'
        },
        {
          q: 'Can I use it after a lash lift or tint?',
          a: 'Yes. We recommend waiting 24-48 hours after a lash lift or tint before beginning or resuming use. After that initial period, the serum can help maintain and nourish your lashes post-treatment.'
        },
        {
          q: 'What does prostaglandin-free mean and why does it matter?',
          a: 'Prostaglandins are hormone-like compounds used in many lash serums (and originally in glaucoma medications). While effective at promoting lash growth, prostaglandin analogs like bimatoprost and isopropyl cloprostenate can cause side effects including iris color changes, periorbital fat loss (sunken appearance around eyes), and eyelid darkening. Re:Cosm uses peptide-based technology instead, delivering results without these risks.'
        },
        {
          q: 'Can I use it on my lower lashes?',
          a: 'Our serum is designed for the upper lash line. When you blink, a small amount will naturally transfer to your lower lashes. We don\'t recommend direct application to the lower lash line to minimize the risk of product entering your eyes.'
        }
      ]
    },
    {
      title: 'Results & Expectations',
      items: [
        {
          q: 'When will I see results?',
          a: 'Most users begin to notice improvements in lash appearance within 4-6 weeks of consistent nightly use. Full results — including increased length, density, and thickness — are typically visible after 8-12 weeks. Results vary by individual, and consistent, daily application is key.'
        },
        {
          q: 'How long does one tube last?',
          a: 'One 7 mL tube of Re:Cosm Lash Conditioning Serum lasts approximately 3 months with nightly use on both eyes. A small amount goes a long way — you only need a thin line along the upper lash line.'
        },
        {
          q: 'What happens if I stop using it?',
          a: 'Your lashes will gradually return to their natural state over time, as the growth cycle completes. There is no rebound effect — your lashes will not become worse than they were before you started using the product. Many users choose to transition to every-other-night application for maintenance.'
        }
      ]
    },
    {
      title: 'Ingredients & Science',
      items: [
        {
          q: 'Is it Health Canada approved?',
          a: 'Re:Cosm Lash Conditioning Serum is formulated in compliance with Health Canada\'s Cosmetic Regulations. As a cosmetic product (not a drug), it does not require a Drug Identification Number (DIN). All labeling complies with the Consumer Packaging and Labelling Act, including bilingual English/French requirements.'
        },
        {
          q: 'What is Acetyl Tetrapeptide-3?',
          a: 'Acetyl Tetrapeptide-3, commercially known as Capixyl™, is a biomimetic peptide. It works by anchoring to the extracellular matrix around hair follicles, strengthening attachment and stimulating the anagen (active growth) phase of the lash cycle. Clinical studies have shown it can improve hair density by up to 46% over 4 months.'
        },
        {
          q: 'Is the product vegan and cruelty-free?',
          a: 'Re:Cosm is cruelty-free — we do not test on animals at any stage of product development. Our formula contains no animal-derived ingredients.'
        },
        {
          q: 'Is it safe during pregnancy or breastfeeding?',
          a: 'While our formula uses safe, cosmetic-grade ingredients, we recommend consulting with your healthcare provider before using any new beauty product during pregnancy or while breastfeeding.'
        }
      ]
    },
    {
      title: 'Shipping & Orders',
      items: [
        {
          q: 'Do you ship across Canada?',
          a: 'Yes! We ship to all provinces and territories across Canada. Standard shipping (5-7 business days) is free on all orders. Express shipping (2-3 business days) is available for $9.99 CAD.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Currently, we only ship within Canada. International shipping options are being explored and we hope to expand soon. Sign up for our newsletter to be notified when international shipping becomes available.'
        },
        {
          q: 'What is your return policy?',
          a: 'We accept returns of unopened, unused products within 30 days of delivery. Due to hygiene regulations, we cannot accept returns of opened cosmetic products. If you receive a damaged or defective product, please contact us at info@recosm.com within 7 days of delivery for a full replacement.'
        }
      ]
    }
  ];

  return `
    <div class="faq-page">
      <div class="container container-narrow">
        <div class="section-header">
          <p class="section-overline reveal">Support</p>
          <h1 class="section-title reveal delay-1">Frequently Asked Questions</h1>
          <p class="section-desc reveal delay-2">Everything you need to know about Re:Cosm Lash Conditioning Serum.</p>
        </div>

        <div class="faq-categories">
          ${categories.map(cat => `
            <div class="faq-category reveal">
              <h2 class="faq-category-title">${cat.title}</h2>
              ${cat.items.map((item, i) => `
                <div class="accordion-item" data-accordion>
                  <button class="accordion-trigger" aria-expanded="false">
                    <span>${item.q}</span>
                    <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-body">${item.a}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>

        <div class="text-center reveal" style="margin-top: var(--space-16); padding: var(--space-10); background: var(--color-bg-warm); border-radius: var(--radius-md);">
          <h3 class="heading-4" style="margin-bottom: var(--space-3);">Still have questions?</h3>
          <p class="text-body" style="margin-bottom: var(--space-6); color: var(--color-text-secondary);">We're here to help. Reach out and we'll get back to you within 24 hours.</p>
          <a href="#/contact" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  `;
}

export function initFaq() {
  // Accordion functionality
  document.querySelectorAll('[data-accordion]').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close siblings within the same category
        const parent = item.closest('.faq-category');
        if (parent) {
          parent.querySelectorAll('[data-accordion]').forEach(sibling => {
            sibling.classList.remove('is-open');
            sibling.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
            sibling.querySelector('.accordion-content').style.maxHeight = '0';
          });
        }

        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          item.querySelector('.accordion-content').style.maxHeight = '500px';
        }
      });
    }
  });
}
