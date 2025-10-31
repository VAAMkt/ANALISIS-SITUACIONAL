
import { GoogleGenAI } from "@google/genai";
import { DiagnosisAnswers, Answer } from '../types';
import { DIAGNOSIS_QUESTIONS, IMPLEMENTATION_LEVELS } from "../constants";

const formatAnswersForPrompt = (answers: DiagnosisAnswers): string => {
  let formattedString = "";
  for (const areaKey in answers) {
    const area = DIAGNOSIS_QUESTIONS[areaKey as keyof typeof DIAGNOSIS_QUESTIONS];
    formattedString += `### ${area.title}\n\n`;
    answers[areaKey as keyof typeof answers].forEach((answer: Answer, index: number) => {
      const question = area.questions[index];
      const levelLabel = IMPLEMENTATION_LEVELS.find(l => l.value === answer.level)?.label || 'No respondido';
      formattedString += `${index + 1}. ${question}\n`;
      formattedString += `   - **Nivel:** ${levelLabel}\n`;
      if (answer.opportunity) {
        formattedString += `   - **Oportunidad mencionada por el usuario:** ${answer.opportunity}\n`;
      }
    });
    formattedString += "\n---\n\n";
  }
  return formattedString;
};

export const generateAnalysis = async (answers: DiagnosisAnswers): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const formattedAnswers = formatAnswersForPrompt(answers);

    const prompt = `
      Eres un consultor de gestión experto. Tu tarea es analizar las respuestas de un autodiagnóstico empresarial y proporcionar un informe detallado.

      **Instrucciones:**
      1.  **Diagnóstico por Área:** Para cada una de las 6 áreas de gestión, evalúa el nivel de madurez general basándote en las respuestas del usuario.
      2.  **Oportunidades de Mejora (Por Área):** Identifica y lista de 3 a 5 **Oportunidades de Mejora** específicas por cada área de gestión. Estas deben reflejar un déficit en el nivel de implementación (por ejemplo, si el nivel es "Básico" o "En Desarrollo").
      3.  **Plan de Acción Detallado:** Para cada Oportunidad de Mejora identificada, genera un **Plan de Acción** que incluya:
          *   **Acción:** Nombre conciso de la tarea a realizar.
          *   **Descripción:** Detalle de los pasos o entregables clave.
          *   **Área Responsable:** El departamento o rol interno de la empresa que debe liderarlo.
          *   **Meta/Indicador:** Un valor medible para saber que la acción fue exitosa.
          *   **Línea de Intervención:** Clasifica la acción en una de las 6 áreas de gestión.

      **Parámetros de Evaluación (Para tu referencia):**
      - **1- Básico:** No formal o en etapas iniciales. Necesidad de implementar procesos desde cero.
      - **2- En Desarrollo:** Implementación temprana, procesos en desarrollo. Necesidad de formalizar y estandarizar procesos.
      - **3- Estructurado:** Bien definido y documentado, estandarizado. Enfocarse en seguimiento y optimización.
      - **4- Implementado:** Gestionado efectivamente, seguimiento constante. Enfocarse en mejora continua e indicadores.
      - **5- Optimizado:** Completamente integrado y optimizado constantemente. Oportunidades muy específicas y avanzadas.

      **Formato de Salida Requerido (Usa Markdown estricto):**
      ## 📊 Diagnóstico General
      [Resumen conciso del estado general de la empresa, destacando las áreas más fuertes y más débiles.]
      ---
      ## 🚀 Planes de Acción por Área de Gestión
      ### 1. GESTIÓN ESTRATÉGICA
      **Oportunidad de Mejora 1:** [Nombre de la oportunidad]
      * **Acción:** [Acción a realizar]
      * **Descripción:** [Detalle]
      * **Área Responsable:** [Responsable]
      * **Meta/Indicador:** [Indicador de éxito]
      * **Línea de Intervención:** GESTIÓN ESTRATÉGICA
      (Repite para más oportunidades)
      ### 2. GESTIÓN FINANCIERA
      (Sigue el mismo formato)
      (Continúa para las 6 áreas)

      ---

      **DATOS DEL AUTODIAGNÓSTICO DEL USUARIO:**

      ${formattedAnswers}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating analysis:", error);
    return "Ocurrió un error al generar el análisis. Por favor, revisa la consola para más detalles y asegúrate de que la clave de API sea válida.";
  }
};
