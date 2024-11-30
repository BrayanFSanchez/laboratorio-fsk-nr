import api from "./axiosInstance";

const relationApi = {
  addSymptomToPatient: async (patientId, symptomId) => {
    const response = await api.post("/relations/add-symptom", {
      patientId,
      symptomId,
    });
    return response.data;
  },
  removeSymptomFromPatient: async (patientId, symptomId) => {
    const response = await api.post("/relations/remove-symptom", {
      patientId,
      symptomId,
    });
    return response.data;
  },
  getPatientWithSymptoms: async (id) => {
    const response = await api.get(`/patients/${id}/symptoms`);
    return response.data;
  },
};

export default relationApi;