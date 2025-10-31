
export enum Page {
  Instructions = 'INSTRUCTIONS',
  Profile = 'PROFILE',
  Diagnosis = 'DIAGNOSIS',
  Results = 'RESULTS'
}

export enum DiagnosisArea {
  Strategic = 'STRATEGIC',
  Financial = 'FINANCIAL',
  Commercial = 'COMMERCIAL',
  HR = 'HR',
  Operations = 'OPERATIONS',
  Innovation = 'INNOVATION'
}

export interface BusinessProfile {
  companyName: string;
  rut: string;
  address: string;
  city: string;
  department: string;
  website: string;
  legalRepName: string;
  legalRepId: string;
  legalRepPhone: string;
  legalRepEmail: string;
  contactName: string;
  contactId: string;
  contactPhone: string;
  contactEmail: string;
  history: string;
  sector: string;
  subsector: string;
  economicActivity: string;
  companyClassification: 'MICRO' | 'PEQUEÑA' | 'MEDIANA' | 'GRANDE' | '';
  yearsInOperation: string;
  valueProposition: string;
  totalEmployees: string;
  numberOfSites: string;
  workModality: {
    presential: string;
    remote: string;
    hybrid: string;
  };
  mainProducts: string;
  mainMarkets: string;
  mainCompetitors: string;
  mainSuppliers: string;
  purchasedProducts: string;
  certifications: string;
  csrActions: string;
  salesYear1: string;
  salesYear2: string;
  salesYear3: string;
  assetsYear1: string;
  assetsYear2: string;
  assetsYear3: string;
  financialObligations: string;
  rawMaterialInventory: string;
  finishedProductInventory: string;
  completedBy: string;
  completedByPhone: string;
}

export interface Answer {
  level: number;
  opportunity: string;
}

export type DiagnosisAnswers = {
  [key in DiagnosisArea]: Answer[];
};
