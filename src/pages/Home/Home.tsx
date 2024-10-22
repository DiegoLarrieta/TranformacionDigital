import React from 'react';
import './Home.css'; // Archivo CSS para estilos específicos
import { useNavigate } from 'react-router-dom';
import MainContent from '../../components/Main/MainContent'; // Importa MainContent

const Home = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Redirigir al siguiente módulo o página
    navigate('/modulos'); // Ajusta la ruta según sea necesario
  };

  return (
    <MainContent> {/* Usamos el MainContent para manejar la estructura general */}
      <div className="bienvenida-container">
        {/* Imagen de fondo */}
        <div className="hero">
          <div className="overlay">
            <h1>Curso de Introduccion a la Programacion y Tecnologia</h1>
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="texto-informativo">
          <h2>¡Bienvenido a esta experiencia de aprendizaje virtual!</h2>
          <p>
            Toda interacción humana tiene la emoción y la razón como piedras angulares de su estructura. 
            Emociones y pensamientos expresados a través del lenguaje son el fundamento de una conducta asertiva...
            {/* Incluye el resto del texto aquí */}
          </p>
          <p>
            Te damos la más cordial bienvenida al "Curso de Introduccion a la Programacion y Tecnologia"
          </p>
          <p>Centro Virtual de Aprendizaje<br />Tecnológico de Monterrey</p>
        </div>

        {/* Botón de continuar */}
        <div className="boton-container">
          <button className="btn-continuar" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    </MainContent>
  );
};

export default Home;
