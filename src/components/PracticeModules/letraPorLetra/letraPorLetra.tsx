import React, { useState, useEffect } from 'react';
import styles from './letraPorLetra.module.css';
import BotonNavegacion from '../../Button/BotonNavegacion';

interface Question {
    question: string;
    answer: string;
}

interface LetraPorLetraProps {
    questions: Question[];
    defaultDarkMode?: boolean;
}

const LetraPorLetra: React.FC<LetraPorLetraProps> = ({ 
    questions,
    defaultDarkMode = false 
}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputs, setInputs] = useState<string[]>([]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

    useEffect(() => {
        if (questions.length === 0) {
            throw new Error('LetraPorLetra component requires at least one question');
        }
        initializeGame();
    }, [questions]);

    const initializeGame = () => {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledQuestions(shuffled);
        setCurrentQuestionIndex(0);
        setInputs(Array(shuffled[0].answer.length).fill(''));
    };

    const resetInputs = () => {
        setInputs(Array(shuffledQuestions[currentQuestionIndex].answer.length).fill(''));
    };

    const handleInput = (value: string, position: number) => {
        const newInputs = [...inputs];
        const currentAnswer = shuffledQuestions[currentQuestionIndex].answer;
        
        if (value.toUpperCase() === currentAnswer[position]) {
            newInputs[position] = value.toUpperCase();
            setInputs(newInputs);

            if (position < currentAnswer.length - 1) {
                const nextInput = document.querySelector<HTMLInputElement>(`[data-position="${position + 1}"]`);
                if (nextInput) {
                    nextInput.focus();
                }
            }

            if (newInputs.join('') === currentAnswer) {
                setTimeout(nextQuestion, 500);
            }
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, position: number) => {
        if (event.key === 'Backspace' && !inputs[position]) {
            const prevInput = document.querySelector<HTMLInputElement>(`[data-position="${position - 1}"]`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const nextQuestion = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            if (currentQuestionIndex < shuffledQuestions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                alert('¡Felicitaciones! Has completado todas las palabras.');
                initializeGame();
            }
            resetInputs();
            setIsTransitioning(false);
        }, 300);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    if (shuffledQuestions.length === 0) return null;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <h1 className={styles.headerTitle}>Juego de Palabras</h1>
                    <p className={styles.headerSubtitle}>Selecciona el primer recuadro y escribe la respuesta correcta</p>
                    <button className={styles.themeToggleButton} onClick={toggleTheme}>
                        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
                    </button>
                </div>
                
                <div className={`${styles.questionContainer} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                    <div className={styles.question}>{shuffledQuestions[currentQuestionIndex].question}</div>
                    <div className={styles.inputsContainer}>
                        {shuffledQuestions[currentQuestionIndex].answer.split('').map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                className={`${styles.letterInput} ${inputs[index] ? styles.correct : ''}`}
                                value={inputs[index] || ''}
                                onChange={(e) => handleInput(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                data-position={index}
                            />
                        ))}
                    </div>
                </div>
                
                <div className={styles.progress}>
                    Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
                </div>
            </div>
            <BotonNavegacion texto="Regresar" ruta="/modulos"/>
        </div>
    );
};

export default LetraPorLetra;