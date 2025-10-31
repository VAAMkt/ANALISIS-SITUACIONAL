
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isDiagnosisComplete: boolean;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, isDiagnosisComplete }) => {
  const navItems = [
    { id: Page.Instructions, label: '1 INSTRUCCIONES' },
    { id: Page.Profile, label: '2 PERFIL EMPRESARIAL' },
    { id: Page.Diagnosis, label: '3 AUTODIAGNOSTICO' },
  ];

  if (isDiagnosisComplete) {
      navItems.push({ id: Page.Results, label: '4 RESULTADOS' });
  }

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            ANÁLISIS SITUACIONAL
          </h1>
          <nav className="mt-4 w-full">
            <ul className="flex flex-wrap justify-center border-b border-gray-200">
              {navItems.map((item, index) => (
                <li key={item.id} className="-mb-px">
                  <button
                    onClick={() => setActivePage(item.id)}
                    className={`whitespace-nowrap inline-block py-3 px-4 text-sm md:text-base font-semibold border-b-4 transition-colors duration-300 ${
                      activePage === item.id
                        ? 'border-blue-700 text-blue-700'
                        : 'border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
