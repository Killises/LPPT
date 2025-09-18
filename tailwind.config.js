
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          backgroud: "#081d28",   // Fondo principal oscuro
          backgroundSecondary:"#20333d", //fondo secundario
          text: "#57585a",   // Texto secundario / íconos
          primary: "#b41c21",    // Botones de acción, alertas
          accent: "#83c040",
        }
      }
    },
  },
  plugins: [],
};
