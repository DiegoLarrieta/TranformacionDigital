import React, { useState, useRef } from 'react';
import MainContent from '../../../components/Main/MainContent';
import BotonNavegacion from '../../../components/Button/BotonNavegacion'; // Importamos el botón de navegación
import { useNavigate } from 'react-router-dom'; // Para redirigir

const Modulo1Test: React.FC = () => {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulación de Física con Matter.js</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f4f4f4;
        }
        canvas {
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 15px;
        }
    </style>
</head>
<body>
<canvas id="world"></canvas>
<script>
    const Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Bodies = Matter.Bodies,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();

    const render = Render.create({
        element: document.body,
        canvas: document.getElementById('world'),
        engine: engine,
        options: {
            width: 800,
            height: 700,
            wireframes: false,
            background: '#f4f4f4'
        }
    });

    const boxA = Bodies.rectangle(200, 200, 80, 80, { restitution: 0.9 });
    const boxB = Bodies.rectangle(400, 200, 80, 80, { restitution: 0.9 });
    const ground = Bodies.rectangle(400, 700, 810, 60, { isStatic: true });

    World.add(engine.world, [boxA, boxB, ground]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;
    Engine.run(engine);
    Render.run(render);
</script>
</body>
</html>`);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();

  const runCode = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = code;
    }
  };

  const finalizarCurso = () => {
    // Marca el módulo como completado
    
    // Redirige al módulo principal
    navigate('/modulos');
  };

  return (
    <MainContent> {/* Envuelve el contenido en MainContent */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: '0', fontFamily: 'Poppins, sans-serif', backgroundColor: '#1d1d1d' }}>
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontWeight: 500, margin: '20px 0' }}>Escribe tu código HTML:</h1>

        <div style={{ display: 'flex', flex: 1, height: '100%', padding: '20px', gap: '20px' }}>
          <div style={{ width: '50%', backgroundColor: '#2e2e2e', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: '100%',
                height: 'calc(100% - 30px)',
                fontFamily: 'Poppins, sans-serif',
                backgroundColor: '#2e2e2e',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <button
              onClick={runCode}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#4840c0',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
                alignSelf: 'center',
              }}
            >
              Ejecutar Código
            </button>
          </div>

          <div style={{ width: '50%', backgroundColor: '#1d1d1d', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <iframe ref={iframeRef} title="Output" style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </div>

        {/* Botón de Finalizar Curso */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <BotonNavegacion
            texto="Finalizar Curso"
            onClick={finalizarCurso} // Llama la función para finalizar el curso
          />
        </div>
      </div>
    </MainContent>
  );
};

export default Modulo1Test;
