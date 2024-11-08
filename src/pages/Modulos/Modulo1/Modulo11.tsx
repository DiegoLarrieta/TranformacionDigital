import React from 'react';
import BotonNavegacion from '../../../components/Button/BotonNavegacion';
import BorregoAvatar from '../../../components/AvatarBorrego';
import MainContent from '../../../components/Main/MainContent';
import './Modulo11.css';

const Modulo11 = () => {
  return (
    <MainContent>
      {/* Avatar con animación flotante */}
      <BorregoAvatar etapa="inicio"  />

      <h1 className="titulo-modulo">Módulo 1 - Preparación del Ambiente y Conceptos Básicos</h1>

      <div className="contenido-modulo">
        {/* Sección de Introducción */}
        <section className="seccion-contenido animar-izquierda">
          <h2>Introducción</h2>
          <p>
            El Internet es una gran red de información en donde podemos encontrar noticias, entretenimiento e investigaciones. También nos permite compartir diferente contenido a través de diversos medios como las redes sociales. El mejor medio para poder compartir algo que queramos que sea visto en Internet es a través de páginas web.
          </p>
          <p>
            Una página web es un documento que contiene información como texto, imágenes, animaciones, fotografías, videos, etc. Esta información se comparte a través de enlaces dentro del mismo sitio o hacia páginas de sitios externos. A estos enlaces se les conoce como ligas, vínculos de hipertexto o hiperenlaces. Esta característica proporciona la facilidad de navegar a través de una misma página o hacia una página distinta en búsqueda de información. Los sitios web, en cambio, son colecciones de páginas web.
          </p>
          <p>
            Existen sitios web de numerosos temas y funciones como tiendas, herramientas en línea, redes sociales, cursos en línea (como este), videos, etc. Todas estas son creadas utilizando como base el mismo lenguaje: HTML.
          </p>
          <p>
            Aprender a programar en HTML te brinda la capacidad de transmitir cualquier tipo de información y estructurarla a tu gusto para su fácil acceso en la WWW (Wide World Web, también conocida como la Web).
          </p>
        </section>

        {/* Sección de Competencias */}
        <section className="seccion-contenido animar-derecha">
          <h2>Competencias</h2>
          <ul className="competencias-lista">
            <li>✔ Comprensión de los conceptos básicos de la programación web.</li>
            <li>✔ Identificación de diferencias entre front-end y back-end.</li>
            <li>✔ Conocimiento sobre la preparación del ambiente de trabajo.</li>
            <li>✔ Uso básico de la herramienta VS Code.</li>
          </ul>
        </section>

        {/* Botón de navegación */}
        <div className="boton-navegacion">
          <BotonNavegacion texto="Siguiente" ruta="/modulo1/1.2-Lectura" />
        </div>
      </div>
    </MainContent>
  );
};

export default Modulo11;
