import React, { useState } from 'react';
import './ModuloCard.css';
import { testIcon, clockIcon, levelIcon, lectureIcon, lockIcon } from '../../assets';
import BotonNavegacion from '../../components/Button/BotonNavegacion';

interface SyllabusItem {
  title: string;
  description: string;
  items: {
    type: string;
    title: string;
    hasPractice?: boolean;  
    practiceRoute?: string; 
  }[];
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
        <p>Aprende de front-end y back-end con html, css y javascript.</p>
        <BotonNavegacion texto="Comenzar" ruta="/modulo1/1.1-Lectura" />
      </div>

      <div className="course-includes">
        <h3>Politicas de curso</h3>
        {includesComponent ? (
          includesComponent
        ) : (
          <ul>
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="syllabus-container">
        <h3>Módulos</h3>
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
                      {item.hasPractice && (
                        <BotonNavegacion 
                          nombre="practice-button" 
                          texto="Practica" 
                          ruta={item.practiceRoute || ''}
                        />
                      )}
                    </li>
                  ))}
                </ul>
                {section.image && (
                  <div className="syllabus-image-container">
                    <img 
                      src={section.image} 
                      alt={`${section.title} image`} 
                      className="syllabus-image" 
                    />
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

