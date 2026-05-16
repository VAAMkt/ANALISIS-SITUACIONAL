
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import InstructionsPage from './components/InstructionsPage';
import ProfilePage from './components/ProfilePage';
import DiagnosisPage from './components/DiagnosisPage';
import ResultsPage from './components/ResultsPage';
import { Page, BusinessProfile, DiagnosisAnswers, DiagnosisArea, Answer } from './types';
import { DIAGNOSIS_QUESTIONS } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Instructions);
  const [isDiagnosisComplete, setIsDiagnosisComplete] = useState<boolean>(false);

  const [profile, setProfile] = useState<BusinessProfile>({
    companyName: '', rut: '', address: '', city: '', department: '', website: '',
    legalRepName: '', legalRepId: '', legalRepPhone: '', legalRepEmail: '',
    contactName: '', contactId: '', contactPhone: '', contactEmail: '',
    history: '', sector: '', subsector: '', economicActivity: '', companyClassification: '', yearsInOperation: '',
    valueProposition: '', totalEmployees: '', numberOfSites: '',
    workModality: { presential: '', remote: '', hybrid: '' },
    mainProducts: '', mainMarkets: '', mainCompetitors: '', mainSuppliers: '',
    purchasedProducts: '', certifications: '', csrActions: '',
    salesYear1: '', salesYear2: '', salesYear3: '',
    assetsYear1: '', assetsYear2: '', assetsYear3: '',
    financialObligations: '', rawMaterialInventory: '', finishedProductInventory: '',
    completedBy: '', completedByPhone: ''
  });

  const initialAnswers = useMemo(() => {
    const emptyAnswers: Partial<DiagnosisAnswers> = {};
    for (const areaKey in DIAGNOSIS_QUESTIONS) {
        const key = areaKey as DiagnosisArea;
        emptyAnswers[key] = Array.from({ length: DIAGNOSIS_QUESTIONS[key].questions.length }, () => ({ level: 0, opportunity: '' }));
    }
    return emptyAnswers as DiagnosisAnswers;
  }, []);

  const [answers, setAnswers] = useState<DiagnosisAnswers>(initialAnswers);

  const renderPage = () => {
    switch (activePage) {
      case Page.Instructions:
        return <InstructionsPage />;
      case Page.Profile:
        return <ProfilePage profile={profile} setProfile={setProfile} />;
      case Page.Diagnosis:
        return <DiagnosisPage answers={answers} setAnswers={setAnswers} setIsDiagnosisComplete={setIsDiagnosisComplete} setActivePage={setActivePage} />;
      case Page.Results:
        return <ResultsPage answers={answers} />;
      default:
        return <InstructionsPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage={activePage} setActivePage={setActivePage} isDiagnosisComplete={isDiagnosisComplete} />
      <main className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Situational Analysis Tool. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
