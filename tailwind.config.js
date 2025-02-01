/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Add Open Sans
      },
      fontWeight: {
      400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800', // Add more weights as needed
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}


