import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './Router.tsx'

import { TWallpaper } from '@twallpaper/react'
import '@twallpaper/react/css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
