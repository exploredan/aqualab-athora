import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1128] text-white pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <div className="text-3xl font-bold tracking-widest uppercase mb-6">
              Aqualab<span className="text-blue-500">.</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed pr-8 font-light">
              Forging the future of technical maritime apparel. Designed for the relentless, built for the extreme. Engineered in the elements.
            </p>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Shop</h4>
            <ul className="space-y-4 text-xs font-bold tracking-wider uppercase text-zinc-300">
              <li><a href="#" className="hover:text-white transition-colors">All Apparel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kitesurfing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rowing</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Explore</h4>
            <ul className="space-y-4 text-xs font-bold tracking-wider uppercase text-zinc-300">
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Intelligence</h4>
            <p className="text-sm text-zinc-400 mb-6 font-light">Subscribe for exclusive releases and technical insights.</p>
            <form className="flex border-b border-zinc-700 pb-3 group focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-xs outline-none placeholder:text-zinc-600 focus:text-white uppercase tracking-widest font-bold"
              />
              <button type="submit" className="text-zinc-500 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Aqualab. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
