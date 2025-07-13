// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: '#00FF41',
        bgDark: '#0f0f0f',
        cream: {
          100: '#fdf6ee',
          200: '#f7e9d7',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
