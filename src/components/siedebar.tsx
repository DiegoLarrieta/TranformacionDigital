import React from 'react';
import './Sidebar.css'; // Puedes agregar estilos personalizados aquí

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Cursos</li>
        <li>Progreso</li>
        <li>Configuración</li>
      </ul>
    </div>
  );
}

export default Sidebar;
