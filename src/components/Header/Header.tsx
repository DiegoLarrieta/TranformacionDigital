import { useState, useRef, useEffect } from 'react';
import './header.css';
import Navbar from '../Navbar/Navbar';
import {
  logotectransparente,
  logotipocva,
  hamburgerMenuIcon,
} from '../../assets';

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    setNavbarVisible(true);
  };

  const hideNavbar = () => {
    setNavbarVisible(false);
  };

  // Manejar el clic fuera del área del Navbar y el ícono de hamburguesa
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      hideNavbar();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Logo del Tec a la izquierda */}
      <img src={logotectransparente} className="tec-logo" alt="Logo Tec" />

      {/* Íconos de Menú de hamburguesa y Módulos */}
      <div className="header-icons">
        {/* Menú de hamburguesa en el centro */}
        <div
          ref={hamburgerRef}
          className="hamburger-icon"
          onMouseEnter={showNavbar}
        >
          <img src={hamburgerMenuIcon} alt="Menú" />
        </div>
      </div>

      {/* Logo de CVA a la derecha */}
      <img src={logotipocva} className="cvx" alt="Logo CVA" />

      {/* Navbar que aparece al hacer hover en el menú de hamburguesa o en sí mismo */}
      <div
        ref={navbarRef}
        onMouseEnter={showNavbar}
        onMouseLeave={hideNavbar}
        className={`navbar-container ${isNavbarVisible ? 'visible' : 'hidden'}`}
      >
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
