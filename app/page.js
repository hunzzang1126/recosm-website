import Link from "next/link";
import Icon from "@/components/Icon";
import EmailForm from "@/components/EmailForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="home-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-overline reveal">Korean Clean Beauty</p>
            <h1 className="hero-title reveal delay-1">Re<em>:</em>define<br />your lashes.</h1>
            <p className="hero-description reveal delay-2">
              Clinically formulated with Acetyl Tetrapeptide-3. Prostaglandin-free. Made in Korea by Kolmar.
            </p>
            <div className="hero-cta-group reveal delay-3">
              <Link href="/product" className="btn btn-dark btn-lg">Discover</Link>
              <Link href="/science" className="btn btn-ghost">Our Science →</Link>
            </div>
          </div>
          <div className="hero-image reveal-right delay-2">
            <div className="img-placeholder" style={{ aspectRatio: "3/4", borderRadius: 12, maxWidth: 480, width: "100%" }}>
              <span>Product Hero Image</span>
            </div>
            <div className="hero-badge">
              <span className="dot"></span>
              Made in Korea
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="benefits-strip">
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

      {/* Product Highlight */}
      <section className="product-highlight" id="home-highlight">
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-image reveal-left">
              <div className="img-placeholder" style={{ aspectRatio: 1, borderRadius: 12 }}>
                <span>Product Close-up</span>
              </div>
            </div>
            <div className="highlight-content">
              <p className="text-overline highlight-overline reveal">The Science</p>
              <h2 className="heading-2 highlight-title reveal delay-1">Powered by peptides,<br />not side effects</h2>
              <p className="text-body-lg highlight-text reveal delay-2">
                Unlike prostaglandin-based serums that can cause irritation, discoloration, and orbital fat loss, Re:Cosm&apos;s formula uses Acetyl Tetrapeptide-3 (Capixyl™) to condition and care for lashes gently.
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
                  <div className="ingredient-desc">Pro-vitamin B5 for deep hydration &amp; flexibility</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Centella Asiatica</div>
                  <div className="ingredient-desc">Soothes &amp; protects the delicate lash line</div>
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
            <p className="section-overline reveal">How to Use</p>
            <h2 className="section-title reveal delay-1">Three simple steps</h2>
            <p className="section-desc reveal delay-2">Apply nightly for best results. Each tube lasts approximately 3 months.</p>
          </div>
          <div className="steps-grid">
            {[
              { n: 1, title: "Cleanse", desc: "Remove all makeup and ensure lashes are clean and dry." },
              { n: 2, title: "Apply", desc: "Use the rounded applicator tip to apply serum along the upper lash line." },
              { n: 3, title: "Brush", desc: "Use the spoolie brush to coat individual lashes from root to tip." },
            ].map((step) => (
              <div className={`step-card reveal delay-${step.n}`} key={step.n}>
                <div className="step-image">
                  <div className="img-placeholder" style={{ aspectRatio: 1, borderRadius: 12 }}>
                    <span>Step {step.n}</span>
                  </div>
                </div>
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
            <p className="section-overline reveal">Find Us in Toronto</p>
            <h2 className="section-title reveal delay-1">Stocked at Jacob &amp; Sebastian</h2>
            <p className="section-desc reveal delay-2">
              Re:Cosm is carried by Jacob &amp; Sebastian, Toronto&apos;s curated destination for niche and cult beauty.
            </p>
          </div>
          <div className="reviews-grid">
            <div className="review-card reveal delay-1">
              <div className="review-author">Queen West</div>
              <p className="review-text">622 Queen Street West, Toronto</p>
              <div className="review-meta">Boutique apothecary in the heart of Queen West</div>
            </div>
            <div className="review-card reveal delay-2">
              <div className="review-author">Financial District</div>
              <p className="review-text">Commerce Court Concourse, 199 Bay Street</p>
              <div className="review-meta">Weekday destination in downtown Toronto</div>
            </div>
            <div className="review-card reveal delay-3">
              <div className="review-author">Online</div>
              <p className="review-text">Launching November 2026 at recosm.co</p>
              <div className="review-meta">Free shipping across Canada — join the waitlist below</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="email-cta" id="home-cta">
        <div className="container">
          <p className="section-overline reveal" style={{ color: "rgba(255,255,255,0.7)" }}>Stay in the Loop</p>
          <h2 className="section-title reveal delay-1" style={{ color: "white" }}>Join the Re:Cosm community</h2>
          <p className="section-desc reveal delay-2" style={{ color: "rgba(255,255,255,0.8)" }}>
            Be the first to know about our launch, exclusive offers, and clean beauty insights.
          </p>
          <EmailForm className="email-form reveal delay-3" />
        </div>
      </section>
    </>
  );
}
