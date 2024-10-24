import React from 'react';
import '../../styles/global.css'; 

interface ModuloCardProps {
  moduleName: string;
  moduleImage: string;
}

const ModuloCard: React.FC<ModuloCardProps> = ({ moduleName, moduleImage }) => {
  return (
    <div className="modulo-card">
      <img src={moduleImage} alt={moduleName} className="modulo-image" />
      <h3 className="modulo-name">{moduleName}</h3>
    </div>
  );
};

export default ModuloCard;
