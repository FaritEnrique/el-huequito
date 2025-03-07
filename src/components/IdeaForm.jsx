import React, { useState, useEffect } from 'react';

const IdeaForm = ({ onSave, onCancel, initialIdea = null }) => {
    const [foto, setFoto] = useState('');
    
    useEffect(() => {
        if (initialIdea) {
            setFoto(initialIdea.foto);
        }
    }, [initialIdea]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!foto.trim()) {
            alert("La imagen es obligatoria.");
            return;
        }
        onSave({ foto });
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{initialIdea ? "Editar Idea" : "Nueva Idea"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">URL de la Imagen:</label>
                    <input
                        type="text"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Ingrese el enlace de la imagen"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        {initialIdea ? "Actualizar" : "Guardar"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default IdeaForm;