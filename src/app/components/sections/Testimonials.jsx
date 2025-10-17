"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../../../translations/translations";
import Section from "../shared/Section";

export default function Testimonials({ lang }) {
  const t = translations[lang]

  return (

    {/* Testimonios */ },
    <Section id="testimonios" title={t.testimonials.title} subtitle={t.testimonials.subtitle} muted>
      <div className="grid md:grid-cols-2 gap-6">
        {t.testimonials.items.map((x, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
            <div className="card-body">
              <p className="text-slate-700 dark:text-slate-300">“{x.text}”</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-100">— {x.author}</p>
              <div className="mt-4  relative justify-items-center" >
                <Image 
                  loading="lazy"
                  className=" rounded-2xl w-5/12 h-auto max-w-xs sm:max-w-md mx-auto"
                  src={x.src}
                  alt="Logo"
                  unoptimized
                  width={600}
                  height={600}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}