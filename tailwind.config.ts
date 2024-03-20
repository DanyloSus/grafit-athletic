import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "hsla(48,10%,10%,100%)",
      green: "hsla(80,59%,39%,100%)",
      white: "hsla(0,0%,100%,100%)",
      grey: "hsla(230,3%,44%,100%)",
    },
    fontFamily: {
      dela: ["var(--font-dela)"],
      roboto: ["var(--font-roboto)"],
    },
  },
  plugins: [],
};
export default config;
