/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        coal: '#111111',
        glass: 'rgba(255,255,255,0.075)',
        line: 'rgba(240,240,240,0.13)',
        mist: '#f0f0f0',
        muted: '#a7a7a7',
        emerald: '#00ff87'
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        glow: '0 0 48px rgba(0, 255, 135, 0.18)',
        glass: '0 24px 80px rgba(0,0,0,0.34)'
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 30% 20%, rgba(0,255,135,0.16), transparent 26rem), radial-gradient(circle at 78% 18%, rgba(240,240,240,0.08), transparent 22rem)'
      }
    }
  },
  plugins: []
};
