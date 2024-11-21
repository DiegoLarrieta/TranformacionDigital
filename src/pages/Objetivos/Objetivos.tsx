// Objetivos.tsx
import  { useEffect, useState } from 'react';
import './Objetivos.css'; // Asegúrate de incluir los estilos actualizados
import BotonNavegacion from '../../components/Button/BotonNavegacion';

const habilidades = [
  "Estructurar páginas web utilizando elementos HTML",
  "Estilizar los elementos de tus páginas con CSS",
  "Comprender conceptos básicos de programación en JavaScript",
  "Programar en JavaScript usando scripts y funciones"
];

const Objetivos = () => {
  const [progressValues, setProgressValues] = useState(habilidades.map(() => 0));

  useEffect(() => {
    const intervals = habilidades.map((_, index) => {
      return setInterval(() => {
        setProgressValues((prevValues) => {
          const newValues = [...prevValues];
          if (newValues[index] < 100) { // Límite al 100%
            newValues[index] += 1;
          }
          return newValues;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="objetivos-card"> {/* Aplicamos un contenedor de tarjeta */}
      <h2>Resultados de Aprendizaje</h2>
      <p>Se espera que al finalizar el curso, tengas competencias en:</p>
      
      <ul className="objetivos-list">
        {habilidades.map((habilidad, index) => (
          <li key={index} className="objetivo-item">
            {habilidad}
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progressValues[index]}%` }}
                ></div>
              </div>
              <span className="progress-percentage">{progressValues[index]}%</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="boton-container">
        <BotonNavegacion texto="Adelante" ruta="/mapa" />
      </div>
    </div>
  );
};

export default Objetivos;