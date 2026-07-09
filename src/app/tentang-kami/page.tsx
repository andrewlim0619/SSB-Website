import TentangHero from "@/components/tentang-kami/TentangHero";
import PerjalananKami from "@/components/tentang-kami/PerjalananKami";
import VisiMisi from "@/components/tentang-kami/VisiMisi";
import NilaiPerusahaan from "@/components/tentang-kami/NilaiPerusahaan";
import SegmenStats from "@/components/tentang-kami/SegmenStats";
import JangkauanDistribusi from "@/components/tentang-kami/JangkauanDistribusi";
import SertifikasiStandar from "@/components/tentang-kami/SertifikasiStandar";
import BuktiSertifikasi from "@/components/shared/BuktiSertifikasi";
import TentangCTA from "@/components/tentang-kami/TentangCTA";

export const metadata = {
  title: "Tentang Kami | PT Selera Sukses Bersama",
  description:
    "Mengenal PT Selera Sukses Bersama — partner distribusi makanan dan foodservice terpercaya di Indonesia.",
};

export default function TentangKami() {
  return (
    <main>
      <TentangHero />
      <PerjalananKami />
      <VisiMisi />
      <NilaiPerusahaan />
      <SegmenStats />
      <JangkauanDistribusi />
      <SertifikasiStandar />
      <BuktiSertifikasi />
      <TentangCTA />
    </main>
  );
}
