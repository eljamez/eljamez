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
        inter: ["var(--font-inter)", "sans-serif"],
        russoOne: ["var(--font-russo-one)", "sans-serif"],
        silkscreen: ["var(--font-silkscreen)", "sans-serif"],
      },
      motionScale: {
        "200": "200%",
      },
      motionTimingFunction: {
        custom: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [tailwindcssMotion],
};
export default config;
