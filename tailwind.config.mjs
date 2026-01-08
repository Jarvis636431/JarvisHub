/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f4ef",
        surface: "#ffffff",
        primary: "#1f1f1f",
        secondary: "#6b6b6b",
        accent: {
          cyan: "#2f6f6d",
          violet: "#c59a6d",
        },
        midnight: "#1f1f1f",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Newsreader"', "serif"],
        pixel: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "neon": "0 0 20px rgba(34, 211, 238, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
