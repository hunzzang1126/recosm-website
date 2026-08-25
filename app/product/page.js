import Icon from "@/components/Icon";
import Accordion from "@/components/Accordion";
import ProductGallery from "@/components/ProductGallery";
import ProductPurchase from "@/components/ProductPurchase";

const PRICE = 55.0;

export const metadata = {
  title: "Lash Conditioning Serum — Re:Cosm | Prostaglandin-Free Peptide Lash Serum",
  description:
    "Re:Cosm Lash Conditioning Serum: Acetyl Tetrapeptide-3 (Capixyl™), Biotin, Panthenol, Centella Asiatica. Prostaglandin-free, fragrance-free, made in Korea by Kolmar. $55 CAD, free shipping across Canada.",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lash Conditioning Serum",
  url: "https://www.recosm.co/product",
  brand: { "@type": "Brand", name: "Re:Cosm" },
  description:
    "A peptide-based, prostaglandin-free lash conditioning serum. 10 mL. Made in Korea by Kolmar Korea.",
  sku: "RECOSM-LCS-7ML",
  category: "Beauty > Eye Care > Lash Serums",
  countryOfOrigin: "KR",
  manufacturer: { "@type": "Organization", name: "Kolmar Korea" },
  offers: {
    "@type": "Offer",
    price: PRICE.toFixed(2),
    priceCurrency: "CAD",
    availability: "https://schema.org/PreOrder",
    url: "https://www.recosm.co/product",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "CAD" },
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "CA" },
    },
  },
};

const accordionItems = [
  {
    title: "Key Ingredients",
    content: (
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: 12 }}><strong>Acetyl Tetrapeptide-3 (Capixyl™)</strong> — Biomimetic peptide complex that conditions the lash line and supports the look of fuller, denser lashes.</li>
        <li style={{ marginBottom: 12 }}><strong>Biotin (Vitamin B7)</strong> — Essential B-vitamin and a natural building block of keratin, the structural protein of lashes.</li>
        <li style={{ marginBottom: 12 }}><strong>Panthenol (Pro-Vitamin B5)</strong> — Deeply hydrates and improves lash flexibility, helping prevent breakage.</li>
        <li style={{ marginBottom: 12 }}><strong>Centella Asiatica Extract</strong> — Calming botanical that soothes the sensitive lash line area.</li>
        <li><strong>Hyaluronic Acid</strong> — Locks in moisture for plump, healthy-looking lashes.</li>
      </ul>
    ),
  },
  {
    title: "Full Ingredient List",
    content: (
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
        Aqua, Betaine, Pentylene Glycol, Glycerin, Propanediol, 1,2-Hexanediol, Sodium Polyacryloyldimethyl Taurate, Butylene Glycol, Hydroxyethylcellulose, Panthenol, Xanthan Gum, Dipotassium Glycyrrhizate, Saccharide Isomerate, Hydroxypropyl Trimonium Hyaluronate, Ethylhexylglycerin, Tromethamine, Disodium EDTA, Centella Asiatica Extract, Houttuynia Cordata Extract, Glycine Soja (Soybean) Seed Extract, Biotin, Disodium Phosphate, Polysorbate 60, Sodium Citrate, Citric Acid, Dextran, Sodium Phosphate, Acetyl Tetrapeptide-3, Trifolium Pratense (Clover) Flower Extract.
      </p>
    ),
  },
  {
    title: "How to Use",
    content: (
      <ol style={{ paddingLeft: 20, lineHeight: 1.8 }}>
        <li style={{ marginBottom: 8 }}><strong>Cleanse</strong> — Remove all makeup. Ensure lashes are clean and completely dry.</li>
        <li style={{ marginBottom: 8 }}><strong>Apply</strong> — Using the rounded applicator tip, apply a thin line of serum along the upper lash line, as close to the roots as possible.</li>
        <li style={{ marginBottom: 8 }}><strong>Brush</strong> — Flip the applicator to the spoolie brush side. Gently brush through lashes from root to tip to evenly distribute serum.</li>
        <li><strong>Repeat nightly</strong> — For best results, use every evening before bed. Allow serum to absorb fully before applying other products.</li>
      </ol>
    ),
  },
  {
    title: "Shipping & Returns",
    content: (
      <>
        <p style={{ marginBottom: 12 }}>We ship across Canada with standard and express options:</p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
          <li><strong>Standard Shipping:</strong> 5-7 business days — Free</li>
          <li><strong>Express Shipping:</strong> 2-3 business days — $9.99 CAD</li>
        </ul>
        <p style={{ marginTop: 12 }}>Returns accepted within 30 days of delivery for unopened products. See our return policy for details.</p>
      </>
    ),
  },
  {
    title: "FAQ",
    content: (
      <div style={{ lineHeight: 1.8 }}>
        <p style={{ marginBottom: 12 }}><strong>Is it safe for sensitive eyes?</strong><br />Yes. Our formula is fragrance-free and prostaglandin-free, and formulated specifically for the delicate eye area — suitable for sensitive eyes and contact lens wearers.</p>
        <p style={{ marginBottom: 12 }}><strong>Can I use it with lash extensions?</strong><br />Absolutely. Our formula is safe for use with lash extensions and after lash lifts.</p>
        <p style={{ marginBottom: 12 }}><strong>How long does one tube last?</strong><br />One 10 mL tube lasts approximately 3 months with nightly use.</p>
        <p><strong>When will I see results?</strong><br />Most users notice their lashes looking fuller and healthier within 4-6 weeks of consistent nightly application.</p>
      </div>
    ),
  },
];

export default function ProductPage() {
  return (
    <div className="product-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <div className="container">
        <div className="product-grid">
          <ProductGallery />

          <div className="product-info reveal-right">
            <p className="product-brand">Re:Cosm</p>
            <h1 className="product-name">Lash Conditioning Serum</h1>
            <p className="product-subtitle">Peptide-Powered · 10 mL · Made in Korea</p>
            <p className="product-price">${PRICE.toFixed(2)} CAD</p>

            <p className="product-desc">
              A daily lash conditioning serum formulated with Acetyl Tetrapeptide-3 (Capixyl™), Biotin, Panthenol, and Centella Asiatica. Our prostaglandin-free, fragrance-free formula is designed to nourish and strengthen the look of lashes without irritation. Features a dual applicator with precision rounded tip and spoolie brush.
            </p>

            <ProductPurchase />

            <div className="product-shipping">
              <Icon name="truck" />
              <span>Free shipping across Canada on all orders</span>
            </div>

            <div className="product-details-section">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
