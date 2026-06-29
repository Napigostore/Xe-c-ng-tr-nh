import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16202a",
        "safety-yellow": "#f8bd1a",
        "signal-red": "#e5483d",
        "zalo-blue": "#0068ff",
        "steel-green": "#1f7a6d"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(22, 32, 42, 0.14)",
        lift: "0 12px 32px rgba(22, 32, 42, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
