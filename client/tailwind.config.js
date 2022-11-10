/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img" : "url('../src/assets/loginImage.jpg')"
      },
      colors: {
        'cabin-blue':'#7cbcbb',
        'constancia-blue':'#008c8c',
        'imperial-blue':'#639391',
        'turquoise': '#007864',
        'mansel-blue':'#6abec6',
      },
    },
  },
  plugins: [],
}
