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
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          "blue-700": '#100F57',
          "blue-600": '#122A6A',
          "blue-500": '#033575',
          "blue-400": '#006AFF',
          "blue-300": '#0A92DD',
          "blue-200": '#509CDB',
          "blue-100": '#EDF5FF',
          "black-600":"#000000",
          "black-500":"#202224",
          "black-400": "#292828",
          "black-300": "#565656",
          "black-200": "#848484",
          "black-100": "#C4C4C4",
          "gold-500": "#D89925"
        }
      },
    },
  },
  plugins: [],
};
export default config;
