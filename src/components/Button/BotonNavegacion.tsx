import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotonNavegacion.css'; // Archivo CSS para estilos del botón

interface BotonNavegacionProps {
  nombre?: string;
  texto: string; // Texto del botón
  ruta?: string; // Ruta a la que debe navegar (opcional)
  onClick?: () => void; // Función personalizada que se ejecutará al hacer clic (opcional)
  _disabled?: boolean;
}

const BotonNavegacion: React.FC<BotonNavegacionProps> = ({ texto, ruta, nombre, onClick, _disabled}) => {
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
    <button className={`btn-navegacion ${nombre || ''}`} onClick={handleClick} disabled = {_disabled}>
      {texto}
    </button>
  );
};

export default BotonNavegacion;
