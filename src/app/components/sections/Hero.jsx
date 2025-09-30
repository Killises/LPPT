"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../../../translations/translations";
import Section from "../Section";

export default function Hero({ lang }) {
  const t = translations[lang]

  return (
    <Section id="home" className=" relative overflow-hidden" muted>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-white to-white dark:bg-slate-800" />
      <div className="container py-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }}>
          <div className="flex flex-wrap gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-slate-50">
              {t.hero.title}
            </h1>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary dark:text-brand-primary">
              {t.hero.title2}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-100">
              {t.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="btn btn-primary rounded-2xl text-lg">
                {t.hero.cta1}
              </a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-12 text-sm text-slate-600 dark:text-slate-100">
              {t.hero.bullets.map((b, i) => (
                <li key={i} className="badge">
                  <span className="p-1 rounded-full li " />
                  {b}
                </li>
              )
              )
              }
            </ul>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.60 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <div className="relative aspect-video rounded-3xl flex items-center justify-center">
            <Image className="w-full max-w-xs sm:max-w-md h-auto mx-auto"
              alt="Casa Jeweller"
              width={1200}
              height={600}
              quality={95}
              src="/images/Jeweller House.png"
              sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}