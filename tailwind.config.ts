import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slate: {
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        emerald: {
          500: "#10b981",
        },
        indigo: {
          500: "#6366f1",
        },
        rose: {
          500: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
