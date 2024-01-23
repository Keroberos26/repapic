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
        text: 'var(--text-color)',
        fade: 'var(--fade-color)',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        sub: 'var(--sub-color)',
        main: 'var(--main-color)',
        text: 'var(--text-color)',
        fade: 'var(--fade-color)',
      },
      aspectRatio: {
        banner: '83 / 55',
      },
      boxShadow: {
        base: '0 0 8px rgb(0 0 0 / 8%);',
      },
    },
  },
  plugins: [],
};
