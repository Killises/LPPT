import { title } from "framer-motion/client";

export const translations = {
  
  es: {
    nav: { home:"inicio", services: "Servicios", benefits: "Beneficios", why: "¿Por qué elegirnos?", testimonials: "Testimonios", contact: "Contacto" },
    home:{
      title:"inicio"
    },
    hero: {
      title: "Protección Total .Pro para tu hogar y negocio",
      subtitle: "Instalamos sistemas de seguridad inteligentes en menos de 24 horas para proteger lo que más valoras.",
      cta1: "Cotiza ahora",
      cta2: "Ver servicios",
      bullets: ["Instalación en menos de 24 horas en Querétaro", "Tecnología No.1 en europa", "Atención local en Querétaro y soporte nacional"]
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones integrales: alarmas, videovigilancia, alertas y control de acceso.",
      items: [
        { 
          title: "Alarmas inteligentes", 
          desc: "Detección precisa de intrusos con sensores y alertas en tiempo real.", 
          srcLight: "/srv/DevicesBlack.png",
          srcDark: "/srv/DevicesWhite.png"
        },
        { title: "Videovigilancia HD", desc: "Imágenes nítidas, visión nocturna y acceso remoto desde cualquier lugar.", src:'/srv/Bulletcam.png' },
        { title: "Alertas instantáneas", desc: "Notificaciones al instante ante cualquier actividad sospechosa.", src:"/srv/alert.gif" },
        { title: "Control de acceso", desc: "Administra quién entra y sale con soluciones seguras y sencillas.", src:"/srv/acces.jpg" }
      ],
      more: "Conoce más"
    },
    benefits: {
      title: "Beneficios",
      subtitle: "Lo mejor de la tecnología con un servicio local y cercano.",
      items: [
        { title: "Instalación exprés", desc: "En Querétaro y alrededores, tu sistema queda listo en menos de 24 h." },
        { title: "Soluciones integrales", desc: "Protección completa: alarmas, cámaras, control de acceso y soporte técnico." },
        { title: "Atención especializada", desc: "Equipo profesional para garantizar tu tranquilidad y seguridad." }
      ]
    },
    why: {
      title: "¿Por qué elegirnos?",
      subtitle: "Combinamos tecnología de última generación con un servicio local confiable.",
      bullets: ["Tecnología europea top seller", "Respuesta inmediata", "Personalización según tus necesidades", "Soporte técnico continuo"]
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "La tranquilidad de nuestros clientes lo dice todo.",
      items: [
        { 
          author: "Carlos M.", 
          text: "Con Ajax me siento tranquilo, puedo ver mi negocio desde el celular.", 
          src: "/inst/anexo4.jpg" 
        },
        {
          author: "Laura G.",
          text: "Instalaron en el mismo día, ¡excelente servicio!", 
          src: "/inst/anexo1.jpg"
        }
      ]
    },
    process: {
      title: "Proceso sencillo",
      subtitle: "De la cotización a la instalación en 4 pasos.",
      steps: [
        { t: "1. Cotiza", d: "En línea o por teléfono" },
        { t: "2. Agenda", d: "Elegimos fecha y hora" },
        { t: "3. Configura", d: "Acceso remoto y pruebas" },
        { t: "4. Disfruta", d: "Tranquilidad 24/7" }
      ]
    },
    contact: {
      title: "Solicita tu cotización",
      subtitle: "Sin compromiso. Respuesta rápida del equipo.",
      name: "Nombre completo",
      phone: "Teléfono",
      email: "Correo electrónico",
      service: "Servicio de interés",
      services: ["Alarmas", "Videovigilancia", "Control de acceso", "Soluciones TI"],
      comments: "Cuéntanos qué necesitas",
      send: "Enviar solicitud",
      thanks: "¡Gracias! Hemos recibido tu solicitud."
    },
    footer: { rights: "Todos los derechos reservados." }
  },
  en: {
    nav: { home:"Home", services: "Services", benefits: "Benefits", why: "Why choose us?", testimonials: "Testimonials", contact: "Contact" },
    home:{ 
      title:"Home"
    },
    hero: {
      title: "Total Protection .Pro for your home and business",
      subtitle: "We install smart security systems in less than 24 hours to protect what you value most.",
      cta1: "Get a quote",
      cta2: "View services",
      bullets: [
        "Installation in less than 24 hours in Querétaro",
        "No.1 technology in Europe",
        "Local service in Querétaro and nationwide support"
      ]
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive solutions: alarms, video surveillance, alerts, and access control.",
      items: [
        { 
          title: "Smart alarms", 
          desc: "Accurate intruder detection with sensors and real-time alerts.", 
          srcLight: "/srv/DevicesBlack.png",
          srcDark: "/srv/DevicesWhite.png"
        },
        { title: "HD video surveillance", desc: "Clear images, night vision, and remote access from anywhere.", src:'/srv/Bulletcam.png' },
        { title: "Instant alerts", desc: "Immediate notifications for any suspicious activity.", src:"/srv/alert.gif" },
        { title: "Access control", desc: "Manage who enters and leaves with secure and simple solutions.", src:"/srv/acces.jpg" }
      ],
      more: "Learn more"
    },
    benefits: {
      title: "Benefits",
      subtitle: "The best technology with a close, local service.",
      items: [
        { title: "Express installation", desc: "In Querétaro and surrounding areas, your system is ready in less than 24 h." },
        { title: "Comprehensive solutions", desc: "Complete protection: alarms, cameras, access control, and technical support." },
        { title: "Specialized attention", desc: "A professional team to ensure your peace of mind and security." }
      ]
    },
    why: {
      title: "Why choose us?",
      subtitle: "We combine cutting-edge technology with reliable local service.",
      bullets: [
        "Top-selling European technology",
        "Immediate response",
        "Tailored to your needs",
        "Ongoing technical support"
      ]
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "Our clients' peace of mind says it all.",
      items: [
        { 
          author: "Carlos M.", 
          text: "With Ajax I feel safe, I can monitor my business from my phone.", 
          src: "/inst/anexo4.jpg" 
        },
        {
          author: "Laura G.",
          text: "They installed it the same day, excellent service!", 
          src: "/inst/anexo1.jpg"
        }
      ]
    },
    process: {
      title: "Simple process",
      subtitle: "From quotation to installation in 4 steps.",
      steps: [
        { t: "1. Quote", d: "Online or by phone" },
        { t: "2. Schedule", d: "We pick a date and time" },
        { t: "3. Configure", d: "Remote access and testing" },
        { t: "4. Enjoy", d: "Peace of mind 24/7" }
      ]
    },
    contact: {
      title: "Request your quote",
      subtitle: "No commitment. Quick response from our team.",
      name: "Full name",
      phone: "Phone",
      email: "Email",
      service: "Service of interest",
      services: ["Alarms", "Video surveillance", "Access control", "IT solutions"],
      comments: "Tell us what you need",
      send: "Send request",
      thanks: "Thank you! We've received your request."
    },
    footer: { rights: "All rights reserved." }
  }
};
