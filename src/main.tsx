import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importa el componente principal
import './index.css'; // Importa los estilos globales

// Monta la aplicación React dentro del elemento con id "root"
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
