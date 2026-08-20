import Link from "next/link";

export const metadata = {
  title: "Prostaglandin-Free Lash Serums: What It Means & Why It Matters | Re:Cosm",
  description:
    "What prostaglandin analogs are, the documented side effects (iris darkening, fat loss, eyelid pigmentation), what Health Canada prohibits in cosmetics, and how to check any lash serum's ingredient list yourself.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prostaglandin-Free Lash Serums: What It Means & Why It Matters",
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  author: { "@type": "Organization", name: "Re:Cosm" },
  publisher: { "@type": "Organization", name: "Re:Cosm", url: "https://www.recosm.co" },
  mainEntityOfPage: "https://www.recosm.co/guides/prostaglandin-free-lash-serums",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Guides", item: "https://www.recosm.co/guides" },
    { "@type": "ListItem", position: 2, name: "Prostaglandin-Free Lash Serums", item: "https://www.recosm.co/guides/prostaglandin-free-lash-serums" },
  ],
};

export default function Page() {
  return (
    <div className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal"><Link href="/guides">Guides</Link></p>
          <h1 className="section-title reveal delay-1">Prostaglandin-free lash serums: what it means &amp; why it matters</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>
            If you&apos;ve searched for a lash serum recently, you&apos;ve probably seen the phrase &quot;prostaglandin-free.&quot; Here&apos;s what it actually means — and how to check any product yourself.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What are prostaglandin analogs?</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Prostaglandin analogs are synthetic compounds originally developed for glaucoma medication. Researchers noticed a side effect: patients using these eye drops grew longer, darker lashes. That discovery led to prescription lash treatments — and then to a wave of over-the-counter serums using related compounds such as <strong>isopropyl cloprostenate</strong>, often without clearly disclosing what they are.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>The documented side effects</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Because prostaglandin analogs work by mimicking hormone-like signaling, their effects aren&apos;t limited to lashes. Documented side effects include:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li><strong>Iris darkening</strong> — a gradual, potentially permanent change in eye color</li>
            <li><strong>Periorbital fat loss</strong> — a sunken, hollowed appearance around the eyes</li>
            <li><strong>Eyelid hyperpigmentation</strong> — darkening of the skin along the lash line</li>
            <li>Redness, itching, and irritation of the eye area</li>
          </ul>
          <p style={{ marginBottom: "var(--space-4)" }}>
            The European Commission&apos;s scientific committee reviewed isopropyl cloprostenate and related compounds and concluded that none of them could be considered safe for use in cosmetics intended to promote lash or brow growth.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What Health Canada says</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            In Canada, the rules are stricter than in the United States. <strong>Isopropyl cloprostenate is on Health Canada&apos;s Cosmetic Ingredient Hotlist as a prohibited substance</strong> — products containing it cannot legally be sold as cosmetics in Canada. Prescription prostaglandin treatments remain available, but only as drugs, under medical supervision. Some US products containing these compounds are still marketed online, which is why it pays to read labels yourself.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>How to check any lash serum in 30 seconds</h2>
          <ol style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li>Find the full ingredient (INCI) list — a trustworthy brand publishes it.</li>
            <li>Scan for anything ending in <strong>&quot;-prost&quot;</strong>: isopropyl cloprostenate, bimatoprost, dechloro dihydroxy difluoro ethylcloprostenolamide, and similar names.</li>
            <li>If you find one — that&apos;s a prostaglandin analog, whatever the front label says.</li>
            <li>If a brand doesn&apos;t publish its full ingredient list at all, treat that as an answer too.</li>
          </ol>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>The peptide alternative</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Peptide-based serums take a different approach: instead of hormone-like signaling, they condition the lash line with ingredients like <strong>Acetyl Tetrapeptide-3</strong> (part of the Capixyl™ complex), biotin, and panthenol — supporting the look of fuller, healthier lashes without the documented risks above. Results build more gradually, and the trade-off is exactly the point: no iris darkening, no fat loss, no eyelid pigmentation.
          </p>
          <p style={{ marginBottom: "var(--space-4)" }}>
            You can read our complete formula on the <Link href="/product">product page</Link> — every ingredient, published in full. That&apos;s the standard we think every brand should meet.
          </p>

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Re:Cosm Lash Conditioning Serum</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              Prostaglandin-free. Fragrance-free. Full ingredient list published. Made in Korea by Kolmar.
            </p>
            <Link href="/product" className="btn btn-primary">See the formula</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
