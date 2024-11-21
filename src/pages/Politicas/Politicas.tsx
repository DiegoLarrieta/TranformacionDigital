import React, { useState } from 'react';
import './Politicas.css';
import BotonNavegacion from '../../components/Button/BotonNavegacion';

const Politicas: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="politicas-container">
      <h1>Políticas</h1>
      <p>
        El “Curso en Programación Web Básica con HTML, CSS y JavaScript”, forma parte de nuestra oferta educativa en la modalidad “Autoaprendizaje”, lo que significa que no cuentas con un seguimiento académico de parte de un profesor.
      </p>
      <p>
        Se recomienda tener una buena organización para realizar los ejercicios que contiene el curso, ya que fueron diseñados para facilitar tu proceso de aprendizaje.
      </p>
      <p>
        Elabora un horario de acuerdo con tus circunstancias que te permita concluir el curso, así podrás aplicar lo aprendido para que determines tus conocimientos adquiridos.
      </p>
      <p>
        Al final del curso, deberás realizar un examen. Si obtienes un promedio de 80/100, se emitirá una carta constancia de tu participación en el curso.
      </p>
      <p>
        Te invitamos a visitar nuestras cápsulas educativas que te ayudarán a reforzar tus conocimientos aprendidos. Solo haz clic <a href="https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/conferencias/233/238" target="_blank" rel="noopener noreferrer">aquí</a>.
      </p>
      <p>“Educarse para la vida”<br />Centro Virtual de Aprendizaje<br />Tecnológico de Monterrey</p>

      {/* Casilla de verificación */}
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          He leído y acepto las políticas del curso
        </label>
      </div>

      {/* Botón de confirmación */}
      <BotonNavegacion texto = "Confirmar" _disabled={!isChecked}/>
    </div>
  );
};

export default Politicas;