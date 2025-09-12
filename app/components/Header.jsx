'use client';
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import { translations } from "../data/translations";

import Section from "./Section";

export default function Header({ lang, setLang }) {
  const t = translations[lang];
  const { darkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="bg sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200 dark:border-slate-700 shadow-md">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
          <Image 
            src={darkMode ? "/images/darkLogo.png" : "/images/Logo.png"}
            alt="Logo ProteccionTotal.Pro"
            href="#home"
            width={210}
            height={70}
            className="w-[150px] h-auto"
          />
        {/* Menú en escritorio */}
        <nav className="hidden md:flex items-center gap-6 text-sm ">
          <a href="#servicios" className="a hover:text-slate-900">{t.nav.services}</a>
          <a href="#beneficios" className="a hover:text-slate-900">{t.nav.benefits}</a>
          <a href="#elegirnos" className="a hover:text-slate-900">{t.nav.why}</a>
          <a href="#testimonios" className=" a hover:text-red-700">{t.nav.testimonials}</a>
          <a href="#contacto" className="a hover:text-slate-950">{t.nav.contact}</a>
        </nav>
        {/* CTA + Idioma */}
        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden sm:block">
            <button className="btn btn-primary rounded-2xl">{t.hero.cta1}</button>
          </a>
          <LanguageToggle lang={lang} setLang={setLang} />

          {/* Botón hamburguesa (solo en móviles) */}
          <button
            className="md:hidden p-2 rounded-lg border border-slate-200 btn btn-outline bg-white/80 backdrop-blur"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // X (cerrar)
              (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>)
            ) : (
              // Icono hamburguesa
              (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>)
            )}
          </button>
          <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
        </div>
      </div>
      {/* Menú móvil */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-slate-200 flex flex-col items-center gap-4 py-4"
        >
          <a href="#servicios" className="hover:text-slate-900" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#beneficios" className="hover:text-slate-900" onClick={() => setMenuOpen(false)}>{t.nav.benefits}</a>
          <a href="#elegirnos" className="hover:text-slate-900" onClick={() => setMenuOpen(false)}>{t.nav.why}</a>
          <a href="#testimonios" className="hover:text-red-700" onClick={() => setMenuOpen(false)}>{t.nav.testimonials}</a>
          <a href="#contacto" className="hover:text-slate-950" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
          <LanguageToggle lang={lang} setLang={setLang} />
        </motion.div>
      )}
    </header>
  );
}