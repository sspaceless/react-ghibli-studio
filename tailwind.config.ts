import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      futura: ["var(--font-futura-book)"],
    },
    colors: {
      accent: {
        DEFAULT: "#009AEC",
        dark: "#009AEC",
      },
      secondary: {
        DEFAULT: "#bff3ff",
        dark: "#bff3ff",
      },
      celadon: "#0086a4",
    },
  },
};
export default config;
