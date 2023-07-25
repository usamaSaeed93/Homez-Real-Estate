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
        banner:"url('/Images/png/banner.png')",
        profile1:"url('/Images/png/image1.jpg')",
        profile2:"url('/Images/png/image2.jpg')"
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
