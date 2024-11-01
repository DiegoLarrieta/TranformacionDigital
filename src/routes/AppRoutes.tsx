//import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Home from '../pages/Temario';
//import About from '../pages/About';
//import Courses from '../pages/Courses/Courses';
//import CourseDetail from '../pages/Courses/CourseDetail';
import MainContent from '../components/Main/MainContent';
import Home from '../pages/Home/Home'
import Modulos from '../pages/Modulos/Modulos';
import Objetivos from '../pages/Objetivos/Objetivos';
import Politicas from '../pages/Politicas/Politicas';
import Contactanos from '../pages/Contactanos/Contactanos';



// Importa las páginas específicas del Módulo 1
import Modulo1Lectura from '../pages/Modulos/Modulo1/Modulo1Lectura';
import Modulo1Prueba from '../pages/Modulos/Modulo1/Modulo1Prueba';
import Modulo1Test from '../pages/Modulos/Modulo1/Modulo1Test';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/modulos" element={<Modulos />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/objetivos" element={<Objetivos />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/politicas" element={<Politicas />} /> {/* Ruta para el temario (módulos) */}
      <Route path="/contacto" element={<Contactanos />} /> {/* Ruta para el temario (módulos) */}

      {/* Ruta para el Módulo 1 - empieza con la lectura */}
      <Route path="/modulo1/lectura" element={<Modulo1Lectura />} />
      <Route path="/modulo1/prueba" element={<Modulo1Prueba />} />
      <Route path="/modulo1/test" element={<Modulo1Test />} />

    </Routes>
  );
};

export default AppRoutes;
