import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F5F2",
        ink: "#141617",
        graphite: "#333333",
        mute: "#6D6D6D",
        line: "#E4E2DD",
        surface: "#EAEAEA",
        accent: "#D95B2A",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      spacing: {
        header: "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
