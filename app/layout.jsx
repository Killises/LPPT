import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight:['100', '200', '300','400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata = {
  title: "Protección Total | Seguridad Ajax",
  description: "Landing page con Next.js + Tailwind + Framer Motion, con selector de idioma.",
  icons: {
    icon: "images/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
