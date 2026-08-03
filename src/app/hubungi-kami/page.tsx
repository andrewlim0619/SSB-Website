import ContactForm from "@/components/hubungi-kami/ContactForm";
import FadeUp from "@/components/ui/FadeUp";

export default function HubungiKami() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">

      {/* Faded warehouse background */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner/warehouse.jpg')", opacity: 0.08 }}
      />
      {/* Light overlay to keep it clean */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/60 via-transparent to-white/40" />

      {/* Content */}
      <section className="relative z-10 py-16">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">

            {/* Left — info panel */}
            <FadeUp>
              <div className="space-y-8">

                <div>
                  <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Kontak</span>
                  <h1 className="text-2xl md:text-3xl font-bold text-navy mb-2">Hubungi Kami</h1>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Tertarik bermitra dengan SSB? Kirim pesan dan tim kami akan merespons dalam 1–2 hari kerja.
                  </p>
                </div>

                <div className="h-px bg-navy/10" />

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy/50 uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:sales@selerasuksesbersama.com" className="text-sm text-teal font-semibold hover:text-navy transition-colors">
                        sales@selerasuksesbersama.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy/50 uppercase tracking-wide mb-0.5">Lokasi</p>
                      <p className="text-sm text-gray-600">Jakarta, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy/50 uppercase tracking-wide mb-0.5">Jam Operasional</p>
                      <p className="text-sm text-gray-600">Senin – Jumat, 08.00 – 17.00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-navy/10" />

                <div>
                  <h3 className="text-sm font-bold text-navy mb-3">Anda bisa menghubungi kami untuk:</h3>
                  <ul className="space-y-2">
                    {[
                      "Informasi harga & penawaran produk",
                      "Kemitraan distribusi & reseller",
                      "Layanan jasa boga & private label",
                      "Pertanyaan produk & sertifikasi",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={120}>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
                <h2 className="text-lg font-bold text-navy mb-1">Kirim Pesan</h2>
                <p className="text-xs text-gray-400 mb-6">Field bertanda <span className="text-teal font-bold">*</span> wajib diisi.</p>
                <ContactForm />
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

    </main>
  );
}
