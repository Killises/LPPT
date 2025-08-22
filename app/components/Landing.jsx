
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import LanguageToggle from "./LanguageToggle";
import { translations } from "../data/translations";
import Image from "next/image";

export default function Landing() {

  const [lang, setLang] = useState("es");
  const t = translations[lang];

  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", servicio: t.contact.services[0], comentarios: "" });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#home">
              <Image src="/images/PresentacionTotal (3).png" alt="Logo ProteccionTotal .Pro" width={150} height={50}/>
          </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-slate-900">{t.nav.services}</a>
            <a href="#beneficios" className="hover:text-slate-900">{t.nav.benefits}</a>
            <a href="#elegirnos" className="hover:text-slate-900">{t.nav.why}</a>
            <a href="#testimonios" className="hover:text-slate-900">{t.nav.testimonials}</a>
            <a href="#contacto" className="hover:text-slate-900">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contacto" className="hidden sm:block">
              <button className="btn btn-primary rounded-2xl">{t.hero.cta1}</button>
            </a>
            <a className="sm:block">
              <LanguageToggle lang={lang} setLang={setLang} />
            </a>
          </div>
        </div>

      </header>

      {/* Hero */}
      <Section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-white to-white" />
        <div className="container py-20 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }}>
          <div className="flex flex-wrap gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.hero.title.split(' ').slice(0,3).join(' ')} <span className="text-red-700">{t.hero.title.split(' ').slice(3).join(' ')}</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">{t.hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-primary rounded-2xl">{t.hero.cta1}</a>
             {/*  <a href="#servicios" className="btn btn-outline rounded-2xl">{t.hero.cta2}</a> */}
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-slate-600">
              {t.hero.bullets.map((b, i) => (
                <li key={i} className="badge"><span className="p-1 rounded-full bg-red-700" />{b}</li>
              ))}
            </ul>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.60 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
            <div className="relative aspect-video rounded-3xl flex items-center justify-center">
              <Image  src="/images/Jeweller House.png" fill={true}  objectFit="contain" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Servicios */}
      <Section id="servicios" title={t.services.title} subtitle={t.services.subtitle}>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((s, i) => (
            <motion.div variants={item} key={i} className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <div className="mt-4">
                  <button className="btn btn-outline rounded-xl">{t.services.more}</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Beneficios */}
      <Section id="beneficios" title={t.benefits.title} subtitle={t.benefits.subtitle} muted>
        <div className="grid md:grid-cols-3 gap-6">
          {t.benefits.items.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="card">
              <div className="card-body">
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ¿Por qué elegirnos? */}
      <Section id="elegirnos">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold">{t.why.title}</h2>
            <p className="mt-3 text-slate-600">{t.why.subtitle}</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {t.why.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-sky-500" />{b}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="aspect-[4/3] rounded-3xl bg-slate-200/60 border border-slate-200 shadow-inner flex items-center justify-center">
              <span className="text-slate-500">Imagen lateral / caso de éxito</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonios */}
      <Section id="testimonios" title={t.testimonials.title} subtitle={t.testimonials.subtitle} muted>
        <div className="grid md:grid-cols-2 gap-6">
          {t.testimonials.items.map((x, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
              <div className="card-body">
                <p className="text-slate-700">“{x.text}”</p>
                <p className="mt-4 text-sm text-slate-500">— {x.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Proceso */}
      <Section id="proceso" title={t.process.title} subtitle={t.process.subtitle}>
        <div className="grid md:grid-cols-4 gap-6 items-center">
          {t.process.steps.map((s, i) => (
            <div key={i} className="text-center">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
                <div className="card-body">
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.d}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title={t.contact.title} subtitle={t.contact.subtitle} muted>
        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="nombre" value={form.nombre} onChange={onChange} placeholder={t.contact.name} required className="rounded-xl border border-slate-300 p-3 bg-white" />
              <input name="telefono" value={form.telefono} onChange={onChange} placeholder={t.contact.phone} required className="rounded-xl border border-slate-300 p-3 bg-white" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder={t.contact.email} required className="rounded-xl border border-slate-300 p-3 bg-white" />
              <select name="servicio" value={form.servicio} onChange={onChange} className="rounded-xl border border-slate-300 p-3 bg-white">
                {t.contact.services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <textarea name="comentarios" value={form.comentarios} onChange={onChange} placeholder={t.contact.comments} rows={4} className="rounded-xl border border-slate-300 p-3 bg-white" />
              <button type="submit" className="btn btn-primary rounded-2xl">{t.contact.send}</button>
              {sent && <p className="text-sm text-green-600 mt-2">{t.contact.thanks}</p>}
            </div>
          </form>
          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Contacto directo</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5" aria-hidden="true" data-source-pos="263:54-263:82" data-source-name="Phone">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                    </path>
                  </svg>
                +52 442 629 8541</li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-5 h-5" aria-hidden="true" data-source-pos="264:54-264:81" data-source-name="Mail">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">  
                    </path>
                    <rect x="2" y="4" width="20" height="16" rx="2">
                    </rect>
                  </svg>
                  contacto@protecciontotal.pro</li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-5 h-5" aria-hidden="true" data-source-pos="265:54-265:83" data-source-name="MapPin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3">
                    </circle>
                  </svg>
                  Santiago de Querétaro, Qro.</li>
              </ul>
              <div className=" mt-6 aspect-video rounded-2xl bg-slate-200/60 border border-slate-200 shadow-inner flex items-center justify-center p-0">
                <iframe className="rounded-2xl" width="100%" height="100%" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoOLq_ts27g3vEog9sGYB0GJSyWBDK9gs&center=20.5999582%2C-100.4207807&zoom=12&q=Proteccion%Total%.%Pro" allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-3 border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Protección Total. {t.footer.rights}</p>
          <nav className="flex gap-5 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Inicio</a>
            <a href="#servicios" className="hover:text-slate-900">{t.nav.services}</a>
            <a href="#contacto" className="hover:text-slate-900">{t.nav.contact}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
