"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/i18n";

export default function ProductVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useLanguage();

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 5.5) {
      videoRef.current.currentTime = 0;
      // It's already playing, but we can ensure it continues
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] bg-[#E5E5E5] overflow-hidden flex items-end md:items-center">
      
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover object-[center_top]"
      >
        <source src="/Turn_model_360_degrees_202605030425.mp4" type="video/mp4" />
      </video>

      {/* Subtle Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/70 via-transparent to-transparent pointer-events-none" />

      {/* Floating Text Card (Glassmorphism) */}
      <div className="relative z-10 w-[calc(100%-2rem)] md:w-auto mx-4 mb-8 md:mb-0 md:ml-12 lg:ml-24 p-5 md:p-8 bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[2rem] max-w-sm transition-all duration-500 hover:bg-white/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] group">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-4 bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 to-zinc-600 transition-transform duration-500 group-hover:translate-x-1 leading-[1.1]">
          {lang === "tr" ? "Geleceğin Denizcilik Teknolojisi" : "The Future of Maritime Technology"}
        </h2>
        <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mb-5 rounded-full transition-all duration-500 group-hover:w-20 group-hover:from-cyan-400 group-hover:to-blue-600" />
        
        <p className="text-[13px] md:text-[14px] text-zinc-800 font-bold leading-relaxed">
          {lang === "tr" 
            ? "Okyanusun acımasız koşulları için tasarlandı. Sizi rüzgar ve dalgalara karşı koruyarak sadece hedefinize odaklanmanızı sağlıyoruz." 
            : "Engineered for the ocean's unforgiving conditions. We shield you from the elements so you can focus entirely on your ultimate goal."}
        </p>
      </div>

    </section>
  );
}
