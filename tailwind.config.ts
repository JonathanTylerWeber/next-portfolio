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
    },
  },
  plugins: [],
} satisfies Config;
