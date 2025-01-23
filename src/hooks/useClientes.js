import { apiFetch } from "../api/apiFetch";

export const useClientes = () => {
  const fetchClientes = async () => {
    return await apiFetch('/api/clientes');
  };

  const crearCliente = async (cliente) => {
    return await apiFetch('/api/clientes', {
      method: 'POST',
      body: JSON.stringify(cliente),
    });
  };

  const obtenerCliente = async (id) => {
    return await apiFetch(`/api/clientes/${id}`);
  };

  const editarCliente = async (id, form) => {
    return await apiFetch(`/api/clientes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
    });
  };

  const removeCliente = async (id) => {
    return await apiFetch(`/api/clientes/${id}`, { method: 'DELETE' });
  };

  return {
    fetchClientes,
    crearCliente,
    obtenerCliente,
    editarCliente,
    removeCliente
  };
};