import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/ingredients";
import { GuideByline, GuideSources } from "@/components/GuideMeta";

// Static guide folders (prostaglandin-free-lash-serums, etc.) take precedence
// over this segment; it only renders the slugs listed in lib/guides.js.
export const dynamicParams = false;
const PUBLISHED = "2026-09-23";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ guide: g.slug }));
}

const find = (slug) => GUIDES.find((g) => g.slug === slug);

export async function generateMetadata({ params }) {
  const { guide } = await params;
  const g = find(guide);
  if (!g) return {};
  const path = `/guides/${g.slug}`;
  return {
    title: { absolute: g.title },
    description: g.description,
    alternates: { canonical: path },
    openGraph: { title: g.title, description: g.description, url: path, type: "article" },
  };
}

export default async function GuidePage({ params }) {
  const { guide } = await params;
  const g = find(guide);
  if (!g) notFound();
  const url = `${SITE}/guides/${g.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: g.h1,
        description: g.description,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: { "@type": "Organization", name: "Re:Cosm", url: SITE },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: g.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: g.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };

  return (
    <div className="faq-page guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title reveal delay-1">{g.h1}</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>{g.intro}</p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <GuideByline />
          {g.sections.map((s) => (
            <section key={s.h2} style={{ marginBottom: "var(--space-10)" }}>
              <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>{s.h2}</h2>
              {(s.body || []).map((p, i) => (
                <p key={i} style={{ marginBottom: "var(--space-4)" }}>{p}</p>
              ))}
              {s.steps && (
                <ol style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
                  {s.steps.map((t) => <li key={t}>{t}</li>)}
                </ol>
              )}
              {s.links && (
                <p style={{ fontSize: 15 }}>
                  Read more:{" "}
                  {s.links.map(([label, href], i) => (
                    <span key={href}>{i > 0 && ", "}<Link href={href}>{label}</Link></span>
                  ))}
                </p>
              )}
            </section>
          ))}

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-6)" }}>Common questions</h2>
          {g.faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: "var(--space-6)" }}>
              <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>{q}</h3>
              <p>{a}</p>
            </div>
          ))}

          <p style={{ marginTop: "var(--space-8)" }}>
            More guides: <Link href="/guides/prostaglandin-free-lash-serums">prostaglandin-free lash serums</Link>,{" "}
            <Link href="/guides/lash-serum-ingredients">lash serum ingredients</Link>,{" "}
            <Link href="/guides/lash-serums-with-extensions">lash serum with extensions</Link>.
          </p>

          <GuideSources keys={g.sources} />

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Re:Cosm Lash Conditioning Serum</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              Peptide-based. Prostaglandin-free, fragrance-free and oil-free. Made in Korea by Kolmar Korea.
            </p>
            <Link href="/product" className="btn btn-primary">See the serum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
