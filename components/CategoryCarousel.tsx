"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function CategoryCarousel() {
  const { lang } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: lang === "tr" ? "Yelekler" : "Vests",
      image: "/save_this_picture_4K_202605030409.jpeg",
    },
    {
      title: lang === "tr" ? "Rashguardlar" : "Rashguards",
      image: "/change_background_to_this_color_202605030441.jpeg",
    },
    {
      title: lang === "tr" ? "Tişörtler" : "T-Shirts",
      image: "/just_leave_the_tshirt_and_202605030420.jpeg",
    },
    {
      title: lang === "tr" ? "Şortlar" : "Bottoms",
      image: "/make_it_more_3D_er_202605030412.jpeg",
    }
  ];
  
  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Text shrinks, moves slightly left, and fades out in the first 40% of the scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.85]);
  const textX = useTransform(scrollYProgress, [0, 0.4], ["0px", "-40px"]);

  // Carousel track moves left to reveal all cards
  // Start at 0px offset, move left by an amount that reveals all cards
  const carouselX = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]); 

  // 3D effect: starts with perspective rotation and flattens out by 50% scroll
  const cardRotateY = useTransform(scrollYProgress, [0, 0.5], ["-18deg", "0deg"]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);

  return (
    <section ref={targetRef} className="h-[250vh] bg-[#F7F7F7] relative z-20">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Left Content (Fades and shrinks) */}
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, x: textX }}
          className="absolute left-8 md:left-24 max-w-sm z-0 origin-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3B42] tracking-tight mb-4">
            {lang === "tr" ? "Ürünleri İncele" : "View products"}
          </h2>
          <p className="text-sm text-zinc-500 mb-8 font-medium leading-relaxed pr-4">
            {lang === "tr" 
              ? "En zorlu koşullarda sınırlarınızı zorlamak için tasarlanmış yüksek performanslı teknik ekipman koleksiyonumuzu keşfedin." 
              : "Explore our latest collection of high-performance technical gear, engineered to push your limits in extreme conditions."}
          </p>
          <button className="flex items-center gap-2 bg-[#524449] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#3E3236] transition-colors group">
            {lang === "tr" ? "Tüm Kategoriler" : "All categories"} 
            <span className="bg-white text-[#524449] rounded-full p-0.5 group-hover:scale-110 transition-transform">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </button>
        </motion.div>

        {/* Right Carousel Track (Slides left over the text) */}
        <motion.div 
          style={{ x: carouselX }}
          className="absolute left-[35%] md:left-[35%] flex gap-8 px-4 z-10 w-max items-center"
        >
          {cards.map((card, index) => (
            <div key={index} style={{ perspective: "1500px" }} className="shrink-0">
              <motion.div 
                style={{ rotateY: cardRotateY, transformOrigin: "left center" }}
                className="w-[280px] sm:w-[320px] md:w-[420px] h-[400px] sm:h-[480px] md:h-[600px] relative rounded-3xl overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.15)] group"
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Inner shadow/gradient on the right to emphasize 3D depth */}
                <motion.div 
                  style={{ opacity: shadowOpacity }}
                  className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" 
                />

                {/* Overlay gradient for better text readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute inset-x-0 bottom-8 md:bottom-12 flex justify-center">
                  <button className="bg-white text-[#4A3B42] px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                    {card.title}
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
          {/* Spacer to allow scrolling past the last item comfortably */}
          <div className="w-[10vw] shrink-0" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        >
          <span className="text-zinc-400 uppercase text-[10px] font-bold tracking-[0.2em] mb-4">
            {lang === "tr" ? "Kaydır" : "Scroll"}
          </span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-zinc-400 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}
