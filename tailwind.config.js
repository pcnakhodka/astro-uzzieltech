/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,astro,html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Poppins'],
      },
      colors:{
        'uzziel-blue':'#00409A'
      },
      height:{
        '112':'32rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
