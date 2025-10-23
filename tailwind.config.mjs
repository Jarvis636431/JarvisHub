/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        accent: "#6366f1",
        accentStrong: "#a855f7",
      },
      fontFamily: {
        display: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-glow": "0 24px 60px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
