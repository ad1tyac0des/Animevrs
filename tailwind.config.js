/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'anime-crimson': '#D72638',
        'anime-orange': '#FF822A',
        'anime-beige': '#F5F3EF',
        'anime-white': '#FBFBFB',
        'anime-graphite': '#262626',
      },
    },
  },
  plugins: [],
}

