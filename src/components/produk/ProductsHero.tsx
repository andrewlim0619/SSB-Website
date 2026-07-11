import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/Produk Banner.png"
          alt="Produk SSB"
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
        {/* Mobile overlay — keeps text readable on phones */}
        <div className="absolute inset-0 bg-white/40 md:hidden" />
      </div>

      {/* Text */}
      <div className="relative z-10 w-full py-14 px-6 sm:px-12 lg:px-20">
        <div className="max-w-lg">

          <span
            className="inline-block bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded mb-4 tracking-wider uppercase"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.1s both" }}
          >
            Katalog Produk
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.25s both" }}
          >
            Produk{" "}
            <span className="text-teal">Berkualitas</span>{" "}
            untuk Bisnis Anda
          </h1>

          <p
            className="text-gray-700 text-sm md:text-base leading-relaxed"
            style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}
          >
            Berbagai pilihan frozen food, dimsum premium, saus, dan cemilan berkualitas
            untuk kebutuhan foodservice, hotel, restoran, dan distribusi di seluruh Indonesia.
          </p>

        </div>
      </div>

    </section>
  );
}
