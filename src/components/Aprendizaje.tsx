import { useState, useEffect } from 'react';
import { CheckCircle2, Code, Brain, Palette } from 'lucide-react';

const LearningOutcomes = () => {
  const [isVisible, setIsVisible] = useState(false);

  const outcomeData = [
    {
      icon: <Code className="text-white" size={24} />,
      title: "Desarrollo Frontend",
      description: "Domina las tecnologías web modernas",
      skills: ["HTML5 Semántico", "CSS3 Avanzado", "JavaScript ES6+"],
      gradient: "from-[#FF3366] to-[#FF6B6B]"
    },
    {
      icon: <Brain className="text-white" size={24} />,
      title: "Pensamiento Lógico",
      description: "Mejora tus habilidades de resolución de problemas",
      skills: ["Algoritmos", "Estructuras de Datos", "Patrones de Diseño"],
      gradient: "from-[#4158D0] to-[#C850C0]"
    },
    {
      icon: <Palette className="text-white" size={24} />,
      title: "Diseño UI/UX",
      description: "Crea interfaces atractivas y funcionales",
      skills: ["Diseño Responsive", "Animaciones", "Accesibilidad"],
      gradient: "from-[#0093E9] to-[#80D0C7]"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          className={`
            text-center mb-16 
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Resultados de Aprendizaje
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explora las habilidades que desarrollarás en este programa innovador
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {outcomeData.map((outcome, index) => (
            <div
              key={index}
              className={`
                relative p-6 rounded-xl
                bg-gradient-to-br ${outcome.gradient}
                hover:scale-105 
                transition-all duration-500 ease-out
                backdrop-blur-lg bg-opacity-10
                border border-white/10
                transform
                ${isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
                }
                animate-float
              `}
              style={{
                transitionDelay: `${index * 200}ms`,
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Icon Container */}
              <div className={`
                w-12 h-12 rounded-full 
                flex items-center justify-center mb-4
                bg-gradient-to-br ${outcome.gradient}
              `}>
                {outcome.icon}
              </div>

              <h2 className="text-xl font-bold mb-3">{outcome.title}</h2>
              <p className="text-white/80 mb-4">{outcome.description}</p>

              {/* Skills List */}
              <ul className="space-y-2">
                {outcome.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className={`
                      flex items-center gap-2
                      transform transition-all duration-500
                      ${isVisible 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-10 opacity-0'
                      }
                    `}
                    style={{
                      transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                    }}
                  >
                    <CheckCircle2 size={16} className="text-white/60" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Progress Bar */}
              <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div 
                  className={`
                    h-full bg-white/40 rounded-full
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'w-full' : 'w-0'}
                  `}
                  style={{
                    transitionDelay: `${(index * 200) + 500}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LearningOutcomes;