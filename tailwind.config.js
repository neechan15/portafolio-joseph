/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#070710',
          soft: '#0d0d1a',
          card: '#11111f',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          pink: '#ec4899',
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 2.5s linear infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'typing': 'typing 3s steps(30, end), blink .75s step-end infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25), transparent 50%)',
      },
    },
  },
  plugins: [],
};
