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
      boxShadow: {
        paper: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;',
      },
    },
  },
  plugins: [],
};
