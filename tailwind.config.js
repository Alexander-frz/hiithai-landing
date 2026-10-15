/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px' },
    },
    extend: {
      colors: {
        thaiOrange: '#FF6B35',
        thaiTeal: '#00756B',
        thaiTealDark: '#00625A',
        ink: '#15181C',
        muted: '#59616B',
        sand: '#FAF7F2',
        chat: '#E4EEF2',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
};
