import BotonNavegacion from '../../../components/Button/BotonNavegacion';
import BorregoAvatar from '../../../components/AvatarBorrego';
import MainContent from '../../../components/Main/MainContent';
import './Modulo1Lectura.css';

const Modulo1Lectura = () => {
  return (
    <MainContent>
      <div className="modulo1-container">
        {/* Avatar con animación flotante */}
        <BorregoAvatar  etapa="inicio" />
        <h1 className="titulo-lectura">Introducción a la Programación</h1>

        <div className="contenido-lectura">
          {/* Sección 1: Introducción */}
          <section className="seccion-contenido animar-izquierda">
            <h2>¿Qué es la Programación?</h2>
            <p>
              La programación es el proceso de crear instrucciones para que las computadoras realicen tareas. 
              Es una forma de comunicarnos con la máquina para resolver problemas y automatizar tareas.
            </p>
          </section>

          {/* Sección 2: Animación de código */}
          <section className="seccion-contenido animar-derecha">
            <h2>Ejemplo de Código:</h2>
            <div className="ejemplo-codigo">
              <code>
                <span>let saludo = "¡Hola, mundo!";</span><br />
                <span>console.log(saludo);</span>
              </code>
            </div>
          </section>

          {/* Sección 3: Bloques de información que aparecen al hacer clic */}
          <section className="seccion-contenido animar-izquierda">
            <h2>Conceptos Clave:</h2>
            <div className="info-interactiva">
              <div className="info-bloque">
                <button className="boton-info" onClick={() => alert("Algoritmo: Conjunto de pasos para resolver un problema")}>
                  ¿Qué es un Algoritmo?
                </button>
              </div>
              <div className="info-bloque">
                <button className="boton-info" onClick={() => alert("Variable: Espacio en la memoria para almacenar datos")}>
                  ¿Qué es una Variable?
                </button>
              </div>
              <div className="info-bloque">
                <button className="boton-info" onClick={() => alert("Función: Bloque de código que realiza una tarea específica")}>
                  ¿Qué es una Función?
                </button>
              </div>
            </div>
          </section>

          {/* Sección 4: Botón de navegación */}
          <div className="boton-navegacion">
            <BotonNavegacion texto="Siguiente" ruta="/modulo1/prueba" />
          </div>
        </div>
      </div>
      
    </MainContent>
  );
};

export default Modulo1Lectura;
