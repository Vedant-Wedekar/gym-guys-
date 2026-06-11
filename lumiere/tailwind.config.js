/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFEF9',
        cream: '#FAF6EE',
        beige: '#EFE6D8',
        champagne: '#C9A86A',
        'champagne-deep': '#A8853F',
        emerald: { soft: '#E9F5EF', mid: '#1F7A5C', deep: '#0C4534' },
        royal: { soft: '#EAF1FD', mid: '#2A52BE', deep: '#14306E' },
        sky: { wash: '#E8F3FB', tone: '#7FB5DC' },
        sage: { soft: '#EEF3EA', mid: '#8BA888', deep: '#4F6B4C' },
        terracotta: { soft: '#FBEFE9', mid: '#C2673F', deep: '#8E4426' },
        coral: { soft: '#FDF0EC', mid: '#E58D74' },
        ink: '#16140F',
        stone: '#6E675C',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
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
        15: '0.15',
        35: '0.35',
        65: '0.65',
        85: '0.85',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float-a': 'floatA 7s ease-in-out infinite',
        'float-b': 'floatB 9s ease-in-out infinite',
        'grad-pan': 'gradPan 12s ease infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        floatB: {
          '0%,100%': { transform: 'translateY(0) rotate(4deg)' },
          '50%': { transform: 'translateY(-26px) rotate(-4deg)' },
        },
        gradPan: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
