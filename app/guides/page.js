import Link from "next/link";

export const metadata = {
  title: "Lash Care Guides — Re:Cosm | Ingredients, Safety & How-Tos",
  description:
    "Plain-language guides to lash serums: what prostaglandin-free means, how to read an ingredient list, and how to care for lashes with extensions or lifts.",
};

const GUIDES = [
  {
    slug: "prostaglandin-free-lash-serums",
    title: "Prostaglandin-Free Lash Serums: What It Means & Why It Matters",
    desc: "The side effects behind prostaglandin analogs, what Health Canada prohibits, and how to check any serum's ingredient list yourself.",
  },
  {
    slug: "lash-serum-ingredients",
    title: "Lash Serum Ingredients, Explained",
    desc: "Capixyl™, biotin, panthenol, centella — what each ingredient actually does for the look of your lashes, in plain language.",
  },
  {
    slug: "lash-serums-with-extensions",
    title: "Can You Use a Lash Serum with Extensions or a Lash Lift?",
    desc: "How to condition your natural lashes under extensions, when to resume after a lift or tint, and what to avoid.",
  },
];

export default function GuidesPage() {
  return (
    <div className="faq-page">
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-overline reveal">Lash Care Journal</p>
          <h1 className="section-title reveal delay-1">Guides</h1>
          <p className="section-desc reveal delay-2">
            Plain-language answers about lash serums, ingredients, and eye-area safety — no jargon, no hype.
          </p>
        </div>

        <div className="faq-categories">
          {GUIDES.map((g) => (
            <div className="faq-category reveal" key={g.slug} style={{ marginBottom: "var(--space-8)" }}>
              <h2 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>
                <Link href={`/guides/${g.slug}`}>{g.title}</Link>
              </h2>
              <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>{g.desc}</p>
              <Link href={`/guides/${g.slug}`} className="btn btn-outline btn-sm">Read the guide</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
