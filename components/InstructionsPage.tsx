
import React from 'react';
import { LEVEL_DESCRIPTIONS } from '../constants';

const InstructionsPage: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-700 pb-2 mb-6">
        INSTRUCCIONES
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          El <strong>Análisis Situacional</strong> es una herramienta analítica que permite comprender el grado de madurez de las capacidades de su organización relacionadas a la gestión. Esta herramienta le permite identificar a nuestro grupo de expertos cuales son las principales alternativas de implementación de programas de gestión para el mejoramiento de los resultados.
        </p>
        <p>Tenga en cuenta las siguientes recomendaciones:</p>
        <ul className="list-decimal list-inside space-y-2 pl-4">
          <li>Utilice los botones de la parte superior para ir a los diferentes contenidos del Análisis Situacional.</li>
          <li>Complete el <strong>Perfil Empresarial</strong>, es importante que todas las preguntas se encuentren debidamente contestadas.</li>
          <li>
            Vamos a analizar <strong>6 aspectos</strong> fundamentales de la Gestión Empresarial. Disponga del tiempo suficiente para contestar cada una de las 60 preguntas. En cada una de las preguntas <strong>seleccione</strong> de la lista despegable, el que mas se identifique con la realidad de su empresa. Tenga en cuenta el siguiente parámetro de evaluación:
          </li>
        </ul>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="text-left font-semibold py-3 px-4">NIVEL DE IMPLEMENTACION</th>
              <th className="text-left font-semibold py-3 px-4">DESCRIPCION</th>
            </tr>
          </thead>
          <tbody>
            {LEVEL_DESCRIPTIONS.map((level, index) => (
              <tr
                key={level.level}
                className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="py-3 px-4 font-medium text-gray-800">
                  <div className="flex items-center">
                    <span className={`w-4 h-4 rounded-full mr-3 ${level.color}`}></span>
                    {level.level}
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600">{level.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructionsPage;
