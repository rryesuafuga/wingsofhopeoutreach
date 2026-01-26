import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Deep chocolate brown – derived from the logo cross & text */
        primary: {
          50: '#faf6f5',
          100: '#f3ebe8',
          200: '#e5d4ce',
          300: '#d4b5ab',
          400: '#b98a7a',
          500: '#9e6b5a',
          600: '#855347',
          700: '#6b3f36',
          800: '#54302a',
          900: '#3b1a20',
          950: '#2a100e',
        },
        /* Forest green – derived from the logo olive branch */
        secondary: {
          50: '#f0faf1',
          100: '#d9f2db',
          200: '#b5e4b9',
          300: '#82d08a',
          400: '#52b55e',
          500: '#369b42',
          600: '#2a7d34',
          700: '#24642c',
          800: '#1f5026',
          900: '#1a4220',
          950: '#0d2412',
        },
        slate: {
          50: '#faf8f7',
          100: '#f3efed',
          200: '#e5dfdb',
          300: '#d1c8c2',
          400: '#a89e96',
          500: '#7a6f67',
          600: '#5c524b',
          700: '#433b36',
          800: '#2c2522',
          900: '#1a1412',
          950: '#0d0a09',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.64rem', { lineHeight: '1rem' }],
        sm: ['0.8rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.25rem', { lineHeight: '1.75rem' }],
        xl: ['1.563rem', { lineHeight: '2rem' }],
        '2xl': ['1.953rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.441rem', { lineHeight: '2.75rem' }],
        '4xl': ['3.052rem', { lineHeight: '3.25rem' }],
        '5xl': ['3.815rem', { lineHeight: '4rem' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
