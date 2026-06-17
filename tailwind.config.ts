import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        platinum: "#f4f7fb",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(79, 70, 229, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
