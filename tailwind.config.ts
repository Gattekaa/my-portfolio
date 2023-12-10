import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FFFFFF",
          dark: "#1B1D21",
          surface: "#F7F7F7",
        },
        border: {
          light: "#E5E5E5",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "scale-up": {
          "0%": { transform: "scaleY(0.4)", transformOrigin: "100% 0%" },
          "100%": { transform: "scaleY(1)", transformOrigin: "100% 0%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "language-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "increase-size": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "scale-up":
          "scale-up 0.16s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "fade-in":
          "fade-in 0.16s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "language-spin":
          "language-spin 1s cubic-bezier(.75,-0.5,0,1.75) both",
        "increase-size":
          "increase-size 0.16s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [],
};
export default config;
