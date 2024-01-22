import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}"
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
