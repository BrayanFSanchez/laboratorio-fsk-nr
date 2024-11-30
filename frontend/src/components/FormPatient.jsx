import React, { useState } from "react";

export const FormPatient = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      lastName: "",
      dateOfBirth: "",
      address: "",
      phones: [],
      emails: [],
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value.split(","),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Apellido</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Fecha de Nacimiento</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Dirección</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Teléfonos</label>
        <input
          type="text"
          name="phones"
          value={formData.phones.join(",")}
          onChange={(e) => handleArrayChange("phones", e.target.value)}
          placeholder="Ej: 123456789,987654321"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Emails</label>
        <input
          type="text"
          name="emails"
          value={formData.emails.join(",")}
          onChange={(e) => handleArrayChange("emails", e.target.value)}
          placeholder="Ej: ejemplo@mail.com,otro@mail.com"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Guardar
      </button>
    </form>
  );
};