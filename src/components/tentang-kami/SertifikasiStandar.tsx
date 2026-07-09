import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const certs = [
  {
    label: "Halal MUI",
    desc: "Seluruh produk diproduksi sesuai standar halal yang telah disertifikasi MUI.",
    icon: <Image src="/images/icons/halal-badge.svg" alt="Halal MUI" width={32} height={32} className="w-8 h-8 object-contain" />,
    color: "text-green-600",
    bg: "bg-green-50 border-green-100",
  },
  {
    label: "Kepatuhan BPOM",
    desc: "Produk memenuhi regulasi keamanan pangan sesuai ketentuan BPOM Indonesia.",
    icon: <Image src="/images/icons/BADAN_POM.png" alt="BPOM" width={32} height={32} className="w-8 h-8 object-contain" />,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    label: "Lisensi KAN",
    desc: "Akreditasi nasional yang memastikan kompetensi dan standar sistem manajemen mutu.",
    icon: <Image src="/images/icons/mbrio.png" alt="KAN" width={32} height={32} className="w-8 h-8 object-contain" />,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
