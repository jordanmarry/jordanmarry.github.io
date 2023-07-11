/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-blue': '#0ea0ee',
        'dark-blue': '#43526b',
        'darker-blue': '#293241',
        'white': '#ccd6f6',
        'grey': '#b4bacc',
      },
    },
  },
  plugins: [],
}