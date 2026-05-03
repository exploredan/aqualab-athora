"use client";

import { Shield, Waves, Wind, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function TechSpecsBar() {
  const { lang } = useLanguage();
  
  const specs = [
    {
      icon: <Shield className="w-5 h-5" fill="currentColor" strokeWidth={1} />,
      title: "UPF 50+",
      subtitle: lang === "tr" ? "UV KORUMASI" : "UV PROTECTION"
    },
    {
      icon: <Waves className="w-5 h-5" strokeWidth={2} />,
      title: "20K / 20K",
      subtitle: lang === "tr" ? "SU GEÇİRMEZLİK" : "WATER RESISTANCE"
    },
    {
      icon: <Wind className="w-5 h-5" strokeWidth={2} />,
      title: "15K g/m²/24h",
      subtitle: lang === "tr" ? "NEFES ALABİLİRLİK" : "BREATHABILITY"
    },
    {
      icon: <Zap className="w-5 h-5" fill="currentColor" strokeWidth={1} />,
      title: lang === "tr" ? "< 15 DAKİKA" : "< 15 MINUTES",
      subtitle: lang === "tr" ? "HIZLI KURUMA" : "QUICK DRY"
    }
  ];

  return (
    <section className="bg-[#F7F7F7] border-y border-zinc-200/50 py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Logo */}
          <div className="shrink-0 flex justify-center lg:justify-start lg:w-48">
            <img 
              src="/Asset%202.webp" 
              alt="Aqualab" 
              className="h-10 md:h-12 w-auto object-contain opacity-80 mix-blend-multiply"
            />
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200/60 w-full flex-1 border-t md:border-t-0 md:border-l border-zinc-200/60 pt-6 md:pt-0">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-4 md:py-6 px-4 text-center hover:bg-black/5 transition-colors duration-500 cursor-default">
                <div className="text-[#0A1128] mb-3">
                  {spec.icon}
                </div>
                <h3 className="text-[15px] font-medium text-[#1A1A1A] mb-1.5 font-sans">
                  {spec.title}
                </h3>
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                  {spec.subtitle}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
