import React from 'react';
import ModuloCard from './ModuloCard';
import MainContent from '../../components/Main/MainContent';
import { htmlcss, javascript } from '../../assets'; // Asegúrate de que estas rutas sean correctas
import Politicas from '../Politicas/Politicas';

const Modulos = () => {
  const moduleData = {
    title: 'Curso de HTML, CSS & Javascript',
    level: 'Intermedio',
    time: '5 horas',
    projects: 2,
    prerequisites: '2',
    includes: [
      'Asistencia de inteligencia artificial',
      'Actividades de aprendizaje',
      'Pruebas rápidas',
      'Un certificado al completar',
    ],
    syllabus: [
      {
        title: 'HTML: primeros pasos',
        description: 'A brief overview of what you will learn in the Learn Node.js course.',
        items: [
          { type: 'Lesson', title: 'Directivas simples en HTML' },
          { type: 'Quiz', title: 'Repasemos lo aprendido' },
          { type: 'Lock', title: '¡Es hora de la prueba!' },
        ],
        image: htmlcss, // Imagen específica para este módulo
      },
      {
        title: '¿Pero qué es Back-End?',
        description: 'Explora los bloques de la arquitectura back-end',
        items: [
          { type: 'Lesson', title: '¿Qué es Back-end?' },
          { type: 'Article', title: 'JavaScript para Node.js' },
          { type: 'Article', title: '¿Qué es JSON?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
    ],
  };

  return (
    <MainContent>
      <div className="modules-container">
      <ModuloCard 
        {...moduleData} 
        includes={[]} // Pasamos includes vacío
        includesComponent={<Politicas />} 
      />
      </div>
    </MainContent>
  );
};

export default Modulos;