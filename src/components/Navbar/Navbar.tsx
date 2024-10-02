import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/mis-cursos" className="navbar-link">Mis Cursos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/objetivos" className="navbar-link">Objetivos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/politicas" className="navbar-link">Políticas</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contactanos" className="navbar-link">Contáctanos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
