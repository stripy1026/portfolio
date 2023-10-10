import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeInSlowly: "fadeIn 5s ease-in",
        fadeIn: "fadeIn 1s ease-in-out",
        flip: "flip 300ms cubic-bezier(0,1,0,.71)",
        fadeDown: "fadeDown 500ms ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeDown: {
          from: { transform: "translateY(-10%)" },
          to: { transform: "translateY(0%)" },
        },
        flip: {
          from: {
            transform: "rotateY(180deg)",
          },
          to: {
            transform: "rotateY(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
