import FadeUp from "@/components/ui/FadeUp";

const values = [
  {
    label: "Integritas",
    desc: "Menjunjung tinggi kejujuran, transparansi, dan profesionalisme dalam setiap aktivitas bisnis.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-navy/5 text-navy",
    accent: "border-navy/10",
  },
  {
    label: "Kualitas",
    desc: "Menjaga kualitas produk dan layanan secara konsisten untuk kepuasan pelanggan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600",
    accent: "border-amber-100",
  },
  {
    label: "Keandalan",
    desc: "Menjadi mitra yang dapat diandalkan dalam kualitas produk, distribusi, dan pelayanan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 13l4 4L19 7" />
      </svg>
    ),
    color: "bg-green-50 text-green-600",
    accent: "border-green-100",
  },
  {
    label: "Kemitraan",
    desc: "Membangun hubungan jangka panjang yang saling menguntungkan bagi semua pihak.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-teal/8 text-teal",
    accent: "border-teal/15",
  },
  {
    label: "Inovasi",
    desc: "Terus berinovasi untuk menghadirkan solusi terbaik sesuai kebutuhan pasar yang berkembang.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600",
    accent: "border-purple-100",
  },
];

export default function NilaiPerusahaan() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Nilai Perusahaan</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Nilai Perusahaan Kami</h2>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <FadeUp key={v.label} delay={i * 70}>
              <div className={`rounded-2xl border ${v.accent} bg-white p-5 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow`}>
                <div className={`w-14 h-14 rounded-xl ${v.color} border ${v.accent} flex items-center justify-center mb-4`}>
                  {v.icon}
                </div>
                <h3 className="text-sm font-bold text-navy mb-2">{v.label}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
