import Link from "next/link";
import Icon from "@/components/Icon";
import EmailForm from "@/components/EmailForm";
import TubeIllustration from "@/components/TubeIllustration";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="home-hero">
        <div className="hero-frame">
          <div className="hero-main">
            <div className="hero-content">
              <p className="hero-eyebrow reveal">Korean Clean Beauty · Toronto</p>
              <h1 className="hero-title">
                <span className="line reveal">Re<em>:</em>define</span>
                <span className="line reveal delay-1">your lashes.</span>
              </h1>
              <p className="hero-description reveal delay-2">
                A peptide lash serum with no prostaglandins — clinically minded care built on
                Acetyl Tetrapeptide-3, formulated and made in Korea by Kolmar.
              </p>
              <div className="hero-cta-group reveal delay-3">
                <Link href="/product" className="btn btn-dark btn-lg">Discover the Serum</Link>
                <Link href="/science" className="btn btn-ghost">Our Science</Link>
              </div>
            </div>
            <div className="hero-product reveal-right delay-2">
              <TubeIllustration ratio="3/4" />
              <div className="hero-product-caption">
                <span>Lash Conditioning Serum</span>
                <span>·</span>
                <span>10 mL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="benefits-strip" aria-label="Product assurances">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-item reveal delay-1">
              <div className="benefit-icon"><Icon name="shield" /></div>
              <span className="benefit-label">Prostaglandin-Free</span>
            </div>
            <div className="benefit-item reveal delay-2">
              <div className="benefit-icon"><Icon name="molecule" /></div>
              <span className="benefit-label">Peptide-Powered</span>
            </div>
            <div className="benefit-item reveal delay-3">
              <div className="benefit-icon"><Icon name="flag" /></div>
              <span className="benefit-label">Made in Korea</span>
            </div>
            <div className="benefit-item reveal delay-4">
              <div className="benefit-icon"><Icon name="leaf" /></div>
              <span className="benefit-label">Fragrance-Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* The formula */}
      <section className="product-highlight" id="home-highlight">
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-image reveal-left">
              <TubeIllustration ratio="4/5" />
            </div>
            <div className="highlight-content">
              <p className="text-overline highlight-overline reveal">The Formula</p>
              <h2 className="section-title highlight-title reveal delay-1" style={{ textAlign: "left" }}>
                Powered by peptides,<br />not side effects
              </h2>
              <p className="text-body-lg highlight-text reveal delay-2">
                Prostaglandin-based serums can cause irritation, iris discoloration, and orbital
                fat loss. Re:Cosm conditions lashes with Acetyl Tetrapeptide-3 (Capixyl™)
                instead — gentle enough for the lash line, refined enough to see.
              </p>
              <div className="ingredients-grid reveal delay-3">
                <div className="ingredient-card">
                  <div className="ingredient-name">Acetyl Tetrapeptide-3</div>
                  <div className="ingredient-desc">Conditions and fortifies the look of lashes at the lash line</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Biotin</div>
                  <div className="ingredient-desc">Essential B-vitamin, a building block of keratin-rich lashes</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Panthenol</div>
                  <div className="ingredient-desc">Pro-vitamin B5 for deep hydration and flexibility</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Centella Asiatica</div>
                  <div className="ingredient-desc">Soothes and protects the delicate lash line</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="how-to-use" id="home-howto">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">The Ritual</p>
            <h2 className="section-title reveal delay-1">Three simple steps</h2>
            <p className="section-desc reveal delay-2">
              Apply nightly for best results. Each tube lasts approximately three months.
            </p>
          </div>
          <div className="steps-grid">
            {[
              { n: "1", title: "Cleanse", desc: "Remove all makeup and ensure lashes are clean and dry." },
              { n: "2", title: "Apply", desc: "Use the rounded applicator tip to apply serum along the upper lash line." },
              { n: "3", title: "Brush", desc: "Use the spoolie brush to coat individual lashes from root to tip." },
            ].map((step, i) => (
              <div className={`step-card reveal delay-${i + 1}`} key={step.n}>
                <span className="step-number">{step.n}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Find Us */}
      <section className="reviews-section" id="home-stockists">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">Points of Sale</p>
            <h2 className="section-title reveal delay-1">Stocked at Jacob &amp; Sebastian</h2>
            <p className="section-desc reveal delay-2">
              Re:Cosm is carried by Jacob &amp; Sebastian, Toronto&apos;s curated destination for niche and cult beauty.
            </p>
          </div>
          <div className="reviews-grid">
            <div className="review-card reveal delay-1">
              <div className="review-author">Queen West</div>
              <p className="review-text">622 Queen Street West</p>
              <div className="review-meta">Boutique apothecary in the heart of Queen West</div>
            </div>
            <div className="review-card reveal delay-2">
              <div className="review-author">Financial District</div>
              <p className="review-text">Commerce Court, 199 Bay Street</p>
              <div className="review-meta">Weekday destination in downtown Toronto</div>
            </div>
            <div className="review-card reveal delay-3">
              <div className="review-author">Online</div>
              <p className="review-text">recosm.co — November 2026</p>
              <div className="review-meta">Free shipping across Canada — join the waitlist below</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="email-cta" id="home-cta">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">The Waitlist</p>
            <h2 className="section-title reveal delay-1">Be first in line</h2>
            <p className="section-desc reveal delay-2">
              Launch news, early access, and clean beauty insights. No noise.
            </p>
          </div>
          <EmailForm className="email-form reveal delay-3" buttonLabel="Join the waitlist" />
        </div>
      </section>
    </>
  );
}
