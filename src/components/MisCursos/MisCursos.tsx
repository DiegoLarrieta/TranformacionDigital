import React from 'react';
import { Link } from 'react-router-dom';
import Ciencia from './Ciencia/Ciencia';
import Matematicas from './Matematicas/Matematicas';
import Idiomas from './Idiomas/Idiomas';
import Programacion from './Programacion/Programacion';

const MisCursos: React.FC = () => {
  return (
    <div>
      <h1>Mis Cursos</h1>
      <Ciencia />
      <Matematicas />
      <Idiomas />
      <Programacion />

      {/* Agregar un link al ejercicio */}
      <h2>Ejercicios de Idiomas</h2>
      <Link to="/mis-cursos/idiomas/ejercicio1">Ir al Ejercicio de Conjugación</Link>
    </div>
  );
};

export default MisCursos;
