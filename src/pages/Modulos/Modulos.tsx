import React from 'react';
import ModuloCard from './ModuloCard';
import MainContent from '../../components/Main/MainContent';
import { htmlcss, javascript } from '../../assets'; // Asegúrate de que estas rutas sean correctas

const Modulos = () => {
  const moduleData = {
    title: 'Learn Node.js',
    level: 'Intermediate',
    time: '5 hours',
    projects: 2,
    prerequisites: '2',
    includes: [
      'AI assistance for guided coding help',
      'Projects to apply new skills',
      'Quizzes to test your knowledge',
      'A certificate of completion',
    ],
    syllabus: [
      {
        title: 'Welcome to Learn Node.js',
        description: 'A brief overview of what you will learn in the Learn Node.js course.',
        items: [
          { type: 'Lesson', title: 'Esto es una lectura' },
          { type: 'Quiz', title: 'Esto es un test' },
          { type: 'Lock', title: 'Esto es una prueba final lock' },
        ],
        image: htmlcss, // Imagen específica para este módulo
      },
      {
        title: 'What is the Back-End?',
        description: 'Explore the building blocks of back-end web architecture.',
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
        <ModuloCard {...moduleData} />
      </div>
    </MainContent>
  );
};

export default Modulos;
