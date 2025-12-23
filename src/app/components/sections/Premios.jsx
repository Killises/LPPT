"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../../../translations/translations";
import Section from "../shared/Section";
import { useTheme } from "../../../context/ThemeProvider";

export default function Premios({ lang }) {

  const t = translations[lang]
  const { darkMode } = useTheme();
  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

  return (
    <Section id="premios" title={t.premios.title} subtitle={t.premios.subtitle} className="dark:bg-slate-800">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-4 gap-6 items-stretch">
        {t.premios.items.map((s, i) => (
          <motion.div variants={item} key={i} className="flex justify-between" >
            <div className="card-body-rewards card-section gap-3 flex flex-col justify-between h-full p-6 rounded-xl shadow items-center">
              <h3 className="text-md font-semibold ">{s.title}</h3>
              <p className=" text-sm text-slate-600 dark:text-slate-200" >{s.desc}</p>
              <div className="grid">
                <div className=" mt-4 h-full w-full relative " >
                  <a href={s.href}>
                    <Image
                      loading="lazy"
                      className="rounded-2xl w-full max-w-xs sm:max-w-md h-auto mx-auto"
                      src={s.srcDark && darkMode ? s.srcDark : s.srcLight || s.src}
                      alt="Logo"
                      unoptimized
                      width={1200}
                      height={600}
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </a>
                </div>
                <a href={s.href} className="btn btn-secondary rounded-lg text-sm mt-4" >
                  {t.premios.more}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
