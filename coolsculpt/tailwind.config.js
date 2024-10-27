/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max-lg': { 'max': '1024px' },
        'max-xxl': { 'max': '1281px' },
        'max-xl': { 'max': '1281px' },
        'max-xl2': { 'max': '950px' },
        'max-md': { 'max': '772px' },
        'max-sm': { 'max': '656px' },
        'max-sm1': { 'max': '500px' },
        'max-sm2': { 'max': '450px' },
      },
    },
  },
  plugins: [],
}

