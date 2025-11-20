/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Deepest blue/black
        surface: "#0f172a",    // Slate 900
        primary: "#f8fafc",    // Slate 50
        secondary: "#94a3b8",  // Slate 400
        accent: {
          cyan: "#22d3ee",     // Cyan 400
          violet: "#a78bfa",   // Violet 400
        },
        midnight: "#020617",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
        pixel: ['"Press Start 2P"', "cursive"],
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
