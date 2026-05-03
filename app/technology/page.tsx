import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sun, ThermometerSnowflake, Droplet, FlaskConical } from "lucide-react";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* Top Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-zinc-200/80 rounded-full px-3 py-1 flex items-center gap-2 w-max text-[10px] font-bold tracking-widest text-zinc-600 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              SYSTEM.V2 ACTIVE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A] leading-[1.1] mb-6">
              ENGINEERED<br/>FOR THE<br/>EXTREMES.
            </h1>
            
            <p className="text-zinc-600 font-medium leading-relaxed max-w-md text-[15px]">
              Clinical performance meets hydro-technical precision. Our fabrics are lab-tested to withstand the harshest marine environments, providing unparalleled UV defense and thermal regulation.
            </p>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-black/5 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=1200" 
              alt="Hydrophobic Fabric" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 flex items-center gap-3 text-xs font-semibold text-zinc-800 shadow-sm border border-white/40 rounded-sm">
              <FlaskConical className="w-4 h-4 text-orange-500" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold leading-none mb-0.5">TEST PROTOCOL 04</span>
                <span>Hydrophobic Resistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider & Header */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-zinc-200 pb-4 mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A]">CORE TECHNOLOGIES</h2>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">SPEC.DOC.01</span>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 h-full">
            {/* APEX UV DEFENSE */}
            <div className="bg-gradient-to-br from-white to-orange-50/30 border border-zinc-200 p-8 rounded-sm relative overflow-hidden flex flex-col flex-1">
              <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center rounded-sm mb-6">
                <Sun className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">APEX UV DEFENSE</h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-10 max-w-sm">
                UPF 50+ protection engineered at the yarn level. Titanium dioxide particles are embedded within the polymer matrix, ensuring permanent sun blocking that won't wash out.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="bg-zinc-200/60 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-600">UPF 50+</span>
                <span className="bg-zinc-200/60 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-600">TiO2 Infused</span>
                <span className="bg-zinc-200/60 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-600">Permanent</span>
              </div>
            </div>

            {/* AERO-HYDRO LAMINATE */}
            <div className="bg-white border border-zinc-200 p-8 rounded-sm flex flex-col flex-1">
              <Droplet className="w-5 h-5 text-orange-500 mb-6" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">AERO-HYDRO LAMINATE</h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-10 max-w-sm">
                A 3-layer microporous membrane that blocks external water molecules while allowing internal vapor to escape instantly.
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-col gap-2 relative">
                <div className="flex justify-between items-end w-full">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">BREATHABILITY RATE</span>
                  <span className="text-sm font-bold text-[#1A1A1A]">20,000g/m²/24h</span>
                </div>
                <div className="w-full h-[2px] bg-zinc-100 mt-2">
                  <div className="h-full bg-orange-500 w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 h-full">
            {/* ISO-THERM MAPPING */}
            <div className="bg-[#0A1128] text-white p-8 rounded-sm flex flex-col overflow-hidden relative flex-1 min-h-[300px]">
              <ThermometerSnowflake className="w-5 h-5 text-white/80 mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-3">ISO-THERM MAPPING</h3>
              <p className="text-sm text-white/60 font-medium leading-relaxed mb-8 max-w-sm relative z-10">
                Strategic venting and insulation panels mapped to human vascular architecture for optimal core temperature maintenance.
              </p>
              <div className="mt-auto w-full aspect-[2/1] relative border border-white/10 rounded-sm overflow-hidden opacity-90 mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1530906358829-e84b2769270f?auto=format&fit=crop&w=800" 
                  alt="Thermal Mapping" 
                  className="w-full h-full object-cover mix-blend-screen opacity-70"
                />
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-[#F5F5F5] border border-zinc-200/80 p-0 rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#EFEFEF] text-[#4A3B42] font-bold uppercase tracking-wider text-[9px]">
                    <tr>
                      <th className="px-6 py-4">FABRIC SERIES</th>
                      <th className="px-6 py-4">WEIGHT (GSM)</th>
                      <th className="px-6 py-4">STRETCH PROFILE</th>
                      <th className="px-6 py-4">PRIMARY USE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/50 text-[#1A1A1A] font-medium text-[11px]">
                    <tr className="bg-white">
                      <td className="px-6 py-5 font-bold text-[10px] tracking-wider">AQUA.SHIELD.01</td>
                      <td className="px-6 py-5 text-zinc-500">120</td>
                      <td className="px-6 py-5 text-zinc-500">4-Way / 30% Elongation</td>
                      <td className="px-6 py-5 text-zinc-500">High-Output / UV Exposure</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-5 font-bold text-[10px] tracking-wider">THERMA.CORE.02</td>
                      <td className="px-6 py-5 text-zinc-500">240</td>
                      <td className="px-6 py-5 text-zinc-500">2-Way / 15% Elongation</td>
                      <td className="px-6 py-5 text-zinc-500">Cold Water Submersion</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-5 font-bold text-[10px] tracking-wider">AERO.LITE.03</td>
                      <td className="px-6 py-5 text-zinc-500">85</td>
                      <td className="px-6 py-5 text-zinc-500">4-Way / 45% Elongation</td>
                      <td className="px-6 py-5 text-zinc-500">Extreme Mobility / Wind</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
