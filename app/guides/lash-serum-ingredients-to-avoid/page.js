import Link from "next/link";
import { SITE, HUB_PATH, ingredientPath } from "@/lib/ingredients";

const PATH = "/guides/lash-serum-ingredients-to-avoid";
const PUBLISHED = "2026-09-23";

export const metadata = {
  title: "Lash Serum Ingredients to Avoid: Prostaglandins, Fragrance and Oils | Re:Cosm",
  description:
    "The lash serum ingredients worth avoiding and how to spot them on a label: prostaglandin analogs and their disguised names, fragrance near the eyes, and oils if you wear extensions. With a Canadian regulatory note.",
  alternates: { canonical: PATH },
};

const PROSTAGLANDINS = [
  ["Isopropyl cloprostenate", "The most common prostaglandin analog in over-the-counter lash serums. Prohibited in cosmetics in Canada."],
  ["Dechloro dihydroxy difluoro ethylcloprostenolamide", "Often shortened to DDDE. Reviewed by the EU scientific committee and not considered safe in cosmetics."],
  ["Methylamido dihydro noralfaprostal", "Often shortened to MDN. Reviewed alongside DDDE with the same conclusion."],
  ["Bimatoprost", "The prescription drug in glaucoma treatment and prescription lash products. Should never appear in a cosmetic."],
  ["Latanoprost, travoprost, tafluprost", "Prescription glaucoma drugs from the same family."],
];

const FAQ = [
  ["What is the most important ingredient to avoid in a lash serum?", "Prostaglandin analogs such as isopropyl cloprostenate. They are behind the documented side effects of some lash serums, including iris darkening, fat loss around the eyes and eyelid darkening."],
  ["How can I tell if a lash serum has prostaglandins?", "Read the full INCI list and look for names containing -prost, prostenol, cloprostenate or noralfaprostal. If a brand does not publish its full ingredient list, do not buy it."],
  ["Is it legal to sell prostaglandin lash serums in Canada?", "Isopropyl cloprostenate is on Health Canada's Cosmetic Ingredient Hotlist as prohibited, so products containing it cannot be sold as cosmetics in Canada. Prescription prostaglandin treatments exist, but only as drugs."],
  ["Which lash serum ingredients are bad for extensions?", "Oils. Plant oils, mineral oil and oily esters break down the cyanoacrylate adhesive that holds extensions. Choose a water-based, oil-free serum and apply it at the lash root."],
  ["Is fragrance bad in a lash serum?", "Fragrance adds nothing to lash care and is one of the most common causes of irritation on sensitive skin. For a product used on the lash line every night, fragrance-free is the safer choice."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Lash Serum Ingredients to Avoid",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@type": "Organization", name: "Re:Cosm", url: SITE },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: `${SITE}${PATH}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Lash Serum Ingredients to Avoid", item: `${SITE}${PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

const cell = { padding: "10px 12px", borderBottom: "1px solid var(--color-border, #E9E4DD)", verticalAlign: "top" };
const head = { ...cell, textAlign: "left", borderBottom: "2px solid var(--color-border, #E9E4DD)" };

export default function Page() {
  return (
    <div className="faq-page guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container" style={{ maxWidth: "var(--container-text)" }}>
        <div className="section-header" style={{ textAlign: "left" }}>
          <p className="section-overline reveal"><Link href="/#home-journal">Journal</Link></p>
          <h1 className="section-title reveal delay-1">Lash serum ingredients to avoid</h1>
          <p className="section-desc reveal delay-2" style={{ marginLeft: 0 }}>
            Three groups of ingredients are worth checking for before you put a serum on your lash line every night. Here is
            what they are, why they matter, and the exact names to look for on a label.
          </p>
        </div>

        <div className="text-body" style={{ lineHeight: 1.8 }}>
          <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>1. Prostaglandin analogs</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Prostaglandin analogs were developed as glaucoma medication. Patients using them grew longer, darker lashes, which
            led to prescription lash treatments and then to a wave of cosmetic serums using related compounds. Because they act
            on hormone-like signalling, their effects are not limited to lashes. Documented side effects include iris
            darkening that can be permanent, loss of fat around the eyes that gives a hollow look, darkening of the eyelid
            skin, and redness and irritation.
          </p>
          <p style={{ marginBottom: "var(--space-4)" }}>
            The European Commission&apos;s scientific committee on consumer safety reviewed isopropyl cloprostenate, DDDE and
            MDN and concluded that none of them could be considered safe in cosmetics meant to promote lash or brow growth.
            In Canada, isopropyl cloprostenate is on Health Canada&apos;s Cosmetic Ingredient Hotlist as a prohibited
            substance. Products are still sold online from other markets, so the label is your best protection.
          </p>
          <p style={{ marginBottom: "var(--space-6)" }}>Names to look for:</p>
          <div style={{ overflowX: "auto", marginBottom: "var(--space-6)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr><th style={head}>Name on the label</th><th style={head}>What it is</th></tr>
              </thead>
              <tbody>
                {PROSTAGLANDINS.map(([n, d]) => (
                  <tr key={n}><td style={{ ...cell, fontWeight: 600 }}>{n}</td><td style={cell}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: "var(--space-10)" }}>
            A quick rule: anything containing <strong>-prost</strong>, <strong>prostenol</strong>,{" "}
            <strong>cloprostenate</strong> or <strong>noralfaprostal</strong> is a prostaglandin analog, whatever the front of
            the box says. More detail is in{" "}
            <Link href="/guides/prostaglandin-free-lash-serums">prostaglandin-free lash serums: what it means</Link>.
          </p>

          <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>2. Fragrance</h2>
          <p style={{ marginBottom: "var(--space-10)" }}>
            Fragrance, listed as parfum or fragrance, does nothing for lashes. It is also one of the most frequent causes of
            contact irritation, and the skin on the lash line is some of the thinnest on the body. Essential oils fall in the
            same category: natural does not mean gentle near the eyes. A product you apply every night should be
            fragrance-free.
          </p>

          <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>3. Oils, if you wear extensions</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Lash extensions are bonded with cyanoacrylate adhesive, and oils weaken that bond. Plant oils such as castor,
            argan and coconut oil, mineral oil, and oily esters all shorten retention. Castor oil is a popular home remedy
            for lashes, and it is exactly what to keep away from a fresh set.
          </p>
          <p style={{ marginBottom: "var(--space-10)" }}>
            Without extensions, oils are not harmful, but they can migrate into the eye and blur contact lenses. A water-based
            gel is the more comfortable choice either way. Our guide to{" "}
            <Link href="/guides/lash-serums-with-extensions">lash conditioners for extensions</Link> covers application and
            timing.
          </p>

          <h2 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>What to look for instead</h2>
          <p style={{ marginBottom: "var(--space-4)" }}>
            A conditioning serum built on ingredients with clear, cosmetic roles: a peptide such as{" "}
            <Link href={ingredientPath("acetyl-tetrapeptide-3")}>Acetyl Tetrapeptide-3</Link>, humectants such as{" "}
            <Link href={ingredientPath("panthenol")}>panthenol</Link> and{" "}
            <Link href={ingredientPath("hyaluronic-acid")}>cationic hyaluronic acid</Link>, and soothing botanicals such as{" "}
            <Link href={ingredientPath("centella-asiatica")}>centella asiatica</Link>. And a brand that publishes its complete
            ingredient list. Every ingredient in our serum is explained in the{" "}
            <Link href={HUB_PATH}>lash serum ingredients guide</Link>.
          </p>

          <h2 className="heading-3" style={{ margin: "var(--space-10) 0 var(--space-6)" }}>Common questions</h2>
          {FAQ.map(([q, a]) => (
            <div key={q} style={{ marginBottom: "var(--space-6)" }}>
              <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>{q}</h3>
              <p>{a}</p>
            </div>
          ))}

          <div style={{ margin: "var(--space-12) 0", padding: "var(--space-8)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
            <p className="heading-4" style={{ marginBottom: "var(--space-3)" }}>None of the above</p>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)" }}>
              Re:Cosm Lash Conditioning Serum is prostaglandin-free, fragrance-free and oil-free, with every ingredient published.
            </p>
            <Link href="/product" className="btn btn-primary">See the formula</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
