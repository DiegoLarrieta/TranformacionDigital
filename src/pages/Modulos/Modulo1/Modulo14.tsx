import React, { useState } from 'react';
import './Modulo14.css';

// Importar imágenes para el carrusel
import { reacttypescript, htmlcss, javascript } from '../../../assets';

const Modulo14: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [reacttypescript, htmlcss, javascript];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="modulo14-container">
      <h2>Tema 3 Preparación del Ambiente de Trabajo</h2>
      <p>
        El primer paso para comenzar nuestro camino de programación web es preparando nuestro ambiente de trabajo. Para esto necesitaremos sólo dos cosas: un navegador y un editor de texto. 
        El navegador nos servirá para poder visualizar nuestro progreso en tiempo real, y el editor nos servirá para poder editar nuestro código de manera rápida y eficiente.
      </p>

      {/* Sección de El Navegador */}
      <div className="content-section">
        <h3>El Navegador</h3>
        <p>
          Para el navegador te recomendamos utilizar alguno moderno como Chrome, Firefox, o Edge, que viene junto con Windows 10. Si cuentas con MacOS, puedes utilizar Safari.
          <strong> Internet Explorer no se considera un navegador moderno</strong>, ya que perdió su soporte y muchas funcionalidades modernas tienden a fallar.
        </p>
      </div>

      {/* Sección de Editor de texto */}
      <div className="content-section">
        <h3>Editor de Texto</h3>
        <p>
          El editor de texto que utilizaremos es Visual Studio Code. Haz clic en la liga para ir a la página de descarga. Asegúrate de realizar la instalación correcta de acuerdo a las especificaciones y sistema operativo de tu computadora.
        </p>
        <p>
          VS Code es de los editores de texto más populares en la industria, y nos permite crear archivos de todo tipo. En este curso nos enfocaremos en archivos con extensión .html, .css y .js. Este editor nos permite modificar fácilmente este tipo de archivos y nos brinda una gran cantidad de herramientas y atajos para escribir código eficientemente.
        </p>
      </div>

      {/* Carrusel de Imágenes */}
      <div className="carousel-container">
        <p className="carousel-instruction">
          A continuación hay un pequeño tutorial para que te familiarices con Visual Studio Code.
          Haz clic <span className="arrow">&lt;</span> y <span className="arrow">&gt;</span> para navegar por los diferentes pasos.
        </p>
        <div className="carousel">
          <button className="carousel-button" onClick={prevImage}>❮</button>
          <img src={images[currentImageIndex]} alt="Tutorial de Visual Studio Code" className="carousel-image" />
          <button className="carousel-button" onClick={nextImage}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Modulo14;
