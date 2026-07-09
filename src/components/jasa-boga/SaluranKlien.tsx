import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const platforms = [
  { name: "Tokopedia",           image: "/images/icons/tokopedia_full_logo.png",                                    scale: 1.0 },
  { name: "Blibli",              image: "/images/icons/blibli_logo.png",                                            scale: 1.0 },
  { name: "99 Ranch Market",     image: "/images/client%20logos/platform/99_ranch_market_logo.png",                 scale: 1.4 },
  { name: "Diamond Supermarket", image: "/images/client%20logos/platform/Diamond-Supermarket_processed.png",        scale: 1.2 },
  { name: "Foodhall",            image: "/images/client%20logos/platform/Logo-Foodhall-800x480_processed.png",      scale: 1.1 },
  { name: "Papaya Market",       image: "/images/client%20logos/platform/Papaya-Market_processed.png",              scale: 1.3 },
  { name: "Rumah Buah",          image: "/images/client%20logos/platform/logo-partner-13-rumah-buah-logo.jpeg",     scale: 1.4 },
];

const clients = [
  "Park Hyatt",
  "Sheraton Grand",
  "Le Méridien",
  "Pullman Hotels & Resorts",
  "The Dharmawangsa Jakarta",
  "Atria Hotels",
  "Ambhara Hotel Jakarta",
  "Ahmad Dhan Master Piece Family Karaoke",
  "Hotel & Conventions",
  "Cinépolis",
  "Bakawa Flores",
  "ibis Styles",
  "Swiss-Belhotel",
  "Hotel Tentrem",
  "Four Seasons",
  "Mercure Hotels",
  "Golden Tulip Hotels Inns & Resorts",
];

// Duplicate for seamless infinite loop
const doubled = [...platforms, ...platforms];

const dotBg = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function SaluranKlien() {
  return (
    <section className="py-16 bg-navy relative overflow-hidden" style={dotBg}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2347]" />

      <div className="relative z-10">

        <FadeUp className="text-center mb-12 container-pad">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Platform Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Saluran Penjualan Kami</h2>
          <p className="text-sm text-white/50 mt-2">Temukan produk SSB di berbagai platform terpercaya.</p>
        </FadeUp>

        {/* Marquee strip */}
        <div
          className="overflow-hidden group"
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
                className="flex-shrink-0 bg-white rounded-2xl px-7 py-4 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
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

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 mb-14 container-pad" />

        {/* Our Clients */}
        <FadeUp className="text-center mb-10 container-pad">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Klien Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Dipercaya oleh Bisnis Terkemuka</h2>
          <p className="text-sm text-white/50 mt-2">Hotel bintang lima, jaringan internasional, hingga destinasi hiburan terkemuka di Indonesia.</p>
        </FadeUp>

        <FadeUp delay={80} className="container-pad">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {clients.map((name) => (
              <div
                key={name}
                className="border border-white/10 rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-teal/40 hover:bg-white/5 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span className="text-sm font-medium text-white/80 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
