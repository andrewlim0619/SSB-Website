import type { Metadata } from "next";
import ProductsHero from "@/components/produk/ProductsHero";
import CategoryNav from "@/components/produk/CategoryNav";
import ProductSection from "@/components/produk/ProductSection";
import ProductsTrustBar from "@/components/produk/ProductsTrustBar";
import Testimonials from "@/components/home/Testimonials";
import { ALL_PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Jelajahi produk SSB: dimsum frozen premium, aneka saus, dan camilan berkualitas halal untuk hotel, restoran, kafe, dan distributor di Indonesia.",
  alternates: { canonical: "https://www.selerasuksesbersama.com/produk" },
  openGraph: {
    title: "Produk | PT Selera Sukses Bersama",
    description:
      "Dimsum frozen premium, aneka saus, dan camilan halal berkualitas — distribusi ke seluruh Indonesia.",
    url: "https://www.selerasuksesbersama.com/produk",
    images: [{ url: "/images/beranda_thumbnails/Beranda_Aneka%20Dimsum.png", width: 1200, height: 630, alt: "Produk SSB" }],
  },
};

const dimsumProducts = ALL_PRODUCTS.filter((p) => p.category === "dimsum");
const sausProducts   = ALL_PRODUCTS.filter((p) => p.category === "saus");
const cemilanProducts = ALL_PRODUCTS.filter((p) => p.category === "cemilan");

export default function Produk() {
  return (
    <>
      <ProductsHero />
      <CategoryNav />

      <ProductSection
        id="dimsum"
        categoryId="dimsum"
        title="Frozen Dimsum"
        subtitle="Dibuat dengan bahan pilihan dan proses produksi higienis untuk menghadirkan cita rasa autentik dan kualitas terbaik."
        products={dimsumProducts}
      />

      <ProductSection
        id="saus"
        categoryId="saus"
        title="Aneka Saus"
        subtitle="Ragam saus dengan resep spesial untuk melengkapi dan meningkatkan cita rasa menu masakan Anda."
        products={sausProducts}
      />

      <ProductSection
        id="cemilan"
        categoryId="cemilan"
        title="Cemilan"
        subtitle="Pilihan camilan premium yang renyah dan lezat untuk berbagai segmen pasar."
        products={cemilanProducts}
      />

      <Testimonials />
      <ProductsTrustBar />
    </>
  );
}
