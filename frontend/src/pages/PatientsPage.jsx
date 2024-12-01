import { useState, useEffect } from "react";
import { PatientTable } from "../components/PatientTable";
import { Modal } from "../components/Modal";
import { FormPatient } from "../components/FormPatient";

import patientApi from "../services/patientApi";
import relationApi from "../services/relationApi";

export const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const fetchPatients = async () => {
      try {
        const dataPatients = await patientApi.getPatients();
        setPatients(dataPatients);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  };

  const handleAdd = () => {
    setCurrentPatient(null);
    setSymptoms([]);
    setIsModalOpen(true);
  };

  const handleEdit = async (patient) => {
    try {
      const patientWithSymptoms = await relationApi.getPatientWithSymptoms(patient._id);
      setCurrentPatient(patientWithSymptoms);
      setSymptoms(patientWithSymptoms.symptoms || []);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching patient symptoms:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await patientApi.deletePatient(id);
      loadPatients();
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (currentPatient) {
        await patientApi.updatePatient(currentPatient._id, formData);
      } else {
        await patientApi.createPatient(formData);
      }
      setIsModalOpen(false);
      loadPatients();
    } catch (error) {
      console.error("Error submitting patient:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Pacientes</h1>
      <button
        onClick={handleAdd}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Agregar Paciente
      </button>
      <PatientTable
        patients={patients}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        title={currentPatient ? "Editar Paciente" : "Agregar Paciente"}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <FormPatient
          initialData={currentPatient}
          onSubmit={handleSubmit}
        />
        {currentPatient && symptoms.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Síntomas</h3>
            <ul className="list-disc pl-5">
              {symptoms.map((symptom, index) => (
                <li key={index}>
                  <strong>{symptom.nombre}:</strong> {symptom.description}
                </li>
              ))}
            </ul>
          </div>
        )}

      </Modal>
    </div>
  )
}
