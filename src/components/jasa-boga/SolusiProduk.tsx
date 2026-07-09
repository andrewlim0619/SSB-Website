import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const produk = [
  {
    title: "Frozen Dimsum",
    desc: "Pengembangan dan distribusi dimsum premium siap saji dengan cita rasa autentik.",
    image: "/images/products/dimsum/hakau_udang_1.png",
    fit: "object-contain",
    href: "/produk",
  },
  {
    title: "Sauces & Condiments",
    desc: "Rangkaian saus dan bumbu berkualitas untuk kebutuhan foodservice dan retail.",
    image: "/images/products/sauce/duck_sauce.png",
    fit: "object-contain",
    href: "/produk",
  },
  {
    title: "Custom Products",
    desc: "Pengembangan produk custom sesuai kebutuhan dan spesifikasi bisnis Anda.",
    image: "/images/products/dimsum/chicken_shrimp_dumpling.png",
    fit: "object-contain",
    href: "/hubungi-kami",
  },
];

export default function SolusiProduk() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container-pad">
        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Produk Unggulan</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Solusi Produk Kami</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produk.map((p, i) => (
            <FadeUp key={p.title} delay={i * 80}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="relative h-52 bg-gray-50">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className={`${p.fit} p-4`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-navy mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal uppercase tracking-wide hover:gap-2.5 transition-all"
                  >
                    LIHAT PRODUK
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
