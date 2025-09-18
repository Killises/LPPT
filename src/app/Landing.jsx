"use client";
import { useState } from "react";
import { translations } from "../translations/translations";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services";
import Benefits from "./components/sections/Benefits";
import WhyUs from "./components/sections/WhyUs";
import Testimonials from "./components/sections/Testimonials";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

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
