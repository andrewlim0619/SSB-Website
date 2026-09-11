import JasaBogaHero from "@/components/jasa-boga/JasaBogaHero";
import JasaBogaTrustBar from "@/components/jasa-boga/JasaBogaTrustBar";
import SolusiDitawarkan from "@/components/jasa-boga/SolusiDitawarkan";
import AlurPengembangan from "@/components/jasa-boga/AlurPengembangan";
import MengapaBermitra from "@/components/jasa-boga/MengapaBermitra";
import KlienKami from "@/components/jasa-boga/KlienKami";
import SaluranPenjualan from "@/components/jasa-boga/SaluranPenjualan";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Boga",
  description:
    "Solusi makanan untuk bisnis Anda — produk siap pakai, custom development, private label, dan foodservice solutions dari PT Selera Sukses Bersama.",
  alternates: { canonical: "https://www.selerasuksesbersama.com/jasa-boga" },
  openGraph: {
    title: "Jasa Boga | PT Selera Sukses Bersama",
    description:
      "Solusi makanan untuk bisnis Anda — produk siap pakai, custom development, private label, dan foodservice solutions.",
    url: "https://www.selerasuksesbersama.com/jasa-boga",
    images: [{ url: "/images/banner/keunggulankami_collage.png", width: 1200, height: 630, alt: "Jasa Boga SSB" }],
  },
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
