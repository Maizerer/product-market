module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  purge: [
    './pages/**/*.{vue}',
    './layouts/**/*.{vue}',
    './components/**/*.{vue}',
  ],
  theme: {
    screen: {
      sm: '640px',
      md: '760px',
      lg: '997px',
      xl: '1290px',
      xxl: '1536px',
    },
    container: {
      center: true,
    },
    colors: {
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      red: {
        DEFAULT: '#FF0000',
      },
      yellow: {
        DEFAULT: '#FFA900',
        70: 'rgba(255, 169, 0, .7)',
      },
      green: {
        DEFAULT: '#0E6A63',
        50: 'rgba(14, 106, 99, .5)',
        light: '#E7EFEE',
      },
      textlight: '#6B6B6B',
      borders: '#E1E1E1',
      search: '#6B6B6B',
      filterBtn: '#FFF8EB',
      hoverFilterBtn: '#FFF8BC',
      categoryBtn: '#DA9000',
      categoryBorder: '#FFF7B9',
      price: '#434343',
      productBorder: '#DADADA',
      supermarket: '#383C5C',
      supermargetBg: '#F7FFE5',
      freezeBg: '#D9D9D9',
    },
    extends: {
      backgroundImage: {
        'offer-bg': "url('~assets/images/offer-bg.jpg')",
      },
    },
    fontFamily: {
      nunito: 'Nunito, sans-serif',
    },
  },
  plugins: [],
}
