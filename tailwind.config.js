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
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'custom-pattern': "url('/images/backgrounds/background_contacto.png')",
        'nosotros1-background': "url('/images/backgrounds/fondo_nosotros1.png')",
        'nosotros2-background': "url('/images/backgrounds/fondo_nosotros2.png')",
        'nosotros3-background': "url('/images/backgrounds/fondo_nosotros3.png')",
        'nosotros4-background': "url('/images/backgrounds/fondo_nosotros4.png')",
        'suscribirse': "url('/images/logos/logo_huequito.png')"
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

