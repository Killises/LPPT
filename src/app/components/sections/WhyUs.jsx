"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../../../translations/translations";
import Section from "../Section";
import { useTheme } from "../../../context/ThemeProvider";

export default function WhyUs({ lang }) {
  const t = translations[lang]
  const { darkMode } = useTheme();

  return (
    {/* ¿Por qué elegirnos? */ },
    <Section id="elegirnos" >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold dark:text-slate-100">{t.why.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-200">{t.why.subtitle}</p>
          <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            {t.why.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3"><span className=" li mt-2 w-2 h-2 rounded-full" />{b}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div className=" h-auto w-auto relative aspect-[2/2] rounded-3xl  flex items-center justify-center">
            <Image className="rounded-2xl w-full max-w-xs sm:max-w-md h-auto mx-auto"
              src={darkMode ? t.why.srcLight : t.why.srcDark}
              alt="Logo de distribuidores Ajax"
              unoptimized
              width={1200}
              height={600}
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}