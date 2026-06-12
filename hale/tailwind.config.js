/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFEFB',
        cream: '#F8F4EC',
        beige: '#EFE7D8',
        champagne: '#C9A86A',
        'champagne-deep': '#A8853F',
        emerald: { soft: '#E7F5EF', mid: '#1E8A6B', deep: '#0E4F3C' },
        sage: { soft: '#EEF3EA', mid: '#8BA888', deep: '#50694E' },
        mint: { soft: '#EAF8F2', mid: '#9FDCC3' },
        sky: { wash: '#E9F4FB', tone: '#7FB9DF' },
        ocean: { soft: '#E8F1F9', mid: '#2D6FA8', deep: '#16456E' },
        lavender: { soft: '#F1EEFA', mid: '#B5A8DC', deep: '#5F5494' },
        coral: { soft: '#FDF0EC', mid: '#EE8B74', deep: '#B85A42' },
        sunset: { soft: '#FCF1E7', mid: '#E7A05C', deep: '#C06A2B' },
        ink: '#182420',
        stone: '#66736C',
      },
      fontFamily: {
        display: ['"Newsreader"', 'serif'],
        body: ['"Albert Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      opacity: {
        3: '0.03',
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'float-a': 'floatA 8s ease-in-out infinite',
        'float-b': 'floatB 11s ease-in-out infinite',
        blob: 'blob 16s ease-in-out infinite',
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
        blob: {
          '0%,100%': { borderRadius: '58% 42% 55% 45% / 50% 58% 42% 50%', transform: 'rotate(0deg) scale(1)' },
          '50%': { borderRadius: '45% 55% 42% 58% / 58% 45% 55% 42%', transform: 'rotate(8deg) scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
}
