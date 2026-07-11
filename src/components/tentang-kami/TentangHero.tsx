import Image from "next/image";
import Link from "next/link";

export default function TentangHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/warehouse.jpg"
          alt="SSB Gudang dan Distribusi"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Horizontal gradient — white on left, transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 30%, rgba(255,255,255,0.50) 55%, rgba(255,255,255,0) 72%)",
          }}
        />
        {/* Mobile overlay — keeps text readable on small screens */}
        <div className="absolute inset-0 bg-white/40 md:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-xl">

          <span
            className="inline-block bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded mb-5 tracking-wider uppercase"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.1s both" }}
          >
            Tentang Kami
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.25s both" }}
          >
            Mengenal{" "}
            <span className="text-teal">PT Selera Sukses Bersama</span>
          </h1>

          <p
            className="text-xs font-semibold text-navy/50 uppercase tracking-widest mb-4"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.35s both" }}
          >
            Partner Distribusi Makanan &amp; Foodservice Terpercaya di Indonesia
          </p>

          <p
            className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.45s both" }}
          >
            PT Selera Sukses Bersama menyediakan solusi distribusi makanan dan minuman berkualitas untuk hotel, restoran, kafe, retail, distributor, dan industri makanan di seluruh Indonesia.
          </p>

          <div
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.58s both" }}
          >
            <Link href="/hubungi-kami" className="btn-teal">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              HUBUNGI KAMI
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
