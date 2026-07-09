"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FadeUp from "@/components/ui/FadeUp";

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  slug: string;
}

interface ProductSectionProps {
  id: string;
  categoryId: "dimsum" | "saus" | "cemilan" | "lainnya";
  title: string;
  subtitle: string;
  products: ProductItem[];
}

const ICONS: Record<string, React.ReactNode> = {
  dimsum: (
    <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 100 100">
      <path d="M55.083,53.987V17.952C55.083,11.913,50.17,7,44.132,7c-6.04,0-10.953,4.913-10.953,10.952v36.037C26.9,57.807,23.047,64.601,23.047,72c0,11.625,9.458,21.083,21.084,21.083c11.625,0,21.083-9.458,21.083-21.083C65.215,64.6,61.362,57.806,55.083,53.987z M44.131,89.083c-9.42,0-17.084-7.663-17.084-17.083c0-6.326,3.476-12.106,9.072-15.085l1.06-0.564V45.47h2.546c1.104,0,2-0.896,2-2s-0.896-2-2-2h-2.546v-6.636h2.358c1.104,0,2-0.896,2-2s-0.896-2-2-2h-2.358v-6.636h2.358c1.104,0,2-0.896,2-2s-0.896-2-2-2h-2.358v-2.247c0-3.833,3.119-6.952,6.953-6.952c3.833,0,6.951,3.119,6.951,6.952v38.399l1.061,0.564c5.596,2.979,9.071,8.759,9.071,15.085C61.215,81.42,53.551,89.083,44.131,89.083z"/>
      <path d="M47.864,59.895V49.877c0-2.061-1.671-3.732-3.732-3.732c-2.063,0-3.733,1.672-3.733,3.732v10.018c-5.341,1.604-9.235,6.554-9.235,12.417c0,7.161,5.807,12.967,12.968,12.967s12.967-5.806,12.967-12.967C57.099,66.448,53.205,61.498,47.864,59.895z"/>
      <path d="M83.511,35.51l-5.382-3.958l5.382-3.958c1.295-0.954,1.572-2.783,0.621-4.076c-0.917-1.248-2.824-1.543-4.077-0.623l-3.932,2.892v-4.881c0-1.607-1.309-2.916-2.917-2.916c-1.607,0-2.916,1.308-2.916,2.916v4.881l-3.931-2.892c-1.253-0.92-3.163-0.624-4.076,0.621c-0.463,0.627-0.652,1.396-0.535,2.167c0.117,0.77,0.527,1.448,1.154,1.911l5.382,3.957l-5.382,3.958c-0.627,0.462-1.037,1.14-1.154,1.91c-0.117,0.771,0.072,1.541,0.533,2.166c0.917,1.249,2.829,1.542,4.078,0.622l3.931-2.891v4.882c0,1.607,1.309,2.916,2.916,2.916c1.608,0,2.917-1.308,2.917-2.916v-4.882l3.93,2.89c1.249,0.922,3.162,0.628,4.078-0.619C85.083,38.293,84.806,36.464,83.511,35.51z"/>
    </svg>
  ),
  saus: (
    <span className="block w-8 h-8 shrink-0 bg-navy" style={{ WebkitMaskImage: "url('/images/icons/noun-jar-7571128.png')", maskImage: "url('/images/icons/noun-jar-7571128.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center", filter: "blur(0.5px) contrast(20)" }} />
  ),
  cemilan: (
    <span className="block w-8 h-8 shrink-0 bg-navy" style={{ WebkitMaskImage: "url('/images/icons/noun-snack-8370495.png')", maskImage: "url('/images/icons/noun-snack-8370495.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center", filter: "blur(0.5px) contrast(20)" }} />
  ),
};

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      <div className="relative h-36 sm:h-40">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-xs font-bold text-navy mb-1 leading-snug line-clamp-2">{product.name}</h3>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 flex-1">{product.description}</p>
        <Link
          href={`/produk/${product.slug}`}
          className="mt-3 text-xs font-bold text-teal hover:text-navy flex items-center gap-0.5 transition-colors"
        >
          LIHAT DETAIL
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ProductSection({
  id,
  categoryId,
  title,
  subtitle,
  products,
}: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 220 : -220, behavior: "smooth" });
  };

  if (products.length === 0) {
    return (
      <section id={id} className="py-4 scroll-mt-32">
        <div className="container-pad">
          <div className="bg-blue-50 rounded-3xl px-6 py-8">
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center">
                  {ICONS[categoryId]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy">{title}</h2>
                  <p className="text-gray-400 text-xs">{subtitle}</p>
                </div>
              </div>
              <div className="bg-white/60 rounded-2xl border border-dashed border-amber-200 py-14 text-center">
                <p className="text-gray-400 text-sm font-medium">Segera hadir</p>
                <p className="text-gray-300 text-xs mt-1">Produk dalam kategori ini akan segera tersedia</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-4 scroll-mt-32">
      <div className="container-pad">
        <div className="bg-blue-50 rounded-3xl px-6 py-8">

          {/* Header row */}
          <FadeUp>
            <div className="flex items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  {ICONS[categoryId]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy leading-tight">{title}</h2>
                  <p className="text-gray-400 text-xs leading-snug">{subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setExpanded((v) => !v)}
                className="hidden sm:flex items-center gap-1 text-xs font-bold text-navy hover:text-teal transition-colors whitespace-nowrap"
              >
                {expanded ? "SEMBUNYIKAN" : "LIHAT SEMUA"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </FadeUp>

          {/* Carousel — hidden when expanded */}
          {!expanded && (
            <div className="relative group">
              <button
                onClick={() => scroll("left")}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
              >
                <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar pb-2"
                style={{ touchAction: "pan-x" }}
              >
                {products.map((product, i) => (
                  <FadeUp key={product.slug} delay={i * 60} className="flex-none w-48 sm:w-52">
                    <ProductCard product={product} />
                  </FadeUp>
                ))}
              </div>

              <button
                onClick={() => scroll("right")}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
              >
                <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Expanded grid — shown when expanded */}
          {expanded && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-fadeIn">
              {products.map((product, i) => (
                <FadeUp key={product.slug} delay={i * 40}>
                  <ProductCard product={product} />
                </FadeUp>
              ))}
            </div>
          )}

          {/* Mobile toggle */}
          <div className="mt-4 sm:hidden">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs font-bold text-navy hover:text-teal flex items-center gap-1 transition-colors"
            >
              {expanded ? `SEMBUNYIKAN ${title.toUpperCase()}` : `LIHAT SEMUA ${title.toUpperCase()}`}
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
