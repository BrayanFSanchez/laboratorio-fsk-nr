

export const PatientRow = ({ patient, onEdit, onDelete }) => {
    return (
        <tr className="border-b">
            <td className="py-2 px-4">{patient.name}</td>
            <td className="py-2 px-4">{patient.lastName}</td>
            <td className="py-2 px-4">{new Date(patient.dateOfBirth).toLocaleDateString()}</td>
            <td className="py-2 px-4 flex gap-2">
                <button
                onClick={() => onEdit(patient)}
                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                >
                Editar
                </button>
                <button
                onClick={() => onDelete(patient._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                Borrar
                </button>
            </td>
        </tr>
    )
}
