import React from 'react';
import './Metodologia.css';

const Metodologia = () => {
  return (
    <div className="metodologia-container">
      <div className="metodologia-content">
        {/* Imagen de la metodología */}
        <div className="metodologia-image">
          <img
            src="ruta-de-la-imagen.jpg" // Asegúrate de usar la ruta correcta o importar la imagen
            alt="Metodología del curso"
          />
        </div>

        {/* Sección de texto */}
        <div className="metodologia-text">
          <h2>Metodología y modelo</h2>
          <p>
            Este curso ha sido diseñado considerando los principios de calidad en contenidos y medios de interacción con el objetivo de facilitar tu aprendizaje; además, de fomentar tu autonomía a partir del estudio combinado de contenidos audiovisuales, lectura de textos, ejercicios y reflexión, así como de evaluación, todo esto apoyado en recursos tecnológicos de vanguardia.
          </p>
          <p>
            Nuestro modelo de formación a distancia, está disponible a través de nuestro portal educativo <a href="https://www.cca.org.mx">www.cca.org.mx</a> y podrás acceder los <strong>365 días</strong> del año, las <strong>24 horas</strong> del día, los <strong>siete días</strong> de la semana, haciéndolo totalmente flexible y con facilidad de acceso desde cualquier lugar y en cualquier momento, lo que te permite avanzar a tu propio ritmo.
          </p>

          {/* Advertencia */}
          <div className="highlight-box">
            <ul>
              <li>Lo marcado en color amarillo deberá ser actualizado de acuerdo al curso asignado.</li>
              <li>La imagen siempre debe ir del lado izquierdo.</li>
            </ul>
          </div>

          {/* Texto resaltado */}
          <p>
            El <strong>“Curso en ortografía y su impacto en la palabra escrita”</strong>, consta de <strong>40 horas</strong> de trabajo 100% en línea, entre lectura de contenidos y ejercicios, por lo que te sugerimos que dediques un promedio de 5 horas de estudio semanales.
          </p>

          <p>A continuación, recomendaciones relevantes para tu proceso de aprendizaje:</p>

          {/* Lista de recomendaciones */}
          <ul>
            <li><strong>Disponer</strong> de un lugar propicio de trabajo que te permita concentrarte, donde exista poco ruido y haya buena iluminación.</li>
            <li><strong>Establecer</strong> tu propio horario de estudio, de tal forma que no afecte tu vida académica, laboral y familiar.</li>
            <li><strong>Contar</strong> con buena conexión a Internet para revisar los contenidos y materiales del curso sin interrupciones tecnológicas.</li>
            <li><strong>Asumir</strong> un rol muy activo, ya que la forma de trabajo está centrada en tu desempeño.</li>
          </ul>

          {/* Botón Adelante */}
          <div className="button-container">
            <button className="adelante-button">ADELANTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metodologia;
