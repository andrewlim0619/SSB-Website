"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const indicators = [
  {
    label: "Produk Halal & Berkualitas",
    icon: <Image src="/images/icons/halal-badge.svg" alt="Halal" width={28} height={28} className="w-4 h-4 sm:w-7 sm:h-7 object-contain" />,
  },
  {
    label: "Pengembangan Produk Custom",
    icon: (
      <svg className="w-4 h-4 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: "Produksi Berstandar",
    icon: (
      <svg className="w-4 h-4 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Distribusi Seluruh Indonesia",
    icon: (
      <svg className="w-4 h-4 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function JasaBogaTrustBar() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 -mt-8 pb-8">
      <div className="container-pad">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 px-2 py-3 sm:px-6 sm:py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
        >
          {indicators.map((item, i) => (
            <div
              key={item.label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms`,
              }}
              className="flex flex-col items-center gap-1.5 px-2 py-2 sm:px-4 sm:py-3 text-center"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy">
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-navy leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
