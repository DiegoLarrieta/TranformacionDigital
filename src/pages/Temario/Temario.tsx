import React from 'react';
import TemarioCard from './TemarioCard';
import BorregoAvatar from '../../components/AvatarBorrego'; // Importación sin llaves

import { 
  htmlcss,
  javascript,
  fullstack,
  reacttypescript
} from '../../assets';

const Temario = () => {
  // Módulos del curso
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

      {/* Renderiza el avatar solo una vez, fuera del map */}
      <BorregoAvatar etapa="inicio" /> {/* Muestra frases de inicio */}

      <div className="temario-cards">
        {/* Mapea y renderiza las tarjetas de los módulos */}
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