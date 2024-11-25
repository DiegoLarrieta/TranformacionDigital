import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './ProgressBar.css';

interface ProgressBarProps {
  routes: { path: string }[]; // Lista de rutas para calcular el progreso
}

const ProgressBar: React.FC<ProgressBarProps> = ({ routes }) => {
  const location = useLocation();

  // Calcular el progreso basado en la posición actual en las rutas
  const progress = useMemo(() => {
    const totalRoutes = routes.length; // Número total de rutas
    const currentIndex = routes.findIndex((route) => route.path === location.pathname);
    return currentIndex >= 0 ? ((currentIndex + 1) / totalRoutes) * 100 : 0;
  }, [location.pathname, routes]);

  // Determinar color basado en progreso
  const progressColor = useMemo(() => {
    if (progress < 30) return '#ff4c4c'; // Rojo
    if (progress < 60) return '#ffcc00'; // Amarillo
    if (progress < 80) return '#a4d914'; // Verde claro
    return '#32cd32'; // Verde oscuro
  }, [progress]);

  return (
    <div className="progress-bar-component">
      <div
        className="progress-bar-fill"
        style={{
          width: `${progress}%`,
          backgroundColor: progressColor,
        }}
      ></div>
      <p className="progress-percentage">{progress.toFixed(2)}% Completado</p>
    </div>
  );
};

export default ProgressBar;