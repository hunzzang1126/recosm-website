import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Re:Cosm | Toronto, Canada",
  description:
    "Get in touch with Re:Cosm — questions about our prostaglandin-free lash conditioning serum, orders, or wholesale. Based in Toronto, free shipping across Canada.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-overline reveal">Get in Touch</p>
          <h1 className="section-title reveal delay-1">Contact Us</h1>
          <p className="section-desc reveal delay-2">Have a question or just want to say hello? We&apos;d love to hear from you.</p>
        </div>

        <div className="contact-grid">
          <ContactForm />

          <div className="contact-info-card reveal delay-2">
            <div className="contact-info-item">
              <div className="contact-info-icon"><Icon name="mail" /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@recosm.co">info@recosm.co</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><Icon name="mapPin" /></div>
              <div>
                <h4>Location</h4>
                <p>Toronto, ON<br />Canada</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><Icon name="truck" /></div>
              <div>
                <h4>Shipping</h4>
                <p>Free standard shipping<br />across all of Canada</p>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-8)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--color-border)" }}>
              <h4 style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>
                Response Time
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-body)", lineHeight: 1.6 }}>
                We typically respond within 24 hours during business days (Mon–Fri, 9 AM – 6 PM EST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
