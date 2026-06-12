/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        ink: '#0E0E10',
        smoke: '#5C5C66',
        line: '#E8E8EC',
        emerald: { hi: '#00B27A', lo: '#005C40', tint: '#E3F7EF' },
        royal: { hi: '#3D5BFF', lo: '#1A2E99', tint: '#E9EDFF' },
        crimson: { hi: '#E63950', lo: '#8F1325', tint: '#FDEAED' },
        tangerine: { hi: '#FF6B1A', lo: '#A63B00', tint: '#FFEFE4' },
        cyan: { hi: '#00B5D1', lo: '#00606F', tint: '#E2F8FC' },
        lavender: { hi: '#8E7CE8', lo: '#4A3D8F', tint: '#F0EDFC' },
        beige: { hi: '#D9C7A7', lo: '#8A744C', tint: '#F7F2E8' },
        gold: { hi: '#C8A24B', lo: '#7D6022', tint: '#F8F1E0' },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Archivo"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.32em' },
      opacity: { 3: '0.03', 4: '0.04', 6: '0.06', 8: '0.08', 12: '0.12' },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
        morph: 'morph 14s ease-in-out infinite',
        'drift-a': 'driftA 9s ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%,100%': { borderRadius: '62% 38% 54% 46% / 48% 60% 40% 52%', transform: 'rotate(0deg)' },
          '50%': { borderRadius: '40% 60% 44% 56% / 58% 42% 58% 42%', transform: 'rotate(10deg)' },
        },
        driftA: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(14px,-20px)' },
        },
      },
    },
  },
  plugins: [],
}
