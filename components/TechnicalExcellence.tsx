"use client";

import { Droplet, Sun, Wind } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function TechnicalExcellence() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-4 mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1A1A1A]">
            {lang === "tr" ? "Teknik Mükemmellik" : "Technical Excellence"}
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            {lang === "tr" ? "Laboratuvar Düzeyi Hassasiyet" : "Lab-Grade Precision"}
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* First Block (Hydrophobic) */}
          <div className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-zinc-200 min-h-[400px] flex flex-col justify-between p-10 group">
            {/* Background Image overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1601134467661-3d774b999c1a?q=80&w=2000&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            <div className="relative z-10 max-w-lg">
              <Droplet className="w-7 h-7 text-black mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                {lang === "tr" ? "Hidrofobik Kalkan" : "Hydrophobic Shield"}
              </h3>
              <p className="text-[13px] font-medium text-black/70 leading-relaxed max-w-md">
                {lang === "tr" 
                  ? "Özel DWR kaplama suyu anında iterek ağırlığı azaltır ve zorlu koşullarda ısı kaybını önler."
                  : "Proprietary DWR coating repels water instantly, reducing weight and preventing thermal loss in extreme conditions."}
              </p>
            </div>
            
            <div className="relative z-10 mt-12">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-[10px] font-bold text-black uppercase tracking-widest shadow-sm">
                {lang === "tr" ? "Değer:" : "Rating:"} 20K/20K
              </span>
            </div>
          </div>

          {/* Second Block (UPF Armor) */}
          <div className="lg:col-span-1 bg-white border border-zinc-200 shadow-sm rounded-3xl p-10 flex flex-col justify-between min-h-[400px]">
            <div>
              <Sun className="w-7 h-7 text-black mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                {lang === "tr" ? "UPF 50+ Zırh" : "UPF 50+ Armor"}
              </h3>
              <p className="text-[13px] font-medium text-zinc-500 leading-relaxed mb-12">
                {lang === "tr"
                  ? "İpliğin moleküler düzeyine entegre edilmiş maksimum güneş radyasyonu koruması."
                  : "Maximum solar radiation protection integrated at the molecular level of the yarn."}
              </p>
            </div>
            
            <div className="flex flex-col gap-0 border-t border-zinc-200">
              <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{lang === "tr" ? "UVA ENGELLEME" : "UVA Blocked"}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-black">99.8%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{lang === "tr" ? "UVB ENGELLEME" : "UVB Blocked"}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-black">99.9%</span>
              </div>
            </div>
          </div>

          {/* Third Block (Aero-Dynamic Fit) */}
          <div className="lg:col-span-1 bg-zinc-900 border border-zinc-800 shadow-sm rounded-3xl p-10 flex flex-col justify-between min-h-[400px]">
            <div>
              <Wind className="w-7 h-7 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                {lang === "tr" ? "Aerodinamik Kesim" : "Aero-Dynamic Fit"}
              </h3>
              <p className="text-[13px] font-medium text-zinc-400 leading-relaxed mb-12">
                {lang === "tr"
                  ? "Sürtünmeyi azaltan ve yüksek eforlu aktivitelerde kas dayanıklılığını artıran 4 yöne esneyen kompresyon panelleriyle tasarlandı."
                  : "Engineered with 4-way stretch compression panels that reduce drag and increase muscular endurance during high-output activities."}
              </p>
            </div>
            
            <div className="flex flex-col gap-0 border-t border-zinc-800">
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{lang === "tr" ? "SÜRTÜNME AZALMASI" : "Drag Reduction"}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-white">14.2%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{lang === "tr" ? "HAREKET KABİLİYETİ" : "Mobility"}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-white">360°</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
