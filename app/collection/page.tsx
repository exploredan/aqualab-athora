"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";

const categoriesEn = ["ALL", "RASHGUARDS", "VESTS", "RACING SHORTS", "HOODIES", "WINDBREAKERS"];
const categoriesTr = ["TÜMÜ", "RASHGUARDLAR", "YELEKLER", "YARIŞ ŞORTLARI", "KAPÜŞONLULAR", "RÜZGARLIKLAR"];

const collectionProducts = [
  {
    id: 1,
    name: "AERO WINDBREAKER",
    tr_name: "AERO RÜZGARLIK",
    price: "$180",
    description: "Ultra-lightweight aerodynamic windbreaker for maximum agility.",
    tr_description: "Maksimum çeviklik için ultra hafif aerodinamik rüzgarlık.",
    tags: ["ULTRA-LIGHT", "WINDPROOF"],
    image: "/manken-beyaz-raincoat.jpeg"
  },
  {
    id: 2,
    name: "PRO-TECH T-SHIRT",
    tr_name: "PRO-TECH TİŞÖRT",
    price: "$75",
    description: "Engineered compression fit for optimal hydrodynamics.",
    tr_description: "Optimum hidrodinamik için tasarlanmış kompresyon uyumu.",
    tags: ["UV 50+", "4-WAY STRETCH"],
    image: "/manken-görsel.jpeg"
  },
  {
    id: 3,
    name: "PERFORMANCE SET",
    tr_name: "PERFORMANS SET",
    price: "$95",
    description: "Quick dry performance set for water sports.",
    tr_description: "Su sporları için hızlı kuruyan performans seti.",
    tags: ["QUICK DRY", "WATER REPELLENT"],
    image: "/manken%20sort%20tshirt.jpeg"
  },
  {
    id: 4,
    name: "STORM WINDBREAKER",
    tr_name: "STORM RÜZGARLIK",
    price: "$195",
    description: "Heavy-duty windbreaker built for harsh conditions.",
    tr_description: "Zorlu koşullar için üretilmiş dayanıklı rüzgarlık.",
    tags: ["HEAVY DUTY", "THERMAL"],
    image: "/manken-siyah-raincoat.jpeg"
  },
  {
    id: 5,
    name: "CORE IMPACT VEST",
    tr_name: "CORE DARBE YELEĞİ",
    price: "$185",
    description: "High-density foam core with low-profile ergonomic cut.",
    tr_description: "Düşük profilli ergonomik kesimli yüksek yoğunluklu köpük.",
    tags: ["BREATHABLE", "THERMAL"],
    image: "/manken-siyah-vest.jpeg"
  },
  {
    id: 6,
    name: "AERO DAS VEST",
    tr_name: "AERO DAS YELEK",
    price: "$110",
    description: "Ergonomic vest engineered for extreme endurance.",
    tr_description: "Ekstrem dayanıklılık için mühendislikle üretilmiş ergonomik yelek.",
    tags: ["ERGONOMIC", "ENDURANCE"],
    image: "/manken-vest-das.jpeg"
  },
  {
    id: 7,
    name: "ZEPHYR VEST",
    tr_name: "ZEPHYR YELEK",
    price: "$120",
    description: "Engineered compression fit for optimal hydrodynamics.",
    tr_description: "Optimum hidrodinamik için tasarlanmış kompresyon uyumu.",
    tags: ["UV 50+", "4-WAY STRETCH"],
    image: "/siyah%20manken%20yelek.jpeg"
  },
  {
    id: 8,
    name: "APEX IMPACT VEST",
    tr_name: "APEX DARBE YELEĞİ",
    price: "$250",
    description: "High-density foam core with low-profile ergonomic cut.",
    tr_description: "Düşük profilli ergonomik kesimli yüksek yoğunluklu köpük.",
    tags: ["ISO CERTIFIED", "MODULAR"],
    image: "/vest%20closup.jpeg"
  },
  {
    id: 9,
    name: "AERO RACING SHORTS",
    tr_name: "AERO YARIŞ ŞORTU",
    price: "$95",
    description: "Ultra-lightweight hydrophobic fabric for maximum agility.",
    tr_description: "Maksimum çeviklik için ultra hafif su itici kumaş.",
    tags: ["QUICK DRY", "WATER REPELLENT"],
    image: "/dekupe%20sort.jpeg"
  },
  {
    id: 10,
    name: "THERMAL BASE LAYER",
    tr_name: "TERMAL TİŞÖRT",
    price: "$140",
    description: "Advanced thermal base layer for extreme cold.",
    tr_description: "Aşırı soğuklar için gelişmiş termal iç katman.",
    tags: ["THERMAL", "BREATHABLE"],
    image: "/dekupe%20tshirt.jpeg"
  }
];

export default function CollectionPage() {
  const { lang } = useLanguage();
  return (
    <main className="min-h-screen bg-white font-sans text-black selection:bg-zinc-200 selection:text-black">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6">
            {lang === "tr" ? "Koleksiyonlar" : "Collections"}
          </h1>
          <p className="text-base text-zinc-600 font-medium leading-relaxed">
            {lang === "tr" 
              ? "Zorlu koşullar için tasarlandı. Teknik giyimimiz, klinik hassasiyeti dayanıklı işlevsellikle birleştiriyor. Deniz performansındaki standardı keşfedin." 
              : "Engineered for extreme conditions. Our technical apparel combines clinical precision with rugged functionality. Explore the standard in marine performance."}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-zinc-200 mb-12">
          {(lang === "tr" ? categoriesTr : categoriesEn).map((category, idx) => (
            <button
              key={category}
              className={`pb-4 text-xs font-bold tracking-widest uppercase transition-colors relative ${
                idx === 0 ? "text-black" : "text-zinc-400 hover:text-black"
              }`}
            >
              {category}
              {idx === 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="bg-white border border-zinc-200 rounded-3xl p-4 md:p-5 group cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Image Box */}
              <div className="relative aspect-[4/5] bg-[#F7F7F7] rounded-2xl overflow-hidden mb-5 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-multiply" 
                />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 bg-white/70 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-black shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-zinc-600 transition-colors line-clamp-1 pr-2">
                    {lang === "tr" ? product.tr_name : product.name}
                  </h3>
                  <span className="text-sm font-bold text-black mt-1 shrink-0">
                    {product.price}
                  </span>
                </div>
                <p className="text-[13px] text-zinc-500 font-medium leading-relaxed mt-auto">
                  {lang === "tr" ? product.tr_description : product.description}
                </p>
              </div>

            </Link>
          ))}
        </div>
        
      </div>

      <Footer />
    </main>
  );
}
