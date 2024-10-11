import { useState, useEffect } from 'react';
import './header.css';
import {
  //isotipoBlanco,
  //logolargo,
  logotectransparente,
  logotipocva,
} from '../../assets';

const Header = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Centro Virtual de Aprendizaje';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)); // Muestra progresivamente el texto
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false); // Cuando se completa el texto, desactivamos el "cursor"
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <img src={logotipocva} className="cvx" alt="Logo CVA" />
      <div className="title-container">
        {/* Aplicar la clase typing solo cuando isTyping sea verdadero */}
        <h1 className={isTyping ? 'typing' : ''}>{displayedText}</h1>
      </div>
      <img src={logotectransparente} className="tec-logo" alt="Logo Tec" />
    </header>
  );
};

export default Header;