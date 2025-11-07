/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800080',
        'primary-dark': '#4b0082',
        'primary-light': '#9d4edd',
        secondary: '#ff69b4',
        'secondary-dark': '#ff1493',
        'secondary-light': '#ffb3d9',
        accent: '#e6b8e6',
        'accent-light': '#e0c3fc',
        'accent-dark': '#d8a8d8',
        text: '#2c2c2c',
        'text-light': '#666666',
        bg: '#fdfbf9',
        'bg-secondary': '#f9f9f9',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}