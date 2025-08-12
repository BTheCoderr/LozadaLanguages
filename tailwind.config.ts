import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // New premium brand colors
          'primary': '#0E63A9',    // Primary blue
          'accent-green': '#18A057', // Accent green
          'accent-coral': '#FF6A4D', // Accent coral
          'deep-navy': '#0A1B2E',   // Deep navy text
          'sky': '#2EA8E6',         // Sky blue
          // Keep some original colors for compatibility
          'light-blue': '#87CEEB',
          'orange': '#FF8C00',
          'dark-blue': '#1E3A8A',
          'magenta': '#DC143C',
          'green': '#32CD32',
          'navy': '#0A2540',
          'gold': '#F5B700'
        }
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}
export default config
