import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Mi Plataforma de Cursos</div>
      <div className="user-info">
        <span>Bienvenido, Luis</span>
      </div>
    </header>
  );
}

export default Header;
