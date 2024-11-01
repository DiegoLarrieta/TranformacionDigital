import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Objetivos from '../../pages/Objetivos/Objetivos';
import MapaConceptual from '../../pages/MapaConceptual/MapaConceptual'
import Metodologia from '../../pages/Metodologia/Metodologia';
import Modulos from '../../pages/Modulos/Modulos';

// Importa las páginas específicas del Módulo 1
import Modulo1Lectura from '../../pages/Modulos/Modulo1/Modulo1Lectura';
import Modulo1Prueba from '../../pages/Modulos/Modulo1/Modulo1Prueba';
import Modulo1Test from '../../pages/Modulos/Modulo1/Modulo1Test';


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

              {/* Ruta para el Módulo 1 - empieza con la lectura */}
      <Route path="/modulo1/lectura" element={<Modulo1Lectura />} />
      <Route path="/modulo1/prueba" element={<Modulo1Prueba />} />
      <Route path="/modulo1/test" element={<Modulo1Test />} />

        {/* Agrega aquí más rutas conforme se creen nuevas secciones */}
      </Routes>
    </div>
  );
};

export default MainContent;