/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        deep: '#000000',
        surface: '#000000',
        accent: '#3B82F6',
        muted: '#A1A1A1',
        gold: '#B8860B',
        cyan: {
          DEFAULT: '#3B82F6',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
        },
        blue: {
          DEFAULT: '#3B82F6',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      fontFamily: {
        display: ['Inter', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
