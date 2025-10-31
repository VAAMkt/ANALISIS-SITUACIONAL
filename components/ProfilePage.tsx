
import React from 'react';
import { BusinessProfile } from '../types';

interface ProfilePageProps {
  profile: BusinessProfile;
  setProfile: React.Dispatch<React.SetStateAction<BusinessProfile>>;
}

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-lg font-semibold text-white bg-blue-800 p-2 my-4 rounded-t-md">{title}</h3>
);

const InputField: React.FC<{ label: string; name: keyof BusinessProfile; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string;}> = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
);

const TextareaField: React.FC<{ label: string; name: keyof BusinessProfile; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number;}> = ({ label, name, value, onChange, rows = 3 }) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  );

const ProfilePage: React.FC<ProfilePageProps> = ({ profile, setProfile }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('workModality.')) {
        const key = name.split('.')[1] as keyof BusinessProfile['workModality'];
        setProfile(prev => ({ ...prev, workModality: { ...prev.workModality, [key]: value }}));
    } else {
        setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-700 pb-2 mb-6">
        PERFIL EMPRESARIAL
      </h2>
      <div className="p-2 bg-blue-50 border-l-4 border-blue-500 text-blue-800 mb-6">
        <p><strong>Instrucciones de Diligenciamiento:</strong> Le recomendamos leer atentamente las siguientes instrucciones antes de iniciar el diligenciamiento de este formulario: Diligenciar todos los campos, no modificar columnas, filas o tamaño de los campos, en aquellas preguntas que no aplican para la empresa rellenar con N/A.</p>
      </div>

      <form className="space-y-6">
        <SectionTitle title="DATOS DE LA EMPRESA" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="EMPRESA / RAZÓN SOCIAL" name="companyName" value={profile.companyName} onChange={handleChange} />
          <InputField label="RUT" name="rut" value={profile.rut} onChange={handleChange} />
          <InputField label="DIRECCIÓN" name="address" value={profile.address} onChange={handleChange} />
          <InputField label="CIUDAD" name="city" value={profile.city} onChange={handleChange} />
          <InputField label="DEPARTAMENTO" name="department" value={profile.department} onChange={handleChange} />
          <InputField label="PAGINA WEB / REDES" name="website" value={profile.website} onChange={handleChange} />
        </div>

        <SectionTitle title="DATOS REPRESENTANTE LEGAL DE LA EMPRESA" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="NOMBRE" name="legalRepName" value={profile.legalRepName} onChange={handleChange} />
            <InputField label="CÉDULA" name="legalRepId" value={profile.legalRepId} onChange={handleChange} />
            <InputField label="TELEFONO" name="legalRepPhone" value={profile.legalRepPhone} onChange={handleChange} />
            <InputField label="CORREO ELECTRONICO" name="legalRepEmail" value={profile.legalRepEmail} onChange={handleChange} type="email"/>
        </div>

        <SectionTitle title="DATOS PERSONA CONTACTO PARA EL PROGRAMA" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="NOMBRE" name="contactName" value={profile.contactName} onChange={handleChange} />
            <InputField label="CÉDULA" name="contactId" value={profile.contactId} onChange={handleChange} />
            <InputField label="TELEFONO" name="contactPhone" value={profile.contactPhone} onChange={handleChange} />
            <InputField label="CORREO ELECTRONICO" name="contactEmail" value={profile.contactEmail} onChange={handleChange} type="email"/>
        </div>

        <SectionTitle title="DESCRIPCIÓN DE LA EMPRESA" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <TextareaField label="HISTORIA DE LOS INICIOS Y BREVE DESCRIPCIÓN DE LAS ACTIVIDADES QUE LA EMPRESA REALIZA HOY" name="history" value={profile.history} onChange={handleChange} rows={4} />
          </div>
          <InputField label="SECTOR" name="sector" value={profile.sector} onChange={handleChange} />
          <InputField label="SUBSECTOR" name="subsector" value={profile.subsector} onChange={handleChange} />
          <InputField label="ACTIVIDAD ECONOMICA PRINCIPAL / CIIU" name="economicActivity" value={profile.economicActivity} onChange={handleChange} />
          <InputField label="AÑOS DE FUNCIONAMIENTO" name="yearsInOperation" value={profile.yearsInOperation} onChange={handleChange} type="number"/>
           <div>
              <label htmlFor="companyClassification" className="mb-1 text-sm font-medium text-gray-700 block">CLASIFICACIÓN EMPRESA</label>
              <select id="companyClassification" name="companyClassification" value={profile.companyClassification} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="">Seleccione...</option>
                  <option value="MICRO">MICRO</option>
                  <option value="PEQUEÑA">PEQUEÑA</option>
                  <option value="MEDIANA">MEDIANA</option>
                  <option value="GRANDE">GRANDE</option>
              </select>
           </div>
        </div>

        <SectionTitle title="PROPUESTA DE VALOR DE LA EMPRESA" />
        <TextareaField label="" name="valueProposition" value={profile.valueProposition} onChange={handleChange} />

        <SectionTitle title="DESCRIPCIÓN DE LA INFRAESTRUCTURA Y LA CAPACIDAD DE PRODUCCIÓN / SERVICIO / COMERCIALIZACIÓN" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="No. TOTAL EMPLEADOS" name="totalEmployees" value={profile.totalEmployees} onChange={handleChange} type="number" />
            <InputField label="No. DE SEDES" name="numberOfSites" value={profile.numberOfSites} onChange={handleChange} type="number" />
        </div>
        <div>
            <label className="mb-1 text-sm font-medium text-gray-700 block">% DE TRABAJADORES POR MODALIDAD DE TRABAJO</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded-md">
                <InputField label="PRESENCIAL (%)" name="workModality.presential" value={profile.workModality.presential} onChange={handleChange} type="number" />
                <InputField label="TELETRABAJO (%)" name="workModality.remote" value={profile.workModality.remote} onChange={handleChange} type="number" />
                <InputField label="HIBRIDO (%)" name="workModality.hybrid" value={profile.workModality.hybrid} onChange={handleChange} type="number" />
            </div>
        </div>
         <div className="grid grid-cols-1 gap-4">
             <TextareaField label="PRINCIPALES PRODUCTOS / SERVICIOS" name="mainProducts" value={profile.mainProducts} onChange={handleChange} />
             <TextareaField label="PRINCIPALES MERCADOS" name="mainMarkets" value={profile.mainMarkets} onChange={handleChange} />
             <TextareaField label="PRINCIPALES COMPETIDORES" name="mainCompetitors" value={profile.mainCompetitors} onChange={handleChange} />
             <TextareaField label="PRINCIPALES PROVEEDORES" name="mainSuppliers" value={profile.mainSuppliers} onChange={handleChange} />
             <TextareaField label="PRINCIPALES PRODUCTOS O SERVICIOS COMPRADOS" name="purchasedProducts" value={profile.purchasedProducts} onChange={handleChange} />
             <TextareaField label="REGISTROS / CERTIFICACIONES / PATENTES" name="certifications" value={profile.certifications} onChange={handleChange} />
             <TextareaField label="ACCIONES DE RESPONSABILIDAD SOCIAL EMPRESARIAL" name="csrActions" value={profile.csrActions} onChange={handleChange} />
         </div>

        <SectionTitle title="INFORMACIÓN FINANCIERA" />
         <div className="space-y-4">
            <div>
                <label className="mb-1 text-sm font-medium text-gray-700 block">VENTAS DE LOS 3 ÚLTIMOS AÑOS</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded-md">
                    <InputField label="AÑO 1 (2021)" name="salesYear1" value={profile.salesYear1} onChange={handleChange} type="number" />
                    <InputField label="AÑO 2 (2022)" name="salesYear2" value={profile.salesYear2} onChange={handleChange} type="number" />
                    <InputField label="AÑO 3 (2023)" name="salesYear3" value={profile.salesYear3} onChange={handleChange} type="number" />
                </div>
            </div>
            <div>
                <label className="mb-1 text-sm font-medium text-gray-700 block">VALOR ACTIVOS DE LOS ÚLTIMOS 3 AÑOS</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded-md">
                    <InputField label="AÑO 1 (2021)" name="assetsYear1" value={profile.assetsYear1} onChange={handleChange} type="number" />
                    <InputField label="AÑO 2 (2022)" name="assetsYear2" value={profile.assetsYear2} onChange={handleChange} type="number" />
                    <InputField label="AÑO 3 (2023)" name="assetsYear3" value={profile.assetsYear3} onChange={handleChange} type="number" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField label="VALOR OBLIGACIONES FINANCIERAS" name="financialObligations" value={profile.financialObligations} onChange={handleChange} type="number" />
                <InputField label="VALOR INVENTARIO MATERIAS PRIMAS" name="rawMaterialInventory" value={profile.rawMaterialInventory} onChange={handleChange} type="number" />
                <InputField label="VALOR INVENTARIOS PRODUCTO TERMINADO" name="finishedProductInventory" value={profile.finishedProductInventory} onChange={handleChange} type="number" />
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <InputField label="DILIGENCIADO POR" name="completedBy" value={profile.completedBy} onChange={handleChange} />
            <InputField label="TELEFONO" name="completedByPhone" value={profile.completedByPhone} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
