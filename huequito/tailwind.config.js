/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
          '.touch-manipulation': {
              touchAction: 'manipulation',
          },
      });
    },
  ],
}

