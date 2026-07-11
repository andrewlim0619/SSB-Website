import FadeUp from "@/components/ui/FadeUp";

const misi = [
  {
    num: "1",
    text: "Menyediakan produk halal, aman, dan berkualitas tinggi.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: "2",
    text: "Memberikan layanan distribusi yang cepat, konsisten, dan profesional.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "3",
    text: "Membangun kemitraan yang saling menguntungkan dengan pelanggan dan mitra usaha.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "4",
    text: "Mengembangkan inovasi produk dan layanan sesuai kebutuhan pasar.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const dotBg = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

export default function VisiMisi() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container-pad">
        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Visi & Misi Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Landasan Arah Pertumbuhan Kami</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* VISI card — navy */}
          <FadeUp delay={80}>
            <div
              className="relative bg-navy rounded-2xl p-8 flex flex-col h-full overflow-hidden"
              style={dotBg}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 rounded-full blur-2xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal/20 border border-teal/30 flex items-center justify-center text-teal shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold text-teal uppercase tracking-widest">VISI</p>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Menjadi perusahaan distribusi makanan dan minuman terpercaya di Indonesia yang dikenal atas kualitas produk, layanan profesional, dan kemitraan jangka panjang.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* MISI — 2 cols */}
          <FadeUp delay={140} className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="6" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="2" strokeWidth="1.8" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-teal uppercase tracking-widest">MISI</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {misi.map((m) => (
                  <div key={m.num} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-navy shrink-0">
                      {m.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-teal uppercase tracking-widest block mb-1">
                        {m.num.padStart(2, "0")}
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
