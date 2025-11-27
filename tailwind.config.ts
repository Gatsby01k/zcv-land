// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Подхватываем твои CSS-переменные
        "zv-bg": "var(--bg)",
        "zv-bg-soft": "var(--bg-soft)",
        "zv-bg-card": "var(--bg-card)",
        "zv-bg-chip": "var(--bg-chip)",

        "zv-gold": "var(--gold)",
        "zv-gold-soft": "var(--gold-soft)",
        "zv-teal": "var(--accent-teal)",
        "zv-amber-soft": "var(--accent-amber-soft)",

        "zv-text": "var(--text)",
        "zv-muted": "var(--muted)",
      },
      fontFamily: {
        // через next/font у тебя уже Plus Jakarta Sans, но
        // для Tailwind добавляем alias
        sans: ["var(--font)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        "zv-soft": "0 22px 60px rgba(0,0,0,0.55)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
