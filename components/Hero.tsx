"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLanguage();

  const texts = {
    en: {
      title1: "Defy the",
      title2: "Elements",
      subtitle: "Advanced technical apparel engineered for elite performance in sailing, kitesurfing, and rowing. Built to withstand the world's most unforgiving environments.",
      explore: "Explore Collection",
      discover: "Discover Technology",
      scroll: "Scroll"
    },
    tr: {
      title1: "Sınırları",
      title2: "Aşın",
      subtitle: "Yelken, uçurtma sörfü ve kürek branşlarında elit düzey performans için özel tasarlanmış üstün teknik giyim. Dünyanın en zorlu doğa koşullarına dayanacak şekilde mühendislikle üretildi.",
      explore: "Koleksiyonu Keşfet",
      discover: "Teknolojiyi İncele",
      scroll: "Kaydır"
    }
  };

  const t = texts[lang];

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image / Video Wrapper */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/sail-hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.9]">
            {t.title1} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">{t.title2}</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {t.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/collection" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all flex items-center justify-center group">
            {t.explore}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/technology" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all backdrop-blur-sm">
            {t.discover}
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/40 uppercase text-[10px] font-bold tracking-[0.2em] mb-4">{t.scroll}</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </div>
  );
}
