/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        charcoal: {
          800: '#1e293b',
          900: '#111827',
          950: '#0b0f17',
        },
        gold: {
          300: '#F3D079',
          400: '#E5B842',
          500: '#D4AF37',
          600: '#C59B27',
          700: '#A37B1B',
          800: '#7C5B10',
        },
        cream: {
          50: '#FAF5EC',
          100: '#F3EAD9',
          200: '#E8D9C0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        arabic: ['"Cinzel"', 'serif']
      }
    },
  },
  plugins: [],
}
