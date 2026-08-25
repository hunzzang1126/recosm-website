import Link from "next/link";

export const metadata = {
  title: "Can You Use a Lash Serum with Extensions or a Lash Lift? | Re:Cosm",
  description:
    "How to condition natural lashes under extensions, when to resume serum after a lash lift or tint, why oil-free matters for retention, and what lash technicians recommend for aftercare.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can You Use a Lash Serum with Extensions or a Lash Lift?",
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  author: { "@type": "Organization", name: "Re:Cosm" },
  publisher: { "@type": "Organization", name: "Re:Cosm", url: "https://www.recosm.co" },
  mainEntityOfPage: "https://www.recosm.co/guides/lash-serums-with-extensions",
};

export default function Page() {
  return (
    <div className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title reveal delay-1">Can you use a lash serum with extensions or a lash lift?</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>
            Short answer: yes — if you choose the right formula and time it correctly. Here&apos;s the aftercare logic lash technicians follow.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>With lash extensions</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Extensions are only as good as the natural lashes they&apos;re bonded to. Weak, brittle natural lashes shed early — taking your extensions with them. Conditioning your natural lashes is one of the best things you can do for retention between fills.
          </p>
          <p style={{ marginBottom: "var(--space-4)" }}>
            The rule that matters: <strong>the formula must be oil-free</strong>. Oils break down extension adhesive. Check the ingredient list for oils before using any serum over extensions — a water-based, oil-free conditioning serum applied along the upper lash line (not slathered over the extension bodies) is safe for classic, volume, and hybrid sets.
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li>Apply at night, on clean, completely dry lashes</li>
            <li>Use a thin line along the lash root, not the extension tips</li>
            <li>Let it absorb fully before lying down</li>
          </ul>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>After a lash lift or tint</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            A lift restructures the lash with a perming solution, and a tint deposits dye — both leave the cuticle temporarily more open. <strong>Wait 24–48 hours</strong> before starting or resuming a serum. After that window, conditioning actually helps: lifts and tints can be drying, and panthenol and hyaluronic-acid-based hydration counteracts the brittleness that sometimes follows.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What to avoid over extensions and lifts</h2>
          <ul style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li><strong>Oil-based serums and cleansers</strong> — adhesive breakdown</li>
            <li><strong>Prostaglandin-based serums</strong> — irritation risk on a freshly treated lash line (<Link href="/guides/prostaglandin-free-lash-serums">why that matters</Link>)</li>
            <li><strong>Waterproof mascara</strong> — the remover needed to take it off is the real enemy</li>
            <li>Rubbing, picking, or sleeping face-down on fresh sets</li>
          </ul>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>For lash artists</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            If you&apos;re a lash technician in the Toronto area and want a prostaglandin-free, oil-free aftercare serum to recommend or retail to clients, we work directly with studios — reach out via our <Link href="/contact">contact page</Link>.
          </p>

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Extension-safe by design</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              Re:Cosm Lash Conditioning Serum is oil-free, fragrance-free, and prostaglandin-free — made for nightly use with or without extensions.
            </p>
            <Link href="/product" className="btn btn-primary">See the serum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
