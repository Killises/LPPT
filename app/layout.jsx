import './globals.css'
export const metadata = {
  title: "Protección Total | Seguridad Ajax",
  description: "Landing page con Next.js + Tailwind + Framer Motion, con selector de idioma.",
  icons: {
    icon: "images/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
