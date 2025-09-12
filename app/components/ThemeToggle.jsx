import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border border-gray-400 dark:border-gray-600 
                 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   viewBox="0 0 24 24"
        //   width="16"
        //   height="16"
        //   className="fill-current"
        // >
        //   <path d="M13.965 23.016a10.94 10.94 0 0 1-7.787-3.227A10.95 10.95 0 0 1 2.953 12c0-2.942 1.146-5.708 3.225-7.79A10.94 10.94 0 0 1 13.965.985c2.405 0 4.693.77 6.617 2.224a1.172 1.172 0 0 1-.58 2.1A6.715 6.715 0 0 0 14.016 12a6.715 6.715 0 0 0 5.986 6.692c.477.052.875.39 1.003.853a1.17 1.17 0 0 1-.423 1.247 10.9 10.9 0 0 1-6.617 2.224m0-19.688c-4.78 0-8.668 3.89-8.668 8.672s3.889 8.672 8.668 8.672a8.6 8.6 0 0 0 2.857-.485 9.1 9.1 0 0 1-2.817-2.108A9.06 9.06 0 0 1 11.672 12c0-2.251.829-4.41 2.333-6.079a9.1 9.1 0 0 1 2.817-2.108 8.6 8.6 0 0 0-2.857-.485"></path>
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

      )}
    </button>
  );
}