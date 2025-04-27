module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9c64ff',
          DEFAULT: '#8a2be2',
          dark: '#6a0dad',
        },
      },
    },
  },
  plugins: [],
} 