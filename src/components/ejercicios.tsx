import React, { useState, useEffect } from 'react';
import './ejercicios.css';

const Ejercicio1: React.FC = () => {
  const pronouns = [
    { pronoun: 'Ich', answer: 'bin' },
    { pronoun: 'Du', answer: 'bist' },
    { pronoun: 'Er/Sie/Es', answer: 'ist' },
    { pronoun: 'Wir', answer: 'sind' },
    { pronoun: 'Ihr', answer: 'seid' },
    { pronoun: 'Sie (pl.)', answer: 'sind' }
  ];

  const [currentPronoun, setCurrentPronoun] = useState(pronouns[0]);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    setRandomPronoun();
  }, []);

  const setRandomPronoun = () => {
    const randomIndex = Math.floor(Math.random() * pronouns.length);
    setCurrentPronoun(pronouns[randomIndex]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === currentPronoun.answer) {
      setScore(score + 1);
      setResult('Correcto! +1 Puntos');
    } else {
      setResult(`Incorrecto! Respuesta correcta: ${currentPronoun.answer}`);
    }
    setUserInput('');
    setRandomPronoun();
  };

  return (
    <div className="Ejercicio1">
      <h1>Conjugación del Verbo "Sein"</h1>
      <div className="pronouns">
        {pronouns.map((item, index) => (
          <div
            key={index}
            className="pronoun"
            style={{
              fontSize: item.pronoun === currentPronoun.pronoun ? '36px' : '24px',
              color: item.pronoun === currentPronoun.pronoun ? 'orange' : '#333'
            }}
          >
            {item.pronoun}
          </div>
        ))}
      </div>
      <div className="input-container">
        <label htmlFor="userInput">Escribe la conjugación correcta:</label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Respuesta..."
        />
        <div id="result">{result}</div>
      </div>
    </div>
  );
};

export default Ejercicio1;
