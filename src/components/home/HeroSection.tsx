import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/Homepage%20Banner.png"
          alt="PT Selera Sukses Bersama — Supplier Frozen Dimsum dan Makanan Premium Indonesia"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Horizontal gradient — white on left, transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 70%)",
          }}
        />
        {/* Extra mobile overlay — covers full image lightly so text stays readable on small screens */}
        <div className="absolute inset-0 bg-white/30 md:hidden" />
      </div>

      {/* Text */}
      <div className="relative z-10 w-full py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-lg">

          <span
            className="inline-block bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded mb-4 tracking-wider uppercase"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.1s both" }}
          >
            Distributor &amp; Supplier Frozen Food Indonesia
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.25s both" }}
          >
            Supplier &amp; Distributor{" "}
            <span className="text-teal">
              Frozen Food &amp; Dimsum Premium
            </span>{" "}
            Jakarta &amp; Indonesia
          </h1>

          <p
            className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}
          >
            PT Selera Sukses Bersama adalah distributor dan supplier frozen food,
            frozen dimsum SKS, serta saus premium The Duck King — melayani hotel,
            restoran, kafe, retail, dan distributor di Jakarta, Jabodetabek, dan
            seluruh Indonesia.
          </p>
          <p
            className="text-gray-600 text-sm mb-8 leading-relaxed"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}
          >
            Produk halal bersertifikat, kualitas konsisten, distribusi andal —
            solusi frozen food B2B terpercaya untuk bisnis Anda.
          </p>

          <div
            className="flex flex-wrap gap-3"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.55s both" }}
          >
            <Link href="/produk" className="btn-primary">
              LIHAT PRODUK
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/hubungi-kami" className="btn-outline">
              HUBUNGI KAMI
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
