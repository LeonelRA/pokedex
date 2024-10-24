/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(242, 37, 57, 1)',
        secondary: 'rgba(191, 191, 191, 1)',
        'gray-star': '#F5F5F5',
        'gray-base': '#5E5E5E',
      },
      boxShadow: {
        input: '0px 2px 10px 0 rgba(0, 0, 0, 0.04)',
        navbar: '0px -5px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
