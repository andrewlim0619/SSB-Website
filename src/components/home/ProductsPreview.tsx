import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const categories = [
  {
    title: "Dimsum Frozen",
    description:
      "Pilihan dimsum premium siap saji dengan cita rasa autentik dan kualitas terbaik.",
    image: "/images/products/dimsum/hakau_udang_2.png",
    href: "/produk?kategori=dimsum",
  },
  {
    title: "Aneka Saus",
    description:
      "Beragam saus berkualitas untuk melengkapi kebutuhan foodservice maupun retail.",
    image: "/images/products/sauce/xo_sauce.png",
    href: "/produk?kategori=saus",
  },
  {
    title: "Camilan",
    description:
      "Pilihan camilan premium yang cocok untuk berbagai segmen pasar.",
    image: "/images/products/snack/crispy_fish_skin.png",
    href: "/produk?kategori=camilan",
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">

        {/* Header row */}
        <FadeUp className="flex items-center justify-between mb-10">
          <div className="flex-1" />
          <h2 className="section-title text-center flex-shrink-0">Produk Kami</h2>
          <div className="flex-1 flex justify-end">
            <Link
              href="/produk"
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal transition-colors"
            >
              LIHAT SEMUA PRODUK
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <FadeUp key={cat.title} delay={i * 100}>
              <Link
                href={cat.href}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow block h-64 sm:h-72"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(27,58,107,0.70) 0%, rgba(27,58,107,0.30) 40%, rgba(27,58,107,0) 65%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-3 pt-4">
                  <h3 className="font-bold text-white text-lg mb-1">{cat.title}</h3>
                  <p className="text-white/75 text-sm mb-3 leading-snug">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-300">
                    Lihat Produk
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link href="/produk" className="btn-primary">
            LIHAT SEMUA PRODUK
          </Link>
        </div>

      </div>
    </section>
  );
}
