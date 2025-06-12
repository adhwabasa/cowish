/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "612px",
        md: "834px",
        lg: "1280px",
        xl: "1440px",
      },
    },
    extend: {
      fontSize: {
        xs: ["0.694rem", { lineHeight: "1rem" }],
        sm: ["0.833rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.2rem", { lineHeight: "1.75rem" }],
        xl: ["1.44rem", { lineHeight: "2rem" }],
        "2xl": ["1.728rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.074rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.488rem", { lineHeight: "2.75rem" }],
        "5xl": ["2.986rem", { lineHeight: "3rem" }],
      },
      colors: {
        "primary": "#156f44",
        "secondary": "#58a774",
        "accent": "#9ad1e5",
        "text": "#151515",
        "bg": "#fbfbfe"
      },
      fontFamily: {
        "content": "Manrope",
        "heading": "lexend"
      }
    },
  },
  plugins: [],
};
