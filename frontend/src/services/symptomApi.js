import api from "./axiosInstance";

const symptomApi = {
  getSymptoms: async () => {
    const response = await api.get("/symptoms");
    return response.data;
  },
  getSymptomById: async (id) => {
    const response = await api.get(`/symptoms/${id}`);
    return response.data;
  },
  createSymptom: async (data) => {
    const response = await api.post("/symptoms", data);
    return response.data;
  },
  updateSymptom: async (id, data) => {
    const response = await api.put(`/symptoms/${id}`, data);
    return response.data;
  },
  deleteSymptom: async (id) => {
    const response = await api.delete(`/symptoms/${id}`);
    return response.data;
  },
};

export default symptomApi;