import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechSpecsBar from "@/components/TechSpecsBar";
import CategoryCarousel from "@/components/CategoryCarousel";
import BrandsMarquee from "@/components/BrandsMarquee";
import ShopTheLook from "@/components/ShopTheLook";
import TechnicalExcellence from "@/components/TechnicalExcellence";
import Products from "@/components/Products";
import ProductVideo from "@/components/ProductVideo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <TechSpecsBar />
      <CategoryCarousel />
      <BrandsMarquee />
      <TechnicalExcellence />
      <ShopTheLook />
      <Products />
      <ProductVideo />
      <Footer />
    </main>
  );
}
