import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2540',
          gold: '#F5B700'
        }
      }
    }
  },
  plugins: []
}
export default config
