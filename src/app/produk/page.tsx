import ProductsHero from "@/components/produk/ProductsHero";
import CategoryNav from "@/components/produk/CategoryNav";
import ProductSection from "@/components/produk/ProductSection";
import ProductsTrustBar from "@/components/produk/ProductsTrustBar";
import Testimonials from "@/components/home/Testimonials";
import { ALL_PRODUCTS } from "@/data/products";

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
