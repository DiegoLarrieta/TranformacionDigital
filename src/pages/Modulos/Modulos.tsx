import React, { useState } from 'react';
import MainContent from '../../components/Main/MainContent';
import BorregoAvatar from '../../components/AvatarBorrego';
import './Modulos.css'; // Asegúrate de tener los estilos definidos aquí.

const Modulos = () => {
  const [nivelActual, setNivelActual] = useState(1); // Para controlar el progreso del usuario

  const niveles = [
    { id: 1, titulo: 'Módulo 1: Introducción a la Programación', completado: false },
    { id: 2, titulo: 'Módulo 2: Estructuras de Datos', completado: false },
    { id: 3, titulo: 'Módulo 3: Algoritmos', completado: false },
    { id: 4, titulo: 'Módulo 4: Desarrollo de Aplicaciones', completado: false },
    { id: 5, titulo: 'Módulo 5: Proyecto Final', completado: false },
  ];

  const manejarAvance = (id:number) => {
    if (id === nivelActual) {
      setNivelActual(nivelActual + 1);
    }
  };

  return (
    <MainContent>
      <div className="modulos-container">
        <div className="avatar-borrego">
          <BorregoAvatar etapa="progreso" /> {/* Ajustamos la prop etapa */}
        </div>
        <h2 className="titulo-niveles">¡Progreso del Curso!</h2>
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className={`nivel-item ${nivelActual >= nivel.id ? 'desbloqueado' : 'bloqueado'}`}
            onClick={() => manejarAvance(nivel.id)}
          >
            <p>{nivel.titulo}</p>
            {nivelActual > nivel.id && <span>✔️ Completado</span>}
          </div>
        ))}
      </div>
    </MainContent>
  );
};

export default Modulos;
