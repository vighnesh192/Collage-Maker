module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '3': '3 3 0%',
        '1.25': '1.25 1.25 0%',
        '2': '2 2 0%'
      },
      colors: {
        'sidebar': '#262829',
        'canvas': '#1B1C1C',
      },
    }
  },
  plugins: [],
}
