import api from "./axiosInstance";

const patientApi = {
    getPatients: async () => {
      const response = await api.get("/patients");
      return response.data;
    },
    getPatientById: async (id) => {
      const response = await api.get(`/patients/${id}`);
      return response.data;
    },
    createPatient: async (data) => {
      const response = await api.post("/patients", data);
      return response.data;
    },
    updatePatient: async (id, data) => {
      const response = await api.put(`/patients/${id}`, data);
      return response.data;
    },
    deletePatient: async (id) => {
      const response = await api.delete(`/patients/${id}`);
      return response.data;
    },
  };
  
  export default patientApi;