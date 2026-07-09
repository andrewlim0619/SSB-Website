"use client";

import { useState } from "react";

const categories = [
  {
    id: "dimsum",
    label: "Frozen Dimsum",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 100 100">
        <path d="M55.083,53.987V17.952C55.083,11.913,50.17,7,44.132,7c-6.04,0-10.953,4.913-10.953,10.952v36.037C26.9,57.807,23.047,64.601,23.047,72c0,11.625,9.458,21.083,21.084,21.083c11.625,0,21.083-9.458,21.083-21.083C65.215,64.6,61.362,57.806,55.083,53.987z M44.131,89.083c-9.42,0-17.084-7.663-17.084-17.083c0-6.326,3.476-12.106,9.072-15.085l1.06-0.564V45.47h2.546c1.104,0,2-0.896,2-2s-0.896-2-2-2h-2.546v-6.636h2.358c1.104,0,2-0.896,2-2s-0.896-2-2-2h-2.358v-6.636h2.358c1.104,0,2-0.896,2-2s-0.896-2-2-2h-2.358v-2.247c0-3.833,3.119-6.952,6.953-6.952c3.833,0,6.951,3.119,6.951,6.952v38.399l1.061,0.564c5.596,2.979,9.071,8.759,9.071,15.085C61.215,81.42,53.551,89.083,44.131,89.083z"/>
        <path d="M47.864,59.895V49.877c0-2.061-1.671-3.732-3.732-3.732c-2.063,0-3.733,1.672-3.733,3.732v10.018c-5.341,1.604-9.235,6.554-9.235,12.417c0,7.161,5.807,12.967,12.968,12.967s12.967-5.806,12.967-12.967C57.099,66.448,53.205,61.498,47.864,59.895z"/>
        <path d="M83.511,35.51l-5.382-3.958l5.382-3.958c1.295-0.954,1.572-2.783,0.621-4.076c-0.917-1.248-2.824-1.543-4.077-0.623l-3.932,2.892v-4.881c0-1.607-1.309-2.916-2.917-2.916c-1.607,0-2.916,1.308-2.916,2.916v4.881l-3.931-2.892c-1.253-0.92-3.163-0.624-4.076,0.621c-0.463,0.627-0.652,1.396-0.535,2.167c0.117,0.77,0.527,1.448,1.154,1.911l5.382,3.957l-5.382,3.958c-0.627,0.462-1.037,1.14-1.154,1.91c-0.117,0.771,0.072,1.541,0.533,2.166c0.917,1.249,2.829,1.542,4.078,0.622l3.931-2.891v4.882c0,1.607,1.309,2.916,2.916,2.916c1.608,0,2.917-1.308,2.917-2.916v-4.882l3.93,2.89c1.249,0.922,3.162,0.628,4.078-0.619C85.083,38.293,84.806,36.464,83.511,35.51z"/>
      </svg>
    ),
  },
  {
    id: "saus",
    label: "Aneka Saus",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 3h4v2h-4zM10.5 5h3v2h-3zM10.5 7L9 9.5h6L13.5 7M9 9.5h6v11a1 1 0 01-1 1h-4a1 1 0 01-1-1V9.5M10.5 14h3M10.5 16h2" />
      </svg>
    ),
  },
  {
    id: "cemilan",
    label: "Cemilan",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8l1.5-9H6.5L8 21M10.5 12v8.5M13.5 12l.5 8.5M7.5 12C7.5 9 9 8 10 10C10 7.5 12 6.5 14 10C15 8 16.5 8.5 16.5 12" />
      </svg>
    ),
  },
];

export default function CategoryNav() {
  const [active, setActive] = useState("dimsum");

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 130;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container-pad py-3">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 bg-white rounded-full shadow-lg px-2 py-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 ${
                  active === cat.id
                    ? "bg-navy text-white shadow-sm"
                    : "text-navy hover:bg-navy/8"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
