import React from 'react';
import TemarioCard from './TemarioCard';

import { 
  htmlcss,
  javascript,
  fullstack,
  reacttypescript,

 } from '../../assets';

const Temario = () => {
  // Aquí podrías obtener los módulos desde una API o un archivo de configuración
  const modules = [
    { id: 1, name: 'Módulo 1: Camino a fullstack', image: fullstack },
    { id: 2, name: 'Módulo 2: Mis primeros pasos', image: htmlcss },
    { id: 3, name: 'Módulo 3: JavaScript', image: javascript },
    { id: 4, name: 'Módulo 3: Front Avanzado', image: reacttypescript },

    // Agrega más módulos según sea necesario
  ];

  return (
    <div className="temario-container">
      <h1>Temario del Curso</h1>
      <div className="temario-cards">
        {modules.map(module => (
          <TemarioCard
            key={module.id}
            moduleName={module.name}
            moduleImage={module.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Temario;
