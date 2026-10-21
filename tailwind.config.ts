import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F0E6",
        ink: "#252522",
        persimmon: "#F05A36",
        cobalt: "#3157D5",
        butter: "#F4D86A",
        moss: "#657B54",
      },
      fontFamily: {
        display: ["Arial Rounded MT Bold", "Trebuchet MS", "sans-serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        paper: "5px 6px 0 rgba(37, 37, 34, .12)",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0) rotate(-2deg)" }, "50%": { transform: "translateY(-8px) rotate(1deg)" } },
        blink: { "0%, 48%": { opacity: "1" }, "49%, 100%": { opacity: ".25" } },
        draw: { from: { strokeDashoffset: "900" }, to: { strokeDashoffset: "0" } },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blink: "blink 1.2s steps(2, start) infinite",
        draw: "draw 1.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
