// hooks/usePreguntas.js
import { apiFetch } from '../api/apiFetch.js'
import { useState, useEffect } from 'react';

export const usePreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchPreguntas = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch('preguntas');
      setPreguntas(data);
    } catch (err) {
      setError("Error al obtener las preguntas");
    } finally {
      setCargando(false);
    }
  };

  const crearPregunta = async (pregunta) => {
    setCargando(true);
    setError(null);
    try {
      const nuevaPregunta = await apiFetch('preguntas', {
        method: 'POST',
        body: JSON.stringify(pregunta),
      });
      setPreguntas((prev) => [...prev, nuevaPregunta]);
    } catch (err) {
      setError("Error al crear la pregunta");
    } finally {
      setCargando(false);
    }
  };

  const obtenerPregunta = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const pregunta = await apiFetch(`preguntas/${id}`);
      return { pregunta, cargando: false, error: null };
    } catch (err) {
      setError("Error al obtener la pregunta");
      return { pregunta: null, cargando: false, error: "Error al obtener la pregunta" };
    } finally {
      setCargando(false);
    }
  };

  const removePregunta = async (id) => {
    setCargando(true);
    try {
      await apiFetch(`preguntas/${id}`, { method: 'DELETE' });
      setPreguntas((prev) => prev.filter((pregunta) => pregunta.id !== id));
    } catch (err) {
      setError("Error al eliminar la pregunta");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchPreguntas();
  }, []);

  return {
    preguntas,
    cargando,
    error,
    fetchPreguntas,
    crearPregunta,
    obtenerPregunta,
    removePregunta
  };
};