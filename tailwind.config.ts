import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1366px",
    },
    extend: {
      colors: {
        arnaldo: "var(--color-ding)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
