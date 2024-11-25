import React, { useState } from "react";
import styles from "./completarOraciones.module.css"

interface Sentence {
  text: string;
  placeholder: string;
  answer: string;
  continuation: string;
}

interface CompletarOracionesProps {
  sentences: Sentence[];
}

const CompletarOraciones: React.FC<CompletarOracionesProps> = ({ sentences }) => {
    // Estado para las respuestas del usuario
    const [userInputs, setUserInputs] = useState<string[]>(Array(sentences.length).fill(""));
    // Estado para los resultados de la verificación
    const [results, setResults] = useState<string[]>(Array(sentences.length).fill(""));
  
    const checkAnswers = () => {
      let correctCount = 0;
  
      const updatedResults = userInputs.map((input, index) => {
        const isCorrect = input.trim().toLowerCase() === sentences[index].answer.toLowerCase();
        if (isCorrect) correctCount++;
        return isCorrect ? styles.completarOracionesCorrect : styles.completarOracionesIncorrect;
      });
  
      setResults(updatedResults);
      alert(`Has acertado ${correctCount} de ${sentences.length} palabras.`);
    };
  
    const handleInputChange = (value: string, index: number) => {
      const updatedInputs = [...userInputs];
      updatedInputs[index] = value;
      setUserInputs(updatedInputs);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (index < sentences.length - 1) {
          const nextInput = document.getElementById(`input-${index + 1}`);
          nextInput?.focus();
        } else {
          checkAnswers();
        }
      }
    };
  
    return (
      <div className={styles.completarOracionesMainContainer}>
        <div className={styles.completarOracionesHeaderSection}>
          <h1 className={styles.completarOracionesHeaderTitle}>Completa las Palabras</h1>
          <p className={styles.completarOracionesHeaderSubtitle}>
            Completa cada oración con la palabra correcta
          </p>
        </div>
        <div className={styles.completarOracionesSentencesContainer}>
        {sentences.map((sentence, index) => (
          <div
            key={index}
            className={`${styles.completarOracionesSentence} ${results[index]}`}
          >
            {sentence.text}
            <input
              type="text"
              id={`input-${index}`}
              placeholder={sentence.placeholder}
              className={styles.completarOracionesInputField}
              value={userInputs[index]} // Usar userInputs en lugar de results
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
            {sentence.continuation}
          </div>
        ))}
          <button className={styles.completarOracionesButton} onClick={checkAnswers}>
            Verificar Respuestas
          </button>
        </div>
      </div>
    );
  };

export default CompletarOraciones;


