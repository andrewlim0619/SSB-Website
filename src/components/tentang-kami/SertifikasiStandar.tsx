import FadeUp from "@/components/ui/FadeUp";

const certs = [
  {
    label: "Halal MUI",
    desc: "Seluruh produk diproduksi sesuai standar halal yang telah disertifikasi MUI.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "text-green-600",
    bg: "bg-green-50 border-green-100",
  },
  {
    label: "Kepatuhan BPOM",
    desc: "Produk memenuhi regulasi keamanan pangan sesuai ketentuan BPOM Indonesia.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    label: "Food Safety",
    desc: "Penerapan standar keamanan pangan di seluruh proses produksi dan distribusi.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "text-teal",
    bg: "bg-teal/5 border-teal/15",
  },
  {
    label: "Quality Control",
    desc: "Proses quality control ketat di setiap tahap untuk memastikan konsistensi produk.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "text-navy",
    bg: "bg-navy/5 border-navy/10",
  },
  {
    label: "Standar Gudang",
    desc: "Fasilitas penyimpanan berstandar untuk menjaga kualitas dan kesegaran produk.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
  },
];

export default function SertifikasiStandar() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container-pad">
        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Komitmen Kualitas</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Sertifikasi & Standar</h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Kami berkomitmen menjaga kualitas produk melalui penerapan standar keamanan pangan dan proses distribusi yang terkontrol.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {certs.map((c, i) => (
            <FadeUp key={c.label} delay={i * 60}>
              <div className={`rounded-2xl border ${c.bg} p-5 flex flex-col items-center text-center gap-3 h-full`}>
                <div className={`${c.color}`}>{c.icon}</div>
                <h3 className="text-xs font-bold text-navy">{c.label}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
