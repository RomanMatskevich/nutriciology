/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        halvetica: ["Halvetica"],
        swift: ["Swift"],
      },
      height: {

      },
      width: {

      },
      screens: {
        sm: "576px",
        md: "836px",
        lg: "1280px",
        xl: "1600px",
        "2xl": "1920px",
      },
      fontSize: {
      },
      colors: {
        "green": "#083D33",
        "yellow": "#D9C0A3",
        "grey": "#395D8E",
        

      },
      gradientColorStops: {

      },
      borderRadius: {

      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
}

