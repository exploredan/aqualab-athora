"use client";

import React from "react";

const brands = [
  "AeroCore",
  "HydroTech",
  "Gore-Tex",
  "Vibram",
  "Polartec",
  "Cordura",
  "Sympatex",
  "PrimaLoft"
];

// Duplicate brands to ensure the marquee fills even the widest screens
// and scrolling by 50% loops perfectly through the identical sets.
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

export default function BrandsMarquee() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative z-10 flex items-center group">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex whitespace-nowrap animate-marquee w-max items-center">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-8 md:px-16 text-5xl md:text-7xl font-black tracking-tighter text-zinc-100 uppercase shrink-0 hover:text-[#4A3B42] transition-colors duration-300"
          >
            {brand}
          </div>
        ))}
      </div>

      {/* Left and Right Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
