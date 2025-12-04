"use client";

import Link from "next/link";
import Image from "next/image";
import NextSeo from "next-seo";

export default function LandingPage() {
  return (
    <>
      <head>
        <script type="text/javascript">
          (function () {
            var ldk = document.createElement('script');
            ldk.type = 'text/javascript';
            ldk.async = true;
            ldk.src = 'https://s.cliengo.com/weboptimizer/68ffdcd972e61a3d8918dcda/68ffdcd972e61a3d8918dcdd.js?platform=onboarding_modular';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s);
          }
          )();
        </script>
      </head>
      <main className="min-h-screen flex flex-col items-center justify-center bg text-white text-center px-8 py-2">
        <Image
          src="/images/ajax-offer.png"
          alt="Oferta Ajax Protección Total"
          width={400}
          height={400}
          className="rounded-2xl mb-8 shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-4">
          🚨 Instalación Gratis en menos de 24 Horas* 🚨
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Sistema de alarma <b>Ajax</b> con monitoreo profesional. Ideal para
          hogares, oficinas y negocios. ¡Aprovecha la promoción por tiempo
          limitado!
        </p>
       

        <Link
          href="https://api.whatsapp.com/send/?phone=524426298541&text=Quiero%20mi%20alarma%20Ajax%20en%2024h"
          className="bg-[#83c040] text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#9adb58] transition-all"
        >
          Solicitar instalación
        </Link>
        
        <p className=" p-3 gap-3 text-sm">* Aplican restricciones</p>
        <footer className=" text-sm text-gray-400">
          © {new Date().getFullYear()} Protección Total — Todos los derechos
          reservados.
        </footer>
      </main>
    </>
  );
  
}
