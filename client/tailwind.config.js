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
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        sub: 'var(--sub-color)',
        main: 'var(--main-color)',
      },
    },
  },
  plugins: [],
};
