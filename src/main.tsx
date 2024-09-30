import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/components/ejercicios.tsx'
import Header from './components/header.tsx'
import Sidebar from './components/siedebar.tsx'

import '../src/components/ejercicios.css'
import './index.css'
import './components/header.css'
import './components/sidebar.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
