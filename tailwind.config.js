/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/js/script.js", "./index.html"],
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
        'gray-primary': '#757575'
      },
      spacing: {
        '1280': '1280px',
        '1000': '-1000px',
        '[-40]': '-40px',
        '520': '520px'
      },
      screens: {
        'max-lg': {'max': '992px'},
        'min-lg': {'min': '992px'},
      },
    }
  },
}

