import React, { useState, useEffect, useCallback } from 'react';
import './AvatarBorrego.css';
import { borregoavatarimg } from '../assets';

const frasesInicio = [
  "¡Bienvenido al módulo!",
  "¡Qué emoción verte aquí!",
  "¡Vamos a por ello!"
];

const frasesProgreso = [
  "¡Vas muy bien!",
  "¡Sigue así!",
  "¡Casi lo logras!"
];

const frasesMotivacion = [
  "¡Tú puedes!",
  "¡Ánimo!",
  "¡Excelente trabajo!"
];

const frasesFinalizacion = [
  "¡Haz Finalizado!",
  "¡Estas a punto de finalizar sigue asi!",
  "¡Gran trabajo haz finalizado!"
];

interface BorregoAvatarProps {
  etapa: 'inicio' | 'progreso' | 'motivacion' | 'finalizacion';
  onClose?: () => void;
  autoCloseDelay?: number;
}

const BorregoAvatar: React.FC<BorregoAvatarProps> = ({ 
  etapa, 
  onClose,
  autoCloseDelay = 5000
}) => {
  const [frase, setFrase] = useState('');
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getFrasesPorEtapa = useCallback(() => {
    switch (etapa) {
      case 'inicio':
        return frasesInicio;
      case 'progreso':
        return frasesProgreso;
      case 'motivacion':
        return frasesMotivacion;
      case 'finalizacion':
        return frasesFinalizacion;
      default:
        return frasesInicio;
    }
  }, [etapa]);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        const frases = getFrasesPorEtapa();
        const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
        setFrase(nuevaFrase);
      }, 2000); // Reducido a 2 segundos

      return () => clearInterval(interval);
    }
  }, [isHovered, getFrasesPorEtapa]);

  useEffect(() => {
    const frases = getFrasesPorEtapa();
    const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    setFrase(nuevaFrase);
  }, [etapa, getFrasesPorEtapa]);

  useEffect(() => {
    if (autoCloseDelay) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setVisible(false);
          if (onClose) onClose();
        }, 300);
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [autoCloseDelay, onClose]);

  const handleAvatarHover = () => {
    setIsHovered(true);
  };

  const handleAvatarLeave = () => {
    setIsHovered(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className={`overlay ${isExiting ? 'avatar-exit' : ''}`} />
      <div className={`avatar-container ${isExiting ? 'avatar-exit' : ''}`}>
        <div className="thought-bubble">
          <p className="typing-text">{frase}</p>
        </div>
        <img 
          src={borregoavatarimg} 
          alt="Avatar Motivacional" 
          className="avatar-image"
          onMouseEnter={handleAvatarHover}
          onMouseLeave={handleAvatarLeave}
          onClick={() => {
            setIsExiting(true);
            setTimeout(() => {
              setVisible(false);
              if (onClose) onClose();
            }, 300);
          }}
        />
      </div>
    </>
  );
};

export default BorregoAvatar;