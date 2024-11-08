import React from 'react';
import './Home.css';
import { FaStar, FaClock, FaCalendarAlt, FaSignal } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import MainContent from '../../components/Main/MainContent';
import BotonNavegacion from '../../components/Button/BotonNavegacion';
import Objetivos from '../Objetivos/Objetivos'; // Importamos el componente Objetivos
import MapaConceptual  from '../MapaConceptual/MapaConceptual';
import Metodologia from '../Metodologia/Metodologia';
import { htmlcssjavas } from '../../assets';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContinue = () => {
    navigate('/home/objetivos');
  };

  // Efecto para hacer scroll automático a "Objetivos" si la ruta es "/home/objetivos"
  React.useEffect(() => {
    if (location.pathname === '/home/objetivos') {
      const objetivosSection = document.getElementById('objetivos-section');
      if (objetivosSection) {
        objetivosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <MainContent> {/* Usamos el MainContent para manejar la estructura general */}
      <div className="bienvenida-container">
        {/* Imagen de fondo */}
        <div className="hero">
            <h1>Curso de Introduccion a la Programacion y Tecnologia</h1>
        </div>

        <div className="welcome-section">
          <h2>¡Bienvenid@ a esta experiencia de aprendizaje virtual!</h2>
          <p>
            Te damos la más cordial bienvenida al "Curso en Programación Web Básica con HTML, CSS y JavaScript", en él encontrarás todos los conceptos necesarios para empezar a crear páginas web con tecnologías y herramientas de gran relevancia en la actualidad.
          </p>
          <p>
            La programación web es un campo muy grande que puede abrir muchas puertas: ya sea que quieras hacer un sitio web para un negocio o empezar tu camino como desarrollador, es una habilidad muy valiosa hoy en día. Es también la herramienta perfecta para llevar tus proyectos y conocimientos al siguiente nivel.
          </p>
          <p>
            Con este curso podrás construir un sitio web desde cero, utilizando algunas de las herramientas más populares en la industria del desarrollo web.
          </p>
          <p>
            Empezarás conociendo HTML, el lenguaje primordial de las páginas web de hoy en día. Aprenderás sobre estructura, formato y la organización de los componentes de tu página web. Con una buena estructura en pie, podrás añadir decoración y formato con el lenguaje CSS. Después conocerás el lenguaje de programación para la interacción: JavaScript. Este te servirá para manipular elementos de tu sitio, agregar animaciones y muchas otras cosas más.
            {/* Incluye el resto del texto aquí */}
          </p>
          <p>
            Te damos la más cordial bienvenida al "Curso de Introduccion a la Programacion y Tecnologia"
          </p>
          <p>Centro Virtual de Aprendizaje<br />Tecnológico de Monterrey</p>
        </div>
        <img src="src\pages\Metodologia\coding-img.jpg"/>
        {/* Botón de continuar */}
        <div className="boton-container">
          <BotonNavegacion texto="Continuar" ruta="/objetivos" /> 
        </div>
      </div>
    </MainContent>
  );
};

export default Home;
