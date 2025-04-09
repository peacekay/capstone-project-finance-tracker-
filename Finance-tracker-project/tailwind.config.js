module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#E49B0F',
        'custom-blue': '#000435',
        'custom-torquise': '#40E0D0'
      },
    },
  },
  plugins: [],
};
