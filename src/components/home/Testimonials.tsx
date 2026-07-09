"use client";

import { useRef, useState, useCallback } from "react";
import FadeUp from "@/components/ui/FadeUp";

const reviews = [
  {
    name: "Budi Santoso",
    role: "F&B Manager",
    company: "Hotel Bintang Lima, Jakarta",
    rating: 5,
    text: "Produk dimsum dari SSB selalu konsisten kualitasnya. Tamu hotel kami sangat puas dan kami sudah bermitra lebih dari 2 tahun. Pengiriman tepat waktu dan tim mereka sangat responsif.",
  },
  {
    name: "Dewi Rahayu",
    role: "Owner",
    company: "Restoran Jade Garden, Surabaya",
    rating: 5,
    text: "Saus XO dan produk frozen dimsum dari SSB menjadi andalan menu restoran kami. Kualitasnya setara produk impor tapi harganya jauh lebih terjangkau. Sangat direkomendasikan!",
  },
  {
    name: "Andi Kurniawan",
    role: "Head Chef",
    company: "Catering Prima Rasa, Bandung",
    rating: 5,
    text: "Kami sudah mencoba banyak supplier, tapi SSB yang paling konsisten dari segi kualitas dan ketersediaan stok. Produk halal bersertifikat dan cocok untuk event skala besar.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow h-full">
      <svg className="w-8 h-8 text-teal/30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.text}</p>
      <StarRating count={r.rating} />
      <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-navy/10 text-navy flex items-center justify-center text-sm font-bold shrink-0">
          {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">{r.name}</p>
          <p className="text-xs text-gray-400">{r.role} · {r.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIndex(index);
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-pad">

        <FadeUp className="text-center mb-10">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-1">Testimoni</p>
          <h2 className="section-title">Apa Kata Mereka?</h2>
          <p className="section-subtitle mt-2">Kepercayaan mitra bisnis kami adalah prioritas utama.</p>
        </FadeUp>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={i * 120}>
              <ReviewCard r={r} />
            </FadeUp>
          ))}
        </div>

        {/* Mobile: snap carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="flex-shrink-0 w-full px-1"
                style={{ scrollSnapAlign: "center" }}
              >
                <ReviewCard r={r} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-teal w-6" : "bg-gray-300 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
