import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Objetivos from '../../pages/Objetivos/Objetivos';
import MapaConceptual from '../../pages/MapaConceptual/MapaConceptual'
import Metodologia from '../../pages/Metodologia/Metodologia';
import Modulos from '../../pages/Modulos/Modulos';

import './MainContent.css';
// Aceptar children como prop
const MainContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-content">
      {children} {/* Renderizar los children si los hay */}
      <Routes>
        {/* Definimos las rutas para las diferentes secciones */}
        <Route path="/home" element={<Home />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/mapa" element={<MapaConceptual />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/modulos" element={<Modulos />} />
        {/* Agrega aquí más rutas conforme se creen nuevas secciones */}
      </Routes>
    </div>
  );
};

export default MainContent;