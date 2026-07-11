import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

export default function TentangCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <Image
        src="/images/banner/warehouse.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-15"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(27,58,107,0.95) 0%, rgba(0,168,150,0.25) 100%)",
        }}
      />

      <div className="relative z-10 container-pad text-center">
        <FadeUp>
          <span className="inline-block text-xs font-bold text-teal uppercase tracking-widest mb-4 border border-teal/30 px-3 py-1 rounded-full">
            Bergabung Bersama Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Siap Menjadi Mitra Bisnis Anda
          </h2>
          <p className="text-white/65 text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Hubungi tim kami untuk mendiskusikan kebutuhan produk dan distribusi makanan yang sesuai untuk bisnis Anda.
          </p>
          <Link href="/hubungi-kami" className="btn-teal inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            HUBUNGI KAMI SEKARANG
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
