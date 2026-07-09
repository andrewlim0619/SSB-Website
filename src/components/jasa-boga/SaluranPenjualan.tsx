import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const platforms = [
  { name: "Tokopedia",           image: "/images/icons/tokopedia_full_logo.png",                                 scale: 1.0 },
  { name: "Blibli",              image: "/images/icons/blibli_logo.png",                                        scale: 1.0 },
  { name: "99 Ranch Market",     image: "/images/client%20logos/platform/99_ranch_market_logo.png",             scale: 1.4 },
  { name: "Allfresh",            image: "/images/client%20logos/platform/Allfresh_processed.png",               scale: 1.2 },
  { name: "Diamond Supermarket", image: "/images/client%20logos/platform/Diamond-Supermarket_processed.png",    scale: 1.2 },
  { name: "Foodhall",            image: "/images/client%20logos/platform/Logo-Foodhall-800x480_processed.png",  scale: 1.1 },
  { name: "Grand Lucky",         image: "/images/client%20logos/platform/grandlucky_processed.png",             scale: 1.3 },
  { name: "Papaya Market",       image: "/images/client%20logos/platform/Papaya-Market_processed.png",          scale: 1.3 },
  { name: "Rumah Buah",          image: "/images/client%20logos/platform/logo-partner-13-rumah-buah-logo.jpeg", scale: 1.4 },
  { name: "Mbrio",               image: "/images/icons/mbrio.png",                                             scale: 1.2 },
];

const doubled = [...platforms, ...platforms];

export default function SaluranPenjualan() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">

      <div className="container-pad">
        <FadeUp className="text-center mb-12">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Platform Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Saluran Penjualan Kami</h2>
          <p className="text-sm text-gray-500 mt-2">Temukan produk SSB di berbagai platform terpercaya.</p>
        </FadeUp>
      </div>

      {/* Marquee — full bleed so fade reaches screen edges */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-5 w-max"
          style={{ animation: "ssb-marquee 30s linear infinite" }}
        >
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-2xl px-7 py-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-teal/40 transition-all duration-300 hover:scale-105"
              style={{ width: "160px", height: "80px" }}
            >
              <div className="relative w-full h-full" style={{ transform: `scale(${p.scale})` }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
