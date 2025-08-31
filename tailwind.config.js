// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  safelist: [
    'bg-yellow-400',
    'shadow-yellow-200',
    'bg-green-400',
    'shadow-green-200',
    'shadow-gray-200'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
