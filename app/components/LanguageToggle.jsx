
"use client";
export default function LanguageToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="top-4 right-4 z-50 btn btn-outline bg-white/80 backdrop-blur"
      aria-label="Toggle language"
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
