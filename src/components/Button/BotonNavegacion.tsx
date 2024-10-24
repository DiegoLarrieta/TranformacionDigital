import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotonNavegacion.css'; // Archivo CSS para estilos del botón

interface BotonNavegacionProps {
  texto: string; // Texto del botón
  ruta: string; // Ruta a la que debe navegar
}

const BotonNavegacion: React.FC<BotonNavegacionProps> = ({ texto, ruta }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ruta); // Navegar a la ruta proporcionada
  };

  return (
    <button className="btn-navegacion" onClick={handleClick}>
      {texto}
    </button>
  );
};

export default BotonNavegacion;
