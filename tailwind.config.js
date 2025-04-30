/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFD1DC",
          DEFAULT: "#D9A7B3",
          dark: "#C29F8A",
        },
        secondary: {
          light: "#F8F0F3",
          DEFAULT: "#F5E1DC",
          dark: "#E5C1C7",
        },
        dark: {
          light: "#6D6D6D",
          DEFAULT: "#3C3C3C",
          dark: "#333333",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/lash-hero-bg.jpg')",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
