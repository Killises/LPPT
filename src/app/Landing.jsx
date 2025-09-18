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
      <Benefits lang={lang} />
      <WhyUs lang={lang} />
      <Testimonials lang={lang} />
      <Process lang={lang} />
      <section className="py-16 bg-gray-100 dark:bg-brand-backgroundSecondary text-center">
  <h2 className="dark:text-slate-100 text-3xl font-bold mb-6">Mira cómo funciona</h2>

  <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-5xl mx-auto">
    {/* Video 1 */}
    <div className="w-full md:w-1/2 aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/KIIVEtgXPkM?si=mDGSw3nh_IyZ7rdR"
        title="YouTube video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 2 */}
    <div className="w-full md:w-1/2 aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/KIIVEtgXPkM?si=mDGSw3nh_IyZ7rdR"
        title="YouTube video 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}
