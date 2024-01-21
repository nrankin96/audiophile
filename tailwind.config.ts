import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    colors: {
      'sienna': '#D87D4A',
      'charcoal': '#101010',
      'lightgray': '##F1F1F1',
      'offwhite': '#FAFAFA',
      'peach': '#fbaf85',
      'white': '#FFFFFF',
      'black': '#000000',
    }
  },
  plugins: [],
};
export default config;
