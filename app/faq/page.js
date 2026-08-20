import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata = {
  title: "FAQ — Re:Cosm | Lash Serum Safety, Results & Shipping",
  description:
    "Answers about Re:Cosm Lash Conditioning Serum: safety for sensitive eyes and lash extensions, what prostaglandin-free means, Health Canada compliance, results timeline, and shipping across Canada.",
};

const categories = [
  {
    title: "Safety & Usage",
    items: [
      {
        q: "Is this safe for sensitive eyes?",
        a: "Yes. Our formula is prostaglandin-free and fragrance-free, and formulated specifically for the delicate eye area. It's suitable for contact lens wearers. If you experience any unusual irritation, discontinue use and consult your eye care professional.",
      },
      {
        q: "Can I use it with lash extensions?",
        a: "Absolutely. Re:Cosm Lash Conditioning Serum is safe for use with all types of lash extensions, including classic, volume, and hybrid sets. It helps condition your natural lashes underneath, providing a better foundation for extensions.",
      },
      {
        q: "Can I use it after a lash lift or tint?",
        a: "Yes. We recommend waiting 24-48 hours after a lash lift or tint before beginning or resuming use. After that initial period, the serum can help maintain and nourish your lashes post-treatment.",
      },
      {
        q: "What does prostaglandin-free mean and why does it matter?",
        a: "Prostaglandins are hormone-like compounds used in many lash serums (and originally in glaucoma medications). Prostaglandin analogs like bimatoprost and isopropyl cloprostenate can cause side effects including iris color changes, periorbital fat loss (sunken appearance around eyes), and eyelid darkening — and isopropyl cloprostenate is prohibited in cosmetics sold in Canada. Re:Cosm uses peptide-based conditioning technology instead.",
      },
      {
        q: "Can I use it on my lower lashes?",
        a: "Our serum is designed for the upper lash line. When you blink, a small amount will naturally transfer to your lower lashes. We don't recommend direct application to the lower lash line to minimize the risk of product entering your eyes.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        q: "When will I see results?",
        a: "Most users begin to notice their lashes looking healthier and more conditioned within 4-6 weeks of consistent nightly use, with the full effect — fuller-looking, healthier-looking lashes — typically visible after 8-12 weeks. Results vary by individual, and consistent, daily application is key.",
      },
      {
        q: "How long does one tube last?",
        a: "One 7 mL tube of Re:Cosm Lash Conditioning Serum lasts approximately 3 months with nightly use on both eyes. A small amount goes a long way — you only need a thin line along the upper lash line.",
      },
      {
        q: "What happens if I stop using it?",
        a: "Your lashes will gradually return to their natural state over time, as the lash cycle completes. There is no rebound effect — your lashes will not become worse than they were before you started using the product. Many users choose to transition to every-other-night application for maintenance.",
      },
    ],
  },
  {
    title: "Ingredients & Science",
    items: [
      {
        q: "Is it Health Canada approved?",
        a: "Re:Cosm Lash Conditioning Serum is formulated in compliance with Health Canada's Cosmetic Regulations and has been notified to Health Canada as required. As a cosmetic product (not a drug), it does not require a Drug Identification Number (DIN). All labeling complies with the Consumer Packaging and Labelling Act, including bilingual English/French requirements.",
      },
      {
        q: "What is Acetyl Tetrapeptide-3?",
        a: "Acetyl Tetrapeptide-3 is a biomimetic peptide, best known as part of the Capixyl™ complex alongside red clover extract. In cosmetic formulas it is used to condition the lash line and support the look of fuller, denser lashes. It is the centerpiece of our prostaglandin-free approach.",
      },
      {
        q: "Is the product vegan and cruelty-free?",
        a: "Re:Cosm is cruelty-free — we do not test on animals at any stage of product development. Our formula contains no animal-derived ingredients.",
      },
      {
        q: "Is it safe during pregnancy or breastfeeding?",
        a: "While our formula uses safe, cosmetic-grade ingredients, we recommend consulting with your healthcare provider before using any new beauty product during pregnancy or while breastfeeding.",
      },
    ],
  },
  {
    title: "Shipping & Orders",
    items: [
      {
        q: "Do you ship across Canada?",
        a: "Yes! We ship to all provinces and territories across Canada. Standard shipping (5-7 business days) is free on all orders. Express shipping (2-3 business days) is available for $9.99 CAD.",
      },
      {
        q: "Where can I buy Re:Cosm in person?",
        a: "Re:Cosm is stocked at Jacob & Sebastian in Toronto — at 622 Queen Street West and at Commerce Court Concourse, 199 Bay Street.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we only ship within Canada. International shipping options are being explored and we hope to expand soon. Sign up for our newsletter to be notified when international shipping becomes available.",
      },
      {
        q: "What is your return policy?",
        a: "We accept returns of unopened, unused products within 30 days of delivery. Due to hygiene regulations, we cannot accept returns of opened cosmetic products. If you receive a damaged or defective product, please contact us at info@recosm.co within 7 days of delivery for a full replacement.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <div className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-overline reveal">Support</p>
          <h1 className="section-title reveal delay-1">Frequently Asked Questions</h1>
          <p className="section-desc reveal delay-2">Everything you need to know about Re:Cosm Lash Conditioning Serum.</p>
        </div>

        <div className="faq-categories">
          {categories.map((cat) => (
            <div className="faq-category reveal" key={cat.title}>
              <h2 className="faq-category-title">{cat.title}</h2>
              <Accordion items={cat.items.map((item) => ({ title: item.q, content: item.a }))} />
            </div>
          ))}
        </div>

        <div
          className="text-center reveal"
          style={{ marginTop: "var(--space-16)", padding: "var(--space-10)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)" }}
        >
          <h3 className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Still have questions?</h3>
          <p className="text-body" style={{ marginBottom: "var(--space-6)", color: "var(--color-text-secondary)" }}>
            We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
