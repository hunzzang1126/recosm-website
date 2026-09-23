import Link from "next/link";
import { INGREDIENTS, INCI, SITE, HUB_PATH, HUB_MODIFIED, ingredientPath } from "@/lib/ingredients";

export const metadata = {
  title: "Lash Serum Ingredients, Explained: Capixyl, Biotin, Panthenol | Re:Cosm",
  description:
    "What Acetyl Tetrapeptide-3 (Capixyl™), biotin, panthenol, centella asiatica, and hyaluronic acid actually do in a lash serum, explained in plain language, with the full Re:Cosm ingredient list.",
};

const FAQ = [
  ["What ingredients should a good lash serum have?", "Look for conditioning ingredients with a clear role: a peptide such as Acetyl Tetrapeptide-3, humectants such as panthenol and hyaluronic acid, and soothing botanicals for the lash line. Just as important is what is missing: no prostaglandin analogs, no fragrance, and no oils if you wear extensions."],
  ["How do I read a lash serum ingredient list?", "Ingredients above about one percent are listed from highest to lowest concentration. Below one percent they can appear in any order, which is why active peptides usually sit near the end. A brand that does not publish its full INCI list is worth avoiding."],
  ["Which lash serum ingredients are prostaglandins?", "Names ending in -prost or containing prostenol or cloprostenate, such as isopropyl cloprostenate, bimatoprost and dechloro dihydroxy difluoro ethylcloprostenolamide. Isopropyl cloprostenate is prohibited in cosmetics sold in Canada."],
  ["Are peptide lash serums safe?", "Peptide serums do not carry the documented side effects of prostaglandin analogs, such as iris darkening or fat loss around the eyes. As with any eye area product, stop use if you notice irritation."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Lash Serum Ingredients, Explained",
      datePublished: "2026-08-20",
      dateModified: HUB_MODIFIED,
      author: { "@type": "Organization", name: "Re:Cosm", url: SITE },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: `${SITE}${HUB_PATH}`,
      hasPart: INGREDIENTS.map((i) => ({ "@type": "WebPage", name: i.name, url: `${SITE}${ingredientPath(i.slug)}` })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Lash Serum Ingredients", item: `${SITE}${HUB_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

export default function Page() {
  return (
    <div className="faq-page guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title reveal delay-1">Lash serum ingredients, explained</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>
            An ingredient list shouldn&apos;t require a chemistry degree. Here&apos;s what each key ingredient in a peptide lash serum actually does, in plain language, followed by every ingredient on our label.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <h2 className="heading-3" style={{ marginBottom: "var(--space-6)" }}>The key ingredients</h2>
          {INGREDIENTS.map((ing) => (
            <div key={ing.slug} style={{ marginBottom: "var(--space-10)" }}>
              <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>
                <Link href={ingredientPath(ing.slug)}>{ing.name}</Link>
              </h3>
              <p style={{ marginBottom: "var(--space-2)", color: "var(--color-text-secondary)" }}>{ing.aka} · {ing.role}</p>
              <p style={{ marginBottom: "var(--space-2)" }}>{ing.summary}</p>
              <p><Link href={ingredientPath(ing.slug)}>Read the full {ing.name.split(" (")[0]} guide</Link></p>
            </div>
          ))}

          <h2 className="heading-3" style={{ margin: "var(--space-12) 0 var(--space-4)" }}>Every ingredient on the label, decoded</h2>
          <p style={{ marginBottom: "var(--space-6)" }}>
            This is the complete INCI list of Re:Cosm Lash Conditioning Serum in label order. Ingredients above about one
            percent are listed by concentration. Below that they can appear in any order, which is why the peptide complex
            sits at the end.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "var(--space-10)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "2px solid var(--color-border, #E9E4DD)" }}>Ingredient</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "2px solid var(--color-border, #E9E4DD)" }}>What it does</th>
                </tr>
              </thead>
              <tbody>
                {INCI.map(([name, job, slug]) => (
                  <tr key={name}>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--color-border, #E9E4DD)", verticalAlign: "top", fontWeight: 600 }}>
                      {slug ? <Link href={ingredientPath(slug)}>{name}</Link> : name}
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--color-border, #E9E4DD)", verticalAlign: "top" }}>{job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What&apos;s deliberately not here</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            No prostaglandin analogs (see <Link href="/guides/prostaglandin-free-lash-serums">our guide on why</Link>), no
            fragrance, no parabens, no oils. For the delicate eye area, what a formula leaves out matters as much as what it
            puts in. The full list of names to watch for is in{" "}
            <Link href="/guides/lash-serum-ingredients-to-avoid">lash serum ingredients to avoid</Link>.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-6)" }}>Common questions</h2>
          {FAQ.map(([q, a]) => (
            <div key={q} style={{ marginBottom: "var(--space-6)" }}>
              <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>{q}</h3>
              <p>{a}</p>
            </div>
          ))}

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
