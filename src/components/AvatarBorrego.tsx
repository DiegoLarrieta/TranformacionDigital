import React, { useState, useEffect } from 'react';
import './AvatarBorrego.css'; // Importa los estilos
import { borregoavatarimg } from '../assets';

// Define los bancos de frases
const frasesInicio = [
  "¡Bienvenido al módulo! Estás a punto de aprender algo increíble.",
  "¡Qué emoción verte aquí! Vamos a empezar con toda la energía.",
  "Este es el comienzo de un gran viaje. ¡Vamos a por ello!"
];

const frasesProgreso = [
  "¡Lo estás haciendo muy bien! Sigue así.",
  "Cada paso te lleva más cerca de tus objetivos.",
  "¡Gran trabajo! El progreso que has hecho es impresionante."
];

const frasesMotivacion = [
  "No te rindas, el esfuerzo vale la pena.",
  "Recuerda, el éxito es la suma de pequeños esfuerzos repetidos cada día.",
  "¡Estás más cerca de lo que crees!"
];

// Función para elegir una frase aleatoria de un banco
const getFraseAleatoria = (bancoFrases: string[]) => {
  const index = Math.floor(Math.random() * bancoFrases.length);
  return bancoFrases[index];
};

const BorregoAvatar = ({ etapa }: { etapa: 'inicio' | 'progreso' | 'motivacion' }) => {
  const [frase, setFrase] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let bancoFrases;
    switch (etapa) {
      case 'inicio':
        bancoFrases = frasesInicio;
        break;
      case 'progreso':
        bancoFrases = frasesProgreso;
        break;
      case 'motivacion':
        bancoFrases = frasesMotivacion;
        break;
      default:
        bancoFrases = frasesInicio;
    }

    // Selecciona una frase aleatoria cada vez que cambie la etapa
    const nuevaFrase = getFraseAleatoria(bancoFrases);
    setFrase(nuevaFrase);
    setVisible(true); // Muestra el avatar

    // Ocultar el avatar después de 5 segundos
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timeout); // Limpia el timeout al desmontar
    
  }, [etapa]);

  return (
    <div className={`avatar-container ${visible ? 'visible' : ''}`}>
      <div className="thought-bubble">
        <p>{frase}</p>
      </div>
      <img src={borregoavatarimg} alt="Avatar Motivacional" className="avatar-image" />
    </div>
  );
};

export default BorregoAvatar;
