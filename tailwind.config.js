module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#06c',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          black: '#000000',
          darkest: '#1f2d3d',
          darker: '#313131',
          dark: '#1D1D1F',
          DEFAULT: '#111111',
          light: '#6e6e73',
          lighter:'#f5f5f7',
          lightest: '#fff'
        }
      },
      fontFamily: {
        'SF': ['SFProDisplay']
      },
      boxShadow:{
        active: '2px 4px 12px rgba(0, 0, 0, 0.08)'
      },
      transition:{
        prime: 'all .3s cubic-bezier(0,0,.5,1)'
      },
      height:{
        h500: '500px',
        h240: '15rem'
      },
      width: {
        w480: '480px',
        w313: '19.56rem',
      },
      screens:{
        'xs': { 'min': '320px', 'max': '640px' }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
},
}