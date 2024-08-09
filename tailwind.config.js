/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-pearl': {
          '50': '#eff8ff',
          '100': '#ddf1ff',
          '200': '#b4e4ff',
          '300': '#72cfff',
          '400': '#27b8ff',
          '500': '#009efd',
          '600': '#007ed9',
          '700': '#0063af',
          '800': '#005490',
          '900': '#034577',
          '950': '#011424',
        },
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
}
