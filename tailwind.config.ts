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
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        /** Primary actions / emphasis (replaces old navy CTA). */
        ink: {
          DEFAULT: "#0a0a0a",
          muted: "#404040",
        },
      },
      boxShadow: {
        surface:
          "0 1px 2px rgb(0 0 0 / 0.04), 0 4px 12px rgb(0 0 0 / 0.06)",
        "surface-md":
          "0 2px 4px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
