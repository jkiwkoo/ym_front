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
        'ym-border': '#DDDDDD'
      },
    },
    fontFamily: {
      gmarket: ['var(--font-gmarket)'],
      gmarketBold: ['var(--font-gmarketBold)'],
      apple: ['var(--font-apple)'],
      notoSans: ['var(--font-notoSans)'],
      notoSansBold: ['var(--font-notoSansBold)']
    }
  },
  plugins: [],
}
