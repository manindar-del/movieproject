const defaultTheme = require('tailwindcss/defaultTheme')

const withMT = require("@material-tailwind/html/utils/withMT");


module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 0.3s linear',
        'wiggle-opposite': 'wiggleOpposite 0.3s linear',
      },
      height: {
        '80': '20rem',  // 20rem = 320px
        '60': '15rem',  // 15rem = 240px
        '40': '10rem',  // 10rem = 160px
      },
      colors: {
        'app-pure-white': 'hsl(0, 0%, 100%)', // #FFFFFF
        'app-red': 'hsl(0, 97%, 63%)', // #FC4747
        'app-dark-blue': 'hsl(223, 30%, 9%)', // #10141E
        'app-semi-dark-blue': 'hsl(223, 36%, 14%)', // #161D2F
        'app-greyish-blue': 'hsl(223, 23%, 46%)', // #5A698F
        'app-grey': 'hsl(225, 3%, 77%)', // #C3C4C7
        'app-placeholder': 'hsl(223, 3%, 54%)', // #87898E
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'app-heading-lg': '2rem',
        'app-heading-md': '1.5rem',
        'app-heading-sm': '1.5rem',
        'app-heading-xs': '1.125rem',
        'app-body-md': '0.9375rem',
        'app-body-sm': '0.8125rem',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'skewY(0deg)' },
          '50%': { transform: 'skewY(-3deg)' },
        },
        wiggleOpposite: {
          '0%, 100%': { transform: 'skewY(0deg)' },
          '50%': { transform: 'skewY(3deg)' },
        },
      },
      
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '420px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
})
