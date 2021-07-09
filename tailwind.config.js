const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/**/*.svg',
  ],
  height: ['278px', '700px'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/img/building_4.jpeg')",
      }),
      colors: {
        'custom-blue': '#5148e5',
        // https://www.tailwindshades.com/
        grape: colors.purple,
        primary: {
          DEFAULT: '#264653',
          50: '#72A8BE',
          100: '#64A0B8',
          200: '#4C8DA7',
          300: '#40758B',
          400: '#335E6F',
          500: '#264653',
          600: '#192E37',
          700: '#0C171B',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#2A9D8F',
          50: '#BFEEE8',
          100: '#ABE8E1',
          200: '#82DED3',
          300: '#5AD3C4',
          400: '#35C5B4',
          500: '#2A9D8F',
          600: '#1F756A',
          700: '#144D46',
          800: '#0A2421',
          900: '#000000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
