import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF9F2',
          100: '#FFEEDD',
          200: '#FED7B0',
          300: '#FDB675',
          400: '#F98E38',
          500: '#E87516', // Primary Saffron
          600: '#C9540B', // Deep Saffron
          700: '#A33C08',
          800: '#7F2F09',
          900: '#461905',
        },
        gold: {
          50: '#FFFCF2',
          100: '#FFF7DC', // Soft Gold
          200: '#FEEDAA',
          300: '#FFE16E',
          400: '#FFD35A',
          500: '#F6B91A', // Marigold Gold
          600: '#DB9E0B',
          700: '#A67305',
          800: '#785006',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FFFCF7',
          200: '#FFF9EF', // Warm Ivory Foundation (60%)
          300: '#FFF4E2',
          400: '#FFF1D6', // Cream Card Foundation (20%)
          500: '#F5E4C2',
          600: '#E2CEAA',
        },
        temple: {
          50: '#FAF8F5',
          100: '#F2ECE4',
          200: '#E0D4C5',
          300: '#BEACA0',
          400: '#9B8475',
          500: '#786253', // Secondary Muted Text
          600: '#5C483B',
          700: '#473429', // Body Text
          800: '#321B0F', // Grounding Temple Brown (5%)
          900: '#231209', // Heading Text
          950: '#140A04',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      backgroundImage: {
        'sacred-gradient': 'linear-gradient(135deg, #FFF9EF 0%, #FFF1D6 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #E87516 0%, #C9540B 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F6B91A 0%, #FFD35A 100%)',
        'temple-gradient': 'linear-gradient(135deg, #321B0F 0%, #231209 100%)',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(50, 27, 15, 0.04)',
        'devotional': '0 8px 30px rgba(232, 117, 22, 0.08)',
        'elevated': '0 12px 35px rgba(50, 27, 15, 0.08)',
        'card-hover': '0 20px 40px rgba(201, 84, 11, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
