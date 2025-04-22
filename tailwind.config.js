/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'earth-green': '#2E7D32',
        'soil-brown': '#5D4037',
        'sky-blue': '#1976D2',
        'leaf-green': '#81C784',
        'sunset-orange': '#FF7043',
        'sunlight-yellow': '#FDD835',
        'stone-gray': '#757575',
        'cloud-white': '#FFFFFF',
        'night-black': '#212121',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        heading: ['var(--font-montserrat)'],
        handwriting: ['var(--font-caveat)'],
      },
    },
  },
  plugins: [],
}
