import type { Metadata } from "next";
import ProductsHero from "@/components/produk/ProductsHero";
import CategoryNav from "@/components/produk/CategoryNav";
import ProductSection from "@/components/produk/ProductSection";
import ProductsTrustBar from "@/components/produk/ProductsTrustBar";
import Testimonials from "@/components/home/Testimonials";
import { ALL_PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Frozen Dimsum & Produk Makanan Premium",
  description:
    "Katalog frozen dimsum halal, saus premium, dan camilan berkualitas dari supplier terpercaya Indonesia. Tersedia untuk hotel, restoran, kafe, retail, dan distributor.",
  alternates: { canonical: "https://www.selerasuksesbersama.com/produk" },
  openGraph: {
    title: "Frozen Dimsum & Produk Makanan Premium | PT Selera Sukses Bersama",
    description:
      "Katalog frozen dimsum halal, saus premium, dan camilan berkualitas dari supplier terpercaya untuk hotel, restoran, kafe, dan distributor di Indonesia.",
    url: "https://www.selerasuksesbersama.com/produk",
    images: [{ url: "/images/beranda_thumbnails/Beranda_Aneka%20Dimsum.png", width: 1200, height: 630, alt: "Frozen Dimsum Premium — PT Selera Sukses Bersama" }],
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
        subtitle="SKS Dimsum — supplier frozen dimsum halal dengan bahan pilihan dan proses higienis untuk hotel, restoran, dan distributor di Jakarta & Indonesia."
        products={dimsumProducts}
      />

      <ProductSection
        id="saus"
        categoryId="saus"
        title="Aneka Saus"
        subtitle="The Duck King Sauce — saus premium halal berkualitas untuk restoran, kafe, hotel, dan distributor di Indonesia."
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
