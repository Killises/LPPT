"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../data/translations";
import Section from "./Section";

export default function Footer({lang}) {
  const t = translations[lang]
  return (

    {/* Footer */ },
    <footer className="py-3 border-t dark:border-slate-700">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 ">
        <p className="text-sm text-slate-500 dark:text-slate-100">© {new Date().getFullYear()} Protección Total. {t.footer.rights}</p>
        <nav className="flex gap-5 text-sm text-slate-600 dark:text-slate-100">
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-400">{t.nav.home}</a>
          <a href="#servicios" className="hover:text-slate-900 dark:hover:text-slate-400">{t.nav.services}</a>
          <a href="#contacto" className="hover:text-slate-900 dark:hover:text-slate-400">{t.nav.contact}</a>
        </nav>
      </div>
    </footer>
  );
}