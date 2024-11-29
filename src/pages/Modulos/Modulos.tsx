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
        startRoute: '/modulo1/1.1-Lectura', // Ruta de inicio del módulo 1

        items: [
          { type: 'Lesson', title: 'Módulo 1 - Preparación del Ambiente y Conceptos Básicos', hasPractice:true, practiceRoute:"/modulo1/practica11" },
          { type: 'Lesson', title: 'Tema 1 - Conceptos Básicos'},
          { type: 'Lesson', title: 'Tema 2 - Diferencias entre frameworks'},
        ],
        image: htmlcss, // Imagen específica para este módulo
      },
      {
        title: 'Formato y Estructura de HTML',
        description: 'Introduccion a la programacion en Frontend con HTML.',
        startRoute: '/modulo2/2.1-Lectura', // Ruta de inicio del módulo 2

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
        startRoute: '/modulo3/3.1-Lectura', // Ruta de inicio del módulo 3

        items: [
          { type: 'Lesson', title: 'Añade un poco de color'},
          { type: 'Article', title: 'Conoce los contenedores flex' },
          { type: 'Article', title: '¿Qué es un grid?' },
        ],
        image: javascript, // Otra imagen para este módulo
      },
      {
        title: 'Un poco de JavaScript',
        description: 'Introduccion a la programacion logica con JavaScript',
        startRoute: '/modulo4/4.1-Lectura', // Ruta de inicio del módulo 4

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
      <ModuloCard 
        {...moduleData} 
        includes={[]} // Pasamos includes vacío
        includesComponent={<Politicas />} 
      />
    </MainContent>
  );
};

export default Modulos;