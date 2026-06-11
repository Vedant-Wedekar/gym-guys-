/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FFFDFB',
        ink: {
          DEFAULT: '#2B2440',
          soft: '#5B5470',
          mute: '#8C86A0',
        },
        blush: { DEFAULT: '#FFB8D4', soft: '#FFD9E8' },
        lavender: { DEFAULT: '#C9B6FF', soft: '#E7DCFF' },
        sky: { DEFAULT: '#A8D8FF', soft: '#D9EDFF' },
        butter: { DEFAULT: '#FFE08A', soft: '#FFF3C9' },
        mint: { DEFAULT: '#9FEFCE', soft: '#D4F7E8' },
        peach: { DEFAULT: '#FFC4A3', soft: '#FFE4D4' },
        night: {
          DEFAULT: '#161121',
          card: '#211a33',
          line: '#322a47',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(120, 90, 180, 0.22)',
        glow: '0 0 60px -10px rgba(255, 184, 212, 0.55)',
        card: '0 24px 60px -24px rgba(120, 90, 180, 0.35)',
        float: '0 30px 70px -30px rgba(120, 90, 180, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        floatslow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-28px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-5%, 4%) scale(0.96)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        spinslow: {
          to: { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatslow: 'floatslow 9s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite',
        spinslow: 'spinslow 22s linear infinite',
        wiggle: 'wiggle 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}
