/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        'primary-dark': '#2980b9',
        secondary: '#2ecc71',
        'secondary-dark': '#27ae60',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}