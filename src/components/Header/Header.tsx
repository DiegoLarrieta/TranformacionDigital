import './header.css';
import {
  //isotipoBlanco,
  //logolargo,
  logotectransparente,
  logotipocva,
} from '../../assets';

const Header = () => {
  return (
    <header className="header">
      {/* Tec logo ahora está a la izquierda */}
      <img src={logotectransparente} className="tec-logo" alt="Logo Tec" />

      {/* Quitamos el título central */}
      <div className="spacer"></div> {/* Usamos un div vacío para el espaciado */}

      {/* CVA logo ahora está a la derecha */}
      <img src={logotipocva} className="cvx" alt="Logo CVA" />
    </header>
  );
};

export default Header;
