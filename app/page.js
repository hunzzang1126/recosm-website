import Link from "next/link";
import EmailForm from "@/components/EmailForm";
import TubeIllustration from "@/components/TubeIllustration";

export default function HomePage() {
  return (
    <>
      {/* Hero — the front panel of the carton, at architectural scale */}
      <section className="hero" id="home-hero">
        <div className="hero-frame">
          <span className="crop-mark tl" aria-hidden="true"></span>
          <span className="crop-mark tr" aria-hidden="true"></span>
          <span className="crop-mark bl" aria-hidden="true"></span>
          <span className="crop-mark br" aria-hidden="true"></span>

          <div className="hero-specline top reveal">
            <span>Lash Conditioning Serum</span>
            <span className="fr">Sérum revitalisant pour les cils</span>
            <span>Net. 10 mL</span>
          </div>

          <div className="hero-main">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="line reveal">Re<em>:</em>define</span>
                <span className="line reveal delay-1">your lashes<em>.</em></span>
              </h1>
              <p className="hero-description reveal delay-2">
                One peptide serum, zero prostaglandins. Clinically minded lash care built on
                Acetyl Tetrapeptide-3 — formulated and made in Korea by Kolmar.
              </p>
              <div className="hero-cta-group reveal delay-3">
                <Link href="/product" className="btn btn-primary btn-lg">Discover the serum</Link>
                <Link href="/science" className="btn btn-ghost">Our science</Link>
              </div>
            </div>
            <div className="hero-product reveal-right delay-2">
              <TubeIllustration ratio="3/4" />
              <div className="hero-product-caption">
                <span>Made in Korea</span>
                <span>Matt · 19 × 116 mm</span>
              </div>
            </div>
          </div>

          <div className="hero-specline bottom">
            <span>Prostaglandin-free</span>
            <span className="fr">Sans prostaglandine</span>
            <span>Toronto, CA</span>
          </div>
        </div>
      </section>

      {/* Spec marquee */}
      <section className="spec-marquee" aria-label="Product highlights">
        <div className="marquee-track">
          <span className="marquee-run">
            <span>Prostaglandin-free</span><em>:</em>
            <span>Acetyl Tetrapeptide-3</span><em>:</em>
            <span>Made in Korea by Kolmar</span><em>:</em>
            <span>Fragrance-free</span><em>:</em>
            <span>Net. 10 mL</span><em>:</em>
          </span>
          <span className="marquee-run" aria-hidden="true">
            <span>Prostaglandin-free</span><em>:</em>
            <span>Acetyl Tetrapeptide-3</span><em>:</em>
            <span>Made in Korea by Kolmar</span><em>:</em>
            <span>Fragrance-free</span><em>:</em>
            <span>Net. 10 mL</span><em>:</em>
          </span>
        </div>
      </section>

      {/* The formula — spec sheet */}
      <section className="product-highlight" id="home-highlight">
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-image reveal-left">
              <TubeIllustration ratio="4/5" />
            </div>
            <div className="highlight-content">
              <p className="text-overline highlight-overline reveal">
                The formula <span className="fr">/ La formule</span>
              </p>
              <h2 className="section-title highlight-title reveal delay-1">
                Powered by peptides,<br />not side effects<em>.</em>
              </h2>
              <p className="text-body-lg highlight-text reveal delay-2">
                Prostaglandin-based serums can cause irritation, iris discoloration, and orbital
                fat loss. Re:Cosm conditions lashes with Acetyl Tetrapeptide-3 (Capixyl™)
                instead — gentle enough for the lash line, serious enough to show.
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
                <div className="ingredient-card">
                  <div className="ingredient-name">Hyaluronate</div>
                  <div className="ingredient-desc">Draws and holds moisture where lashes need it</div>
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
            <p className="section-overline reveal">
              Directions for use <span className="fr">/ Mode d&apos;emploi</span>
            </p>
            <h2 className="section-title reveal delay-1">Three simple steps<em>.</em></h2>
            <p className="section-desc reveal delay-2">
              Apply nightly for best results. Each tube lasts approximately 3 months.
            </p>
          </div>
          <div className="steps-grid">
            {[
              { n: "01", title: "Cleanse", desc: "Remove all makeup and ensure lashes are clean and dry." },
              { n: "02", title: "Apply", desc: "Use the rounded applicator tip to apply serum along the upper lash line." },
              { n: "03", title: "Brush", desc: "Use the spoolie brush to coat individual lashes from root to tip." },
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
            <p className="section-overline reveal">
              Where to find us <span className="fr">/ Points de vente</span>
            </p>
            <h2 className="section-title reveal delay-1">Stocked at Jacob &amp; Sebastian<em>.</em></h2>
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

      {/* Email CTA — the orange panel */}
      <section className="email-cta" id="home-cta">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">
              The waitlist <span className="fr">/ La liste d&apos;attente</span>
            </p>
            <h2 className="section-title reveal delay-1">Be first in line.</h2>
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
