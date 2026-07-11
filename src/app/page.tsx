import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutTeaser from "@/components/home/AboutTeaser";
import IndustrySegments from "@/components/home/IndustrySegments";
import ProductsPreview from "@/components/home/ProductsPreview";
import KlienKami from "@/components/jasa-boga/KlienKami";
import SertifikasiStandar from "@/components/tentang-kami/SertifikasiStandar";
import SaluranPenjualan from "@/components/jasa-boga/SaluranPenjualan";
import MarketplaceSection from "@/components/home/MarketplaceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <AboutTeaser />
      <IndustrySegments />
      <ProductsPreview />
      <KlienKami />
      <SertifikasiStandar showCTA />
      <SaluranPenjualan />
      <MarketplaceSection />
    </>
  );
}
