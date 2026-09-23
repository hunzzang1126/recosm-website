import Link from "next/link";
import { GuideByline, GuideSources } from "@/components/GuideMeta";
import { SITE, ingredientPath } from "@/lib/ingredients";

const PATH = "/guides/lash-serums-with-extensions";

export const metadata = {
  title: "Lash Serum with Extensions: What's Safe | Re:Cosm",
  description:
    "Can you use a lash serum with extensions? What makes a formula extension-safe, the oils to check for, and how to apply it without hurting retention.",
  alternates: { canonical: PATH },
};

const OILS = [
  "Ricinus Communis (Castor) Seed Oil",
  "Argania Spinosa (Argan) Kernel Oil",
  "Cocos Nucifera (Coconut) Oil",
  "Mineral Oil / Paraffinum Liquidum",
  "Caprylic/Capric Triglyceride",
  "Any ingredient ending in \"oil\" or \"butter\"",
];

const FAQ = [
  ["Can you use a lash conditioner with lash extensions?", "Yes, as long as it is oil-free. Oils weaken the adhesive that holds extensions. A water-based, oil-free conditioner applied at the lash root conditions your natural lashes without affecting retention."],
  ["What is the difference between a lash conditioner and a lash serum?", "The terms overlap. Conditioner usually describes a formula that hydrates and strengthens the look of lashes. Serum is broader and includes growth serums, some of which rely on prostaglandin analogs. A prostaglandin-free conditioning serum is both."],
  ["Will a lash serum make my extensions fall out?", "An oil-free formula will not. What shortens retention is oil, heavy rubbing, and oil-based makeup removers. Conditioning the natural lashes underneath tends to help retention, because healthy natural lashes shed less."],
  ["How long after a lash lift can I use a lash serum?", "Wait 24 to 48 hours. The lift solution leaves lashes more open and sensitive for a short time. After that, a hydrating conditioner helps with the dryness lifts can cause."],
  ["Can lash technicians retail a lash conditioner to clients?", "Yes. An oil-free, prostaglandin-free conditioner is a natural aftercare product for extension and lift clients. Studios in the Toronto area can contact Re:Cosm directly."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Lash Serum with Extensions: Safe Lash Conditioners and How to Use Them",
      datePublished: "2026-08-20",
      dateModified: "2026-09-23",
      author: { "@type": "Organization", name: "Re:Cosm", url: SITE },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: `${SITE}${PATH}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Lash Conditioner for Extensions", item: `${SITE}${PATH}` },
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
          <p className="section-overline"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title">Using a lash serum with extensions: what&apos;s safe and how to apply it</h1>
          <p className="section-desc" style={{ marginLeft: 0 }}>
            Short answer: yes, you can use a lash conditioner or serum with extensions or after a lash lift, if you choose the
            right formula and time it correctly. Here&apos;s the aftercare logic lash technicians follow.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <GuideByline />
          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>Why condition lashes under extensions</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Extensions are only as good as the natural lashes they&apos;re bonded to. Each extension is glued to one natural
            lash, and when that lash sheds or breaks, the extension goes with it. Weak, brittle natural lashes shed early.
            Conditioning your natural lashes is one of the best things you can do for retention between fills.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>Lash conditioner or lash serum?</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            You will see both words. A lash conditioner hydrates and strengthens the look of lashes. Lash serum is a broader
            term that also covers growth serums, and many of those use prostaglandin analogs, which you want to keep away from
            a freshly treated lash line. What matters is not the name on the box but the ingredient list: a
            prostaglandin-free conditioning serum is exactly what extension wearers need.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>The one rule: oil-free</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Extension adhesive is cyanoacrylate, and oils break it down. Before using any conditioner over extensions, read
            the full ingredient list and look for:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            {OILS.map((o) => <li key={o}>{o}</li>)}
          </ul>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Castor oil is the classic home remedy for lashes, and it is the worst choice for a fresh set. A water-based gel
            with humectants such as <Link href={ingredientPath("panthenol")}>panthenol</Link> and{" "}
            <Link href={ingredientPath("hyaluronic-acid")}>cationic hyaluronic acid</Link> conditions without touching the bond.
            Plant extracts are not oils: an ingredient like soybean seed extract is water soluble and fine.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>How to apply it with extensions</h2>
          <ol style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li>Cleanse with an oil-free lash cleanser and let lashes dry completely.</li>
            <li>Apply at night, in a thin line along the upper lash root, not along the extension tips.</li>
            <li>Let it absorb fully before lying down.</li>
            <li>Brush extensions gently with a clean spoolie in the morning.</li>
          </ol>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Works for classic, volume and hybrid sets. If your artist has just applied a new set, wait until the adhesive has
            fully cured, usually 24 to 48 hours, before starting.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>After a lash lift or tint</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            A lift restructures the lash with a perming solution, and a tint deposits dye. Both leave the cuticle temporarily
            more open. <strong>Wait 24 to 48 hours</strong> before starting or resuming a serum. After that window,
            conditioning actually helps: lifts and tints can be drying, and panthenol and hyaluronic acid hydration counteracts
            the brittleness that sometimes follows. The full routine is in{" "}
            <Link href="/guides/lash-serum-after-lash-lift">lash serum after a lash lift or tint</Link>.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>What to avoid over extensions and lifts</h2>
          <ul style={{ paddingLeft: 24, marginBottom: "var(--space-4)", lineHeight: 1.9 }}>
            <li><strong>Oil-based serums and cleansers:</strong> adhesive breakdown.</li>
            <li><strong>Prostaglandin-based serums:</strong> irritation risk on a freshly treated lash line (<Link href="/guides/prostaglandin-free-lash-serums">why that matters</Link>).</li>
            <li><strong>Waterproof mascara:</strong> the remover needed to take it off is the real enemy.</li>
            <li>Rubbing, picking, or sleeping face-down on fresh sets.</li>
          </ul>
          <p style={{ marginBottom: "var(--space-4)" }}>
            The full list of names to watch for is in <Link href="/guides/lash-serum-ingredients-to-avoid">lash serum ingredients to avoid</Link>.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-4)" }}>For lash artists</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            If you&apos;re a lash technician in the Toronto area and want a prostaglandin-free, oil-free aftercare conditioner to
            recommend or retail to clients, we work directly with studios. Reach out via our <Link href="/contact">contact page</Link>{" "}
            or see current <Link href="/stockists">stockists</Link>.
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

          <GuideSources keys={[]} />

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Extension-safe by design</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              Re:Cosm Lash Conditioning Serum is oil-free, fragrance-free, and prostaglandin-free, made for nightly use with or without extensions.
            </p>
            <Link href="/product" className="btn btn-primary">See the serum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
