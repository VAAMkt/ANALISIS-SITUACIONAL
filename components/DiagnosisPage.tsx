import React, { useState, useMemo } from 'react';
import { DiagnosisArea, DiagnosisAnswers, Answer, Page } from '../types';
import { DIAGNOSIS_QUESTIONS, IMPLEMENTATION_LEVELS } from '../constants';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// Helper component defined outside to prevent re-renders
const QuestionTable: React.FC<{
  questions: string[];
  answers: Answer[];
  onAnswerChange: (index: number, field: 'level' | 'opportunity', value: string | number) => void;
}> = ({ questions, answers, onAnswerChange }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="w-12 text-center py-3 px-4 font-semibold">N°</th>
            <th className="text-left py-3 px-4 font-semibold">Pregunta</th>
            <th className="w-48 text-left py-3 px-4 font-semibold">Respuesta (Nivel)</th>
            <th className="w-64 text-left py-3 px-4 font-semibold">Oportunidades de Mejora</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, index) => (
            <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="text-center py-3 px-4 text-gray-700 font-medium">{index + 1}</td>
              <td className="py-3 px-4 text-gray-700">{q}</td>
              <td className="py-3 px-4">
                <select
                  value={answers[index].level}
                  onChange={(e) => onAnswerChange(index, 'level', parseInt(e.target.value, 10))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  {IMPLEMENTATION_LEVELS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </td>
              <td className="py-3 px-4">
                <input
                  type="text"
                  value={answers[index].opportunity}
                  onChange={(e) => onAnswerChange(index, 'opportunity', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Opcional..."
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface DiagnosisPageProps {
  answers: DiagnosisAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<DiagnosisAnswers>>;
  setIsDiagnosisComplete: (isComplete: boolean) => void;
  setActivePage: (page: Page) => void;
}

const DiagnosisPage: React.FC<DiagnosisPageProps> = ({ answers, setAnswers, setIsDiagnosisComplete, setActivePage }) => {
  const areaOrder = Object.values(DiagnosisArea);
  const [activeAreaKey, setActiveAreaKey] = useState<DiagnosisArea>(areaOrder[0]);

  const handleAnswerChange = (index: number, field: 'level' | 'opportunity', value: string | number) => {
    setAnswers(prev => {
      const newAreaAnswers = [...prev[activeAreaKey]];
      newAreaAnswers[index] = { ...newAreaAnswers[index], [field]: value };
      return { ...prev, [activeAreaKey]: newAreaAnswers };
    });
  };
  
  const isComplete = useMemo(() => {
    // FIX: Explicitly type `areaAnswers` as `Answer[]` because `Object.values`
    // can sometimes return `unknown[]`, causing a type error on `.every`.
    return Object.values(answers).every((areaAnswers: Answer[]) => 
        areaAnswers.every(answer => answer.level > 0)
    );
  }, [answers]);

  const handleGenerateReport = () => {
      setIsDiagnosisComplete(true);
      setActivePage(Page.Results);
  };

  const handleNext = () => {
    const currentIndex = areaOrder.indexOf(activeAreaKey);
    if(currentIndex < areaOrder.length - 1) {
        setActiveAreaKey(areaOrder[currentIndex + 1]);
    }
  };

  const activeArea = DIAGNOSIS_QUESTIONS[activeAreaKey];
  const currentIndex = areaOrder.indexOf(activeAreaKey);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
       <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-700 pb-2 mb-6">
        AUTODIAGNÓSTICO - {activeArea.title}
      </h2>
      
      <div className="mb-6 overflow-x-auto">
        <nav className="flex space-x-1 border-b">
          {areaOrder.map(areaKey => (
            <button
              key={areaKey}
              onClick={() => setActiveAreaKey(areaKey)}
              className={`py-2 px-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeAreaKey === areaKey
                  ? 'border-b-2 border-blue-700 text-blue-700'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              {DIAGNOSIS_QUESTIONS[areaKey].title}
            </button>
          ))}
        </nav>
      </div>

      <QuestionTable
        questions={activeArea.questions}
        answers={answers[activeAreaKey]}
        onAnswerChange={handleAnswerChange}
      />

      <div className="mt-8 flex justify-between items-center">
        <div>
            {isComplete && (
                 <div className="flex items-center text-green-600">
                    <CheckCircleIcon className="h-6 w-6 mr-2" />
                    <span className="font-semibold">¡Todas las preguntas han sido respondidas!</span>
                 </div>
            )}
        </div>
        <div className="flex gap-4">
            {currentIndex < areaOrder.length - 1 && (
                <button
                    onClick={handleNext}
                    className="bg-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                >
                    Siguiente <ArrowRightIcon className="h-5 w-5" />
                </button>
            )}
            {isComplete && (
                <button
                    onClick={handleGenerateReport}
                    className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                    Generar Análisis de Resultados
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisPage;