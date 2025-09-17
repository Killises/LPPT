"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../data/translations";
import Section from "./Section";
import { useTheme } from "./ThemeProvider";

export default function Services({ lang }) {

  const t = translations[lang]
  const { darkMode } = useTheme();

  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

  return (

    <Section id="servicios" title={t.services.title} subtitle={t.services.subtitle} className="dark:bg-slate-800">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-6">
        {t.services.items.map((s, i) => (
          <motion.div variants={item} key={i} className="card">
            <div className="card-body grid grid-flow-row justify-items-center">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-200" >{s.desc}</p>
              <div className="mt-4  h-1/2 w-10/12 relative " >
                <Image
                  className="w-full max-w-xs sm:max-w-md h-auto mx-auto"
                  src={s.srcDark && darkMode ? s.srcDark : s.srcLight || s.src}
                  alt="Logo"
                  unoptimized
                  width={1200}
                  height={600}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>

  );


}
