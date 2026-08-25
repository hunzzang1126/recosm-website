import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Our Science — Re:Cosm | Peptides vs. Prostaglandins in Lash Serums",
  description:
    "Why Re:Cosm chose peptides over prostaglandins: the science behind Capixyl™, Biotin, Panthenol, and Centella Asiatica — manufactured by Kolmar Korea, compliant with Health Canada cosmetic regulations.",
};

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="science-hero">
        <div className="container container-narrow">
          <p className="section-overline reveal">Our Science</p>
          <h1 className="section-title reveal delay-1" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Korean beauty science<br />meets Canadian standards
          </h1>
          <p className="section-desc reveal delay-2">
            We believe what goes near your eyes should be held to the highest standard. That&apos;s why we chose peptides over prostaglandins, and Kolmar Korea over shortcuts.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="science-section section-white">
        <div className="container">
          <div className="science-grid">
            <div className="science-image reveal-left reveal-mask reveal">
              <Image
                src="/images/serum-v2.jpg"
                alt="Portrait highlighting healthy natural lashes"
                width={900}
                height={1125}
                sizes="(max-width: 880px) 90vw, 560px"
                style={{ objectPosition: "50% 24%" }}
              />
            </div>
            <div className="science-content reveal-right">
              <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>The Story</p>
              <h2 className="heading-3">Born from a question:<br />why compromise?</h2>
              <p>
                Most lash serums on the market rely on prostaglandin analogs — synthetic compounds originally developed for glaucoma treatment. They come with well-documented side effects: iris darkening, periorbital fat loss, and eyelid pigmentation.
              </p>
              <p>
                Re:Cosm was founded on a simple premise: you shouldn&apos;t have to choose between beautiful-looking lashes and safety. By combining Korean cosmetic innovation with Canadian regulatory standards, we created a lash conditioning serum built on peptide science — without the trade-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kolmar Korea */}
      <section className="science-section section-warm">
        <div className="container">
          <div className="science-grid">
            <div className="science-content reveal-left" style={{ order: 1 }}>
              <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>Manufacturing Excellence</p>
              <h2 className="heading-3">Made by Kolmar Korea</h2>
              <p>
                Our serum is manufactured by Kolmar Korea, one of the world&apos;s largest and most respected cosmetic manufacturers. With over 30 years of experience and clients ranging from global luxury brands to innovative K-beauty startups, Kolmar&apos;s GMP-certified facilities represent the gold standard in cosmetic manufacturing.
              </p>
              <p>
                Every batch is produced under strict quality control protocols, ensuring consistency, purity, and safety in every tube of Re:Cosm Lash Conditioning Serum.
              </p>
              <div style={{ display: "flex", gap: "var(--space-6)", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
                {[
                  { big: "30+", small: "Years Experience" },
                  { big: "GMP", small: "Certified" },
                  { big: "ISO", small: "22716 Compliant" },
                ].map((stat) => (
                  <div style={{ textAlign: "center" }} key={stat.big}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--font-weight-bold)", color: "var(--color-primary)" }}>{stat.big}</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.small}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="science-image reveal-right reveal-mask reveal" style={{ order: 2 }}>
              <Image
                src="/images/gallery-v2.jpg"
                alt="Smiling woman holding a bright orange book in a cream studio"
                width={880}
                height={1170}
                sizes="(max-width: 880px) 90vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Deep Dive */}
      <section className="ingredients-deep">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">Hero Ingredients</p>
            <h2 className="section-title reveal delay-1">What&apos;s inside</h2>
            <p className="section-desc reveal delay-2">Every ingredient is chosen with purpose. Here&apos;s the science behind our formula.</p>
          </div>
          <div className="ingredient-detail">
            {[
              {
                icon: "Ac",
                name: "Acetyl Tetrapeptide-3",
                sci: "Capixyl™ Complex",
                desc: "A biomimetic peptide complex, clinically studied by its developers for hair and lash conditioning. Paired with red clover extract, it conditions the lash line and supports the look of fuller, denser lashes.",
                delay: 1,
              },
              {
                icon: "B7",
                name: "Biotin",
                sci: "Vitamin B7 / Vitamin H",
                desc: "An essential water-soluble B-vitamin and a natural building block of keratin — the primary structural protein of lashes. Supports stronger-looking, more resilient lashes.",
                delay: 2,
              },
              {
                icon: "B5",
                name: "Panthenol",
                sci: "Pro-Vitamin B5",
                desc: "A powerful humectant that penetrates the lash cuticle to deliver deep hydration. Improves lash flexibility, reduces brittleness, and creates a natural, healthy sheen.",
                delay: 3,
              },
              {
                icon: "Ca",
                name: "Centella Asiatica",
                sci: "Tiger Grass Extract",
                desc: "A time-honored botanical in Korean skincare, known for its soothing properties. Calms the delicate lash line and supports a healthy-looking lash environment.",
                delay: 4,
              },
              {
                icon: "Ha",
                name: "Hyaluronic Acid",
                sci: "Hydroxypropyl Trimonium Hyaluronate",
                desc: "A modified form of HA that binds to lash fibers, locking in moisture. Creates a protective film that shields lashes from environmental stress.",
                delay: 5,
              },
              {
                icon: "Gc",
                name: "Glycyrrhizate",
                sci: "Dipotassium Glycyrrhizate",
                desc: "Derived from licorice root, this soothing compound comforts the sensitive periorbital skin and helps reduce the look of redness around the lash line.",
                delay: 6,
              },
            ].map((ing) => (
              <div className={`ingredient-detail-card reveal delay-${ing.delay}`} key={ing.name}>
                <div className="ingredient-icon">{ing.icon}</div>
                <h4>{ing.name}</h4>
                <p className="ingredient-scientific">{ing.sci}</p>
                <p>{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Leave Out */}
      <section className="leave-out">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">Clean Commitment</p>
            <h2 className="section-title reveal delay-1">What we leave out</h2>
            <p className="section-desc reveal delay-2">We believe in transparency. Here&apos;s what you&apos;ll never find in our formula — and why.</p>
          </div>
          <div className="leave-out-grid">
            <div className="leave-out-card reveal delay-1">
              <div className="leave-out-icon"><Icon name="noSign" /></div>
              <h4>No Prostaglandins</h4>
              <p>Prostaglandin analogs (bimatoprost, isopropyl cloprostenate) can cause iris darkening, fat atrophy around the eyes, and permanent pigmentation changes. We use peptides instead.</p>
            </div>
            <div className="leave-out-card reveal delay-2">
              <div className="leave-out-icon"><Icon name="noSign" /></div>
              <h4>No Fragrance</h4>
              <p>Synthetic fragrances are among the top sensitizers for the delicate eye area. Our formula is 100% fragrance-free for maximum comfort.</p>
            </div>
            <div className="leave-out-card reveal delay-3">
              <div className="leave-out-icon"><Icon name="noSign" /></div>
              <h4>No Parabens</h4>
              <p>We use modern, gentle preservative systems instead of parabens. Our formula meets the strictest international cosmetic safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peptide vs Prostaglandin */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <p className="section-overline reveal">The Difference</p>
            <h2 className="section-title reveal delay-1">Peptide-based vs. Prostaglandin-based</h2>
            <p className="section-desc reveal delay-2">Not all lash serums are created equal. Here&apos;s how the two approaches compare.</p>
          </div>
          <div className="reveal delay-3" style={{ overflowX: "auto" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight-col">Peptide-Based (Re:Cosm)</th>
                  <th>Prostaglandin-Based</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Approach</td>
                  <td className="highlight-col">Conditions &amp; nourishes lashes</td>
                  <td>Mimics hormonal signaling</td>
                </tr>
                <tr>
                  <td>Iris Color Change Risk</td>
                  <td className="highlight-col"><span className="check">✓ No risk</span></td>
                  <td><span className="cross">✗ Documented risk</span></td>
                </tr>
                <tr>
                  <td>Periorbital Fat Loss</td>
                  <td className="highlight-col"><span className="check">✓ No risk</span></td>
                  <td><span className="cross">✗ Documented risk</span></td>
                </tr>
                <tr>
                  <td>Eyelid Darkening</td>
                  <td className="highlight-col"><span className="check">✓ No risk</span></td>
                  <td><span className="cross">✗ Common side effect</span></td>
                </tr>
                <tr>
                  <td>Suitable for Sensitive Eyes</td>
                  <td className="highlight-col"><span className="check">✓ Yes</span></td>
                  <td><span className="cross">✗ May cause irritation</span></td>
                </tr>
                <tr>
                  <td>Lash Extension Safe</td>
                  <td className="highlight-col"><span className="check">✓ Yes</span></td>
                  <td>Varies by product</td>
                </tr>
                <tr>
                  <td>Allowed in Canadian Cosmetics</td>
                  <td className="highlight-col"><span className="check">✓ Yes</span></td>
                  <td><span className="cross">✗ Key analogs prohibited</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="science-section">
        <div className="container container-narrow text-center">
          <p className="section-overline reveal">Compliance</p>
          <h2 className="section-title reveal delay-1">Health Canada compliant</h2>
          <p className="section-desc reveal delay-2">
            Re:Cosm Lash Conditioning Serum is formulated in compliance with Health Canada&apos;s Cosmetic Regulations. All labeling is bilingual (English/French) as required by the Consumer Packaging and Labelling Act. Our product is classified as a cosmetic, not a drug, and does not require a Drug Identification Number (DIN).
          </p>
        </div>
      </section>
    </>
  );
}
