/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        default: 'var(--default-color)',
        fade: 'var(--fade-color)',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        default: 'var(--default-color)',
        fade: 'var(--fade-color)',
      },
      lineHeight: {
        sm: '1.57143',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
