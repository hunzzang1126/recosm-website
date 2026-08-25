import Link from "next/link";

export const metadata = {
  title: "Lash Serum Ingredients, Explained — Capixyl, Biotin, Panthenol | Re:Cosm",
  description:
    "What Acetyl Tetrapeptide-3 (Capixyl™), biotin, panthenol, centella asiatica, and hyaluronic acid actually do in a lash serum — explained in plain language, with the full Re:Cosm ingredient list.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lash Serum Ingredients, Explained",
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  author: { "@type": "Organization", name: "Re:Cosm" },
  publisher: { "@type": "Organization", name: "Re:Cosm", url: "https://www.recosm.co" },
  mainEntityOfPage: "https://www.recosm.co/guides/lash-serum-ingredients",
};

const INGREDIENTS = [
  {
    name: "Acetyl Tetrapeptide-3 (Capixyl™)",
    what: "A biomimetic peptide — a small chain of amino acids designed to mirror ones your body already uses.",
    why: "Paired with red clover (Trifolium pratense) extract in the Capixyl™ complex, it conditions the lash line and supports the look of fuller, denser lashes. It's the centerpiece of the prostaglandin-free approach.",
  },
  {
    name: "Biotin (Vitamin B7)",
    what: "An essential water-soluble B-vitamin, sometimes called vitamin H.",
    why: "Lashes are made of keratin, and biotin is a natural building block in keratin formation — supporting stronger-looking, more resilient lashes.",
  },
  {
    name: "Panthenol (Pro-Vitamin B5)",
    what: "A humectant that converts to vitamin B5 on contact with skin and hair.",
    why: "It penetrates the lash cuticle to deliver hydration, improving flexibility and reducing the brittleness that leads to breakage.",
  },
  {
    name: "Centella Asiatica Extract",
    what: "A botanical long used in Korean skincare, also known as cica or tiger grass.",
    why: "The skin along your lash line is some of the thinnest on your body. Centella calms and soothes it, keeping the area comfortable for nightly use.",
  },
  {
    name: "Hydroxypropyl Trimonium Hyaluronate",
    what: "A modified form of hyaluronic acid engineered to bind to hair fibers rather than rinse away.",
    why: "It locks moisture onto the lash itself and forms a light protective film against daily environmental stress.",
  },
  {
    name: "Houttuynia Cordata & Licorice Root (Dipotassium Glycyrrhizate)",
    what: "Two soothing botanicals common in K-beauty formulas.",
    why: "They comfort the delicate periorbital skin and help reduce the look of redness — part of why the formula suits sensitive eyes.",
  },
];

export default function Page() {
  return (
    <div className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title reveal delay-1">Lash serum ingredients, explained</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>
            An ingredient list shouldn&apos;t require a chemistry degree. Here&apos;s what each key ingredient in a peptide lash serum actually does — in plain language.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} style={{ marginBottom: "var(--space-10)" }}>
              <h2 className="heading-4" style={{ marginBottom: "var(--space-3)" }}>{ing.name}</h2>
              <p style={{ marginBottom: "var(--space-2)" }}><strong>What it is:</strong> {ing.what}</p>
              <p><strong>Why it&apos;s here:</strong> {ing.why}</p>
            </div>
          ))}

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What&apos;s deliberately not here</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            No prostaglandin analogs (see <Link href="/guides/prostaglandin-free-lash-serums">our guide on why</Link>), no fragrance, no parabens. For the delicate eye area, what a formula leaves out matters as much as what it puts in.
          </p>

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>See every ingredient</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              The complete INCI list for Re:Cosm Lash Conditioning Serum is published on the product page.
            </p>
            <Link href="/product" className="btn btn-primary">View the full formula</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
