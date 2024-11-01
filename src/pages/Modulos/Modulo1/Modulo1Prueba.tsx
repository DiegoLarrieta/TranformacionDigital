import React, { useState } from 'react';
import BotonNavegacion from '../../../components/Button/BotonNavegacion';
import MainContent from '../../../components/Main/MainContent';
import './Modulo1Prueba.css';

const questions = [
  {
    question: '¿Cuál sería la salida de este código?',
    code: `
let saludo = "Hola";
let nombre = "Mundo";
console.log(saludo + ", " + nombre + "!");
    `,
    options: ["Hola, Mundo!", "Hola Mundo!", "Error"],
    correctAnswer: "Hola, Mundo!"
  },
  {
    question: '¿Cuál sería la salida de este código?',
    code: `
let x = 5;
let y = 3;
console.log(x * y);
    `,
    options: ["15", "8", "53"],
    correctAnswer: "15"
  },
  {
    question: '¿Cuál sería la salida de este código?',
    code: `
for (let i = 0; i < 3; i++) {
  console.log(i);
}
    `,
    options: ["0 1 2", "1 2 3", "0 1 2 3"],
    correctAnswer: "0 1 2"
  },
  {
    question: '¿Cuál sería la salida de este código?',
    code: `
let a = 10;
let b = 5;
console.log(a > b ? "Mayor" : "Menor");
    `,
    options: ["Mayor", "Menor", "Error"],
    correctAnswer: "Mayor"
  }
];

const Modulo1Prueba: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowFeedback(true);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <MainContent>
      <div className="quiz-container">
        <h1 className="quiz-title">Prueba de Programación</h1>
        {currentQuestion < questions.length ? (
          <>
            <div className="question-card">
              <h2>{questions[currentQuestion].question}</h2>
              <pre className="question-code">
                {questions[currentQuestion].code}
              </pre>
              <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${selectedOption === option ? (option === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={!!selectedOption}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showFeedback && (
                <div className="feedback">
                  {selectedOption === questions[currentQuestion].correctAnswer ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.'}
                </div>
              )}
              {selectedOption && (
                <button className="next-button" onClick={handleNextQuestion}>
                  {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultado'}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="results">
            <h2>¡Prueba completada!</h2>
            <p>Obtuviste {score} de {questions.length} respuestas correctas.</p>
            <BotonNavegacion texto="Siguiente" ruta="/modulo1/test" />
          </div>
        )}
      </div>
    </MainContent>
  );
};

export default Modulo1Prueba;
