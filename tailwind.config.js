/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "vult-dark": "#1a1a2e",
        "vult-dark-secondary": "#16213e",
        "vult-primary": "#4cc9f0",
        "vult-accent": "#f72585",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
