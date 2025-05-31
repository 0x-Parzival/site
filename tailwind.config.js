module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'matrix-black': '#0d0d0d',
        'neon-green': '#39ff14',
      },
      boxShadow: {
        'cyan-glow': '0 0 15px 3px rgba(0,255,255,0.6)',
      },
      animation: {
        'color-spread': 'colorSpread 0.5s ease-in-out',
        'slideLeft': 'slideLeft 40s linear infinite',
        'slideRight': 'slideRight 40s linear infinite',
        'gradient-slow': 'gradient 15s linear infinite',
        'float': 'float 10s linear infinite',
      },
      keyframes: {
        colorSpread: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0) translateX(0)',
            opacity: 0,
          },
          '50%': {
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateY(-200px) translateX(100px)',
            opacity: 0,
          },
        },
      },
      backgroundSize: {
        'gradient-pos': '400% 400%',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
