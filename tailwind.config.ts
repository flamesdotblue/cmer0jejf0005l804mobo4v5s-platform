import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#06080F',
          800: '#0A0F1F',
        },
        neon: {
          400: '#60A5FA',
          500: '#22D3EE',
          600: '#38BDF8',
          700: '#818CF8',
        },
        plasma: {
          300: '#E879F9',
          400: '#C084FC',
          500: '#A78BFA',
          600: '#8B5CF6',
        }
      },
      backgroundImage: {
        'grid': "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        'glow': 'conic-gradient(from 180deg at 50% 50%, #22D3EE 0deg, #818CF8 90deg, #60A5FA 180deg, #22D3EE 270deg, #818CF8 360deg)'
      },
      boxShadow: {
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
} satisfies Config
