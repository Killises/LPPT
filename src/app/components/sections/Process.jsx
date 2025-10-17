"use client";
import { motion } from "framer-motion";
import { translations } from "../../../translations/translations";
import Section from "../shared/Section";

export default function Process({ lang }) {
  const t = translations[lang]

  return(
    <Section id="proceso" title={t.process.title} subtitle={t.process.subtitle}>        
      <div className="grid md:grid-cols-4 gap-6 items-center">
        {t.process.steps.map((s, i) => (
          <div key={i} className="text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
              <div className="card-body card-section">
                <h3 className="font-semibold">
                  {s.t}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-200 mt-1">
                  {s.d}
                </p>
              </div>
            </motion.div>
          </div>
          )
        )
      }
      </div>
    </Section>
  );
}