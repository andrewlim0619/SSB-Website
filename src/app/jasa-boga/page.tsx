import JasaBogaHero from "@/components/jasa-boga/JasaBogaHero";
import JasaBogaTrustBar from "@/components/jasa-boga/JasaBogaTrustBar";
import SolusiDitawarkan from "@/components/jasa-boga/SolusiDitawarkan";
import AlurPengembangan from "@/components/jasa-boga/AlurPengembangan";
import MengapaBermitra from "@/components/jasa-boga/MengapaBermitra";
import KlienKami from "@/components/jasa-boga/KlienKami";
import SaluranPenjualan from "@/components/jasa-boga/SaluranPenjualan";

export const metadata = {
  title: "Jasa Boga | PT Selera Sukses Bersama",
  description:
    "Solusi makanan untuk bisnis Anda — produk siap pakai, custom development, private label, dan foodservice solutions.",
};

export default function JasaBoga() {
  return (
    <main>
      <JasaBogaHero />
      <JasaBogaTrustBar />
      <SolusiDitawarkan />
      <AlurPengembangan />
      <MengapaBermitra />
      <KlienKami />
      <SaluranPenjualan />
    </main>
  );
}
