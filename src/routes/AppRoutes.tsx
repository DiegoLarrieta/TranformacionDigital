import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Home from '../pages/Temario';
//import About from '../pages/About';
//import Courses from '../pages/Courses/Courses';
//import CourseDetail from '../pages/Courses/CourseDetail';
import Temario from '../pages/Temario/Temario';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/modulos" element={<Temario />} /> {/* Ruta para el temario (módulos) */}

    </Routes>
  );
};

export default AppRoutes;
