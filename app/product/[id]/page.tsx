import React from "react";
import { Search, Droplets, Maximize, Shield, Truck, ArrowRight, Box } from "lucide-react";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  // Using dummy data based on the provided design
  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-24 pb-20 font-sans">
      {/* Breadcrumbs & Status */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-center text-[10px] md:text-xs font-semibold tracking-widest uppercase text-zinc-500">
        <div className="flex gap-2">
          <Link href="/collection" className="hover:text-black transition-colors">Collections</Link>
          <span>/</span>
          <Link href="/collection" className="hover:text-black transition-colors">Technical Apparel</Link>
          <span>/</span>
          <span className="text-black">Pro Racing Shorts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          IN STOCK - READY TO DEPLOY
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
        
        {/* Left: Product Image */}
        <div className="relative aspect-[4/5] lg:aspect-square bg-[#F5F5F5] rounded-[2rem] p-8 flex items-center justify-center overflow-hidden group">
          <button className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase shadow-sm hover:scale-105 transition-transform z-10">
            <Search size={12} />
            Enlarge
          </button>
          <img 
            src="/manken-vest-das.jpeg" 
            alt="Pro Racing Shorts" 
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase text-[#1A1A1A] tracking-tighter mb-4 leading-none">
            Pro Racing <br/> Shorts
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-800 mb-8">$145.00 USD</p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="flex items-center gap-1.5 bg-zinc-100 text-zinc-800 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Droplets size={12} /> DWR Coated
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-100 text-zinc-800 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Maximize size={12} /> 4-Way Stretch
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-100 text-zinc-800 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Shield size={12} /> Kevlar® Seat
            </div>
          </div>

          <p className="text-sm md:text-base text-zinc-600 mb-10 leading-relaxed">
            Engineered for maximum mobility and endurance in harsh marine environments. The Pro Racing Shorts utilize a proprietary hydrophobic stretch fabric combined with a reinforced, abrasion-resistant seat panel to deliver clinical performance when every second counts.
          </p>

          {/* Size Selector */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Select Size</span>
              <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors">
                View Sizing Chart
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size}
                  className={`py-3 rounded-2xl text-xs font-bold transition-colors ${
                    size === 'M' 
                      ? 'bg-[#1A1A1A] text-white shadow-md' 
                      : 'bg-zinc-50 text-zinc-800 hover:bg-zinc-100 border border-zinc-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="col-span-1 py-3 rounded-2xl text-xs font-bold bg-zinc-50 text-zinc-800 hover:bg-zinc-100 border border-zinc-200 transition-colors">
                XXL
              </button>
              <div className="col-span-3 py-3 rounded-2xl bg-zinc-50 flex items-center justify-center text-xs font-medium text-zinc-500 border border-transparent">
                WAIST: 32&quot; - 34&quot;
              </div>
            </div>
          </div>

          {/* Add to Cart & Shipping */}
          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#FF5A24] text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-[#E0481A] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20">
              Add To Cart <ArrowRight size={16} />
            </button>
            <div className="w-full bg-white border border-zinc-200 rounded-2xl p-4 flex items-start gap-4">
              <Truck className="text-zinc-400 mt-0.5" size={20} />
              <div>
                <p className="text-xs font-bold text-zinc-800 mb-0.5">COMPLIMENTARY SHIPPING</p>
                <p className="text-xs text-zinc-500">Dispatches within 24 hours from central logistics hub.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Breakdown */}
      <div className="border-t border-zinc-200 bg-[#FAFAFA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] tracking-tighter">
              Technical Breakdown
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hidden md:block">
              SPEC. DOC. REF: AQ-PRS-01
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600 mb-6">
                <Box size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-3">Dynamic Stretch Chassis</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Constructed with a proprietary 4-way stretch weave that eliminates restriction during high-intensity maneuvers while maintaining structural integrity over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600 mb-6">
                <Shield size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-3">Reinforced Aramid Seat</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The high-contact seat area is fortified with precision-woven aramid fibers, providing exceptional abrasion resistance against abrasive non-slip deck surfaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600 mb-6">
                <Droplets size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-3">Advanced DWR Coating</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Treated with a lab-tested Durable Water Repellent finish. Water actively beads and sheds off the surface, significantly reducing weight retention and drying time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Required Accompaniments */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] tracking-tighter mb-12">
            Required Accompaniments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/product/thermal-core-top" className="group">
              <div className="aspect-square bg-[#F5F5F5] rounded-3xl mb-4 p-6 flex items-center justify-center overflow-hidden">
                <img 
                  src="/dekupe%20tshirt.jpeg" 
                  alt="Thermal Core Top" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Base Layer</span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">Thermal Core Top</h3>
                <span className="text-sm text-zinc-600 font-medium">$85.00 USD</span>
              </div>
            </Link>

            <Link href="/product/deck-grip-pro" className="group">
              <div className="aspect-square bg-[#F5F5F5] rounded-3xl mb-4 p-6 flex items-center justify-center overflow-hidden">
                <img 
                  src="/manken-siyah-raincoat.jpeg" 
                  alt="Deck Grip Pro" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Outerwear</span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">Storm Windbreaker</h3>
                <span className="text-sm text-zinc-600 font-medium">$195.00 USD</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
