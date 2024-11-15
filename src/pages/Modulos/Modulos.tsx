import React from 'react';
import ModuloCard from './ModuloCard';
import MainContent from '../../components/Main/MainContent';
import { htmlcss, javascript } from '../../assets'; // Asegúrate de que estas rutas sean correctas
import Politicas from '../Politicas/Politicas';

const Modulos = () => {
  const moduleData = {
    title: 'Contenido del curso',
    level: 'Intermediate',
    time: '5 hours',
    projects: 2,
    prerequisites: '2',
    syllabus: [
      {
        title: 'Preparacion del Ambiente y Conceptos Basicos',
        description: 'Introduccion y conceptos basicos de programacion.',
        items: [
          { type: 'Lesson', title: 'Módulo 1 - Preparación del Ambiente y Conceptos Básicos' },
          { type: 'Lesson', title: 'Tema 1 - Conceptos Básicos'},
          { type: 'Lesson', title: 'Tema 2 - Solicitudes de Empleo'},
          { type: 'Lesson', title: 'Tema 3 - Otros conceptos que debes de conocer'},
          { type: 'Lesson', title: 'Tema 4 - Preparacion del Ambiente de trabajo'},
          { type: 'Lesson', title: 'Tema 5 - Introduccion a VS Code'},
          { type: 'Lesson', title: 'Tema 6 - Organizacion de Archivos'},
          { type: 'Lesson', title: 'Tema 7 - Escribiendo Codigo'},
          { type: 'Lesson', title: 'Tema 8 - Otras recomendaciones'},
          { type: 'Lesson', title: 'Tema 9 - Atajos'},
          { type: 'Quiz', title: 'Quiz 1 - Ejercicio 1'},
          { type: 'Lock', title: 'Finalizacion' },
        ],
        image: htmlcss, // Imagen específica para este módulo
      },
      {
        title: 'Formato y Estructura de HTML',
        description: 'Introduccion a la programacion en Frontend con HTML.',
        items: [
          { type: 'Lesson', title: 'What is the Back-end?' },
          { type: 'Article', title: 'JavaScript for Node.js' },
          { type: 'Article', title: 'What Is JSON?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Formato y Estructura de HTML',
        description: 'Introduccion a la programacion en Frontend con HTML.',
        items: [
          { type: 'Lesson', title: 'What is the Back-end?' },
          { type: 'Article', title: 'JavaScript for Node.js' },
          { type: 'Article', title: 'What Is JSON?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Decorando con CSS',
        description: 'Introduccion a diseño web con CSS.',
        items: [
          { type: 'Lesson', title: 'What is the Back-end?' },
          { type: 'Article', title: 'JavaScript for Node.js' },
          { type: 'Article', title: 'What Is JSON?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Un poco de JavaScript',
        description: 'Introduccion a la programacion logica con JavaScript',
        items: [
          { type: 'Lesson', title: 'What is the Back-end?' },
          { type: 'Article', title: 'JavaScript for Node.js' },
          { type: 'Article', title: 'What Is JSON?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Publicar a la Web',
        description: 'Como hacer publico tu trabajo en la web',
        items: [
          { type: 'Lesson', title: 'What is the Back-end?' },
          { type: 'Article', title: 'JavaScript for Node.js' },
          { type: 'Article', title: 'What Is JSON?' },
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