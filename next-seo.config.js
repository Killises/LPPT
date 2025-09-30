const SEO = {
  title: "Protección Total .Pro",
  description:
    "Instalamos sistemas de seguridad Ajax en menos de 24 horas en Querétaro. Protege tu hogar y negocio con tecnología europea y soporte local.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://protecciontotal.pro",
    siteName: "Protección Total .Pro",
    title: "Protección Total .Pro | Alarmas y sistemas de seguridad",
    description:
      "Sistemas de alarmas Ajax, videovigilancia HD y control de acceso en Querétaro.",
    images: [
      {
        url: "https://protecciontotal.pro/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Protección Total .Pro",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalJsonLd: [
    // 🔹 Local Business
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Protección Total .Pro",
      url: "https://protecciontotal.pro",
      logo: "https://protecciontotal.pro/preview.jpg",
      image: "https://protecciontotal.pro/preview.jpg",
      description:
        "Instalamos sistemas de seguridad Ajax en menos de 24 horas en Querétaro.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Benito Juárez 100, José María Arteaga",
        addressLocality: "Santiago de Querétaro",
        postalCode: "76136",
        addressCountry: "MX",
      },
      telephone: "+52 442 629 8541",
      email: "contacto@protecciontotal.pro",
      openingHours: "Mo-Sa 09:00-19:00",
      priceRange: "$$",
    },

    // 🔹 Testimonios como Reviews
    {
      "@context": "https://schema.org",
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Carlos M.",
      },
      reviewBody:
        "Con Ajax me siento tranquilo, puedo ver mi negocio desde el celular.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "Product",
        name: "Sistema de Alarmas Ajax",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Laura G.",
      },
      reviewBody: "Instalaron en el mismo día, ¡excelente servicio!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "Product",
        name: "Servicio de instalación Ajax",
      },
    },

    // 🔹 FAQ
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué pasa si se va la luz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las alarmas Ajax cuentan con batería de respaldo que dura varias horas, manteniendo tu seguridad incluso en apagones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Las alarmas funcionan con mascotas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, los sensores Ajax pueden configurarse para ignorar mascotas de hasta 20 kg.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito internet para que funcione?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El sistema Ajax usa canales múltiples (Ethernet, WiFi, GSM) y sigue funcionando aún sin internet.",
          },
        },
      ],
    },
  ],
};

export default SEO;
