import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const contoh = [
  {
    tag: "Custom Product",
    title: "Custom Bampao",
    desc: "Pengembangan varian bao custom sesuai selera pasar lokal dengan cita rasa autentik dan kemasan menarik.",
    image: "/images/products/dimsum/chasiew_pao.png",
    fit: "object-contain",
  },
  {
    tag: "Private Label",
    title: "Private Label Sauce",
    desc: "Pengembangan saus dengan merek klien, mulai dari formulasi rasa hingga desain kemasan yang retail-ready.",
    image: "/images/products/sauce/duck_sauce.png",
    fit: "object-contain",
  },
  {
    tag: "Custom Dimsum",
    title: "Custom Dimsum Development",
    desc: "Kreasi dimsum eksklusif yang disesuaikan dengan menu dan standar kualitas restoran klien.",
    image: "/images/products/dimsum/chicken_shrimp_dumpling.png",
    fit: "object-contain",
  },
];

export default function ContohSolusi() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Portofolio</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Contoh Solusi yang Pernah Kami Kerjakan
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contoh.map((c, i) => (
            <FadeUp key={c.title} delay={i * 80}>
              <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="relative h-44 bg-gray-50">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className={`${c.fit} p-4`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block text-[10px] font-bold text-teal uppercase tracking-widest bg-teal/8 px-2.5 py-1 rounded mb-3 w-fit"
                    style={{ backgroundColor: "rgba(0,168,150,0.1)" }}>
                    {c.tag}
                  </span>
                  <h3 className="text-sm font-bold text-navy mb-2">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{c.desc}</p>
                  <Link
                    href="/hubungi-kami"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal uppercase tracking-wide mt-4 hover:gap-2.5 transition-all"
                  >
                    LIHAT DETAIL
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
