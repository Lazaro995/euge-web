/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      translate: {
        'full': '100%',
        '-full': '-100%'
      },
      colors: {
        primary: '#000000', // Fondo negro
        secondary: '#1a202c', // Gris oscuro
        text: '#a8ff0a', // Verde brillante
        highlight: '#a8ff0a', // Acento verde
        buttonGradientStart: '#a8ff0a', // Gradiente de botón verde
        buttonGradientEnd: '#a8ff0a', // Gradiente de botón verde
        navBgOpacity: 'rgba(0, 0, 0, 0.95)', // Opacidad del fondo del navbar 
      }
    },
  },
  plugins: [],
}

