import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { ALL_PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductGallery from "@/components/produk/ProductGallery";
import FadeUp from "@/components/ui/FadeUp";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

function getGalleryImages(slug: string): string[] {
  const galleryDir = path.join(process.cwd(), "public", "images", "products", "gallery", slug);
  try {
    const files = fs
      .readdirSync(galleryDir)
      .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
      .sort((a, b) => parseInt(a) - parseInt(b));
    return files.map((f) => `/images/products/gallery/${slug}/${f}`);
  } catch {
    return [];
  }
}

const SERVING_ICONS: Record<string, React.ReactNode> = {
  freeze: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
    </svg>
  ),
  steam: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 3.5C9.75 5 8 5.5 8 7s1.75 2.5 1.75 4-1.75 2.5-1.75 4M14.25 3.5C14.25 5 12.5 5.5 12.5 7s1.75 2.5 1.75 4-1.75 2.5-1.75 4M5 20h14" />
    </svg>
  ),
  number: (
    <span className="w-5 h-5 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">3</span>
  ),
  serve: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12h18M3 12c0-1 .5-3 2-3h14c1.5 0 2 2 2 3M5 12v5a2 2 0 002 2h10a2 2 0 002-2v-5M12 3v4" />
    </svg>
  ),
  heat: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 18.657A8 8 0 016.343 7.343M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  mix: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  open: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
};

const SPEC_ICONS: Record<string, React.ReactNode> = {
  sku: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  weight: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  count: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  box: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  size: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  ),
  snow: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  badge: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const galleryImages = getGalleryImages(params.slug);
  const images = galleryImages.length > 0 ? galleryImages : [product.image];
  const related = getRelatedProducts(product);

  const specRows = [
    { icon: "sku",    label: "SKU",            value: product.specs.sku },
    { icon: "weight", label: "Berat Bersih",    value: product.specs.beratBersih },
    { icon: "count",  label: "Isi per Pack",    value: product.specs.isiPerPack },
    { icon: "weight", label: "Berat per Pcs",   value: product.specs.beratPcs },
    { icon: "box",    label: "Kemasan",         value: product.specs.kemasan },
    { icon: "size",   label: "Ukuran Tray",     value: product.specs.ukuranTray },
    { icon: "count",  label: "Isi per Karton",  value: product.specs.isiPerKarton },
    { icon: "size",   label: "Ukuran Karton",   value: product.specs.ukuranKarton },
    { icon: "snow",   label: "Penyimpanan",     value: product.specs.penyimpanan },
    { icon: "clock",  label: "Umur Simpan",     value: product.specs.umurSimpan },
    { icon: "badge",  label: "Sertifikasi",     value: product.specs.sertifikasi },
    { icon: "globe",  label: "Asal Produk",     value: product.specs.asalProduk },
  ];

  const dotBg = {
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  } as const;

  return (
    <main className="bg-white min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-pad py-3">
          <nav className="flex items-center gap-2 text-xs text-navy flex-wrap">
            <Link href="/produk" className="hover:text-teal transition-colors">Produk</Link>
            <span className="text-gray-300">›</span>
            <Link href={`/produk#${product.category}`} className="hover:text-teal transition-colors">
              {product.categoryLabel}
            </Link>
            <span className="text-gray-300">›</span>
            <span className="font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero: split panel (constrained to same width as sections below) ── */}
      <div className="container-pad py-3">
        <section className="grid grid-cols-1 md:grid-cols-[9fr_11fr]">

        {/* Left: navy + dot grid — below gallery on mobile, left column on desktop */}
        <div
          className="relative bg-navy text-white flex flex-col px-8 md:px-8 lg:px-10 py-10 md:py-12 rounded-2xl order-2 md:order-1 mt-4 md:mt-0"
          style={dotBg}
        >
          {/* Subtle teal glow blob */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          <FadeUp className="relative z-10 flex flex-col h-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-1">
              {product.name.toUpperCase()}
            </h1>
            <p className="text-teal font-semibold text-sm mb-4 uppercase tracking-wide">{product.nameId}</p>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Quick specs — icon + label/value, 3 equal columns */}
            {product.category === "dimsum" && (
              <div className="flex mb-7">
                {[
                  {
                    label: "Berat Bersih",
                    value: product.specs.beratBersih,
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    ),
                  },
                  {
                    label: "Isi per Pack",
                    value: product.specs.isiPerPack,
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    ),
                  },
                  {
                    label: "Berat/pcs",
                    value: product.specs.beratPcs,
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 8a5 5 0 0110 0v1h1a2 2 0 010 4H6a2 2 0 010-4h1V8z" />
                      </svg>
                    ),
                  },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className={`flex-1 flex items-center gap-2.5${idx > 0 ? " pl-4 border-l border-white/15" : ""}${idx < 2 ? " pr-4" : ""}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 leading-none mb-1">{item.label}</p>
                      <p className="text-sm font-bold text-white leading-none">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saran Penyajian — white card for contrast against navy panel */}
            <div className="bg-white rounded-2xl p-5 flex-1">
              <h3 className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-teal rounded-full" />
                SARAN PENYAJIAN
              </h3>
              <ol className="space-y-3.5">
                {product.servingSuggestions.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center text-teal shrink-0 mt-0.5">
                      {SERVING_ICONS[step.icon] ?? <span className="text-xs font-bold text-teal">{i + 1}</span>}
                    </div>
                    <p className="text-gray-600 text-sm leading-snug">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        </div>

        {/* Right: gallery — on top on mobile, right column on desktop */}
        <div className="bg-gray-50 rounded-2xl md:rounded-none p-4 md:p-0 md:pl-8 lg:pl-10 flex flex-col order-1 md:order-2 h-[340px] sm:h-[400px] md:h-auto">
          <FadeUp delay={100} className="w-full flex-1 flex flex-col min-h-0">
            <ProductGallery images={images} productName={product.name} tags={product.tags} />
          </FadeUp>
        </div>
      </section>
      </div>

      {/* ── Produk Spesifikasi ── */}
      <section className="bg-blue-50 py-12">
        <div className="container-pad">
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 bg-teal rounded-full" />
              <h2 className="text-xl font-bold text-navy tracking-wide">PRODUK SPESIFIKASI</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Spec grid */}
            <div className="lg:col-span-2 flex flex-col">
              <FadeUp delay={80} className="flex-1 flex flex-col">

                {/* Mobile: 2-column card grid */}
                <div className="grid grid-cols-2 gap-3 md:hidden">
                  {specRows.filter(r => r.value).map((row) => (
                    <div key={row.label} className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                      <div className="shrink-0 [&_svg]:w-6 [&_svg]:h-6">{SPEC_ICONS[row.icon]}</div>
                      <div>
                        <p className="text-[10px] font-semibold text-teal uppercase tracking-wide leading-none mb-1">{row.label}</p>
                        <p className="text-xs font-bold text-navy leading-tight">{row.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: 3-column divider layout */}
                <div className="hidden md:grid grid-cols-[1fr_1px_1fr_1px_1fr] flex-1">

                  {/* Column 1: SKU, Berat Bersih, Isi per Pack, Berat per Pcs */}
                  <div className="flex flex-col">
                    {specRows.slice(0, 4).map((row, i) => (
                      <div key={row.label} className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-4 px-4 py-4">
                          <div className="shrink-0">{SPEC_ICONS[row.icon]}</div>
                          <div>
                            <p className="text-[10px] font-semibold text-teal uppercase tracking-wide leading-none mb-1">{row.label}</p>
                            <p className="text-sm font-bold text-navy leading-tight">{row.value}</p>
                          </div>
                        </div>
                        {i < 3 && <div className="h-px bg-gray-200 mx-4" />}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-300" />

                  {/* Column 2: Kemasan, Ukuran Tray, Isi per Karton, Ukuran Karton */}
                  <div className="flex flex-col">
                    {specRows.slice(4, 8).map((row, i) => (
                      <div key={row.label} className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-4 px-4 py-4">
                          <div className="shrink-0">{SPEC_ICONS[row.icon]}</div>
                          <div>
                            <p className="text-[10px] font-semibold text-teal uppercase tracking-wide leading-none mb-1">{row.label}</p>
                            <p className="text-sm font-bold text-navy leading-tight">{row.value}</p>
                          </div>
                        </div>
                        {i < 3 && <div className="h-px bg-gray-200 mx-4" />}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-300" />

                  {/* Column 3: Penyimpanan, Umur Simpan, Sertifikasi, Asal Produk */}
                  <div className="flex flex-col">
                    {specRows.slice(8).map((row, i) => (
                      <div key={row.label} className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-4 px-4 py-4">
                          <div className="shrink-0">{SPEC_ICONS[row.icon]}</div>
                          <div>
                            <p className="text-[10px] font-semibold text-teal uppercase tracking-wide leading-none mb-1">{row.label}</p>
                            <p className="text-sm font-bold text-navy leading-tight">{row.value}</p>
                          </div>
                        </div>
                        {i < 3 && <div className="h-px bg-gray-200 mx-4" />}
                      </div>
                    ))}
                  </div>

                </div>
              </FadeUp>
            </div>

            {/* Tersedia Untuk — right 1/3 */}
            <div>
              <FadeUp delay={140}>
                <div className="rounded-2xl p-6 shadow-sm h-full flex flex-col" style={{ backgroundColor: "rgba(0, 168, 150, 0.12)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-5 bg-teal rounded-full" />
                    <h3 className="text-sm font-bold text-navy">TERSEDIA UNTUK</h3>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {product.availableFor.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2.5">
                    <a
                      href="mailto:cs@selerasuksesbersama.com"
                      className="btn-primary w-full justify-center text-sm py-2.5"
                    >
                      Minta Penawaran
                    </a>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center text-sm py-2.5 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Hubungi Sales
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Produk Terkait ── */}
      <section className="py-12 container-pad">
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-7 bg-teal rounded-full" />
            <h2 className="text-xl font-bold text-navy tracking-wide">PRODUK TERKAIT</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((rel, i) => (
            <FadeUp key={rel.slug} delay={i * 60}>
              <Link
                href={`/produk/${rel.slug}`}
                className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[10px] text-teal font-bold uppercase tracking-wide mb-1">
                    {rel.categoryLabel}
                  </p>
                  <h3 className="text-xs font-bold text-navy leading-snug line-clamp-2 mb-1">
                    {rel.name}
                  </h3>
                  <span className="text-[10px] font-bold text-teal group-hover:text-navy flex items-center gap-0.5 transition-colors">
                    LIHAT DETAIL
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
