"use client";
import { motion } from "framer-motion";
import { translations } from "../../../translations/translations";
import Section from "../Section";

export default function Benefits({ lang }) {
  const t = translations[lang]

  return (

    < Section id = "beneficios" title = { t.benefits.title } subtitle = { t.benefits.subtitle } muted >
      <div className="grid md:grid-cols-3 gap-6">
        {t.benefits.items.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="card">
            <div className="card card-body">
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
  </Section >
  
  );
}