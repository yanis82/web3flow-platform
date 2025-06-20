/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Utilise la classe 'dark' pour le mode sombre
  theme: {
    extend: {
      colors: {
        // Palette Web3Flow professionnelle
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA', // hover light mode
          500: '#8B5CF6', // primary dark mode
          600: '#7C3AED', // hover dark mode
          700: '#6D28D9',
          800: '#5B21B6', // primary light mode
          900: '#4C1D95',
          950: '#2E1065',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        // Couleurs spécifiques pour les modes
        light: {
          background: '#FFFFFF',
          foreground: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
        dark: {
          background: '#000000',
          foreground: '#FFFFFF',
          muted: '#9CA3AF',
          border: '#374151',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
        'slide-out': 'slideOut 0.3s ease-in-out',
        'scale-in': 'scaleIn 0.2s ease-in-out',
        'scale-out': 'scaleOut 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '350': '350ms',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Plugin pour les focus states améliorés
    function({ addUtilities }) {
      const newUtilities = {
        '.focus-ring': {
          '&:focus': {
            outline: 'none',
            'box-shadow': '0 0 0 2px rgb(139 92 246 / 0.5)',
          },
        },
        '.focus-ring-inset': {
          '&:focus': {
            outline: 'none',
            'box-shadow': 'inset 0 0 0 2px rgb(139 92 246 / 0.5)',
          },
        },
      }
      addUtilities(newUtilities)
    },
    // Plugin pour les animations de survol
    function({ addUtilities }) {
      const newUtilities = {
        '.hover-lift': {
          'transition': 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
        },
        '.hover-glow': {
          'transition': 'box-shadow 0.2s ease-in-out',
          '&:hover': {
            'box-shadow': '0 0 20px rgba(139, 92, 246, 0.3)',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}