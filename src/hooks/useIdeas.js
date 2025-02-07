// hooks/useIdeas.js
import { apiFetch } from '../api/apiFetch.js';
import { useState, useEffect } from 'react';

export const useIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchIdeas = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch('/ideas');
      setIdeas(data);
    } catch (err) {
      setError('Error al obtener las ideas');
    } finally {
      setCargando(false);
    }
  };

  const crearIdea = async (idea) => {
    setCargando(true);
    setError(null);
    try {
      const nuevaIdea = await apiFetch('/ideas', {
        method: 'POST',
        body: JSON.stringify(idea),
      });
      setIdeas((prev) => [...prev, nuevaIdea]);
    } catch (err) {
      setError('Error al crear la idea');
    } finally {
      setCargando(false);
    }
  };

  const obtenerIdea = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const idea = await apiFetch(`/ideas/${id}`);
      return { idea, cargando: false, error: null };
    } catch (err) {
      setError('Error al obtener la idea');
      return { idea: null, cargando: false, error: 'Error al obtener la idea' };
    } finally {
      setCargando(false);
    }
  };

  const removeIdea = async (id) => {
    setCargando(true);
    try {
      await apiFetch(`/ideas/${id}`, { method: 'DELETE' });
      setIdeas((prev) => prev.filter((idea) => idea.id !== id));
    } catch (err) {
      setError('Error al eliminar la idea');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return {
    ideas,
    cargando,
    error,
    fetchIdeas,
    crearIdea,
    obtenerIdea,
    removeIdea,
  };
};