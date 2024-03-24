/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: {
        thin: ["Poppins", "sans-serif"],
        extralight: ["Poppins", "sans-serif"],
        light: ["Poppins", "sans-serif"],
        regular: ["Poppins", "sans-serif"],
        medium: ["Poppins", "sans-serif"],
        semibold: ["Poppins", "sans-serif"],
        bold: ["Poppins", "sans-serif"],
        extrabold: ["Poppins", "sans-serif"],
        black: ["Poppins", "sans-serif"],
        "thin-italic": ["Poppins", "sans-serif"],
        "extralight-italic": ["Poppins", "sans-serif"],
        "light-italic": ["Poppins", "sans-serif"],
        "regular-italic": ["Poppins", "sans-serif"],
        "medium-italic": ["Poppins", "sans-serif"],
        "semibold-italic": ["Poppins", "sans-serif"],
        "bold-italic": ["Poppins", "sans-serif"],
        "extrabold-italic": ["Poppins", "sans-serif"],
        "black-italic": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
