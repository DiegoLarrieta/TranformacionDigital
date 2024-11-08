import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Navbar from '../Navbar/Navbar';
import {
  logotectransparente,
  logotipocva,
  homeIcon,
  cursosIcon,
} from '../../assets';

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el navbar está abierto
      if (!isNavbarVisible) return;

      // Obtener los elementos del DOM
      const target = event.target as Node;
      const header = headerRef.current;
      const navbar = navbarRef.current;

      // Si el clic no fue dentro del header ni dentro del navbar, cerrar el navbar
      if (header && navbar && 
          !header.contains(target) && 
          !navbar.contains(target)) {
        setNavbarVisible(false);
      }
    };

    // Agregar event listener cuando el navbar está visible
    if (isNavbarVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    // Cleanup: remover event listener cuando el componente se desmonta
    // o cuando el navbar se cierra
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavbarVisible]); // Se actualiza cuando cambia la visibilidad del navbar

  const toggleNavbar = (event: React.MouseEvent) => {
    // Evitar que el clic se propague al document
    event.stopPropagation();
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <header ref={headerRef} className="header">
        {/* Logo Tec */}
        <div className="logo-container">
          <Link to="/">
            <img 
              src={logotectransparente} 
              className="tec-logo" 
              alt="Logo Tec"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Íconos centrales */}
        <div className="header-icons">
          {/* Botón hamburguesa */}
          <div 
            className="hamburger-button"
            onClick={toggleNavbar}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation menu"
            aria-expanded={isNavbarVisible}
          >
            <div className={`hamburger-icon ${isNavbarVisible ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <Link to="/modulos" className="icon-button">
            <img src={cursosIcon} alt="Módulos" />
          </Link>
        </div>

        {/* Logo CVA */}
        <div className="logo-container">
          <Link to="/about">
            <img 
              src={logotipocva} 
              className="cvx" 
              alt="Logo CVA"
              loading="lazy"
            />
          </Link>
        </div>
      </header>

      {/* Navbar con ref para detectar clics */}
      <div ref={navbarRef}>
        <Navbar className={isNavbarVisible ? 'visible' : ''} />
      </div>
    </>
  );
};

export default Header;