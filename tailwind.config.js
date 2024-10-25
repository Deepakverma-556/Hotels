/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm:'12px',
        xxl:'39px',
        xxxl:'62px',
      },
      colors: {
        'dark-blue':'#11142d',
        'mustard':'#c7923e',
        'gray':'#515151',
        'light-gray':'#9a9ab0',
      },
      lineHeight: {
        xl: '46px',
        xxl:'74px',
      },
      fontFamily: {
        lora:['Lora', 'sans-serif'],
        mulish:['Mulish', 'sans-serif'],
      }
    },
  },
  plugins: [],
}