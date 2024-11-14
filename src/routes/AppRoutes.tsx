// AppRoutes.tsx (o como se llame el archivo)
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainContent from '../components/Main/MainContent';
import Home from '../pages/Home/Home';
import Objetivos from '../pages/Objetivos/Objetivos';
import MapaConceptual from '../pages/MapaConceptual/MapaConceptual';
import Metodologia from '../pages/Metodologia/Metodologia';
import Modulos from '../pages/Modulos/Modulos';
import Politicas from '../pages/Politicas/Politicas';
import Contactanos from '../pages/Contactanos/Contactanos';

// donde exportamos las rutas para hacer el calculo  
export const routes = [
  { path : "/modulo1/1.1-Lectura", element : <Modulo11 /> },
  { path : "/modulo1/1.2-Lectura", element : <Modulo12 /> },
  { path : "/modulo1/1.3-Lectura", element : <Modulo13 /> },
  { path : "/modulo1/1.4-Lectura", element : <Modulo14 /> },
];

// Importa las páginas específicas del Módulo 1
import Modulo11 from '../pages/Modulos/Modulo1/Modulo11';
import Modulo12 from '../pages/Modulos/Modulo1/Modulo12';
import Modulo13 from '../pages/Modulos/Modulo1/Modulo13';
import Modulo14 from '../pages/Modulos/Modulo1/Modulo14';
import Modulo1Lectura from '../pages/Modulos/Modulo1/Modulo1Lectura';
import Modulo1Prueba from '../pages/Modulos/Modulo1/Modulo1Prueba';
import Modulo1Test from '../pages/Modulos/Modulo1/Modulo1Test';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/objetivos" element={<Objetivos />} />
      <Route path="/mapa" element={<MapaConceptual />} />
      <Route path="/metodologia" element={<Metodologia />} />
      <Route path="/modulos" element={<Modulos />} />
      <Route path ="/politicas" element={<Politicas/>}/>
      <Route path ="/contacto" element={<Contactanos/>}/>

      {/* Rutas para el Módulo 1 */}
      <Route path="/modulo1/1.1-Lectura" element={<Modulo11 />} />
      <Route path = "/modulo1/1.2-Lectura" element={<Modulo12/>}/>
      <Route path = "/modulo1/1.3-Lectura" element={<Modulo13/>}/>
      <Route path = "/modulo1/1.4-Lectura" element={<Modulo14/>}/>
      <Route path="/modulo1/lectura" element={<Modulo1Lectura />} />
      <Route path="/modulo1/prueba" element={<Modulo1Prueba />} />
      <Route path="/modulo1/test" element={<Modulo1Test />} />
      {/* Agrega más rutas aquí conforme se necesiten */}
    </Routes>
  );
};

export default AppRoutes;