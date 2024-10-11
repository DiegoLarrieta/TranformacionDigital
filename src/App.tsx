import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';  // Asegúrate de ajustar la ruta de importación
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header /> 
        <Navbar />
        <div className="content">
          {/* Aquí puedes incluir el contenido principal de tu aplicación */}
          <AppRoutes /> 
          <Routes>
            {/* Aquí agregarías tus rutas, por ejemplo: */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
