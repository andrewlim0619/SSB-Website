import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://www.selerasuksesbersama.com";
const SITE_NAME = "PT Selera Sukses Bersama";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Supplier Frozen Dimsum & Foodservice Indonesia`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "PT Selera Sukses Bersama — supplier frozen dimsum dan makanan premium terpercaya untuk hotel, restoran, kafe, retail, dan distributor di seluruh Indonesia. Produk halal, kualitas konsisten.",
  keywords: [
    // Frozen food distributor / supplier
    "frozen food distributor Indonesia",
    "distributor frozen food Indonesia",
    "supplier frozen food Indonesia",
    "supplier makanan beku Indonesia",
    "distributor makanan beku Indonesia",
    "frozen food supplier Indonesia",
    "frozen food distributor Jakarta",
    "supplier frozen food Jakarta",
    "distributor frozen food Jakarta",
    "supplier makanan beku Jakarta",
    "distributor makanan beku Jakarta",
    "supplier frozen food Jabodetabek",
    "distributor frozen food Jabodetabek",
    "frozen food wholesale Indonesia",
    "frozen food B2B Indonesia",
    "supplier frozen food untuk restoran",
    "supplier frozen food untuk hotel",
    "supplier frozen food untuk catering",
    // Frozen dimsum
    "frozen dimsum supplier",
    "supplier dimsum Indonesia",
    "dimsum supplier Jakarta",
    "frozen dimsum halal",
    "supplier frozen dimsum",
    // SKS brand
    "SKS Dimsum",
    "SKS Siomay",
    "SKS Hakau",
    "SKS Bakpao",
    "SKS frozen food",
    "SKS Dimsum Indonesia",
    "SKS Dimsum Jakarta",
    // The Duck King brand
    "The Duck King Sauce",
    "The Duck King Sauce Indonesia",
    "The Duck King XO Sauce",
    "The Duck King Chili Oil",
    "The Duck King Black Pepper Sauce",
    "The Duck King Sweet and Sour Sauce",
    "The Duck King Kung Pao Sauce",
    "The Duck King Duck Sauce",
    // Company
    "PT Selera Sukses Bersama",
    "Selera Sukses Bersama",
    "PT SSB frozen food",
    "SSB dimsum",
    "makanan beku halal",
    "supplier hotel restoran Indonesia",
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
    title: `${SITE_NAME} | Supplier Frozen Dimsum & Foodservice Indonesia`,
    description:
      "Supplier frozen dimsum, saus premium, dan camilan halal berkualitas untuk hotel, restoran, kafe, dan distributor di seluruh Indonesia.",
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
    title: `${SITE_NAME} | Supplier Frozen Dimsum & Foodservice Indonesia`,
    description:
      "Supplier frozen dimsum, saus premium, dan camilan halal berkualitas untuk hotel, restoran, kafe, dan distributor di seluruh Indonesia.",
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
  alternateName: ["SSB", "PT SSB", "Selera Sukses Bersama"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/SSB_company_logo.png`,
  description:
    "Distributor dan supplier frozen food, frozen dimsum (SKS Dimsum), saus premium (The Duck King Sauce), dan camilan halal untuk hotel, restoran, kafe, retail, dan distributor di Jakarta, Jabodetabek, dan seluruh Indonesia.",
  areaServed: [
    { "@type": "City", name: "Jakarta" },
    { "@type": "City", name: "Tangerang" },
    { "@type": "AdministrativeArea", name: "Jabodetabek" },
    { "@type": "Country", name: "Indonesia" },
  ],
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
