/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color palette: Eggshell, Burnt Peach, Twilight Indigo, Muted Teal, Apricot Cream
        accent: {
          DEFAULT: '#93B26F',
          light: '#adc78e',
          dark: '#758d58',
        },
        surface: {
          DEFAULT: '#000000',
          light: '#1f1f1f',
          dark: '#000000',
        },
        background: '#FFFFFF',
        peach: '#e07a5f',      // Burnt Peach
        cream: '#f2cc8f',      // Apricot Cream
      },
      fontFamily: {
        mono: ['Verdana', 'Geneva', 'sans-serif'],
        sans: ['Verdana', 'Geneva', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
