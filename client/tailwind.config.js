/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img" : "url('../src/assets/loginImage.jpg')",
        "wave-img" : "url('../src/assets/waves_water.jpg')",
        "whitedress" : "url('../src/assets/whitedress.jpg')"
      },
      colors: {
        'cabin-blue':'#7cbcbb',
        'constancia-blue':'#008c8c',
        'imperial-blue':'#639391',
        'turquoise': '#007864',
        'mansel-blue':'#6abec6',
        'cyan-lightened': '#9ac9c91a',
        'cyan-brightened': '#9ac9c948'
      },
    },
  },
  plugins: [],
}
