import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["ALL", "RASHGUARDS", "VESTS", "RACING SHORTS", "HOODIES", "WINDBREAKERS"];

const collectionProducts = [
  {
    id: 1,
    name: "PRO-TECH RASHGUARD",
    price: "$120",
    description: "Engineered compression fit for optimal hydrodynamics.",
    tags: ["UV 50+", "4-WAY STRETCH"],
    image: "/Copy_of_Hooded_rashguard_on_202605030418.jpeg"
  },
  {
    id: 2,
    name: "APEX IMPACT VEST",
    price: "$250",
    description: "High-density foam core with low-profile ergonomic cut.",
    tags: ["ISO CERTIFIED", "MODULAR"],
    image: "/save_this_picture_4K_202605030409.jpeg"
  },
  {
    id: 3,
    name: "AERO RACING SHORTS",
    price: "$95",
    description: "Ultra-lightweight hydrophobic fabric for maximum agility.",
    tags: ["QUICK DRY", "WATER REPELLENT"],
    image: "/make_it_more_3D_er_202605030412.jpeg"
  }
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-black selection:bg-zinc-200 selection:text-black">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6">
            Collections
          </h1>
          <p className="text-base text-zinc-600 font-medium leading-relaxed">
            Engineered for extreme conditions. Our technical apparel combines clinical precision with rugged functionality. Explore the standard in marine performance.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-zinc-200 mb-12">
          {categories.map((category, idx) => (
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
            <div key={product.id} className="bg-white border border-zinc-200 p-4 md:p-5 group cursor-pointer hover:shadow-xl transition-all duration-300">
              
              {/* Image Box */}
              <div className="relative aspect-square bg-[#F0F0F0] overflow-hidden mb-5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-multiply" 
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
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm font-bold text-black mt-1 shrink-0">
                    {product.price}
                  </span>
                </div>
                <p className="text-[13px] text-zinc-500 font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>

            </div>
          ))}
        </div>
        
      </div>

      <Footer />
    </main>
  );
}
