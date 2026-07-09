import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const logoClients = [
  { name: "Sheraton Hotels & Resorts", image: "/images/client%20logos/client%20company%20logos/sheraton-hotels-resorts-seeklogo.png",  scale: 1.1 },
  { name: "Le Méridien",               image: "/images/client%20logos/client%20company%20logos/le-meridien-seeklogo.png",              scale: 1.0 },
  { name: "Pullman Hotels & Resorts",  image: "/images/client%20logos/client%20company%20logos/pullman.png",                           scale: 1.1 },
  { name: "The Dharmawangsa Jakarta",  image: "/images/client%20logos/client%20company%20logos/the-dharmawangsa-seeklogo.png",         scale: 1.0 },
  { name: "Atria Hotels",              image: "/images/client%20logos/client%20company%20logos/atria_hotels-Photoroom.png",            scale: 1.2 },
];

const textClients = [
  "Park Hyatt",
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

const dotBg = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function KlienKami() {
  return (
    <section className="py-16 bg-navy relative overflow-hidden" style={dotBg}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2347]" />

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {logoClients.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl px-5 py-5 flex items-center justify-center h-24 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <div className="relative w-full h-full" style={{ transform: `scale(${c.scale})` }}>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Text-only clients */}
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

      </div>
    </section>
  );
}
