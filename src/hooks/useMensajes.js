// hooks/useMensajes.js
import { apiFetch } from "../api/apiFetch";

export const useMensajes = () => {
  const fetchMensajes = async () => {
    return await apiFetch('/api/mensajes');
  };

  const crearMensaje = async (mensaje) => {
    return await apiFetch('/api/mensajes', {
      method: 'POST',
      body: JSON.stringify(mensaje),
    });
  };

  const obtenerMensaje = async (id) => {
    return await apiFetch(`/api/mensajes/${id}`);
  };

  const removeMensaje = async (id) => {
    return await apiFetch(`/api/mensajes/${id}`, { method: 'DELETE' });
  };

  return {
    fetchMensajes,
    crearMensaje,
    obtenerMensaje,
    removeMensaje
  };
};