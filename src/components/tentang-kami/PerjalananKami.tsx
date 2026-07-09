import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const milestones = [
  {
    year: "2020",
    title: "Perusahaan Didirikan",
    desc: "SSB berdiri dengan visi menjadi mitra distribusi makanan berkualitas bagi bisnis di Indonesia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    year: "2021",
    title: "Memulai Distribusi Foodservice",
    desc: "Fokus pada penyediaan produk frozen food, saus, dan bahan makanan untuk segmen foodservice.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    year: "2023",
    title: "Ekspansi Portofolio Produk",
    desc: "Menambah variasi produk berkualitas untuk memenuhi kebutuhan pasar yang terus berkembang.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Melayani Seluruh Indonesia",
    desc: "Memperluas jaringan distribusi dan melayani ratusan mitra bisnis di berbagai wilayah Indonesia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function PerjalananKami() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: image */}
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 md:h-96">
              <Image
                src="/images/banner/homepage_banner.png"
                alt="SSB Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </div>
          </FadeUp>

          {/* Right: timeline */}
          <FadeUp delay={100}>
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-2 block">
              Perjalanan Kami
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 leading-tight">
              Komitmen untuk Tumbuh<br />Bersama Mitra Kami
            </h2>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200" />

              <ol className="space-y-6">
                {milestones.map((m) => (
                  <li key={m.year} className="flex items-start gap-4">

                    {/* Icon circle — outline style */}
                    <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-navy shrink-0 z-10">
                      {m.icon}
                    </div>

                    {/* Year + title + desc */}
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-300 text-sm font-bold">•</span>
                        <span className="text-base font-bold text-teal">{m.year}</span>
                      </div>
                      <h3 className="text-sm font-bold text-navy mb-1">{m.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>

                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
