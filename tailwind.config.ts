import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#114B2A",
        brandGold: "#C49A3A",
        brandCream: "#F5EFD9",
        brandBlack: "#101010",
        brandSpice: "#B33A1B"
      }
    }
  },
  plugins: []
};

export default config;
