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
        'ym-blue-4': '#005AD9',
        'ym-blue-5': '#1E4986',
        'ym-blue-6': '#061C3C',
        'ym-gray': '#B0B0B0',
        'ym-gray-2': '#737373',
        'ym-gray-3': '#EAEAEA',
        'ym-gray-4': '#D3D3D3',
        'ym-green': '#9CC92E',
        'ym-green-2': '#00AA00',
        'ym-red': '#B90028',
        'ym-red-2': '#BF0000',
        'ym-yellow': '#FAE100',
        'ym-border': '#DDDDDD'
      },
    },
    fontFamily: {
      apple: ['var(--font-apple)'],
      notoSans: ['var(--font-notoSans)'],
      notoSansBold: ['var(--font-notoSansBold)']
    }
  },
  plugins: [],
}
