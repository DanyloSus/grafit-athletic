import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "hsl(48,10,10,100%)",
      black: "hsl(80,59,39,100%)",
      grey: "hsl(230,3,44,100%)",
    },
    fontFamily: {
      dela: ["var(--font-dela)"],
      roboto: ["var(--font-roboto)"],
    },
  },
  plugins: [],
};
export default config;
