import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './navbar.css';
import { contactoIcon,
  creditosIcon,
  cursosIcon,
  homeIcon,
  mapaIcon,
  metodologiasIcon,
  politicasIcon,
  objetivosIcon, } from '../../assets'; // Asegúrate de que las rutas sean correctas

  const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">
              <img src={homeIcon} alt="Inicio" className="navbar-icon" />
              <span className="navbar-text">Bienvenida</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/objetivos">
              <img src={objetivosIcon} alt="Objetivos" className="navbar-icon" />
              <span className="navbar-text">Objetivos</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/mapa">
              <img src={mapaIcon} alt="Mapa conceptual" className="navbar-icon" />
              <span className="navbar-text">Mapa conceptual</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/metodologia">
              <img src={metodologiasIcon} alt="Metodología" className="navbar-icon" />
              <span className="navbar-text">Metodología</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/modulos">
              <img src={cursosIcon} alt="Módulos" className="navbar-icon" />
              <span className="navbar-text">Módulos</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/politicas">
              <img src={politicasIcon} alt="Políticas" className="navbar-icon" />
              <span className="navbar-text">Políticas</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto">
              <img src={contactoIcon} alt="Contáctanos" className="navbar-icon" />
              <span className="navbar-text">Contáctanos</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/creditos">
              <img src={creditosIcon} alt="Créditos" className="navbar-icon" />
              <span className="navbar-text">Créditos</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;