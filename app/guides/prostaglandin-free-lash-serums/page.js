import Link from "next/link";
import { GuideByline, GuideSources } from "@/components/GuideMeta";
import { ingredientPath } from "@/lib/ingredients";

export const metadata = {
  title: "Prostaglandin-Free Lash Serums: What It Means & Why It Matters | Re:Cosm",
  description:
    "What prostaglandin analogs are, their documented side effects, why isopropyl cloprostenate is banned in Canadian cosmetics, and how to check any label.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prostaglandin-Free Lash Serums: What It Means & Why It Matters",
  datePublished: "2026-08-20",
  dateModified: "2026-09-23",
  author: { "@type": "Organization", name: "Re:Cosm" },
  publisher: { "@type": "Organization", name: "Re:Cosm", url: "https://www.recosm.co" },
  mainEntityOfPage: "https://www.recosm.co/guides/prostaglandin-free-lash-serums",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.recosm.co/" },
    { "@type": "ListItem", position: 2, name: "Prostaglandin-Free Lash Serums", item: "https://www.recosm.co/guides/prostaglandin-free-lash-serums" },
  ],
};

const FAQ = [
  ["What does prostaglandin-free mean on a lash serum?", "It means the serum contains no prostaglandin analogs, the hormone-like compounds from glaucoma medication that are linked to iris darkening, fat loss around the eyes and eyelid darkening. Always confirm on the full ingredient list rather than the front label."],
  ["Are prostaglandin lash serums banned in Canada?", "Isopropyl cloprostenate, the most common one in cosmetic serums, is on Health Canada's Cosmetic Ingredient Hotlist as prohibited, so products containing it cannot be sold as cosmetics in Canada. Prescription prostaglandin treatments exist as drugs."],
  ["Do prostaglandin-free lash serums work?", "They work differently. Peptide serums condition lashes so they look fuller and healthier and break less, building gradually over four to six weeks. They do not change the growth cycle the way prostaglandin drugs do, which is also why they avoid those side effects."],
  ["What is the best prostaglandin-free lash serum ingredient?", "Look for a peptide such as Acetyl Tetrapeptide-3 alongside humectants like panthenol and hyaluronic acid, in a formula that is also fragrance-free."],
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function Page() {
  return (
    <div className="faq-page guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title">Prostaglandin-free lash serums: what it means &amp; why it matters</h1>
          <p className="section-desc" style={{ marginLeft: 0 }}>
            If you&apos;ve searched for a lash serum recently, you&apos;ve probably seen the phrase &quot;prostaglandin-free.&quot; Here&apos;s what it actually means, and how to check any product yourself.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <GuideByline />
          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What are prostaglandin analogs?</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Prostaglandin analogs are synthetic compounds originally developed for glaucoma medication. Researchers noticed a side effect: patients using these eye drops grew longer, darker lashes. That discovery led to prescription lash treatments, and then to a wave of over-the-counter serums using related compounds such as <strong>isopropyl cloprostenate</strong>, often without clearly disclosing what they are.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>The documented side effects</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Because prostaglandin analogs work by mimicking hormone-like signaling, their effects aren&apos;t limited to lashes. Documented side effects include:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li><strong>Iris darkening:</strong> a gradual, potentially permanent change in eye color</li>
            <li><strong>Periorbital fat loss:</strong> a sunken, hollowed appearance around the eyes</li>
            <li><strong>Eyelid hyperpigmentation:</strong> darkening of the skin along the lash line</li>
            <li>Redness, itching, and irritation of the eye area</li>
          </ul>
          <p style={{ marginBottom: "var(--space-4)" }}>
            The European Commission&apos;s scientific committee reviewed isopropyl cloprostenate and related compounds and concluded that none of them could be considered safe for use in cosmetics intended to promote lash or brow growth.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What Health Canada says</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            In Canada, the rules are stricter than in the United States. <strong>Isopropyl cloprostenate is on Health Canada&apos;s Cosmetic Ingredient Hotlist as a prohibited substance</strong>. Products containing it cannot legally be sold as cosmetics in Canada. Prescription prostaglandin treatments remain available, but only as drugs, under medical supervision. Some US products containing these compounds are still marketed online, which is why it pays to read labels yourself.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>How to check any lash serum in 30 seconds</h2>
          <ol style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li>Find the full ingredient (INCI) list. A trustworthy brand publishes it.</li>
            <li>Scan for anything ending in <strong>&quot;-prost&quot;</strong>: isopropyl cloprostenate, bimatoprost, dechloro dihydroxy difluoro ethylcloprostenolamide, and similar names. The full table of names is in <Link href="/guides/lash-serum-ingredients-to-avoid">lash serum ingredients to avoid</Link>.</li>
            <li>If you find one, that&apos;s a prostaglandin analog, whatever the front label says.</li>
            <li>If a brand doesn&apos;t publish its full ingredient list at all, treat that as an answer too.</li>
          </ol>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>The peptide alternative</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Peptide-based serums take a different approach: instead of hormone-like signaling, they condition the lash line with ingredients like <Link href={ingredientPath("acetyl-tetrapeptide-3")}><strong>Acetyl Tetrapeptide-3</strong></Link> (part of the Capixyl™ complex), <Link href={ingredientPath("biotin")}>biotin</Link>, and <Link href={ingredientPath("panthenol")}>panthenol</Link>, supporting the look of fuller, healthier lashes without the documented risks above. Results build more gradually, and the trade-off is exactly the point: no iris darkening, no fat loss, no eyelid pigmentation.
          </p>
          <p style={{ marginBottom: "var(--space-4)" }}>
            You can read our complete formula on the <Link href="/product">product page</Link>: every ingredient, published in full, and each one explained in our <Link href="/guides/lash-serum-ingredients">lash serum ingredients guide</Link>. That&apos;s the standard we think every brand should meet.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>Buying a lash serum in Canada</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            A serum sold as a cosmetic in Canada should not contain isopropyl cloprostenate. The risk is mostly online: marketplaces and cross-border sellers list products made for other markets, and the listing rarely shows the full label. Before you buy, ask for the INCI list, check it against the names above, and prefer brands that sell through Canadian retailers and publish their formula openly. A cosmetic that promises measurable lash growth is also a warning sign, since growth is a drug claim, not a cosmetic one.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-6)" }}>Common questions</h2>
          {FAQ.map(([q, a]) => (
            <div key={q} style={{ marginBottom: "var(--space-6)" }}>
              <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>{q}</h3>
              <p>{a}</p>
            </div>
          ))}

          <p style={{ marginTop: "var(--space-8)" }}>
            More guides: <Link href="/guides/lash-serum-after-lash-lift">lash serum after a lash lift</Link>,{" "}
            <Link href="/guides/lash-serum-for-sensitive-eyes">lash serum for sensitive eyes</Link>,{" "}
            <Link href="/guides/korean-lash-serum">Korean lash serums</Link>.
          </p>

          <GuideSources keys={["hotlist", "sccs"]} />

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
