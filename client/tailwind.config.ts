/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        swift: ["Swift"],
        strokeLight: ["Stroke-Light"]
      },
      height: {

      },
      width: {

      },
      screens: {
        sm: "576px",
        md: "720px",
        md2: "836px",
        lg: "1280px",
        xl: "1600px",
        "2xl": "1920px",
      },
      fontSize: {
      },
      colors: {
        "green": "#083D33",
        "yellow": "#D9C0A3",
        "grey": "#E9E9E9",
        

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

export {};