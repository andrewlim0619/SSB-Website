import Link from "next/link";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Jasa Boga", href: "/jasa-boga" },
  { label: "Hubungi Kami", href: "/hubungi-kami" },
];

const MAPS_URL =
  "https://www.google.com/maps/place/PT.+Sentra+Kuliner+Sejahtera/@-6.1946505,106.6822969,17z/data=!4m15!1m8!3m7!1s0x2e69f9a4b0e6ecd1:0xfe1afe79797bd927!2sPT.+Sentra+Kuliner+Sejahtera!8m2!3d-6.1946505!4d106.6871625!10e1!16s%2Fg%2F11c200dh23!3m5!1s0x2e69f9a4b0e6ecd1:0xfe1afe79797bd927!8m2!3d-6.1946505!4d106.6871625!16s%2Fg%2F11c200dh23?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";

export default function Footer() {
  return (
    <footer
      className="bg-navy text-white relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Teal glow accent top-right */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-teal/8 blur-3xl pointer-events-none" />

      <div className="relative container-pad py-14">
        {/* 4-column grid with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

          {/* ── LOKASI ── */}
          <div className="pb-10 md:pb-0 md:pr-10">
            <p className="text-teal text-[10px] font-bold uppercase tracking-widest mb-1">Kantor Kami</p>
            <h3 className="font-bold text-base mb-4 tracking-wide">LOKASI</h3>

            <div className="flex items-start gap-2 text-sm text-gray-300 mb-4">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="leading-relaxed">
                Jl. Kav DPR blok A4 no 169-170,<br />
                Cipondoh, Kota Tangerang,<br />
                Banten 15148
              </span>
            </div>

            {/* Map preview card */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/10 hover:border-teal/60 transition-all group"
              aria-label="Buka di Google Maps"
            >
              {/* Stylised map tile */}
              <div
                className="relative h-28"
                style={{
                  background: "#162d50",
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              >
                {/* Road lines */}
                <div className="absolute inset-0">
                  <div className="absolute left-0 right-0 h-px bg-white/20" style={{ top: "45%" }} />
                  <div className="absolute left-0 right-0 h-px bg-white/10" style={{ top: "70%" }} />
                  <div className="absolute top-0 bottom-0 w-px bg-white/20" style={{ left: "38%" }} />
                  <div className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: "65%" }} />
                </div>

                {/* Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center drop-shadow-lg">
                    <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-0.5 h-2 bg-teal" />
                    <div className="w-2 h-0.5 bg-teal/60 rounded-full" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-xs font-semibold text-white">Buka di Google Maps</span>
                </div>
              </div>
            </a>
          </div>

          {/* ── QUICK LINKS ── */}
          <div className="py-10 md:py-0 md:px-10">
            <p className="text-teal text-[10px] font-bold uppercase tracking-widest mb-1">Navigasi</p>
            <h3 className="font-bold text-base mb-4 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2 group">
                  <svg className="w-3 h-3 text-teal/50 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── HUBUNGI KAMI ── */}
          <div className="pt-10 md:pt-0 md:pl-10">
            <p className="text-teal text-[10px] font-bold uppercase tracking-widest mb-1">Kontak</p>
            <h3 className="font-bold text-base mb-4 tracking-wide">HUBUNGI KAMI</h3>

            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              {/* Email */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:sales@selerasuksesbersama.com" className="hover:text-teal transition-colors">
                  sales@selerasuksesbersama.com
                </a>
              </li>
            </ul>

            {/* Social icon buttons */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-teal hover:text-teal text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="mailto:sales@selerasuksesbersama.com" aria-label="Email" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-teal hover:text-teal text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="pt-10 md:pt-0 md:pl-10">
            <p className="text-teal text-[10px] font-bold uppercase tracking-widest mb-1">Mulai Sekarang</p>
            <h3 className="font-bold text-base mb-3 tracking-wide leading-snug">
              Punya Ide Produk atau<br />Kebutuhan Khusus?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Tim kami siap membantu Anda mengembangkan solusi makanan terbaik untuk bisnis Anda.
            </p>
            <Link
              href="/hubungi-kami"
              className="btn-teal text-xs px-4 py-2.5 inline-flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              HUBUNGI KAMI SEKARANG
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-pad py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>© 2024 PT Selera Sukses Bersama. All rights reserved.</span>
          <span className="text-gray-500">Jl. Kav DPR blok A4 no 169-170, Cipondoh, Tangerang</span>
        </div>
      </div>
    </footer>
  );
}
