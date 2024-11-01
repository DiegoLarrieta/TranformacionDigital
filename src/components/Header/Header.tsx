import React, { useState } from 'react';
import './header.css';
import Navbar from '../Navbar/Navbar';
import {
  logotectransparente,
  logotipocva,
  hamburgerMenuIcon,
  homeIcon,
  cursosIcon,
} from '../../assets';

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <header className="header">
      {/* Logo del Tec a la izquierda */}
      <img src={logotectransparente} className="tec-logo" alt="Logo Tec" />

      {/* Íconos de Home, Menú de hamburguesa y Módulos */}
      <div className="header-icons">
        {/* Icono de Home, visible solo en pantallas grandes */}
        <div className="icon-button home-icon">
          <img src={homeIcon} alt="Home" />
        </div>

        {/* Menú de hamburguesa en el centro */}
        <div className="icon-button" onClick={toggleNavbar}>
          <img src={hamburgerMenuIcon} alt="Menú" />
        </div>

        {/* Icono de Módulos, visible solo en pantallas grandes */}
        <div className="icon-button modules-icon">
          <img src={cursosIcon} alt="Módulos" />
        </div>
      </div>

      {/* Logo de CVA a la derecha */}
      <img src={logotipocva} className="cvx" alt="Logo CVA" />

      {/* Navbar horizontal que aparece al hacer clic en el menú de hamburguesa */}
      {isNavbarVisible && <Navbar className="visible" />}
    </header>
  );
};

export default Header;
