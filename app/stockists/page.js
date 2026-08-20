import Link from "next/link";

export const metadata = {
  title: "Where to Buy Re:Cosm in Toronto — Stockists",
  description:
    "Buy Re:Cosm Lash Conditioning Serum in person at Jacob & Sebastian in Toronto (622 Queen St W and Commerce Court, 199 Bay St), or online at recosm.co with free shipping across Canada.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Re:Cosm Stockists",
  itemListElement: [
    {
      "@type": "Store",
      name: "Jacob & Sebastian — Queen West",
      address: { "@type": "PostalAddress", streetAddress: "622 Queen Street West", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
    },
    {
      "@type": "Store",
      name: "Jacob & Sebastian — Commerce Court",
      address: { "@type": "PostalAddress", streetAddress: "199 Bay Street, Commerce Court Concourse", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
    },
  ],
};

export default function StockistsPage() {
  return (
    <div className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-overline reveal">Stockists</p>
          <h1 className="section-title reveal delay-1">Where to find Re:Cosm</h1>
          <p className="section-desc reveal delay-2">
            Try the serum in person in Toronto, or order online with free shipping across Canada.
          </p>
        </div>

        <div className="reviews-grid" style={{ marginBottom: "var(--space-12)" }}>
          <div className="review-card reveal delay-1">
            <div className="review-author">Jacob &amp; Sebastian — Queen West</div>
            <p className="review-text">622 Queen Street West, Toronto, ON</p>
            <div className="review-meta">
              Boutique apothecary for niche &amp; cult beauty ·{" "}
              <a href="https://maps.google.com/?q=622+Queen+St+W+Toronto" target="_blank" rel="noopener noreferrer">Map</a>
            </div>
          </div>
          <div className="review-card reveal delay-2">
            <div className="review-author">Jacob &amp; Sebastian — Commerce Court</div>
            <p className="review-text">Commerce Court Concourse, 199 Bay Street, Toronto, ON</p>
            <div className="review-meta">
              In the heart of the Financial District ·{" "}
              <a href="https://maps.google.com/?q=Commerce+Court+199+Bay+St+Toronto" target="_blank" rel="noopener noreferrer">Map</a>
            </div>
          </div>
          <div className="review-card reveal delay-3">
            <div className="review-author">Online — recosm.co</div>
            <p className="review-text">Launching November 2026</p>
            <div className="review-meta">Free standard shipping across all of Canada</div>
          </div>
        </div>

        <div className="text-center reveal" style={{ padding: "var(--space-10)", background: "var(--color-bg-warm)", borderRadius: "var(--radius-md)" }}>
          <h3 className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Carry Re:Cosm in your studio or store</h3>
          <p className="text-body" style={{ marginBottom: "var(--space-6)", color: "var(--color-text-secondary)" }}>
            We partner with lash studios and curated retailers across the GTA. Wholesale inquiries welcome.
          </p>
          <Link href="/contact" className="btn btn-primary">Get in touch</Link>
        </div>
      </div>
    </div>
  );
}
