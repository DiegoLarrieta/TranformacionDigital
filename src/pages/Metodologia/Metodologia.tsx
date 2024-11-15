import React, { useEffect, useState } from 'react';
import './Metodologia.css';
import BotonNavegacion from '../../components/Button/BotonNavegacion';

const Metodologia = () => {
  const [dayCount, setDayCount] = useState(0);
  const [hourCount, setHourCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);

  useEffect(() => {
    const intervalDay = setInterval(() => {
      setDayCount((prev) => (prev < 365 ? prev + 1 : 365));
    }, 10);

    const intervalHour = setInterval(() => {
      setHourCount((prev) => (prev < 24 ? prev + 1 : 24));
    }, 100);

    const intervalWeek = setInterval(() => {
      setWeekCount((prev) => (prev < 7 ? prev + 1 : 7));
    }, 300);

    return () => {
      clearInterval(intervalDay);
      clearInterval(intervalHour);
      clearInterval(intervalWeek);
    };
  }, []);

  return (
    <div className="metodologia-container">
      <div className="metodologia-content">
        <div className="metodologia-text">
          <h2>Metodología y Modelo</h2>
          <p>
            Este curso ha sido diseñado considerando los principios de calidad en contenidos y medios de interacción con el objetivo de facilitar tu aprendizaje; además, de fomentar tu autonomía a partir del estudio combinado de contenidos audiovisuales, lectura de textos, ejercicios y reflexión, así como de evaluación, todo esto apoyado en recursos tecnológicos de vanguardia.
          </p>
          <p>
            Nuestro modelo de formación a distancia, está disponible a través de nuestro portal educativo <a href="https://www.cca.org.mx">www.cca.org.mx</a> y podrás acceder los <strong>{dayCount} días</strong> del año, las <strong>{hourCount} horas</strong> del día, los <strong>{weekCount} días</strong> de la semana, haciéndolo de forma totalmente flexible y con facilidad de acceso desde cualquier lugar y hora, lo que te permite avanzar a tu propio ritmo.
          </p>

          <p>
            El <strong>“Curso en Programación Web Básica con HTML, CSS y JavaScript”</strong>, consta de <strong>60 horas</strong> de trabajo 100% en línea, entre lectura de contenidos y ejercicios, por lo que te sugerimos que dediques un promedio de 5 horas de estudio semanales.
          </p>

          <p>A continuación, algunas recomendaciones relevantes para tu proceso de aprendizaje:</p>

          <ul className="recomendaciones-list">
            <li>Disponer de un lugar propicio de trabajo que te permita concentrarte, donde exista poco ruido y haya buena iluminación.</li>
            <li>Establecer tu propio horario de estudio, de tal forma que no afecte tu vida académica, laboral y familiar.</li>
            <li>Contar con buena conexión a Internet para revisar los contenidos y materiales del curso sin interrupciones tecnológicas.</li>
            <li>Asumir un rol muy activo, ya que la forma de trabajo está centrada en tu desempeño.</li>
          </ul>

          <div className="button-container">
            <BotonNavegacion texto = "Adelante" ruta = "/modulos"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metodologia;
