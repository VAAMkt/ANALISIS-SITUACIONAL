
import React, { useState, useEffect } from 'react';
import { DiagnosisAnswers } from '../types';
import { generateAnalysis } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ResultsPageProps {
  answers: DiagnosisAnswers;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center text-gray-600">
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h3 className="text-xl font-semibold mt-4">Generando su análisis...</h3>
        <p className="mt-2">Esto puede tomar un momento. Estamos procesando sus respuestas para crear un informe detallado.</p>
    </div>
);

const ResultsPage: React.FC<ResultsPageProps> = ({ answers }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        setIsLoading(true);
        setError('');
        const result = await generateAnalysis(answers);
        setAnalysis(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
        setError(`Failed to generate analysis: ${errorMessage}`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalysis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in min-h-[60vh]">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-700 pb-2 mb-6">
        RESULTADOS DEL ANÁLISIS
      </h2>
      
      {isLoading && <LoadingSpinner />}
      
      {error && <div className="text-red-600 bg-red-100 p-4 rounded-md">{error}</div>}

      {!isLoading && !error && (
        <div className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-h2:border-b prose-h2:pb-2 prose-h3:text-gray-700 prose-strong:text-gray-800">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{analysis}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
