import Link from "next/link";
import { notFound } from "next/navigation";
import { INGREDIENTS, SITE, HUB_PATH, HUB_MODIFIED, ingredientPath } from "@/lib/ingredients";
import { GuideByline, GuideSources } from "@/components/GuideMeta";

export const dynamicParams = false;

export function generateStaticParams() {
  return INGREDIENTS.map((i) => ({ slug: i.slug }));
}

function find(slug) {
  return INGREDIENTS.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ing = find(slug);
  if (!ing) return {};
  const url = ingredientPath(ing.slug);
  return {
    title: { absolute: ing.title },
    description: ing.description,
    alternates: { canonical: url },
    openGraph: { title: ing.title, description: ing.description, url, type: "article" },
  };
}

export default async function IngredientPage({ params }) {
  const { slug } = await params;
  const ing = find(slug);
  if (!ing) notFound();

  const url = `${SITE}${ingredientPath(ing.slug)}`;
  const others = INGREDIENTS.filter((i) => i.slug !== ing.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: ing.title.replace(/ \| Re:Cosm$/, ""),
        description: ing.description,
        datePublished: HUB_MODIFIED,
        dateModified: HUB_MODIFIED,
        author: { "@type": "Organization", name: "Re:Cosm", url: SITE },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntityOfPage: url,
        about: { "@type": "Thing", name: ing.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Lash Serum Ingredients", item: `${SITE}${HUB_PATH}` },
          { "@type": "ListItem", position: 3, name: ing.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ing.faq.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="faq-page guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal">
            <Link href={HUB_PATH}>Lash serum ingredients</Link>
          </p>
          <h1 className="section-title reveal delay-1">{ing.name}</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>
            {ing.aka} · {ing.role}
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <GuideByline />
          <p style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-10)" }}>
            <strong>In short:</strong> {ing.summary}
          </p>

          {ing.sections.map((s) => (
            <section key={s.h2} style={{ marginBottom: "var(--space-10)" }}>
              <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>{s.h2}</h2>
              {s.body.map((p, i) => (
                <p key={i} style={{ marginBottom: "var(--space-4)" }}>{p}</p>
              ))}
            </section>
          ))}

          <section style={{ marginBottom: "var(--space-10)" }}>
            <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>Where it sits in the Re:Cosm formula</h2>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Re:Cosm Lash Conditioning Serum has 29 ingredients, and this page covers one part of that formula: a prostaglandin-free, fragrance-free and
              oil-free peptide serum made in Korea by Kolmar Korea. Every ingredient and the job it does is decoded on the{" "}
              <Link href={HUB_PATH}>lash serum ingredients guide</Link>, and the full label is on the{" "}
              <Link href="/product">product page</Link>.
            </p>
          </section>

          <section style={{ marginBottom: "var(--space-10)" }}>
            <h2 className="heading-3" style={{ marginBottom: "var(--space-6)" }}>Common questions</h2>
            {ing.faq.map(([q, a]) => (
              <div key={q} style={{ marginBottom: "var(--space-6)" }}>
                <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "var(--space-10)" }}>
            <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>Other ingredients in the formula</h2>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={ingredientPath(o.slug)}>{o.name}</Link>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "var(--space-4)" }}>
              Also worth reading: <Link href="/guides/lash-serum-ingredients-to-avoid">lash serum ingredients to avoid</Link> and{" "}
              <Link href="/guides/prostaglandin-free-lash-serums">what prostaglandin-free means</Link>.
            </p>
          </section>

          <GuideSources />

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>See the whole formula</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              Prostaglandin-free. Fragrance-free. Oil-free. Every ingredient published.
            </p>
            <Link href="/product" className="btn btn-primary">View Lash Conditioning Serum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
