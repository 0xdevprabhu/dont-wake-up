/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF5',
          200: '#FFF9E8',
          300: '#FFF4D6',
        },
        pastel: {
          blue: '#E1F5FE',
          yellow: '#FFF9C4',
          pink: '#FFEBEE',
          mint: '#E0F2F1',
          orange: '#FFE0B2',
          purple: '#F3E5F5',
        }
      },
      keyframes: {
        'gentle-breathe': {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.02) translateY(-2px)' },
        },
        'wiggle-soft': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'twitch-ear': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-2px) rotate(1deg)' },
          '75%': { transform: 'translateY(1px) rotate(-1deg)' },
        },
        'tremble-slow': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-2px)' },
          '40%, 80%': { transform: 'translateX(2px)' },
        },
        'shiver-fast': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-3px) translateY(-1px)' },
          '50%': { transform: 'translateX(3px) translateY(1px)' },
          '75%': { transform: 'translateX(-2px) translateY(2px)' },
        },
        'shock-pop': {
          '0%': { transform: 'scale(0.85) translateY(10px)' },
          '50%': { transform: 'scale(1.15) translateY(-8px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        'float-z1': {
          '0%': { transform: 'translate(0, 0) scale(0.6)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translate(10px, -24px) scale(1)', opacity: '0' },
        },
        'float-z2': {
          '0%': { transform: 'translate(0, 0) scale(0.6)', opacity: '0' },
          '50%': { opacity: '0.9' },
          '100%': { transform: 'translate(18px, -36px) scale(1.1)', opacity: '0' },
        },
        'float-z3': {
          '0%': { transform: 'translate(0, 0) scale(0.6)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(26px, -48px) scale(1.3)', opacity: '0' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-up': {
          '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: '0' },
          '20%': { transform: 'translate(-50%, -70%) scale(1.1)', opacity: '1' },
          '80%': { transform: 'translate(-50%, -90%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -110%) scale(0.9)', opacity: '0' },
        }
      },
      animation: {
        'gentle-breathe': 'gentle-breathe 3s ease-in-out infinite',
        'wiggle-soft': 'wiggle-soft 1.8s ease-in-out infinite',
        'twitch-ear': 'twitch-ear 1.2s ease-in-out infinite',
        'tremble-slow': 'tremble-slow 0.4s ease-in-out infinite',
        'shiver-fast': 'shiver-fast 0.15s ease-in-out infinite',
        'shock-pop': 'shock-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'float-z1': 'float-z1 2.4s ease-out infinite 0s',
        'float-z2': 'float-z2 2.4s ease-out infinite 0.7s',
        'float-z3': 'float-z3 2.4s ease-out infinite 1.4s',
        'bounce-slow': 'bounce-slow 2.2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'pop-in': 'pop-in 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'fade-in': 'fade-in 0.2s ease-out forwards',
        'float-up': 'float-up 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
      }
    },
  },
  plugins: [],
};
