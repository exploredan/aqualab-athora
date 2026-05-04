"use client";

import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/lib/i18n";

const looks = [
  {
    id: 1,
    thumbnail: "/manken%20sort%20tshirt.jpeg",
    mainImage: "/manken%20sort%20tshirt.jpeg",
    products: [
      {
        id: "p1",
        hotspot: { top: "35%", left: "50%" },
        brand: "AQUALAB",
        name: "Pro-Tech Tişört",
        price: "$75.00",
        image: "/dekupe%20tshirt.jpeg",
        colors: ["#FFFFFF", "#000000"]
      },
      {
        id: "p2",
        hotspot: { top: "65%", left: "48%" },
        brand: "AQUALAB",
        name: "Performans Şort",
        price: "$85.00",
        image: "/dekupe%20sort.jpeg",
        colors: ["#1F2937"]
      }
    ]
  }
];

export default function ShopTheLook() {
  const { lang } = useLanguage();
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const activeLook = looks[activeLookIndex];
  const activeProduct = activeLook.products[activeProductIndex];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch">
        
        {/* Thumbnails (Left) */}
        <div className="flex flex-row lg:flex-col gap-4 shrink-0 lg:pt-32">
          {looks.map((look, index) => (
            <button
              key={look.id}
              onClick={() => {
                setActiveLookIndex(index);
                setActiveProductIndex(0);
              }}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                activeLookIndex === index ? "border-[#4A3B42] p-0.5 scale-110" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={look.thumbnail} alt={`Look ${look.id}`} className="w-full h-full object-cover rounded-full" />
            </button>
          ))}
        </div>

        {/* Main Image (Center) */}
        <div className="relative w-full lg:w-[45%] shrink-0">
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeLook.id}
                src={activeLook.mainImage}
                alt="Main Look"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Hotspots */}
            {activeLook.products.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setActiveProductIndex(idx)}
                style={{ top: product.hotspot.top, left: product.hotspot.left }}
                className="absolute w-8 h-8 -ml-4 -mt-4 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10"
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeProductIndex === idx ? "bg-[#4A3B42]" : "bg-zinc-300"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details (Right) */}
        <div className="flex-1 flex flex-col justify-center lg:pl-8 w-full max-w-lg lg:max-w-none">
          <p className="text-sm font-medium text-zinc-500 mb-2 font-sans">
            {lang === "tr" ? "Kombini incele" : "Shop the look"}
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#4A3B42] mb-12">
            {lang === "tr" ? "Stil potansiyelinizi" : "Unleash your"}<br/>
            {lang === "tr" ? "ortaya çıkarın" : "style potential"}
          </h2>

          <div className="flex items-center gap-6">
            <div className="bg-white rounded-3xl overflow-hidden p-2 w-full max-w-[320px] group border border-transparent hover:border-zinc-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-[#F7F7F7] relative">
                    <img 
                      src={activeProduct.image} 
                      alt={activeProduct.name} 
                      className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="px-2 pb-2">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-sans">{activeProduct.brand}</span>
                    <h3 className="text-lg font-bold text-[#4A3B42] mt-1">{activeProduct.name}</h3>
                    <p className="text-sm font-semibold text-[#4A3B42] mt-2 font-sans">{activeProduct.price}</p>
                    
                    <div className="flex gap-2 mt-4">
                      {activeProduct.colors.map((color, i) => (
                        <div 
                          key={i} 
                          className={`w-5 h-5 rounded-full border-2 ${i === 0 ? 'border-[#4A3B42] p-0.5' : 'border-transparent'}`}
                        >
                          <div className="w-full h-full rounded-full border border-zinc-200" style={{ backgroundColor: color }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vertical slider control */}
            {activeLook.products.length > 1 && (
              <div className="hidden md:flex flex-col items-center justify-between h-36 w-8 rounded-full border border-zinc-200 py-3 shadow-sm bg-white">
                <button 
                  onClick={() => setActiveProductIndex((prev) => Math.max(0, prev - 1))}
                  className={`${activeProductIndex === 0 ? 'text-zinc-200' : 'text-zinc-400 hover:text-black'} transition-colors`}
                  disabled={activeProductIndex === 0}
                >
                  <ArrowUp className="w-3 h-3" />
                </button>
                
                <div className="w-1 h-16 bg-zinc-100 rounded-full relative overflow-hidden my-2">
                  <div 
                    className="absolute top-0 w-full bg-[#4A3B42] rounded-full transition-all duration-300"
                    style={{ 
                      height: `${100 / activeLook.products.length}%`,
                      transform: `translateY(${activeProductIndex * 100}%)`
                    }}
                  />
                </div>
                
                <button 
                  onClick={() => setActiveProductIndex((prev) => Math.min(activeLook.products.length - 1, prev + 1))}
                  className={`${activeProductIndex === activeLook.products.length - 1 ? 'text-zinc-200' : 'text-zinc-400 hover:text-black'} transition-colors`}
                  disabled={activeProductIndex === activeLook.products.length - 1}
                >
                  <ArrowDown className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
}
