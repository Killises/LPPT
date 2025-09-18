"use client";
import { useState } from "react";
import { translations } from "../../../translations/translations";
import Section2 from "../Section2";

export default function Contact({ lang }) {
  const t = translations[lang]

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

    {/* Contacto */ },
    <Section2 id="contacto" title={t.contact.title} subtitle={t.contact.subtitle} muted >
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
        <div id='contactoDirecto' className="card-section bg-brand-backgroundSecondary">
          <div className="card-body">
            <h3 className="text-xl font-semibold">Contacto directo</h3>
            <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-3" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="https://api.whatsapp.com/send/?phone=%2B524426298541&text&type=phone_number&app_absent=0">+52 442 629 8541</a></li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contacto@protecciontotal.pro">contacto@protecciontotal.pro</a></li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Benito Juárez 100, José María Arteaga, 76136 Santiago de Querétaro, Qro.</li>
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
    </Section2>
  );
}