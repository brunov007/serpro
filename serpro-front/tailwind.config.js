module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.png')",
      },
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
