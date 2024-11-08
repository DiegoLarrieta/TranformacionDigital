// MapaConceptual.tsx
import React from 'react';
import './MapaConceptual.css';
import { htmlcssjavasmapacon } from '../../assets';

const MapaConceptual = () => {
  return (
    <div className="mapa-conceptual-card"> {/* Agregamos la clase para estilo de tarjeta */}
      <h2>Mapa Conceptual</h2>
      
      <p className="mapa-subtitle">
        El mapa conceptual de cada curso será proporcionado por el equipo de diseñadores, por mientras se debe dejar este espacio listo para solo cambiar la imagen.
      </p>

      <div className="mapa-image">
        <img
          src={htmlcssjavasmapacon}
          alt="Mapa conceptual del curso"
        />
      </div>

      <div className="button-container">
        <button className="adelante-button">ADELANTE</button>
      </div>
    </div>
  );
};

export default MapaConceptual;
