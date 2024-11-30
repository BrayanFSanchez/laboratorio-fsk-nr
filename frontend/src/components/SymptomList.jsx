

export const SymptomList = ({ symptoms, onAdd, onEdit, onDelete }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Síntomas</h2>
      <ul className="bg-gray-100 p-4 rounded-md shadow-md">
        {symptoms.map((symptom) => (
          <li
            key={symptom.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <strong>{symptom.name}</strong>: {symptom.description}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(symptom)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(symptom.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={onAdd}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar Síntoma
      </button>
    </div>
  )
}
