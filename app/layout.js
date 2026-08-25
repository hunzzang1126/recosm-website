import "@/src/styles/index.css";
import { StoreProvider } from "@/components/StoreContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CookieConsent from "@/components/CookieConsent";
import Toast from "@/components/Toast";
import Reveals from "@/components/Reveals";

const BASE_URL = "https://www.recosm.co";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Re:Cosm — Lash Conditioning Serum | Korean Clean Beauty",
  description:
    "Re:define your lashes with Re:Cosm's peptide-powered, prostaglandin-free Lash Conditioning Serum. Made in Korea by Kolmar Korea. Clean beauty for Canada.",
  keywords: [
    "lash serum",
    "lash conditioning serum",
    "prostaglandin free lash serum",
    "peptide lash serum",
    "Korean beauty",
    "clean beauty",
    "lash serum Canada",
    "Re:Cosm",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    siteName: "Re:Cosm",
    title: "Re:Cosm — Lash Conditioning Serum",
    description: "Peptide-powered, prostaglandin-free lash serum. Made in Korea. Loved in Canada.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re:Cosm — Lash Conditioning Serum",
    description: "Peptide-powered, prostaglandin-free lash serum. Made in Korea. Loved in Canada.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/favicon.svg" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Re:Cosm",
  url: BASE_URL,
  description: "Korean clean beauty brand. Peptide-powered lash care.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@recosm.co",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62.5..125,100..900;1,62.5..125,100..900&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body>
        <StoreProvider>
          <Header />
          <main className="page-content page-active">{children}</main>
          <Footer />
          <CartDrawer />
          <CookieConsent />
          <Toast />
          <Reveals />
        </StoreProvider>
      </body>
    </html>
  );
}
