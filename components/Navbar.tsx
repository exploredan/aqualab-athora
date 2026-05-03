"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, User, ShoppingBag, Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "Collection", en: "Collection", tr: "Koleksiyon", href: "/collection" },
    { key: "Technical", en: "Technical", tr: "Teknoloji", href: "/technology" },
    { key: "Story", en: "Story", tr: "Hikaye", href: "/#story" }
  ];

  return (
    <>
      {/* Main Floating Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled ? "top-2" : "top-6"
          }`}
      >
        <div className="max-w-7xl mx-auto bg-white rounded-full px-6 py-4 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5">
          {/* Logo & Left Links */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              {/* Custom abstract A logo similar to screenshot */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 21H8.5L12 13L15.5 21H20L12 3Z" fill="#362C30" />
                <circle cx="12" cy="13" r="3" fill="#362C30" />
              </svg>
            </Link>
            <div className="hidden md:flex space-x-7">
              {navLinks.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-zinc-600 hover:text-black transition-colors text-[15px] font-medium"
                >
                  {lang === "tr" ? item.tr : item.en}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <div 
              onClick={() => setLang(lang === "en" ? "tr" : "en")}
              className="flex items-center gap-2 bg-zinc-100/80 px-3 py-1.5 rounded-full text-[11px] font-bold text-zinc-600 cursor-pointer hover:bg-zinc-200 transition-colors tracking-wide select-none"
            >
              <span className="text-sm leading-none">{lang === "tr" ? "🇹🇷" : "🇬🇧"}</span>
              <span>{lang === "tr" ? "TR" : "EN"}</span>
              <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex items-center gap-5 text-[#362C30]">
              <button className="hover:opacity-60 transition-opacity"><Search size={22} strokeWidth={1.5} /></button>
              <button className="hover:opacity-60 transition-opacity"><User size={22} strokeWidth={1.5} /></button>
              <button className="hover:opacity-60 transition-opacity"><ShoppingBag size={22} strokeWidth={1.5} /></button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center text-[#362C30]">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6"
          >
            <div className="flex flex-col gap-8 text-3xl font-medium text-[#362C30]">
              {["Shop", "Collections", "Page", "Blog", "Theme"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
