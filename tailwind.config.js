/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:"url('/Images/png/banner.png')"
      },
      fontFamily:{
      Inter: [ 'Inter', 'sans-serif'],
       Manrope:['Manrope', 'sans-serif']
      },
      colors:{
        darkBlue:"#191a1f",
        carrot:"#ea614e"
      }
    },
  },
  plugins: [],
}
