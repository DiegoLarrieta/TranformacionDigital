import React, { useState, useEffect } from 'react';
import './ModuloCard.css';
import { testIcon, clockIcon, levelIcon, lectureIcon, lockIcon } from '../../assets';

interface SyllabusItem {
  title: string;
  description: string;
  items: { type: string; title: string }[];
  image: string;
}

interface ModuloCardProps {
  title: string;
  level: string;
  time: string;
  projects: number;
  prerequisites: string;
  syllabus: SyllabusItem[];
  includes: string[];
  includesComponent?: React.ReactNode;
}

const ModuloCard: React.FC<ModuloCardProps> = ({
  title,
  level,
  time,
  projects,
  prerequisites,
  syllabus,
  includes,
  includesComponent,
}) => {
  const [policiesConfirmed, setPoliciesConfirmed] = useState(false);

  useEffect(() => {
    const syncPolicies = () => {
      const storedValue = localStorage.getItem('policiesConfirmed') === 'true';
      setPoliciesConfirmed(storedValue);
    };

    // Sincronizamos al montar el componente y cada 2 segundos
    syncPolicies();
    const interval = setInterval(syncPolicies, 2000);

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, []);

  const handleStartClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!policiesConfirmed) {
      e.preventDefault();
      alert('Debes confirmar las políticas de privacidad antes de acceder a los módulos.');
    } else {
      window.location.href = '/modulo1/1.1-Lectura';
    }
  };

  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (id: number) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((sec) => sec !== id) : [...prev, id]
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Lesson':
        return lectureIcon;
      case 'Quiz':
        return testIcon;
      case 'Lock':
        return lockIcon;
      default:
        return lectureIcon;
    }
  };

  return (
    <div className="modulo-card">
      <div className="modulo-header">
        <h1>{title}</h1>
        <p>Aprende de front-end y back-end con HTML, CSS y JavaScript.</p>
        <button className="start-button" onClick={handleStartClick}>
          Comenzar
        </button>
      </div>

      <div className="course-includes">
        <h3>Políticas de curso</h3>
        {includesComponent ? includesComponent : <ul>{includes.map((item, index) => <li key={index}>{item}</li>)}</ul>}
      </div>

      <div className="syllabus-container">
        <h3>Módulos</h3>
        {syllabus.map((section, index) => (
          <div key={index} className="syllabus-section">
            <div className="syllabus-header" onClick={() => toggleSection(index)}>
              <span>{index + 1}</span>
              <h4>{section.title}</h4>
              <button className="expand-button">{expandedSections.includes(index) ? '▲' : '▼'}</button>
            </div>
            {expandedSections.includes(index) && (
              <div className="syllabus-content">
                <ul className="syllabus-items">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="syllabus-item">
                      <img src={getIcon(item.type)} alt={`${item.type} icon`} className="syllabus-item-icon" />
                      {item.title}
                    </li>
                  ))}
                </ul>
                {section.image && (
                  <div className="syllabus-image-container">
                    <img src={section.image} alt={`${section.title} image`} className="syllabus-image" />
                  </div>
                )}
              </div>
              
            )}
          </div>

        ))}
      </div>
    </div>
  );
};

export default ModuloCard;
