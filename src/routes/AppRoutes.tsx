//import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Home from '../pages/Temario';
//import About from '../pages/About';
//import Courses from '../pages/Courses/Courses';
//import CourseDetail from '../pages/Courses/CourseDetail';
import Home from '../pages/Home/Home'
import Temario from '../pages/Temario/Temario';
import Objetivos from '../pages/Objetivos/Objetivos';
import Politicas from '../pages/Politicas/Politicas';
import Contactanos from '../pages/Contactanos/Contactanos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/modulos" element={<Temario />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/objetivos" element={<Objetivos />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/politicas" element={<Politicas />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/contacto" element={<Contactanos />} /> {/* Ruta para el temario (módulos) */}

    </Routes>
  );
};

export default AppRoutes;
