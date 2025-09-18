"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../../../translations/translations";
import Section from "../Section";

export default function Testimonials({ lang }) {
  const t = translations[lang]

  return(

          {/* Testimonios */},
          <Section id="testimonios" title={t.testimonials.title} subtitle={t.testimonials.subtitle} muted>
            <div className="grid md:grid-cols-2 gap-6">
              {t.testimonials.items.map((x, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
                  <div className="card-body">
                    <p className="text-slate-700 dark:text-slate-300">“{x.text}”</p>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-100">— {x.author}</p>
                    <div className="mt-4  relative justify-items-center" >
                      <img className="h-auto w-1/3 "
                        src={x.src}
                        alt="Logo"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

  )

}