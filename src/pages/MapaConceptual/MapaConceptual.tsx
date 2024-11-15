// MapaConceptual.tsx
import React from 'react';
import './MapaConceptual.css';
import { htmlcssjavasmapacon } from '../../assets';
import BotonNavegacion from '../../components/Button/BotonNavegacion';

const MapaConceptual = () => {
  return (
    <div className="mapa-conceptual-card"> {/* Agregamos la clase para estilo de tarjeta */}
      <h2>Mapa Conceptual</h2>
    
      <div className="mapa-image">
        <img
          src={htmlcssjavasmapacon}
          alt="Mapa conceptual del curso"
        />
      </div>
      <div className="boton-container">
          <BotonNavegacion texto="Adelante" ruta="/Metodologia" /> 
      </div>

    </div>
  );
};

export default MapaConceptual;
