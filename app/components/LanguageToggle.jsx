
"use client";
export default function LanguageToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className=" text-sm btn btn-outline bg-white/80 backdrop-blur"
      ariaLabel="Toggle language"
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
