import Image from "next/image";
import Link from "next/link";

const dotBg = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function PreFooterCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-navy">
      <div className="absolute inset-0" style={dotBg} />
      <Image
        src="/images/banner/warehouse.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-10"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(27,58,107,0.95) 0%, rgba(27,58,107,0.75) 100%)",
        }}
      />

      <div className="relative z-10 container-pad text-center">
        <p
          className="text-xs font-bold text-teal uppercase tracking-widest mb-3"
          style={{ animation: "ssb-fade-up 0.6s ease-out 0.1s both" }}
        >
          Mulai Sekarang
        </p>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
          style={{ animation: "ssb-fade-up 0.6s ease-out 0.2s both" }}
        >
          Punya Ide Produk atau<br />Kebutuhan Khusus?
        </h2>
        <p
          className="text-sm text-white/70 mb-8 max-w-md mx-auto leading-relaxed"
          style={{ animation: "ssb-fade-up 0.6s ease-out 0.3s both" }}
        >
          Tim kami siap membantu Anda mengembangkan solusi makanan terbaik untuk bisnis Anda.
        </p>
        <div style={{ animation: "ssb-fade-up 0.6s ease-out 0.4s both" }}>
          <Link href="/hubungi-kami" className="btn-teal inline-flex items-center gap-2 mx-auto">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            HUBUNGI KAMI SEKARANG
          </Link>
        </div>
      </div>
    </section>
  );
}
