import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const certs = [
  {
    title: "Sertifikat Sistem Jaminan Halal",
    issuer: "LPPOM MUI",
    category: "Halal",
    year: "2023",
    url: "/certifications/20231228%20Sertifikat%20Sistem%20Jaminan%20Halal.pdf",
    badgeBg: "bg-green-100 text-green-700",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Sertifikat Lisensi KAN",
    issuer: "PT Sentra Kuliner Sejahtera",
    category: "KAN",
    year: "2026",
    url: "/certifications/20260304%20Sertifikat%20PT%20Sentra%20Kuliner%20Sejahtera%20lisensiKAN%20esign.pdf",
    badgeBg: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Nomor Izin Edar BPOM – Siomay Ayam & Udang",
    issuer: "BPOM Indonesia",
    category: "BPOM",
    year: "2025",
    url: "/certifications/NIE_ERBA300576202500005%20SKS%20Siomay%20isi%20Ayam%20dan%20Udang.pdf",
    badgeBg: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Registrasi BPOM – Siomay Ayam & Udang",
    issuer: "BPOM Indonesia",
    category: "BPOM",
    year: "2021",
    url: "/certifications/NIE_EREG305111202100003_signed%20SKS%20Siomay%20Ayam%20Dan%20Udang.pdf",
    badgeBg: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Sertifikat Provinsi Banten",
    issuer: "Pemerintah Provinsi Banten",
    category: "Pemerintah",
    year: "–",
    url: "/certifications/Provinsi%20Banten%20Sertifikat.png",
    badgeBg: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function BuktiSertifikasi() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">

        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Transparansi & Kepercayaan</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Bukti Sertifikasi SSB</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-lg mx-auto">
            Dokumen resmi yang membuktikan komitmen kami terhadap standar kualitas dan keamanan pangan.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <FadeUp key={c.title} delay={i * 80}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-lg p-6 flex flex-col gap-4 transition-all duration-200 h-full"
              >
                {/* Icon + badge row */}
                <div className="flex items-start justify-between">
                  {c.category === "Halal" ? (
                    <Image src="/images/icons/halal-badge.svg" alt="Halal" width={40} height={40} className="w-10 h-10 object-contain" />
                  ) : c.category === "BPOM" ? (
                    <Image src="/images/icons/BADAN_POM.png" alt="BPOM" width={40} height={40} className="w-10 h-10 object-contain" />
                  ) : c.category === "KAN" ? (
                    <Image src="/images/icons/mbrio.png" alt="KAN" width={40} height={40} className="w-10 h-10 object-contain" />
                  ) : (
                    <svg className={`w-8 h-8 ${c.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badgeBg}`}>
                    {c.category}
                  </span>
                </div>

                {/* Title + issuer */}
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-navy leading-snug mb-1">{c.title}</h3>
                  <p className="text-xs text-gray-400">{c.issuer} · {c.year}</p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-teal text-xs font-bold group-hover:gap-2.5 transition-all duration-200">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Lihat Sertifikat
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
