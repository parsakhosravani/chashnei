
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: '#f98169',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      link: {
        DEFAULT: '#0b314b',
      },
      gray: {
        DEFAULT: '#abadae',
      },
      darkGray: {
        DEFAULT: '#8b8e8f',
      },
      anotherGray: {
        DEFAULT: '#f9fbfb',
      },
      solidGray: {
        DEFAULT: '#aeb2b4',
      },
      purple: {
        DEFAULT: '#452268',
      },
      blue: {
        DEFAULT: '#255a7e',
      },
      darkBlue: {
        DEFAULT: '#0c3653',
      },
    },
    boxShadow: {
      'price-Box': '0 17px 16px 0 rgba(235, 241, 245, 0.55)',
      DEFAULT: '0 15px 29px 0 rgba(249, 129, 105, 0.68)',
      none: 'none',
    },
    extend: {
      backgroundImage: theme => ({
        'first-image': "url('./images/style 3.webp')",
        'forth-image': "url('./images/zv0lvbep.webp')",
        'bg-second-image': "url('./images/lcz9nxhoslo-brooke-lark.webp')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
