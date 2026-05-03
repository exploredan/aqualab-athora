"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  { id: "rashguards", name: "Rashguards", image: "/Untitled%20(1080%20x%201440%20px).png" },
  { id: "vests", name: "Impact Vests", image: "/make_the_back_side_also,_202605030430.jpeg" },
  { id: "bottoms", name: "Boardshorts", image: "/make_it_more_3D_er_202605030412.jpeg" }
];

const products = [
  {
    id: 1,
    brand: "AQUALAB",
    name: "AeroCore Rashguard",
    price: "$120.00",
    image: "/Copy_of_Hooded_rashguard_on_202605030418.jpeg",
    isNew: true,
    colors: ["#1F2937", "#000000"]
  },
  {
    id: 2,
    brand: "AQUALAB",
    name: "Apex Impact Vest",
    price: "$250.00",
    image: "/save_this_picture_4K_202605030409.jpeg",
    isNew: false,
    colors: ["#D4A373", "#1F2937", "#000000"]
  },
  {
    id: 3,
    brand: "AQUALAB",
    name: "Zephyr Racing Shorts",
    price: "$95.00",
    image: "/make_it_more_3D_er_202605030412.jpeg",
    isNew: false,
    colors: ["#4B5563", "#D1D5DB"]
  },
  {
    id: 4,
    brand: "AQUALAB",
    name: "Thermal Base Layer",
    price: "$140.00",
    image: "/just_leave_the_tshirt_and_202605030420.jpeg",
    isNew: true,
    colors: ["#000000"]
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls & Categories */}
        <div className="flex items-center justify-between mb-12">
          
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:border-zinc-300 transition-colors shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4">
            {categories.map(category => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 pr-5 pl-2 py-2 rounded-full transition-all duration-300 shrink-0 ${
                    isActive 
                      ? "bg-[#4A3B42] text-white shadow-md" 
                      : "bg-[#F7F7F7] text-[#4A3B42] hover:bg-[#EFEFEF]"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-white">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{category.name}</span>
                </button>
              )
            })}
          </div>

          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:border-zinc-300 transition-colors shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] bg-white border border-zinc-100 rounded-2xl overflow-hidden snap-start group cursor-pointer hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative w-full aspect-[4/5] bg-[#F7F7F7] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
                
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-[#84A94B] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
                    New
                  </div>
                )}

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-10">
                  <button className="bg-white/60 backdrop-blur-md border border-white/40 text-[#4A3B42] px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold shadow-sm flex items-center gap-2 hover:bg-white hover:scale-105 transition-all">
                    <Eye className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Quick view
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-sans mb-1">
                  {product.brand}
                </span>
                <h3 className="text-[17px] font-medium text-[#4A3B42] mb-1">
                  {product.name}
                </h3>
                <span className="text-sm font-bold text-[#4A3B42]">
                  {product.price}
                </span>
                
                <div className="flex gap-2 mt-auto pt-4">
                  {product.colors.map((color, i) => (
                    <div 
                      key={i} 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-[#4A3B42]' : 'border-transparent'}`}
                    >
                      <div className="w-3.5 h-3.5 rounded-full border border-zinc-200" style={{ backgroundColor: color }} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
          
          {/* Spacer */}
          <div className="min-w-[4vw] shrink-0" />
        </div>
        
      </div>
    </section>
  );
}
