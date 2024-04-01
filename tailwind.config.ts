import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //custom colors
    colors: {
      ...colors,
      black: "hsla(48,10%,10%,100%)",
      green: "hsla(80,59%,39%,100%)",
      white: "hsla(0,0%,100%,100%)",
      grey: "hsla(230,3%,44%,100%)",
      errorBox: "#2E1C1C",
      errorText: "#FFD1D1",
    },
    //custom fonts
    fontFamily: {
      dela: ["var(--font-dela)"],
      roboto: ["var(--font-roboto)"],
    },
    extend: {
      //custom spacing
      spacing: {
        pcx: "130px",
        pcy: "10px",
        tx: "58px",
        ty: "10px",
        mx: "12px",
        mt: "5px",
      },
    },
  },
  plugins: [],
};
export default config;
