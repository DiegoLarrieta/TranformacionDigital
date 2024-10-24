import React from 'react';
import './Objetivos.css'; // Estilos específicos para la página de Objetivos
import MainContent from '../../components/Main/MainContent';
import { programacion } from '../../assets'; // Asegúrate de que la ruta de la imagen sea correcta
import BotonNavegacion from '../../components/Button/BotonNavegacion';

const Objetivos = () => {
  return (
    <MainContent> {/* Contenido dentro de la estructura general */}
      <div className="objetivos-container">
        {/* Imagen a la izquierda */}
        <div className="objetivos-image-container">
          <img src={programacion} alt="Programación" className="objetivos-image" />
        </div>
        
        {/* Texto a la derecha */}
        <div className="objetivos-text-container">
          <h2>Resultados de aprendizaje</h2>
          <p>Se espera que al finalizar el curso, aprendas:</p>
          <ul>
            <li>Entender los fundamentos de la programación.</li>
            <li>Desarrollar habilidades en algoritmos y estructuras de datos.</li>
            <li>Aplicar estos conocimientos en el desarrollo de aplicaciones.</li>
          </ul>
          
          {/* Botón de continuar */}
          <div className="boton-container">
            <BotonNavegacion texto="Adelante" ruta="/mapa" /> {/* Navegación a la siguiente página */}
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Objetivos;
