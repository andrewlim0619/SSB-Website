import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const highlights = [
  {
    icon: (
      <svg className="w-4 h-4 shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Produk Berkualitas",
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    label: "Konsistensi Rasa",
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Layanan Profesional",
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "Kemitraan Jangka Panjang",
  },
];

export default function AboutTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Warehouse photo */}
          <FadeUp delay={0}>
            <div className="relative rounded-xl overflow-hidden h-72 md:h-80 shadow-md">
              <Image
                src="/images/banner/warehouse.jpg"
                alt="Gudang distribusi SSB"
                fill
                className="object-cover object-center"
              />
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={150}>
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
              Tentang Kami
            </p>
            <h2 className="section-title mb-4">PT Selera Sukses Bersama</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              PT Selera Sukses Bersama merupakan perusahaan distribusi makanan yang
              berkomitmen menghadirkan produk berkualitas tinggi untuk kebutuhan
              foodservice dan retail. Kami melayani hotel, restoran, kafe, katering,
              distributor, convenience store dan pelaku usaha kuliner dengan fokus pada
              kualitas produk, konsistensi rasa, dan layanan distribusi yang dapat
              diandalkan.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 text-sm text-gray-700">
                  {h.icon}
                  <span className="font-medium">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <Link href="/tentang-kami" className="btn-primary">
                LEBIH LANJUT TENTANG KAMI
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
