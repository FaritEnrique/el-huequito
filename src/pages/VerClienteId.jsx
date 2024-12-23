import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useElHuequito from '../hooks/useElHuequito';
import Swal from 'sweetalert2';

const VerClienteId = () => {
    const { id } = useParams();
    const { obtenerCliente, editarCliente } = useElHuequito();

    const [cliente, setCliente] = useState({
        dni: '',
        name: '',
        direccion: '',
        celular: '',
        correo: '',
        condicion: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        obtenerCliente(id)
            .then(data => {
                setCliente(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al obtener Cliente", error);
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo cargar la información del cliente.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSave = async () => {
        try {
            await editarCliente(cliente, id);
            Swal.fire({
                title: 'Éxito',
                text: 'Cliente actualizado con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            setIsEditing(false);
        } catch (error) {
            console.error("Error al actualizar cliente", error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al actualizar el cliente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <div className="loader animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16 mx-auto"></div>
                    <p className="mt-4 text-lg font-semibold">Cargando información...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 lg:w-1/2 w-full">
                <h1 className="text-2xl font-bold text-blue-700 mb-6">Detalle del Cliente</h1>
                {/* Información de cliente */}
                {['dni', 'name', 'direccion', 'celular', 'correo'].map((field, index) => (
                    <div className="mb-4" key={index}>
                        <label
                            htmlFor={field}
                            className="block text-sm font-semibold text-gray-700"
                        >
                            {field === 'name' ? 'Nombre' : field[0].toUpperCase() + field.slice(1)}
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name={field}
                                value={cliente[field] || ''}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ) : (
                            <div className="mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
                                {cliente[field] || 'No especificado'}
                            </div>
                        )}
                    </div>
                ))}

                {/* Campo de condición */}
                <div className="mb-4">
                    <label
                        htmlFor="condicion"
                        className="block text-sm font-semibold text-gray-700"
                    >
                        Condición
                    </label>
                    {isEditing ? (
                        <select
                            name="condicion"
                            value={cliente.condicion || ''}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Propietario">Dueño de Obra</option>
                            <option value="Pintor">Pintor</option>
                            <option value="Maestro">Maestro de Obra</option>
                        </select>
                    ) : (
                        <div className="mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
                            {cliente.condicion || 'No especificado'}
                        </div>
                    )}
                </div>

                {/* Botones */}
                <div className="flex justify-between items-center mt-6">
                    <Link to="/admin">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition-all duration-200">
                            Volver
                        </button>
                    </Link>
                    {isEditing ? (
                        <button
                            onClick={handleSave}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition-all duration-200"
                        >
                            Guardar
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition-all duration-200"
                        >
                            Editar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VerClienteId;