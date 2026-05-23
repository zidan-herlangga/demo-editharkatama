/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff9ed",
          100: "#fff2d4",
          200: "#ffe29e",
          300: "#ffcc66",
          400: "#ffb727",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
        heading: ["Raleway", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
