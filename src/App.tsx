import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'; // Asegúrate de ajustar la ruta de importación
import Footer from './components/Footer/Footer';
//import Navbar from './components/Navbar/Navbar';
import MainContent from './components/Main/MainContent';
import AppRoutes  from './routes/AppRoutes'; // Importa las rutas exportadas
//import ProgressBar from './components/ProgressBar/ProgressBar';
import './styles/global.css';

const App = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const marker = document.getElementById('end-of-content');
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFooter(entry.isIntersecting); // Mostrar el footer cuando el marcador sea visible
      },
      { threshold: 0.1 } // Detecta cuando el 10% del marcador es visible
    );

    observer.observe(marker);

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
          <MainContent>
            <AppRoutes />
            {/* Marcador para detectar el final del contenido */}
            <div id="end-of-content" style={{ height: '1px' }}></div>
          </MainContent>
        </div>
        {/* Muestra el footer solo cuando el marcador es visible */}
        {showFooter && <Footer />}
      </div>
    </Router>
  );
};

export default App;