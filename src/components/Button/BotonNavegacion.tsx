import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotonNavegacion.css'; // Archivo CSS para estilos del botón

interface BotonNavegacionProps {
  texto: string; // Texto del botón
  ruta?: string; // Ruta a la que debe navegar (opcional)
  onClick?: () => void; // Función personalizada que se ejecutará al hacer clic (opcional)
}

const BotonNavegacion: React.FC<BotonNavegacionProps> = ({ texto, ruta, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      // Si se pasa una función onClick, la ejecuta
      onClick();
    } else if (ruta) {
      // Si se pasa una ruta, navega a la ruta proporcionada
      navigate(ruta);
    }
  };

  return (
    <button className="btn-navegacion" onClick={handleClick}>
      {texto}
    </button>
  );
};

export default BotonNavegacion;
