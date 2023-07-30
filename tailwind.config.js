/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  mode: 'jit',
  theme: {
    screens: {
      'tablet': '540px',
      'laptop': '860px',
      'pc':'1084px',
      'desktop': '1400px',
    },
    extend: {},
  },
  plugins: [],
}

