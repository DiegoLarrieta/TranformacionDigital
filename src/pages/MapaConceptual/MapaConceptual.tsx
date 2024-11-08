// MapaConceptual.tsx
import React from 'react';
import './MapaConceptual.css';
import BotonNavegacion from '../../components/Button/BotonNavegacion';
const MapaConceptual = () => {
  return (
    <div className="mapa-conceptual-container">
      {/* Título */}
      <h1>Mapa conceptual</h1>
      
      <p className="mapa-subtitle">
        El mapa conceptual de cada curso será proporcionado por el equipo de diseñadores, por mientras se debe dejar este espacio listo para solo cambiar la imagen.
      </p>



      {/* Botón Adelante */}
      <BotonNavegacion texto="Adelante" ruta="/modulos"/>
    </div>
  );
};

export default MapaConceptual;
