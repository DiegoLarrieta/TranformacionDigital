import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import {
  contactoIcon,
  creditosIcon,
  cursosIcon,
  homeIcon,
  mapaIcon,
  metodologiasIcon,
  politicasIcon,
  objetivosIcon,
} from '../../assets';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isVertical, setIsVertical] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkOverflow = () => {
    if (navListRef.current && containerRef.current) {
      const listWidth = Array.from(navListRef.current.children)
        .reduce((total, item) => total + item.getBoundingClientRect().width, 0);
      
      // Agregamos el gap total (2rem * (número de items - 1))
      const totalGap = 32 * (navListRef.current.children.length - 1);
      const totalRequiredWidth = listWidth + totalGap;
      
      // Agregamos un margen de seguridad del 5%
      const containerWidth = containerRef.current.clientWidth * 0.95;
      
      setIsVertical(totalRequiredWidth > containerWidth);
    }
  };

  useEffect(() => {
    checkOverflow();

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', checkOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const navItems = [
    { to: "/home", icon: homeIcon, text: "Bienvenida" },
    { to: "/objetivos", icon: objetivosIcon, text: "Objetivos" },
    { to: "/mapa", icon: mapaIcon, text: "Mapa conceptual" },
    { to: "/metodologia", icon: metodologiasIcon, text: "Metodología" },
    { to: "/modulos", icon: cursosIcon, text: "Módulos" },
    { to: "/politicas", icon: politicasIcon, text: "Políticas" },
    { to: "/contacto", icon: contactoIcon, text: "Contáctanos" },
    { to: "/creditos", icon: creditosIcon, text: "Créditos" }
  ];

  return (
    <nav className={`navbar ${className || ''} ${isVertical ? 'vertical' : ''}`}>
      <div className="navbar-container" ref={containerRef}>
        <ul className="navbar-list" ref={navListRef}>
          {navItems.map((item) => (
            <li key={item.to} className="navbar-item">
              <Link to={item.to} className="navbar-link">
                <img src={item.icon} alt="" className="navbar-icon" />
                <span className="navbar-text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
