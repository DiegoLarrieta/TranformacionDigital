import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/components/ejercicios.tsx'
import '../src/components/ejercicios.css'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
