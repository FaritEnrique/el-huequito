// hooks/useIdeas.js
import { apiFetch } from "../api/apiFetch";

export const useIdeas = () => {
  const fetchIdeas = async () => {
    return await apiFetch('/api/ideas');
  };

  const crearIdea = async (idea) => {
    return await apiFetch('/api/ideas', {
      method: 'POST',
      body: JSON.stringify(idea),
    });
  };

  const obtenerIdea = async (id) => {
    return await apiFetch(`/api/ideas/${id}`);
  };

  const editarIdea = async (id, form) => {
    return await apiFetch(`/api/ideas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
    });
  };

  const removeIdea = async (id) => {
    return await apiFetch(`/api/ideas/${id}`, { method: 'DELETE' });
  };

  return {
    fetchIdeas,
    crearIdea,
    obtenerIdea,
    editarIdea,
    removeIdea
  };
};