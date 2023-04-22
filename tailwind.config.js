/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#FF5C00",
        p: "#828487",
      },
      colors: {
        primary: "#FF5C00",
      },
      borderColor: {
        grey: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
