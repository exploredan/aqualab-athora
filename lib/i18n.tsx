"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "tr";
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  useEffect(() => {
    const saved = localStorage.getItem("aqualab-lang") as Language;
    if (saved && (saved === "en" || saved === "tr")) setLang(saved);
  }, []);
  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("aqualab-lang", newLang);
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
