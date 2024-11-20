import React, { useMemo } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; // Asegúrate de ajustar la ruta de importación
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/Main/MainContent';
import AppRoutes, { routes } from './routes/AppRoutes'; // Importa las rutas exportadas
import ProgressBar from './components/ProgressBar/ProgressBar';
import './styles/global.css';

const App = () => {

  /*
  const ProgressWrapper = () => {
    const location = useLocation(); // Hook para obtener la ruta actual

    // Calcular el progreso basado en la posición actual en las rutas
    const progress = useMemo(() => {
      const totalRoutes = routes.length; // Número total de rutas
      const currentIndex = routes.findIndex((route) => route.path === location.pathname);
      return currentIndex >= 0 ? ((currentIndex + 1) / totalRoutes) * 100 : 0;
    }, [location.pathname]);

    return <ProgressBar progress={progress} />;
  };
  */

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
          <MainContent>
            <AppRoutes /> {/* Aquí se renderizarán las rutas */}
            {/*<ProgressWrapper/>*/}
          </MainContent>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;