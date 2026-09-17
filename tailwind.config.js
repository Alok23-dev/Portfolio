/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0C',
          surface: '#121216',
          card: '#18181F',
          border: 'rgba(255, 255, 255, 0.08)',
          hoverBorder: 'rgba(230, 57, 70, 0.4)',
        },
        accent: {
          DEFAULT: '#E63946', // Vibrant Crimson Red accent
          glow: 'rgba(230, 57, 70, 0.15)',
          gold: '#FFB703',
        },
        paper: {
          DEFAULT: '#F8F9FA',
          muted: '#9E9EA7',
          dim: '#63636E',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
