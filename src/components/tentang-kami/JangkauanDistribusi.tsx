import dynamic from "next/dynamic";
import FadeUp from "@/components/ui/FadeUp";
import StatCounter from "./StatCounter";

const MapIndonesia = dynamic(() => import("./MapIndonesia"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl bg-gray-100 animate-pulse" style={{ height: "400px" }} />
  ),
});

const STATS = [
  { numeric: true,  target: 500,  suffix: "+", label: "Pelanggan Bisnis" },
  { numeric: true,  target: 100,  suffix: "+", label: "Produk" },
  { numeric: true,  target: 15,   suffix: "+", label: "Tahun Pengalaman" },
  { numeric: false, display: "Seluruh Indonesia", label: "Jangkauan Distribusi" },
];

export default function JangkauanDistribusi() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">

        <FadeUp className="mb-8">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">
            Distribusi Nasional
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Jangkauan Distribusi</h2>
        </FadeUp>

        {/* Map */}
        <MapIndonesia />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 pt-8 border-t border-gray-100 divide-x divide-gray-100">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 80}>
              <div className="flex flex-col items-center justify-center text-center px-4 py-2">
                <p className={`font-bold text-teal leading-tight mb-2 whitespace-nowrap ${s.numeric ? "text-4xl" : "text-xl"}`}>
                  {s.numeric ? (
                    <StatCounter target={s.target!} suffix={s.suffix} duration={1600 + i * 150} />
                  ) : (
                    s.display
                  )}
                </p>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest leading-tight">
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
