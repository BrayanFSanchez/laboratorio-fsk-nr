const API_URL = "http://localhost:5000";

export const getPatients = async () => {
  const response = await fetch(`${API_URL}/patients`);
  return response.json();
};

export const createPatient = async (data) => {
  await fetch(`${API_URL}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updatePatient = async (id, data) => {
  await fetch(`${API_URL}/patients/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deletePatient = async (id) => {
  await fetch(`${API_URL}/patients/${id}`, { method: "DELETE" });
};