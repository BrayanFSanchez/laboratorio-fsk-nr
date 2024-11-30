
export const Modal = ({ title, isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-md shadow-lg w-full max-w-lg p-6">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          {children}
          <button
            onClick={onClose}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    )
}
