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
        navBg: '#111827', // Fondo del navbar
        navText: '#d1d5db', // Texto del navbar
        buttonGradientStart: '#a8ff0a', // Gradiente de botón verde
        buttonGradientEnd: '#a8ff0a', // Gradiente de botón verde
        navBgOpacity: 'rgba(0, 0, 0, 0.95)', // Opacidad del fondo del navbar 
        shadowColor1: 'rgba(168, 255, 10, 0.17)', // Color de sombra 1
        shadowColor2: 'rgba(168, 255, 10, 0.15)', // Color de sombra 2
        shadowColor3: 'rgba(168, 255, 10, 0.1)',  // Color de sombra 3
        shadowColor4: 'rgba(168, 255, 10, 0.06)', // Color de sombra 4
        shadowColor5: 'rgba(168, 255, 10, 0.09)', // Color de sombra 5
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'display': ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        massive: 124,
      },

    },
  },
  plugins: [],
}

