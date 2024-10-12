import React from 'react';
import '../../styles/global.css'; 

interface TemarioCardProps {
  moduleName: string;
  moduleImage: string;
}

const TemarioCard: React.FC<TemarioCardProps> = ({ moduleName, moduleImage }) => {
  return (
    <div className="temario-card">
      <img src={moduleImage} alt={moduleName} className="temario-image" />
      <h3>{moduleName}</h3>
    </div>
  );
};

export default TemarioCard;
