import "../styles/globals.css";
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeProvider';


const montserrat = Montserrat({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata = {
  title: "Protección Total .Pro",
  description: "Descubre Protección Total, tu aliado en seguridad. Instalamos alarmas de seguridad, cámaras y control de accesos en Querétaro en menos de 24 h. Protege tu hogar o negocio con tecnología avanzada.",
  icons: {
    icon: "/srv/favicon.ico",
  },
  keywords: "alarmas, alarma, queretaro, sistemas de seguridad, Ajax, cámaras de vigilancia, control de accesos, protección de hogares, protección de negocios, seguridad avanzada, soluciones de seguridad, tecnología de seguridad",
  openGraph: {
    title: "Protección Total .Pro",
    description: "Descubre Protección Total, tu aliado en seguridad. Instalamos alarmas de seguridad, cámaras y control de accesos en Querétaro en menos de 24 h. Protege tu hogar o negocio con tecnología avanzada.",
    url: "protecciontotal.pro",
    siteName: "Protección Total .Pro",
    images: [
      {
        url: "/images/darkLogo.png",
        width: 1200,
        height: 630,
        alt: "Protección Total .Pro",
      }
    ]
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QXNKQF79VR"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'G-QXNKQF79VR');
      </script>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
