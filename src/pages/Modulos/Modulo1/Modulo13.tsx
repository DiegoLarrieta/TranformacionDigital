import React from 'react';
import './Modulo13.css';

// Importar imágenes como componentes
import { javascript, htmlcss, fullstack, htmlcssjavas } from '../../../assets'; 
import BotonNavegacion from '../../../components/Button/BotonNavegacion';
import MainContent from '../../../components/Main/MainContent';

const Modulo13: React.FC = () => {
  return (
    <MainContent>
      <div className="modulo13-container">
        {/* Menú Horizontal */}
        <div className="modulo13-menu">
          <a href="#navegador" className="menu-item">Navegador</a>
          <a href="#servidor" className="menu-item">Servidor Web</a>
          <a href="#framework" className="menu-item">Framework</a>
          <a href="#lenguaje" className="menu-item">Lenguaje</a>
        </div>

        {/* Secciones de Contenido */}
        <section id="navegador" className="content-section">
          <img src={htmlcss} alt="Navegador" className="section-image" />
          <div className="section-text">
            <h2>Navegador</h2>
            <p>
              Un navegador web es una aplicación que nos permite acceder a las páginas en la web. Ejemplos comunes son Google Chrome, Firefox, y Safari.
            </p>
          </div>
        </section>

        <section id="servidor" className="content-section">
          <img src={fullstack} alt="Servidor Web" className="section-image" />
          <div className="section-text">
            <h2>Servidor Web</h2>
            <p>
              Un servidor web es una computadora que guarda las páginas web y las entrega a los usuarios cuando las solicitan. Utiliza el protocolo HTTP.
            </p>
          </div>
        </section>

        <section id="framework" className="content-section">
          <img src={htmlcssjavas} alt="Framework" className="section-image" />
          <div className="section-text">
            <h2>Framework</h2>
            <p>
              Un framework es un conjunto de herramientas y librerías que ayudan a los desarrolladores a crear aplicaciones web de manera más rápida.
            </p>
          </div>
        </section>

        <section id="lenguaje" className="content-section">
          <img src={javascript} alt="Lenguaje" className="section-image" />
          <div className="section-text">
            <h2>Lenguaje</h2>
            <p>
              Un lenguaje de programación es una herramienta que permite crear instrucciones para que las computadoras realicen tareas específicas. Ejemplos son HTML, CSS, y JavaScript.
            </p>
          </div>
        </section>

        {/* Botón de navegación hacia la siguiente sección */}
        <div className="boton-navegacion">
          <BotonNavegacion texto="Siguiente" ruta="/modulo1/1.4-Lectura" />
        </div>
      </div>
    </MainContent>
  );
};

export default Modulo13;
