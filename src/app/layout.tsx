import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://www.selerasuksesbersama.com";
const SITE_NAME = "PT Selera Sukses Bersama";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Distribusi Makanan & Foodservice Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "PT Selera Sukses Bersama menyediakan produk makanan beku, dimsum premium, saus, dan camilan berkualitas untuk hotel, restoran, kafe, retail, dan distributor di seluruh Indonesia.",
  keywords: [
    "dimsum frozen Indonesia",
    "distribusi makanan Indonesia",
    "foodservice solutions",
    "supplier dimsum",
    "saus premium Indonesia",
    "frozen food supplier",
    "PT Selera Sukses Bersama",
    "SSB food",
    "camilan premium",
    "makanan beku halal",
    "supplier hotel restoran",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Distribusi Makanan & Foodservice Solutions`,
    description:
      "Supplier dimsum premium, saus, dan camilan halal berkualitas untuk hotel, restoran, kafe, dan distributor di seluruh Indonesia.",
    images: [
      {
        url: "/images/banner/Homepage%20Banner.png",
        width: 1200,
        height: 630,
        alt: "PT Selera Sukses Bersama — Produk Makanan Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Distribusi Makanan & Foodservice Solutions`,
    description:
      "Supplier dimsum premium, saus, dan camilan halal berkualitas untuk hotel, restoran, kafe, dan distributor di seluruh Indonesia.",
    images: ["/images/banner/Homepage%20Banner.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/SSB_company_logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "sales@selerasuksesbersama.com",
    contactType: "sales",
    areaServed: "ID",
    availableLanguage: "Indonesian",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kav DPR blok A4 no 169-170",
    addressLocality: "Cipondoh, Kota Tangerang",
    addressRegion: "Banten",
    postalCode: "15148",
    addressCountry: "ID",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
