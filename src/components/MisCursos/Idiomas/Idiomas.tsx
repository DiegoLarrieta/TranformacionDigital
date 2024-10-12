import React from 'react';
import Ejercicio1 from './Ejercicio1'; // Asegúrate que la ruta es correcta.

const Idiomas: React.FC = () => {
  return (
    <div>
      <h2>Cursos de Idiomas</h2>
      <ul>
        <li>Inglés</li>
        <li>Alemán</li>
        <li>Francés</li>
      </ul>

      {/* Mostrar Ejercicio 1 directamente */}
      <h3>Ejercicio de Conjugación de Alemán</h3>
      <Ejercicio1 />
    </div>
  );
};

export default Idiomas;
