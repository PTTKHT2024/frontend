/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
    },
    extend: {
      animation: {
        'slide-in': 'slideIn 2s ease-out forwards',
        'sweep-to-bottom': 'sweepToBottom 1.2s ease-in forwards infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(20%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        sweepToBottom: {
          '0%': { top: '20%', opacity: 0 },
          '100%': { top: '70%', opacity: 1 },
        },
      },
      colors: {
        facebookColor: '#395196',
        youtubeColor: '#d40c18',
        primaryColor: '#EB0A1E',
        mainTitleColor: '#1A1A1A',
        subTitleColor: '#101010',
        subInformationColor: '#3A3A3A',
        electrification_1: '#F5F5F5',
        bodyBgColor: '#4379EE',
      },
      fontSize: {
        mainTitle: [
          '2.375rem',
          {
            lineHeight: '2.85rem',
            fontWeight: '700',
          },
        ],
      },
      borderWidth: {
        tabAction: '4px',
        tabNavigate: '1px',
      },
      borderColor: {
        tabAction: '#EB0A1E',
        tabNavigate: '#3A3A3A',
      },
      margin: {
        sectionMargin_1: '120px',
        sectionMargin_2: '60px',
      },
    },
    fontFamily: {
      sans: [
        'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.clip-polygon-custom': {
          'clip-path':
            'polygon(85% 0, 100% 50%, 85% 100%, 8% 100%, 23% 50%, 8% 0)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
