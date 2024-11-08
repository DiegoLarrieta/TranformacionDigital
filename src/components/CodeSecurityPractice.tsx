import React, { useState } from 'react';
import styles from './CodeSecurityPractice.module.css';

interface Vulnerability {
  issue: string;
  description: string;
  impact: string;
}

interface Message {
  text: string;
  type: 'success' | 'error';
}

const CodeSecurityPractice: React.FC = () => {
  const vulnerabilities: { [key: number]: Vulnerability } = {
    3: {
      issue: "Inyección SQL",
      description: "Concatenación directa de variables en la consulta SQL sin sanitización",
      impact: "Alto"
    },
    8: {
      issue: "Almacenamiento Inseguro",
      description: "Uso de sessionStorage para datos sensibles de rol",
      impact: "Medio"
    },
    9: {
      issue: "Exposición de Datos",
      description: "Token de autenticación almacenado en localStorage",
      impact: "Alto"
    },
    12: {
      issue: "Logging Inseguro",
      description: "Exposición de información sensible en logs",
      impact: "Bajo"
    },
    15: {
      issue: "XSS Potencial",
      description: "Redirección con parámetros no sanitizados",
      impact: "Medio"
    }
  };

  const code = `// Función de autenticación de usuario
function authenticateUser(username, password) {
  // Consulta a la base de datos
  const query = 'SELECT * FROM users WHERE username="' + username + '" AND password="' + password + '"';
  
  // Ejecutar consulta
  const user = db.execute(query);
  
  if (user) {
    // Almacenar datos de sesión
    sessionStorage.setItem('userRole', user.role);
    localStorage.setItem('authToken', user.token);
    
    // Registro de acceso
    console.log('Login successful for user:', username);
    
    // Redirección
    window.location = '/dashboard?token=' + user.token;
    
    return true;
  }
  
  return false;
}`;

  const [selectedLines, setSelectedLines] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [remainingVulns, setRemainingVulns] = useState(5);
  const [lastMessage, setLastMessage] = useState<Message | null>(null);
  const [shake, setShake] = useState(false);

  const handleLineClick = (lineNumber: number) => {
    if (selectedLines.has(lineNumber)) return;

    const vulnerability = vulnerabilities[lineNumber];
    
    if (vulnerability) {
      setScore(prev => prev + 10);
      setRemainingVulns(prev => prev - 1);
      setLastMessage({
        text: `¡Correcto! ${vulnerability.issue}\n${vulnerability.description}\nImpacto: ${vulnerability.impact}`,
        type: 'success'
      });
    } else {
      setScore(prev => Math.max(0, prev - 5));
      setLastMessage({
        text: "Incorrecto. Esta línea no contiene vulnerabilidades de seguridad.",
        type: 'error'
      });
      setShake(true);
      setTimeout(() => setShake(false), 820);
    }

    setSelectedLines(prev => new Set([...prev, lineNumber]));
  };

  const resetExercise = () => {
    setSelectedLines(new Set());
    setScore(0);
    setRemainingVulns(5);
    setLastMessage(null);
    setShake(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Análisis de Seguridad</h1>
          <h2>Vulnerabilidades en Código</h2>
          <p>Identifica las líneas de código que podrían representar riesgos de seguridad en la siguiente implementación.</p>
        </div>
      </header>

      <section className={styles.instructions}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Lee el código cuidadosamente</li>
          <li>Identifica las líneas que contienen vulnerabilidades potenciales</li>
          <li>Haz clic en las líneas que consideres inseguras</li>
          <li>Cada error te restará puntos</li>
        </ul>
      </section>

      <main className={`${styles.codeContainer} ${shake ? styles.shake : ''}`}>
        <div className={styles.code}>
          {code.split('\n').map((line, index) => {
            const lineNumber = index + 1;
            const isSelected = selectedLines.has(lineNumber);
            const vulnerability = vulnerabilities[lineNumber];

            return (
              <div
                key={lineNumber}
                onClick={() => handleLineClick(lineNumber)}
                className={`${styles.codeLine} ${
                  isSelected ? (vulnerability ? styles.vulnerable : styles.incorrect) : ''
                }`}
              >
                <span className={styles.lineNumber}>{lineNumber}</span>
                <code>{line || ' '}</code>
              </div>
            );
          })}
        </div>

        {lastMessage && (
          <div className={`${styles.message} ${styles[lastMessage.type]}`}>
            <pre>{lastMessage.text}</pre>
          </div>
        )}
      </main>

      {remainingVulns === 0 && (
        <div className={styles.successMessage}>
          ¡Excelente! Has encontrado todas las vulnerabilidades.
        </div>
      )}
              <div className={styles.stats}>
          <div className={styles.statBox}>
            <span>Puntuación</span>
            <strong>{score}</strong>
          </div>
          <div className={styles.statBox}>
            <span>Restantes</span>
            <strong>{remainingVulns}</strong>
          </div>
          <button className={styles.resetButton} onClick={resetExercise}>
            Reintentar
          </button>
        </div>
    </div>
  );
};

export default CodeSecurityPractice;