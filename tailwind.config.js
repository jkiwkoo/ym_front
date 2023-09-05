/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'pc': '640px'
    },
    extend: {
      colors: {
        'default': '#F5F5F5',
        'ym-blue': '#0A2E63',
        'ym-blue-2': '#2D5590',
        'ym-blue-3': '#2665C3',
        'ym-gray': '#B0B0B0',
        'ym-gray-2': '#737373',
        'ym-green': '#9CC92E',
        'ym-border': '#DDDDDD'
      },
    },
    fontFamily: {
      notoSans: ['var(--font-notoSans)'],
      notoSansBold: ['var(--font-notoSansBold)']
    }
  },
  plugins: [],
}
