
import { DiagnosisArea } from './types';

export const IMPLEMENTATION_LEVELS = [
  { value: 0, label: 'Seleccione...' },
  { value: 1, label: '1 - Nivel Básico' },
  { value: 2, label: '2 - En Desarrollo' },
  { value: 3, label: '3 - Estructurado' },
  { value: 4, label: '4 - Implementado' },
  { value: 5, label: '5 - Optimizado' },
];

export const LEVEL_DESCRIPTIONS = [
    {
        level: '1 - Nivel Básico',
        description: 'La empresa no tiene un programa de gestión formal o está en las primeras etapas de implementación. No hay una comprensión clara de los beneficios de un programa de gestión.',
        color: 'bg-red-500',
    },
    {
        level: '2 - En Desarrollo',
        description: 'La empresa ha comenzado a implementar un programa de gestión, pero todavía está en una etapa temprana. Los procesos están en desarrollo y la empresa está empezando a ver algunos beneficios.',
        color: 'bg-orange-500',
    },
    {
        level: '3 - Estructurado',
        description: 'La empresa tiene un programa de gestión bien definido y estructurado. Los procesos están documentados y estandarizados, la empresa está viendo beneficios significativos en términos de productividad.',
        color: 'bg-yellow-400',
    },
    {
        level: '4 - Implementado',
        description: 'La empresa tiene un programa de gestión bien definido, además lo está gestionando de manera efectiva. Hay un seguimiento constante, una mejora continua de los procesos, está viendo beneficios claros y medibles con indicadores definidos.',
        color: 'bg-lime-500',
    },
    {
        level: '5 - Optimizado',
        description: 'La empresa tiene un programa de gestión que está completamente integrado en el sistema de gestión. Los procesos se están optimizando constantemente y la empresa está obteniendo el máximo beneficio de su programa de gestión.',
        color: 'bg-green-600',
    },
];

export const DIAGNOSIS_QUESTIONS = {
  [DiagnosisArea.Strategic]: {
    title: 'GESTIÓN ESTRATÉGICA',
    questions: [
      '¿Realizan ejercicios de planeación estratégica donde definen sus metas a corto, mediano y largo plazo?',
      '¿Ha implementado alguna metodología que le permita hacer el seguimiento a los resultados e indicadores de la estrategia de la empresa?',
      '¿Define tareas para el logro de metas en los niveles estratégicos, tácticos y operacionales?',
      '¿Tienen implementado indicadores para medir y evaluar los resultados de la gestión de cada colaborador en los diferentes niveles de la empresa: Estratégico, táctico y operativo?',
      '¿Realiza el seguimiento a planes de acción para lograr las metas estratégicas?',
      '¿Realiza seguimiento periodico para analizar los resultados de la gestión en los diferentes procesos de la empresa?',
      '¿Tiene definido el modelo de negocio a traves del cual se generan los ingresos?',
      '¿Cuenta con alguna herramienta que le permita identificar lo que sucede en el entorno empresarial y su impacto en la empresa?',
      '¿Tiene definida la propuesta de valor que le permita tener una ventaja competitiva dentro del mercado?',
      '¿Dispone de un proceso para identificar y evaluar sus debilidades, oportunidades, fortalezas y amenazas en el entorno competitivo?',
    ],
  },
  [DiagnosisArea.Financial]: {
    title: 'GESTIÓN FINANCIERA',
    questions: [
      '¿Cuenta con un sistema contable y financiero donde se registren las operaciones de la empresa?',
      '¿Tiene una metodología de análisis financiero que le permita identificar las necesidades de flujo de caja y las variables que lo afectan?',
      '¿Realiza seguimiento a los resultados del EBITDA para la gestión financiera de la empresa?',
      '¿Cuenta con una metodología para calcular las necesidades de capital de trabajo requerido por la empresa para la operación del negocio?',
      '¿Tiene alguna metodología que le permita identificar los consumos por unidad de negocio, centros de costos, procesos, productos o línea de servicios?',
      '¿Gestiona la compra de bienes y/o servicios enfocándose en la optimización de los recursos teniendo en cuenta la calidad de los mismos?',
      '¿Cuenta con una metodología para analizar y definir precios, descuentos y márgenes de contribución por unidad de negocio, producto o línea de servicio?',
      '¿Realiza presupuestos de ingresos, costos, gastos, definidos mensualmente o por trimestres para el año fiscal que se está ejecutando?',
      '¿Hace seguimiento a la ejecución y cumplimiento de los presupuestos planeados?',
      '¿Hace seguimiento a la gestión financiera, incluyendo análisis de indicadores de resultados financieros?',
    ],
  },
  [DiagnosisArea.Commercial]: {
    title: 'GESTIÓN COMERCIAL & MERCADEO',
    questions: [
      '¿Tiene definido su cliente objetivo y sus segmentos de mercado?',
      '¿Tiene identificadas las necesidades y expectativas de sus clientes?',
      '¿Realiza la medición del nivel de satisfacción de sus clientes?',
      '¿Cuenta con un proceso para atender y solucionar las quejas y reclamos de los clientes?',
      '¿Ha implementado un sistema de Gestión de Relaciones con los Clientes (CRM)?',
      '¿Cuenta con un equipo Comercial, de Mercadeo y de Trade Marketing, con metas definidas y hace seguimiento a los resultados de su gestión?',
      '¿Realiza un plan estratégico de mercadeo anual y lleva un control periódico de sus metas?',
      '¿Tiene identificados estratégicamente los canales para distribuir sus productos y/o servicios a sus clientes?',
      '¿Cuenta con herramientas para medir la participación y posicionamiento en el mercado?',
      '¿Ha definido e implementado medios y herramientas para comunicar y promover sus servicios ante clientes potenciales (plan de medios)?',
    ],
  },
  [DiagnosisArea.HR]: {
    title: 'GESTIÓN DEL TALENTO HUMANO',
    questions: [
      '¿La empresa ha definido acciones específicas para atraer y retener el talento humano?',
      '¿Desarrolla estrategias para impulsar el liderazgo en los equipos de trabajo?',
      '¿La empresa tiene definidos los perfiles de cargos con sus requisitos, deberes y responsabilidades a desempeñar?',
      '¿Tiene implementado un plan de compensación y reconocimiento para los empleados?',
      '¿Tiene definida una metodología para desarrollar competencias específicas para cada cargo en sus equipos de trabajo?',
      '¿La empresa tiene implementado un programa de evaluación de desempeño?',
      '¿Identifica los cargos clave de su empresa e impulsa los planes de carrera?',
      '¿Tiene definido el proceso de talento humano (reclutamiento, selección, contratación, evaluación de personal y nómina)?',
      '¿Ha realizado la medición de cultura organizacional en su empresa?',
      '¿Desarrolla actividades que permitan brindar herramientas para gestionar y movilizar los cambios en los equipos de trabajo?',
    ],
  },
  [DiagnosisArea.Operations]: {
    title: 'GESTIÓN DE LAS OPERACIONES',
    questions: [
      '¿Cuenta con una metodología para medir la eficiencia en las operaciones?',
      '¿Realiza seguimiento a los resultados de las mediciones de la eficiencia y define planes de mejoramiento?',
      '¿Cuenta con un sistema de seguridad y salud en el trabajo (OHSAS)?',
      '¿Cuenta con un sistema de indicadores para hacer seguimiento al desempeño de los procesos?',
      '¿La empresa ha identificado el mapa de flujo de valor (VSM) de sus principales productos y/o servicios?',
      '¿Tiene una metodología para el seguimiento del mantenimiento de maquinarias, equipos y herramientas?',
      '¿Tiene implementadas metodologías para planear la demanda de productos y/o servicios?',
      '¿Cuenta con un sistema de gestión de la información para medir los resultados de sus procesos operativos?',
      '¿Cuenta con una metodología para calcular los niveles de inventario requeridos?',
      '¿Tiene definida la rutina en las operaciones de la empresa?',
    ],
  },
  [DiagnosisArea.Innovation]: {
    title: 'GESTIÓN DE LA INNOVACIÓN',
    questions: [
      '¿Implementa alguna metodología para la evaluación de ideas innovadoras que conduzcan al mejoramiento de los productos/servicios o procesos?',
      '¿La empresa ha desarrollado productos o servicios con características innovadoras y diferenciadoras con respecto a la competencia?',
      '¿Cuenta o ha participado en procesos relacionados con vigilancia tecnológica que le permita detectar el desarrollo de innovaciones en el sector relacionado con la empresa?',
      '¿Desarrolla procesos de investigación orientados al desarrollo y la innovación (I+D+i) ya sea de forma autónoma o con entidades especializadas?',
      '¿Realiza procesos de gestión del conocimiento que permitan el fortalecimiento de la experticia e intercambio de información en los equipos de trabajo?',
      '¿Cuenta con canales apropiados para recibir sugerencias, mejoras o recomendaciones de los clientes sobre los productos y servicios?',
      '¿La empresa ha implementado procesos de transformación digital que impacten de manera positiva la oferta de productos/servicios o procesos?',
      '¿Ha implementado herramientas de inteligencia artificial (IA) o de aprendizaje automático (Machine Learning) para agilizar procesos y/o mejorar la prestación de servicios?',
      '¿Ha desarrollado espacios que incentiven la innovación en los equipos de trabajo?',
      '¿Han realizado el registro de alguna patente de productos o servicios desarrollados por la empresa?',
    ],
  },
};
