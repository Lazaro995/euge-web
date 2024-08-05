import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './Router.tsx'
import '@twallpaper/react/css'
// Importa esto en el archivo principal de tu aplicación
import "plyr-react/plyr.css";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
