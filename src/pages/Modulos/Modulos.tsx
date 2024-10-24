import React, { useState } from 'react';
import MainContent from '../../components/Main/MainContent';
import ModuloCard from './ModuloCard';
import BorregoAvatar from '../../components/AvatarBorrego';
import BotonNavegacion from '../../components/Button/BotonNavegacion';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirecciones
import './Modulos.css'; // Asegúrate de tener los estilos adecuados

import { 
  htmlcss,
  javascript,
  fullstack,
  reacttypescript
} from '../../assets';

const Modulos = () => {
  const [nivelActual, setNivelActual] = useState(1); // Controlar el progreso del usuario
  const navigate = useNavigate(); // Hook de navegación

  // Módulos del curso con la lógica de bloqueado/desbloqueado
  const modules = [
    { id: 1, name: 'Módulo 1: Camino a fullstack', image: fullstack, completado: false },
    { id: 2, name: 'Módulo 2: Mis primeros pasos', image: htmlcss, completado: false },
    { id: 3, name: 'Módulo 3: JavaScript', image: javascript, completado: false },
    { id: 4, name: 'Módulo 4: Front Avanzado', image: reacttypescript, completado: false },
    // Agrega más módulos según sea necesario
  ];

  const manejarAvance = (id: number) => {
    if (id === nivelActual) {
      setNivelActual(nivelActual + 1);
    }
    // Redirige al módulo 1 cuando se haga clic en él
    if (id === 1) {
      navigate('/modulo1');
    }
  };

  const manejarNavegacion = () => {
    navigate('/modulo1'); // Redirige al módulo 1 al hacer clic en el botón
  };

  return (
    <MainContent>
      <div className="modulos-container">
        <h1>Temario del Curso</h1>

        {/* Renderiza el avatar solo una vez, fuera del map */}
        <BorregoAvatar etapa="inicio" /> {/* Muestra frases de inicio */}

        <div className="modulos-grid">
          {/* Mapea y renderiza las tarjetas de los módulos */}
          {modules.map(module => (
            <div
              key={module.id}
              className={`modulo-card-container ${nivelActual >= module.id ? 'desbloqueado' : 'bloqueado'}`}
              onClick={() => manejarAvance(module.id)}
            >
              <ModuloCard
                moduleName={module.name}
                moduleImage={module.image}
              />
              {nivelActual > module.id && <span className="completado">✔️ Completado</span>}
            </div>
          ))}
        </div>

        {/* Botón de continuar */}
        <div className="boton-container">
          <BotonNavegacion texto="Continuar" ruta="/modulo1" /> 
        </div>
      </div>
    </MainContent>
  );
};

export default Modulos;
