import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const reasons = [
  { title: "15+ Tahun Pengalaman", desc: "Rekam jejak panjang dalam distribusi produk makanan berkualitas tinggi." },
  { title: "Produk Halal & Berkualitas", desc: "Seluruh produk bersertifikat halal dan memenuhi standar keamanan pangan." },
  { title: "Dukungan Pengembangan Produk", desc: "Tim kami siap membantu dari konsep hingga produk siap jual." },
  { title: "Portofolio Produk yang Konsisten", desc: "Konsistensi rasa dan kualitas terjaga di setiap batch produksi." },
  { title: "Distribusi Andal", desc: "Jaringan distribusi yang kuat menjamin pengiriman tepat waktu ke seluruh Indonesia." },
  { title: "Fleksibel Sesuai Kebutuhan", desc: "Solusi yang dapat disesuaikan dengan skala dan kebutuhan bisnis Anda." },
];

const photos = [
  { src: "/images/products/dimsum/hakau_udang_1.png", alt: "Hakau Udang", fit: "object-contain" },
  { src: "/images/products/sauce/duck_sauce.png", alt: "Duck Sauce", fit: "object-contain" },
  { src: "/images/products/dimsum/chicken_shrimp_dumpling.png", alt: "Chicken Shrimp Dumpling", fit: "object-contain" },
  { src: "/images/products/snack/crispy_fish_skin.png", alt: "Crispy Fish Skin", fit: "object-contain" },
];

export default function MengapaBermitra() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: reasons */}
          <FadeUp>
            <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Keunggulan Kami</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 leading-tight">
              Mengapa Bermitra<br />dengan SSB?
            </h2>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{r.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Right: product photo mosaic */}
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 gap-3">
              {photos.map((p) => (
                <div key={p.src} className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 shadow-sm aspect-square">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
