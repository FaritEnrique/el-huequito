import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { useMensajes } from '../hooks/useMensajes'
import Swal from 'sweetalert2';

const MensajeItem = ({ mensaje, onDelete, onSendWhatsApp, onSendEmail, onResponseChange }) => {
    const [localResponse, setLocalResponse] = useState(mensaje.response || '');

    const handleResponseChange = (e) => {
        const newResponse = e.target.value;
        setLocalResponse(newResponse);
        onResponseChange(mensaje.id, newResponse);
    };

    return (
        <div className="w-full mx-auto ring-2 ring-sky-400 space-y-2 rounded-xl p-4">
            <div className="flex flex-wrap justify-between items-center md:text-xl">
                <p><strong>Nombre:</strong> {mensaje.nombre}</p>
                <p><strong>Celular:</strong> {mensaje.celular}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center md:text-xl">
                <p><strong>Correo:</strong> {mensaje.correo}</p>
                <p><strong>Comunicación:</strong> {mensaje.comunicacion}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center md:text-xl">
                <p><strong>Fecha:</strong> {mensaje.fecha}</p>
            </div>
            <div className="mt-4">
                <textarea
                    name="responseMessage"
                    id="responseMessage"
                    className="w-full bg-white rounded-xl p-2 ring-2 ring-black"
                    value={localResponse}
                    onChange={handleResponseChange}
                    placeholder="Escribe tu respuesta aquí..."
                />
            </div>
            <div className="mt-4 flex justify-end">
                <button onClick={() => onSendEmail(mensaje)} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                    <BiMailSend size={20} /> Enviar Email
                </button>
                <button onClick={() => onSendWhatsApp(mensaje)} className="ml-4 text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
                    <FaWhatsapp size={20} /> Enviar WhatsApp
                </button>
                <button onClick={() => onDelete(mensaje.id)} className="ml-4 text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
                    <FaRegTrashAlt size={20} /> Eliminar
                </button>
            </div>
        </div>
    );
};

const Mensajes = () => {
    const { fetchMensajes, removeMensaje } = useMensajes()
    const [mensajes, setMensajes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadMensajes = async () => {
            setIsLoading(true);
            const fetchedMensajes = await fetchMensajes();
            setMensajes(fetchedMensajes);
            setIsLoading(false);
        };

        loadMensajes();
    }, [fetchMensajes]);

    const handleDelete = async (id) => {
        try {
            await removeMensaje(id);
            Swal.fire({
                title: 'Mensaje Eliminado',
                text: 'El mensaje ha sido eliminado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            setMensajes((prev) => prev.filter((mensaje) => mensaje.id !== id));
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'No se pudo eliminar el mensaje. Intente nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    return (
        <div className="space-y-4">
            {isLoading ? (
                <div>Cargando mensajes...</div>
            ) : (
                mensajes.map((mensaje) => (
                    <MensajeItem
                        key={mensaje.id}
                        mensaje={{
                            ...mensaje,
                            fecha: mensaje.fecha.toLocaleString('es-ES'),
                        }}
                        onDelete={handleDelete}
                        onSendWhatsApp={() => {}}
                        onSendEmail={() => {}}
                        onResponseChange={() => {}}
                    />
                ))
            )}
        </div>
    );
};

export default Mensajes;