/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      extend: {
        spacing:{
          "big":"48rem"
        }
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        raleway:['Raleway', 'sans-serif'],
        lato:['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
