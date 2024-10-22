import React from 'react';
import './MapaConceptual.css';
import { mapaConceptual } from '../../assets'; // Asegúrate de que la ruta sea correcta

const MapaConceptual = () => {
  return (
    <div className="mapa-conceptual-container">
      {/* Título */}
      <h2>Mapa conceptual</h2>
      
      {/* Subtítulo */}
      <p className="mapa-subtitle">
        El mapa conceptual de cada curso será proporcionado por el equipo de diseñadores, por mientras se debe dejar este espacio listo para solo cambiar la imagen.
      </p>

      {/* Imagen del mapa conceptual */}
      <div className="mapa-image">
        <img
          src={mapaConceptual} // Aquí debes utilizar 'src'
          alt="Mapa conceptual del curso"
        />
      </div>

      {/* Botón Adelante */}
      <div className="button-container">
        <button className="adelante-button">ADELANTE</button>
      </div>
    </div>
  );
};

export default MapaConceptual;
