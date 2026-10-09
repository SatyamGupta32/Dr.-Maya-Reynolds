/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE1'
        },
        sage: {
          light: '#8FAF8F',
          DEFAULT: '#6B9E6B',
          dark: '#4A7A4A'
        },
        dust: {
          light: '#D4B5A0',
          DEFAULT: '#C4956A',
          dark: '#A67850'
        },
        charcoal: {
          light: '#5A5A5A',
          DEFAULT: '#2C2C2C',
          dark: '#1A1A1A'
        },
        warm: {
          white: '#FFFDF9',
          gray: '#E8E2D9'
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem'
      }
    },
  },
  plugins: [],
}
