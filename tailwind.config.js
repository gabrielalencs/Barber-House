/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/script.js"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans','sans-serif']
      }, 
      colors: {
        'brown-primary': '#AE3824',
        'brown-secondary': '#23120F',
        'white-primary': '#FAF9F9',
        'gray-primary': '#AFAFAF'
      }
    },
  },
}

