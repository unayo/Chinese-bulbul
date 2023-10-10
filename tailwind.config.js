/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '1440': '345px 1fr',
        '1024': '299px 1fr',
      },
      colors: {
        'primary': '#DCCCBC',
        'primary-dark': '#aa6666',
      },
      fontSize: {
      },
      boxShadow: {
        'logo': '0px 0px 6px rgba(0, 0, 0, 0.25)',
        'default': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
