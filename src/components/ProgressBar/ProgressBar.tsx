import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  progress: number; // Porcentaje del progreso (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="progress-percentage">{progress}% Completado</p>
    </div>
  );
};

export default ProgressBar;
