module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.875rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6.25rem',
      },
    },
    colors: {
      primary: '#F63E76',
      primaryDark: '#D82058',
      white: '#FDFDFD',
      dark: '#232321',
      gray: '#656262',
      grayMedium: '#868686',
      grayLight: '#E8E8E8',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
