import React, { useState } from 'react';
import './ModuloCard.css';
import { testIcon, clockIcon, levelIcon, lectureIcon, lockIcon } from '../../assets';
import BotonNavegacion from '../../components/Button/BotonNavegacion';

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
  includesComponent?: React.ReactNode; // Nuevo prop opcional para el componente de "includes"
}

const ModuloCard: React.FC<ModuloCardProps> = ({
  title,
  level,
  time,
  projects,
  prerequisites,
  syllabus,
  includes,
  includesComponent, // Nuevo prop para incluir el componente dinámico
}) => {
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
        <p>Learn about the different components of a web application's back-end and explore the Node.js JavaScript runtime environment.</p>
        <BotonNavegacion texto="Start" ruta="/modulo1/1.1-Lectura" />
      </div>

      <div className="modulo-details">
        <div className="modulo-detail-item">
          <img src={levelIcon} alt="Level icon" />
          <span>{level}</span>
        </div>
        <div className="modulo-detail-item">
          <img src={clockIcon} alt="Clock icon" />
          <span>{time}</span>
        </div>
        <div className="modulo-detail-item">
          <img src={testIcon} alt="Projects icon" />
          <span>{projects} Projects</span>
        </div>
        <div className="modulo-detail-item">
          <img src={lectureIcon} alt="Lectures icon" />
          <span>Lectures {prerequisites}</span>
        </div>
      </div>

      <div className="course-includes">
        <h3>Politicas de curso</h3>
        {includesComponent ? (
          includesComponent // Renderiza el componente de "includes" si está presente
        ) : (
          <ul>
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="syllabus-container">
        <h3>Modules</h3>
        {syllabus.map((section, index) => (
          <div key={index} className="syllabus-section">
            <div className="syllabus-header" onClick={() => toggleSection(index)}>
              <span>{index + 1}</span>
              <h4>{section.title}</h4>
              <button className="expand-button">
                {expandedSections.includes(index) ? '▲' : '▼'}
              </button>
            </div>
            {expandedSections.includes(index) && (
              <div className="syllabus-content">
                <ul className="syllabus-items">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="syllabus-item">
                      <img
                        src={getIcon(item.type)}
                        alt={`${item.type} icon`}
                        className="syllabus-item-icon"
                      />
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
