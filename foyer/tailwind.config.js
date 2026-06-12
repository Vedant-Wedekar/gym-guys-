/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF8',
        cream: '#FAF5EC',
        sand: { soft: '#F2E8D8', mid: '#E3CFA9', deep: '#B98F4E' },
        champagne: '#C9A86A',
        'champagne-deep': '#A07E3B',
        sage: { soft: '#EEF3EA', mid: '#8BA888', deep: '#4F6B4C' },
        emerald: { soft: '#E8F5EE', mid: '#1E8A63', deep: '#0D4A33' },
        sky: { wash: '#E9F3FB', tone: '#7FB4DD' },
        royal: { soft: '#EAF0FC', mid: '#2D55B8', deep: '#16306B' },
        terracotta: { soft: '#FBEFE8', mid: '#C26B41', deep: '#8C4524' },
        coral: { soft: '#FDF0EB', mid: '#EC8A6E', deep: '#B5573B' },
        sunset: { soft: '#FCF2E6', mid: '#E5A055', deep: '#BD6F22' },
        ink: '#211B12',
        stone: '#71685A',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.32em' },
      opacity: { 3: '0.03', 4: '0.04', 6: '0.06', 8: '0.08', 12: '0.12' },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float-a': 'floatA 7s ease-in-out infinite',
        'float-b': 'floatB 10s ease-in-out infinite',
        bubble: 'bubble 9s ease-in-out infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-16px) rotate(2deg)' },
        },
        floatB: {
          '0%,100%': { transform: 'translateY(0) rotate(3deg)' },
          '50%': { transform: 'translateY(-24px) rotate(-3deg)' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-420px) scale(1.25)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
