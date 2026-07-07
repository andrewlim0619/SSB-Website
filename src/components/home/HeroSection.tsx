import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/homepage_banner.png"
          alt="SSB Food Products"
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
            Food Distribution &amp; Foodservice Solutions
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.25s both" }}
          >
            Mitra Terpercaya untuk{" "}
            <span className="text-teal">
              Solusi Foodservice &amp; Distribusi Makanan
            </span>
          </h1>

          <p
            className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}
          >
            PT Selera Sukses Bersama menyediakan produk makanan beku, dimsum
            premium, saus, dan camilan berkualitas tinggi untuk hotel, restoran,
            kafe, retail, distributor, dan industri makanan di seluruh Indonesia.
          </p>
          <p
            className="text-gray-600 text-sm mb-8 leading-relaxed"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}
          >
            Dengan fokus pada kualitas produk, konsistensi rasa, dan distribusi
            yang andal, kami membantu bisnis Anda menghadirkan solusi makanan
            yang praktis dan bernilai.
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
