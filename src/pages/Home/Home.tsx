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
import LearningOutcomes from '../../components/Aprendizaje';

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
    <MainContent>
      <div className="home-container">
        <div className="home-content">
          <div className="info-section">
            <h1>Curso: Programación Web Básica con HTML, CSS y JavaScript</h1>
            <p>El mejor curso para iniciarte en la programación web. Descubre cómo HTML, CSS y JavaScript son los pilares del desarrollo de páginas web modernas.</p>
            <h2>¿Qué aprenderás?</h2>
            <ul>
              <li>✅ Comprender los fundamentos de programación web.</li>
              <li>✅ Crear páginas web con HTML, CSS y JavaScript.</li>
              <li>✅ Publicar tu propio sitio web.</li>
            </ul>
            <p className="course-meta">
              <FaStar color="#FFD700" /> 4.8 de calificación | <FaCalendarAlt color="#8B0000" /> Junio 2023 | <FaClock color="#000000" /> 6 horas | <FaSignal color="#4CAF50" /> Nivel Básico
            </p>
          </div>
          
          <div className="image-section">
            <img src={htmlcssjavas} alt="Curso de Programación Web Básica" />
          </div>
        </div>

        <div className="welcome-section">
          <h2>¡Bienvenid@ a esta experiencia de aprendizaje virtual!</h2>
          <p>
            Te damos la más cordial bienvenida al "Curso en Programación Web Básica con HTML, CSS y JavaScript", en él encontrarás todos los conceptos necesarios para empezar a crear páginas web con tecnologías y herramientas de gran relevancia en la actualidad.
          </p>
          <p>
            La programación web es un campo muy grande que puede abrir muchas puertas: ya sea que quieras hacer un sitio web para un negocio o empezar tu camino como desarrollador, es una habilidad muy valiosa hoy en día.
          </p>
          <p>
            Con este curso podrás construir un sitio web desde cero, utilizando algunas de las herramientas más populares en la industria del desarrollo web.
          </p>
          <p>
            Centro Virtual de Aprendizaje<br />Tecnológico de Monterrey
          </p>
          <div className="boton-container">
            <BotonNavegacion texto="Objetivos del Curso" ruta="/home/objetivos" nombre="boton-principal"/> 
          </div>
        </div>

        {/* Sección de Objetivos con el ID "objetivos-section" */}
        <div id="objetivos-section">
          <Objetivos />
        </div>
        {/* Sección de Mapa Conceptual con el ID "MapaConceptual-section" */}
        <div id="MapaConceptual-section">
          <MapaConceptual/>
        </div>
        {/* Sección de Mapa Conceptual con el ID "MapaConceptual-section" */}
        <div id="metodologia-section">
          <Metodologia/>
        </div>
      </div>
    </MainContent>
  );
};

export default Home;
