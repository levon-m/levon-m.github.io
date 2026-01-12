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
          DEFAULT: '#81b29a', // Muted Teal (links)
          light: '#a8cfc0',
          dark: '#5a8872',
        },
        surface: {
          DEFAULT: '#2c2e45', // Twilight Indigo (darker)
          light: '#4f5270',
          dark: '#2a2c3f',
        },
        background: '#FAF5F0', // Eggshell
        peach: '#e07a5f',      // Burnt Peach
        cream: '#f2cc8f',      // Apricot Cream
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
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
