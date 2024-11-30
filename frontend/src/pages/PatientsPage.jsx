import { useState, useEffect } from "react";
import { PatientTable } from "../components/PatientTable";
import { Modal } from "../components/Modal";
import { FormPatient } from "../components/FormPatient";
import { getPatients, createPatient, updatePatient, deletePatient } from "../services/api";

export const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const data = await getPatients();
    setPatients(data);
  };

  const handleAdd = () => {
    setCurrentPatient(null);
    setIsModalOpen(true);
  };

  const handleEdit = (patient) => {
    setCurrentPatient(patient);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deletePatient(id);
    loadPatients();
  };

  const handleSubmit = async (formData) => {
    if (currentPatient) {
      await updatePatient(currentPatient.id, formData);
    } else {
      await createPatient(formData);
    }
    setIsModalOpen(false);
    loadPatients();
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
      </Modal>
    </div>
  )
}
