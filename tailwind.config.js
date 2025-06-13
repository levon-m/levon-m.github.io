/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier', 'monospace'],
      },
      colors: {
        'hover-blue': '#4A90E2',
      },
    },
  },
  plugins: [],
} 