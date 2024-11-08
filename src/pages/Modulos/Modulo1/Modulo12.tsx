import React, { useState } from 'react';
import './Modulo12.css';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import MainContent from '../../../components/Main/MainContent';
import BotonNavegacion from '../../../components/Button/BotonNavegacion';

const Modulo12: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const handleMouseEnter = (tech: string) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <MainContent>
      <div className="modulo12-container">
        {/* Título y descripción */}
        <h2>Tema 1 - Conceptos Básicos</h2>
        <h3>Frontend y Backend: ¿Qué Significan?</h3>
        <p>
          La programación web se divide en dos sectores principales: el Frontend y el Backend, que son las partes de "enfrente" y "detrás" de un sitio web, respectivamente.
        </p>
        <p>
          El Frontend es todo lo que podemos visualizar en las páginas del sitio y las interacciones que se realizan desde la computadora del usuario. Incluye todo el código HTML, CSS e incluso JavaScript que puedan tener las páginas.
        </p>
        <p>
          El Backend es todo lo que está por parte del servidor o servidores en los que se encuentra el sitio web. Entre otras tareas, el Backend maneja la información de los usuarios, trabaja con bases de datos y transmite el contenido.
        </p>
        <p>
          Este curso se enfocará principalmente en el Frontend.
        </p>

        {/* Sección interactiva de íconos de tecnologías */}
        <div className="tech-icons-container">
          <p className="tech-instruction">Haz clic o pasa el mouse sobre cada icono para ver más detalles.</p>

          <div
            className="tech-icon"
            onMouseEnter={() => handleMouseEnter("HTML")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseEnter("HTML")}
          >
            <FaHtml5 color="#E34F26" size={80} />
            <p>HTML</p>
            {hoveredTech === "HTML" && (
              <div className="tech-info">HTML (HyperText Markup Language) es el lenguaje de marcado para crear la estructura de una página web.</div>
            )}
          </div>

          <div
            className="tech-icon"
            onMouseEnter={() => handleMouseEnter("CSS")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseEnter("CSS")}
          >
            <FaCss3Alt color="#1572B6" size={80} />
            <p>CSS</p>
            {hoveredTech === "CSS" && (
              <div className="tech-info">CSS (Cascading Style Sheets) define el estilo y diseño de las páginas web, como colores, fuentes y disposición.</div>
            )}
          </div>

          <div
            className="tech-icon"
            onMouseEnter={() => handleMouseEnter("JavaScript")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseEnter("JavaScript")}
          >
            <FaJsSquare color="#F7DF1E" size={80} />
            <p>JavaScript</p>
            {hoveredTech === "JavaScript" && (
              <div className="tech-info">JavaScript es un lenguaje de programación que permite añadir interactividad a las páginas web.</div>
            )}
          </div>
        </div>
        
        {/* Botón de navegación */}
        <div className="boton-navegacion">
          <BotonNavegacion texto="Siguiente" ruta="/modulo1/1.3-Lectura" />
        </div>
      </div>
    </MainContent>
  );
};

export default Modulo12;
