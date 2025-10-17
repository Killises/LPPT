"use client";

import Link from "next/link";
import Image from "next/image";
// import { NextSeo } from "next-seo";

export default function PromoPage() {
  return (
    <>
      {/* <NextSeo
        title="Instalación de alarmas Ajax en 24 horas | Protección Total"
        description="Oferta limitada: instalación de sistemas de alarma Ajax gratis y en 24 horas. Protege tu casa hoy con Protección Total."
        canonical="https://promo.protecciontotal.pro/"
        openGraph={{
          url: "https://promo.protecciontotal.pro/",
          title: "Protección Total - Instala tu alarma Ajax en 24 horas",
          description:
            "Protección Total ofrece instalación gratuita de sistemas Ajax por tiempo limitado. Seguridad sin cables y sin complicaciones.",
          images: [
            {
              url: "https://www.protecciontotal.pro/preview.jpg",
              width: 1200,
              height: 630,
              alt: "Sistema de alarma Ajax instalado por Protección Total",
            },
          ],
        }}
      /> */}

      <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center p-8">
        <Image
          src="/images/ajax-offer.png"
          alt="Oferta Ajax Protección Total"
          width={400}
          height={400}
          className="rounded-2xl mb-8 shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-4">
          🚨 Instalación Gratis + en 24 Horas 🚨
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Sistema de alarma <b>Ajax</b> con monitoreo profesional. Ideal para
          hogares, oficinas y negocios. ¡Aprovecha la promoción por tiempo
          limitado!
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=524426298541&text=Quiero%20mi%20alarma%20Ajax%20gratis%20en%2024h"
          className="bg-[#83c040] text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#9adb58] transition-all"
        >
          Solicitar instalación
        </Link>

        <footer className="mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} Protección Total — Todos los derechos
          reservados.
        </footer>
      </main>
    </>
  );
}
