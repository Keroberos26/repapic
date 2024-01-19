/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        sub: 'var(--sub-color)',
        main: 'var(--main-color)',
        grey: '#F0F0F0',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        sub: 'var(--sub-color)',
        main: 'var(--main-color)',
        grey: '#F0F0F0',
      },
    },
  },
  plugins: [],
};
