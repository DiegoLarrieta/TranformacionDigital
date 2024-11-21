// AppRoutes.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Objetivos from '../pages/Objetivos/Objetivos';
import MapaConceptual from '../pages/MapaConceptual/MapaConceptual';
import Metodologia from '../pages/Metodologia/Metodologia';
import Politicas from '../pages/Politicas/Politicas';
import Contactanos from '../pages/Contactanos/Contactanos';
import Modulos from '../pages/Modulos/Modulos';
import ModulosLayout from '../components/ModulosLayout/ModulosLayout';
import Modulo11 from '../pages/Modulos/Modulo1/Modulo11';
import Modulo12 from '../pages/Modulos/Modulo1/Modulo12';
import Modulo13 from '../pages/Modulos/Modulo1/Modulo13';
import Modulo14 from '../pages/Modulos/Modulo1/Modulo14';

export const routes = [
  { path: '/modulo1/1.1-Lectura', element: <Modulo11 /> },
  { path: '/modulo1/1.2-Lectura', element: <Modulo12 /> },
  { path: '/modulo1/1.3-Lectura', element: <Modulo13 /> },
  { path: '/modulo1/1.4-Lectura', element: <Modulo14 /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas generales */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/objetivos" element={<Objetivos />} />
      <Route path="/mapa" element={<MapaConceptual />} />
      <Route path="/metodologia" element={<Metodologia />} />
      <Route path="/politicas" element={<Politicas />} />
      <Route path="/contacto" element={<Contactanos />} />

      {/* Rutas relacionadas con los módulos */}
      <Route element={<ModulosLayout />}>
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/modulo1/1.1-Lectura" element={<Modulo11 />} />
        <Route path="/modulo1/1.2-Lectura" element={<Modulo12 />} />
        <Route path="/modulo1/1.3-Lectura" element={<Modulo13 />} />
        <Route path="/modulo1/1.4-Lectura" element={<Modulo14 />} />
        {/* Agrega más rutas relacionadas aquí */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
