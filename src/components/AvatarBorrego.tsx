import React, { useState, useEffect } from 'react';
import './AvatarBorrego.css'; 
import { borregoavatarimg } from '../assets';

// Define los bancos de frases
const frasesInicio = [
  "¡Bienvenido al módulo! Estás a punto de aprender algo increíble.",
  "¡Qué emoción verte aquí! Vamos a empezar con toda la energía.",
  "Este es el comienzo de un gran viaje. ¡Vamos a por ello!"
];

// Añadir la interfaz para aceptar la prop `style`
interface BorregoAvatarProps {
  etapa: 'inicio' | 'progreso' | 'motivacion';
}

const BorregoAvatar: React.FC<BorregoAvatarProps> = ({ etapa }) => {
  const [frase, setFrase] = useState('');
  const [visible, setVisible] = useState(true); // Hacer que el avatar esté visible por defecto

  useEffect(() => {
    const bancoFrases = frasesInicio;
    const nuevaFrase = bancoFrases[Math.floor(Math.random() * bancoFrases.length)];
    setFrase(nuevaFrase);
  }, [etapa]);

  const handleClose = () => {
    setVisible(false); // Cerrar el avatar cuando se haga clic en la flecha
  };

  return (
    <>
      {visible && (
        <>
          {/* Overlay que cubre la pantalla */}
          <div className="overlay" />

          {/* Avatar y mensaje */}
          <div className="avatar-container">
            <div className="thought-bubble">
              <p>{frase}</p>
            </div>
            <img src={borregoavatarimg} alt="Avatar Motivacional" className="avatar-image" />
            <button className="close-btn" onClick={handleClose}>→</button>
          </div>
        </>
      )}
    </>
  );
};

export default BorregoAvatar;
