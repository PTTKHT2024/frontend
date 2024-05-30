/** @type {import('tailwindcss').Config} */
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
      colors: {
        facebookColor: '#395196',
        youtubeColor: '#d40c18',
        primaryColor: '#EB0A1E',
        mainTitleColor: '#1A1A1A',
        subTitleColor: '#101010',
        subInformationColor: '#3A3A3A',
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
  plugins: [],
};
