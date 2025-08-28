/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartacus: ['Spartacus', 'serif'],
      },
      colors: {
        turquoise: '#09d8c7',
        navy: '#17364f',
        'dark-navy': '#0d1a2f',
        plum: '#411e3a',
        red: '#bd0927',
        maroon: '#500a1f',
      },
    },
  },
  plugins: [],
};