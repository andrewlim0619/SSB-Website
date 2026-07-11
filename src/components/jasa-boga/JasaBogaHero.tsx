import Image from "next/image";
import Link from "next/link";

export default function JasaBogaHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/Jasa Boga Banner.png"
          alt="Jasa Boga SSB"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 32%, rgba(255,255,255,0.50) 58%, rgba(255,255,255,0) 74%)",
          }}
        />
        <div className="absolute inset-0 bg-white/40 md:hidden" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full py-14 px-6 sm:px-12 lg:px-20">
        <div className="max-w-xl">
          <span
            className="inline-block bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded mb-5 tracking-wider uppercase"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.1s both" }}
          >
            Jasa Boga
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.25s both" }}
          >
            Solusi Makanan untuk{" "}
            <span className="text-teal">Bisnis Anda</span>
          </h1>

          <p
            className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}
          >
            Kami membantu hotel, restoran, kafe, retail, distributor, dan industri makanan menghadirkan produk berkualitas melalui solusi produk siap pakai maupun pengembangan produk custom.
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
              DISKUSIKAN KEBUTUHAN ANDA
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
