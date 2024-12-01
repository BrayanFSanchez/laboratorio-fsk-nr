import { PatientRow } from '../components/PatientRow';

export const PatientTable = ({ patients, onEdit, onDelete }) => {
    return (
        <table className="w-full table-auto border-collapse shadow-md rounded-md">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="py-2 px-4">Nombre</th>
                    <th className="py-2 px-4">Apellido</th>
                    <th className="py-2 px-4">Fecha de Nacimiento</th>
                    <th className="py-2 px-4">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient) => (
                <PatientRow
                    key={patient._id}
                    patient={patient}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
                ))}
            </tbody>
        </table>
    )
}
