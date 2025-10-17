'use client';
import { useState } from "react";
import { useTheme } from "../../../context/ThemeProvider";
import ThemeToggle from "../shared/ThemeToggle"
import { motion } from "framer-motion";
import Image from "next/image";
import LanguageToggle from "../shared/LanguageToggle";
import { translations } from "../../../translations/translations";

export default function Header({ lang, setLang }) {
  const t = translations[lang];
  const { darkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="bg sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200 dark:border-slate-700 shadow-md">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
        <Image
          loading="lazy"
          src={darkMode ? "/images/darkLogo.webp" : "/images/Logo.webp"}
          alt="Logo ProteccionTotal.Pro"
          href="#home"
          width={210}
          height={70}
          className="w-[150px] h-auto"
        />
        </a>
        {/* Menú en escritorio */}
        <nav className="hidden md:flex items-center gap-6 text-sm ">
          <a href="#servicios" className="a ">{t.nav.services}</a>
          <a href="#beneficios" className="a">{t.nav.benefits}</a>
          <a href="#elegirnos" className="a ">{t.nav.why}</a>
          <a href="#testimonios" className=" a ">{t.nav.testimonials}</a>
          <a href="#contacto" className="a ">{t.nav.contact}</a>
        </nav>
        {/* CTA + Idioma */}
        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden md:block sm:block">
            <button className="btn btn-primary rounded-lg text-sm ">{t.hero.cta1}</button>
          </a>
          <a className="hidden md:block sm:block">
            <LanguageToggle lang={lang} setLang={setLang} />
          </a>
          {/* Botón hamburguesa (solo en móviles) */}
          <button
            className=" btn text-sm md:hidden  border border-slate-200 btn-outline bg-white/80 backdrop-blur"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // X (cerrar)
                (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="h-5 w-5">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M6 18 18 6M6 6l12 12" />
                  </svg>
                )
              ) : (
              // Icono hamburguesa
                (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="h-5 w-5">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              )
            }
          </button>
          <div className="flex items-center space-x-4">
            <a className="hidden sm:block">
              <ThemeToggle />
            </a>
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
          className="md:hidden dark:bg-brand-backgroud bg-slate-50 border-t dark:border-slate-700 border-slate-200 flex flex-col items-center gap-4 py-4">
          <a href="#servicios" className="a hover:text-slate-900" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#beneficios" className="a hover:text-slate-900" onClick={() => setMenuOpen(false)}>{t.nav.benefits}</a>
          <a href="#elegirnos" className="a hover:text-slate-900" onClick={() => setMenuOpen(false)}>{t.nav.why}</a>
          <a href="#testimonios" className="a hover:text-red-700" onClick={() => setMenuOpen(false)}>{t.nav.testimonials}</a>
            <a href="#contacto" className="a hover:text-slate-950" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
            <a href="#contacto" className="">
            <button className="btn btn-primary rounded-lg text-sm ">{t.hero.cta1}</button></a>
            <div className="flex gap-4">
              <LanguageToggle lang={lang} setLang={setLang} />
              <ThemeToggle />
            </div>
          </motion.div>
        )
      }
    </header>
  );
}