import React, { useEffect, useState } from 'react';
import './Metodologia.css';
import IconPattern from '../../components/techBackground';
import BotonNavegacion from '../../components/Button/BotonNavegacion';
const Metodologia: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Contenido */}
      <div className="metodologia-container">

        <div className="metodologia-content">
          <div className="metodologia-text">

            <h2>Metodología y modelo</h2>

            <img src="src\pages\Metodologia\coding-img.jpg"/>

            <p>Este curso ha sido diseñado considerando los principios de calidad en contenidos y medios de interacción con el objetivo de facilitar tu aprendizaje; además, de fomentar tu autonomía a partir del estudio combinado de contenidos audiovisuales, lectura de textos, ejercicios y reflexión, así como de evaluación, todo esto apoyado en recursos tecnológicos de vanguardia.</p>
            <p>Nuestro modelo de formación a distancia, está disponible a través de nuestro portal educativo www.cca.org.mx y podrás acceder los 365 días del año, las 24 horas del día, los siete días de la semana, haciéndolo de forma totalmente flexible y con facilidad de acceso desde cualquier lugar y hora, lo que te permite avanzar a tu propio ritmo.</p>
            
            <BotonNavegacion texto="Adelante" ruta="../Modulos/Modulos"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metodologia;