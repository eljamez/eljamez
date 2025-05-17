import type { Config } from "tailwindcss";
import tailwindcssMotion from "tailwindcss-motion";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["var(--font-merriweather)", "Merriweather", "serif"],
        zilla: ["var(--font-zilla-slab)", "Zilla Slab", "serif"],
        oswald: ["Oswald", "Arial", "sans-serif"],
      },
      colors: {
        background: "#F8F9FB",
        primary: "#2D3142",
        //accent: "rgb(130, 167, 172)",
        //accent: "rgb(154, 62, 80)",
        accent: "#333",
        secondary: "rgb(242, 191, 65)",
        card: "#FFFFFF",
        border: "#BFC0C0",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(47, 55, 75, 0.06)",
      },
      motionScale: {
        "200": "200%",
      },
      motionTimingFunction: {
        custom: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [
    tailwindcssMotion,
    // Custom plugin for blocky-text (text stroke)
    function (pluginApi: {
      addUtilities: (utils: Record<string, any>) => void;
    }) {
      pluginApi.addUtilities({
        ".blocky-text": {
          "-webkit-text-stroke": "2px #000",
          "text-stroke": "2px #000",
        },
      });
    },
  ],
};
export default config;
