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
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
