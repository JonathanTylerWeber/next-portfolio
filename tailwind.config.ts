import type { Config } from "tailwindcss";

export default {
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
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12.5rem",
        "12xl": "14rem",
      },
      fontWeight: {
        medium: "500",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        typing: "typing 2.5s steps(15)",
        blink: "blink .4s step-end infinite alternate",
        "typing-blink":
          "typing 2.5s steps(15), blink .4s step-end infinite alternate",
      },
    },
  },
  plugins: [],
  safelist: [
    "translate-x-full",
    "translate-x-0",
    "transition-transform",
    "duration-300",
    "transform",
  ],
} satisfies Config;
