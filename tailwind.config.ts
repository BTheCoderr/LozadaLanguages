import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary colors from logo
          'light-blue': '#87CEEB', // Central circle
          'orange': '#FF8C00',    // Top segment
          'dark-blue': '#1E3A8A', // Curved segment
          'magenta': '#DC143C',   // Left segment
          'green': '#32CD32',     // Bottom right segment
          'navy': '#0A2540',      // Text color (keeping your original navy)
          'gold': '#F5B700'       // Accent (keeping your original gold)
        }
      }
    }
  },
  plugins: []
}
export default config
