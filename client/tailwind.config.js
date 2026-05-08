// client/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(20, 184, 166, 0.18)',
        gold: '0 0 30px rgba(250, 204, 21, 0.22)',
        danger: '0 0 30px rgba(244, 63, 94, 0.24)',
      },
      backgroundImage: {
        'radial-trade': 'radial-gradient(circle at top left, rgba(45, 212, 191, 0.16), transparent 36%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.14), transparent 30%), radial-gradient(circle at 70% 100%, rgba(250, 204, 21, 0.08), transparent 32%)',
      },
    },
  },
  plugins: [],
}
