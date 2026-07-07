import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutTeaser from "@/components/home/AboutTeaser";
import IndustrySegments from "@/components/home/IndustrySegments";
import ProductsPreview from "@/components/home/ProductsPreview";
import MarketplaceSection from "@/components/home/MarketplaceSection";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <AboutTeaser />
      <IndustrySegments />
      <ProductsPreview />
      <MarketplaceSection />
      <Testimonials />
    </>
  );
}
