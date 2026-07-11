import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const BASE = "/images/client%20logos/client%20company%20logos";

const logoClients = [
  { name: "Ahmad Dhan Master Piece Family Karaoke", image: `${BASE}/masterpiece%20karaoke.JPG`,                  scale: 0.5 },
  { name: "Ambhara Hotel Jakarta",                image: `${BASE}/ambhara-logo.png`,                             scale: 1.1 },
  { name: "Atria Hotels",                         image: `${BASE}/atria_hotels-Photoroom.png`,                   scale: 1.2 },
  { name: "Bajawa Flores",                        image: `${BASE}/bajawa_flores.png`,                            scale: 1.1 },
  { name: "Cinépolis",                            image: `${BASE}/cinepolis.png`,                                scale: 1.1 },
  { name: "Four Seasons",                         image: `${BASE}/four_seasons_hotel.png`,                       scale: 1.0 },
  { name: "Golden Tulip Hotels",                  image: `${BASE}/Logo_Golden_Tulip.png`,                        scale: 1.1 },
  { name: "Harris Hotel",                         image: `${BASE}/Logo-Harris-Hotel-4.png`,                      scale: 1.1 },
  { name: "Hotel Tentrem",                        image: `${BASE}/logo-tentrem-yog.png`,                         scale: 1.1 },
  { name: "ibis Styles",                          image: `${BASE}/Ibis_styles.png`,                              scale: 1.1 },
  { name: "Le Méridien",                          image: `${BASE}/le-meridien-seeklogo.png`,                     scale: 1.0 },
  { name: "Mercure Hotels",                       image: `${BASE}/Mercure_Hotels_Logo_2013.svg.webp`,            scale: 1.1 },
  { name: "Park Hyatt",                           image: `${BASE}/park-hyatt-vector-logo.png`,                   scale: 1.1 },
  { name: "Pullman Hotels & Resorts",             image: `${BASE}/pullman.png`,                                  scale: 0.55 },
  { name: "Sheraton Hotels & Resorts",            image: `${BASE}/sheraton-hotels-resorts-seeklogo.png`,         scale: 1.1 },
  { name: "Swiss-Belhotel",                       image: `${BASE}/Swiss-Belhotel%2BLogo%2B%28Vertical%29.svg`,  scale: 0.9 },
  { name: "The Dharmawangsa Jakarta",             image: `${BASE}/the-dharmawangsa-seeklogo.png`,                scale: 1.0 },
];

const textClients: string[] = [];

export default function KlienKami() {
  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2347]" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 24px)",
      }} />

      {/* Teal glow blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-teal/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 container-pad">

        <FadeUp className="text-center mb-12">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Klien Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Dipercaya oleh Bisnis Terkemuka</h2>
          <p className="text-sm text-white/50 mt-2 max-w-lg mx-auto">
            Hotel bintang lima, jaringan internasional, hingga destinasi hiburan terkemuka di Indonesia.
          </p>
        </FadeUp>

        {/* Logo clients */}
        <FadeUp delay={80}>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {logoClients.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl border border-transparent hover:border-teal/25 px-4 pt-4 pb-3 flex flex-col items-center shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-200 w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] lg:w-[calc(25%-9px)]"
              >
                {/* Logo image — fixed height so fill has a reference */}
                <div className="relative w-full h-12">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-contain"
                    style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                {/* Name label */}
                <p className="text-[9px] font-semibold text-gray-400 text-center mt-2.5 leading-tight line-clamp-2 w-full">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Text-only clients */}
        {textClients.length > 0 && (
          <FadeUp delay={140}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {textClients.map((name) => (
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
        )}

      </div>
    </section>
  );
}
