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
    colors: {
      red: {
        DEFAULT: '#FF0000',
      },
      yellow: {
        DEFAULT: '#FFA900',
      },
    },
  },
  plugins: [],
}
