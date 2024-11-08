import React from 'react';
import './Contactanos.css';

const Contactanos: React.FC = () => {
  return (
    <div className="contactanos-container">
      <h1>Contacto</h1>
      <p>
        El Centro Virtual de Aprendizaje está para apoyarte en cuanto a requerimientos tecnológicos, de acceso, uso de las plataformas, sistemas y navegación de cursos.
      </p>

      <div className="duda-section">
        <h2>¿Alguna duda?</h2>
        <p>
          Escribe tu pregunta o comentario al correo: <a href="mailto:educacionparaeldesarrollo@itesm.mx">educacionparaeldesarrollo@itesm.mx</a>
        </p>
        <p>
          Recuerda incluir tu matrícula, nombre completo, y el nombre del curso.
        </p>
      </div>

      <p>
        Dirección Educación para el Desarrollo<br />
        Tecnológico de Monterrey
      </p>
    </div>
  );
};

export default Contactanos;
