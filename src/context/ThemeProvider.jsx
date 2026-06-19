"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const storedMode = window.localStorage.getItem("darkMode");
    return storedMode ? storedMode === "true" : true;
  });

  useEffect(() => {
    window.localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}