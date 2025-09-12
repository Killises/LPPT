
"use client";
import { useState, useEffect} from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import Section from "./Section";
import { translations } from "../data/translations";
import Image from "next/image";
import Header from "./Header"
import Hero from "./Hero"
import Services from "./Services";
import { useForm, ValidationError } from '@formspree/react';

export default function Landing() {


  const [lang, setLang] = useState("es");
  const t = translations[lang];
  const { darkMode } = useTheme();



  //Fromspree
  const [form, setForm] = useState({ name: "", phone: "", email: "", servicio: t.contact.services[0], comentarios: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // 🔹 Validación en tiempo real
  const validate = (field, value) => {
    let error = "";

    if (field === "name" && !value.trim()) {
      error = "El nombre es obligatorio.";
    }
    if (field === "phone" && !value.trim()) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      if (!value) error = "El telefono es obligatorio.";
      else if (!phoneRegex.test(value)) error = "Numero inválido.";
      error = "El telefono es obligatorio.";
    }
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) error = "El correo es obligatorio.";
      else if (!emailRegex.test(value)) error = "Correo inválido.";
    }
    if (field === "message") {
      if (!value) error = "El mensaje es obligatorio.";
      else if (value.length < 10)
        error = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return error === "";
  };

  // 🔹 Manejo de cambios con validación inmediata
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  // 🔹 Submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos antes de enviar
    const isNameValid = validate("name", form.name);
    const isPhoneValid = validate("message", form.phone);
    const isEmailValid = validate("email", form.email);
    const isMessageValid = validate("message", form.message);

    if (!isNameValid || !isEmailValid || !isMessageValid || !isPhoneValid) {
      setStatus("Corrige los errores antes de enviar ❌");
      return;
    }

    setStatus("Enviando...");

    try {
      const res = await fetch("https://formspree.io/f/myzdojnz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Mensaje enviado con éxito ✅");
        setForm({ name: "", phone: "", email: "", servicio: t.contact.services[0], comentarios: "" });
        setErrors({});
      } else {
        setStatus("Error al enviar ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error en el servidor ❌");
    }
  };

  return (
    <div className="bg min-h-screen bg-gradient-to-b text-slate-900">

      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang}/>
      <Services lang={lang}/>
      
      {/* Beneficios */}
      <Section id="beneficios" title={t.benefits.title} subtitle={t.benefits.subtitle} muted>
        <div className="grid md:grid-cols-3 gap-6">
          {t.benefits.items.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="card">
              <div className="card-body">
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ¿Por qué elegirnos? */}
      <Section id="elegirnos">
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
                src={darkMode ? "/images/DistB.png":"/images/Dist.png"} alt="Logo"
                width={500}
                height={600}
              >

              </Image>
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

      {/* Proceso */}
      <Section id="proceso" title={t.process.title} subtitle={t.process.subtitle}>
        <div className="grid md:grid-cols-4 gap-6 items-center">
          {t.process.steps.map((s, i) => (
            <div key={i} className="text-center">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
                <div className="card-body">
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-200 mt-1">{s.d}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title={t.contact.title} subtitle={t.contact.subtitle} muted >
        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t.contact.name}
                value={form.name}
                onChange={handleChange}
                required
                className={`rounded-xl border dark:text-slate-900 dark:bg-slate-200 border-slate-300 p-3 bg-white ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )
              }
              <input
                name="phone"
                placeholder={t.contact.phone}
                value={form.phone}
                onChange={handleChange}
                required
                className={`dark:text-slate-900 rounded-xl border dark:bg-slate-200 border-slate-300 p-3 bg-white ${errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-4" >
              <input
                type="email"
                name="email"
                placeholder={t.contact.email}
                value={form.email}
                onChange={handleChange}
                className={`rounded-xl border dark:bg-slate-200 border-slate-300 p-3 bg-white ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                className="rounded-xl border dark:bg-slate-200 border-slate-300 p-3 bg-white">
                {t.contact.services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                name="message"
                placeholder={t.contact.comments}
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={`rounded-xl border dark:bg-slate-200 border-slate-300 p-3 bg-white ${errors.message ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
              <button type="submit" className="btn btn-primary rounded-2xl">{t.contact.send}</button>
            </div>
            <p className="text-center text-sm mt-2">{status}</p>
          </form>
          <div id='contactoDirecto' className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Contacto directo</h3>
              <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5" aria-hidden="true" data-source-pos="263:54-263:82" data-source-name="Phone">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                    </path>
                  </svg>
                  +52 442 629 8541</li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5" aria-hidden="true" data-source-pos="264:54-264:81" data-source-name="Mail">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">
                    </path>
                    <rect x="2" y="4" width="20" height="16" rx="2">
                    </rect>
                  </svg>
                  contacto@protecciontotal.pro</li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5" aria-hidden="true" data-source-pos="265:54-265:83" data-source-name="MapPin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3">
                    </circle>
                  </svg>
                  Santiago de Querétaro, Qro.</li>
              </ul>
              <div id="maps" className=" mt-6 aspect-video rounded-2xl  shadow-inner flex items-center justify-center p-0">
                <iframe
                  className="rounded-2xl"
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoOLq_ts27g3vEog9sGYB0GJSyWBDK9gs&center=20.5999582%2C-100.4207807&zoom=12&q=Proteccion%Total%.%Pro"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </Section>



      {/* Footer */}
      <footer className="py-3 border-t dark:border-slate-700">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 ">
          <p className="text-sm text-slate-500 dark:text-slate-100">© {new Date().getFullYear()} Protección Total. {t.footer.rights}</p>
          <nav className="flex gap-5 text-sm text-slate-600 dark:text-slate-100">
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-400">Inicio</a>
            <a href="#servicios" className="hover:text-slate-900 dark:hover:text-slate-400">{t.nav.services}</a>
            <a href="#contacto" className="hover:text-slate-900 dark:hover:text-slate-400">{t.nav.contact}</a>
          </nav>
        </div>
      </footer>
    </div>

  )
}
