import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function MarketplaceSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background: homepage banner */}
      <Image
        src="/images/banner/homepage_banner.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority={false}
      />

      {/* Mobile: soft full overlay so text is readable on portrait screens */}
      <div className="absolute inset-0 bg-white/40 md:hidden" />

      {/* Teal gradient — horizontal, left heavy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,168,150,0.45) 0%, rgba(0,168,150,0.28) 45%, rgba(0,168,150,0.08) 70%, rgba(0,168,150,0.00) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-pad">
        <FadeUp className="max-w-lg">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-2 md:text-white/70">
            Belanja Online
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy md:text-white mb-3 leading-snug">
            Tersedia di Marketplace Terpercaya
          </h2>
          <p className="text-gray-700 md:text-white/80 text-sm mb-8 leading-relaxed">
            Temukan berbagai produk pilihan kami melalui marketplace resmi
            untuk kemudahan pembelian retail.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white rounded-xl px-5 py-3 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              style={{ minWidth: 160, height: 60 }}
            >
              <Image
                src="/images/icons/tokopedia_full_logo.png"
                alt="Tokopedia"
                width={140}
                height={38}
                className="object-contain"
                unoptimized
              />
            </a>
            <a
              href="#"
              className="bg-white rounded-xl px-5 py-3 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              style={{ minWidth: 120, height: 60 }}
            >
              <Image
                src="/images/icons/blibli_logo.png"
                alt="Blibli"
                width={100}
                height={34}
                className="object-contain"
                unoptimized
              />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
