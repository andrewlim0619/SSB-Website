import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="container-pad py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
              Katalog Produk
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Produk Kami
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Berbagai pilihan frozen food, saus, dan cemilan berkualitas untuk
              kebutuhan foodservice dan bisnis Anda.
            </p>
          </div>

          <div className="relative h-52 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/banner/homepage_banner.png"
              alt="Produk SSB"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
