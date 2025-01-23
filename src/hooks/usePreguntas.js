// hooks/usePreguntas.js
import { apiFetch } from "../api/apiFetch";

export const usePreguntas = () => {
  const fetchPreguntas = async () => {
    return await apiFetch('/api/preguntas');
  };

  const crearPregunta = async (pregunta) => {
    return await apiFetch('/api/preguntas', {
      method: 'POST',
      body: JSON.stringify(pregunta),
    });
  };

  const obtenerPregunta = async (id) => {
    return await apiFetch(`/api/preguntas/${id}`);
  };

  const editarPregunta = async (id, form) => {
    return await apiFetch(`/api/preguntas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
    });
  };

  const removePregunta = async (id) => {
    return await apiFetch(`/api/preguntas/${id}`, { method: 'DELETE' });
  };

  return {
    fetchPreguntas,
    crearPregunta,
    obtenerPregunta,
    editarPregunta,
    removePregunta
  };
};