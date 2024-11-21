
import ModuloCard from './ModuloCard';
import MainContent from '../../components/Main/MainContent';
import { htmlcss, javascript } from '../../assets'; // Asegúrate de que estas rutas sean correctas
import Politicas from '../Politicas/Politicas';

const Modulos = () => {
  const moduleData = {
    title: 'Contenido del curso',
    level: 'Intermedio',
    time: '5 horas',
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
          { type: 'Lesson', title: 'Secciones y divisiones' },
          { type: 'Article', title: '¿Por qué utilizar instrucciones clave?' },
          { type: 'Article', title: 'Elementos' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Decorando con CSS',
        description: 'Introduccion a diseño web con CSS.',
        items: [
          { type: 'Lesson', title: 'Añade un poco de color' },
          { type: 'Article', title: 'Conoce los contenedores flex' },
          { type: 'Article', title: '¿Qué es un grid?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Un poco de JavaScript',
        description: 'Introduccion a la programacion logica con JavaScript',
        items: [
          { type: 'Lesson', title: 'Variables y sus tipos' },
          { type: 'Article', title: 'Sintaxis de una función' },
          { type: 'Article', title: '¿Qué uso, let o var?' },
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