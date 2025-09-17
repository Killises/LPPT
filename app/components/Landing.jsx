"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { translations } from "../data/translations";
import Header from "./Header"
import Hero from "./Hero"
import Services from "./Services";
import Benefits from "./Benefits"
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Landing() {

  const [lang, setLang] = useState("es");
  const t = translations[lang];

  return (
    <div className="bg min-h-screen bg-gradient-to-b text-slate-900">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Benefits lang={lang}/>
      <WhyUs lang={lang}/>
      <Testimonials lang={lang}/>
      <Process lang={lang}/>
      <Contact lang={lang}/>
      <Footer lang={lang}/>
    </div>
  )
}
