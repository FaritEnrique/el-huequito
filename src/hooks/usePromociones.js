// hooks/usePromociones.js
import { apiFetch } from "../api/apiFetch";

export const usePromociones = () => {
  const fetchPromociones = async () => {
    return await apiFetch('/api/promociones');
  };

  const crearPromocion = async (promocion) => {
    return await apiFetch('/api/promociones', {
      method: 'POST',
      body: JSON.stringify(promocion),
    });
  };

  const obtenerPromocion = async (id) => {
    return await apiFetch(`/api/promociones/${id}`);
  };

  const editarPromocion = async (id, form) => {
    return await apiFetch(`/api/promociones/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
    });
  };

  const removePromocion = async (id) => {
    return await apiFetch(`/api/promociones/${id}`, { method: 'DELETE' });
  };

  return {
    fetchPromociones,
    crearPromocion,
    obtenerPromocion,
    editarPromocion,
    removePromocion
  };
};