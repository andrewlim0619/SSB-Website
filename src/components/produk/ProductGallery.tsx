"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  productName: string;
  tags: string[];
}

export default function ProductGallery({ images, productName, tags }: Props) {
  const [active, setActive] = useState(0);

  // Packaging/label shots are .jpg; food photography is .png — use contain for packaging so text isn't cropped
  const isPackaging = images[active]?.toLowerCase().endsWith(".jpg");

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Main image — fills remaining height after thumbnails */}
      <div
        className={`relative rounded-xl overflow-hidden shadow-sm flex-1 min-h-0 ${isPackaging ? "bg-white" : "bg-gray-100"}`}
      >
        <Image
          src={images[active]}
          alt={productName}
          fill
          className={`transition-opacity duration-300 ${isPackaging ? "object-contain" : "object-cover"}`}
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {tags.map((tag) =>
            tag === "HALAL" ? (
              <div key={tag} className="bg-white rounded-xl p-1.5 shadow-md border border-gray-100">
                <Image
                  src="/images/icons/halal-badge.svg"
                  alt="Halal"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
            ) : (
              <span
                key={tag}
                className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                  tag === "FROZEN" ? "bg-blue-600 text-white" : "bg-navy text-white"
                }`}
              >
                {tag === "FROZEN" && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
                  </svg>
                )}
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Thumbnails — fixed height so they're always tappable */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-2 h-16 sm:h-20 md:h-20 shrink-0">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-none rounded-lg overflow-hidden border-2 transition-all h-full aspect-square ${
                active === i
                  ? "border-navy shadow-md"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              aria-label={`Image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${productName} ${i + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
