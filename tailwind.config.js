module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Premium light theme */
        cream: {
          50: '#faf8f5',
          100: '#f5f3f0',
        },
        /* Teal accent palette */
        teal: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#6ee7b7',
          400: '#14b8a6',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
      },
      fontFamily: {
        mono: ['var(--font-fira)', 'monospace'],
        serif: ['Playfair Display', 'serif'],
        sans: ['var(--font-bricolage)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 32px rgba(0, 0, 0, 0.06)',
        strong: '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
