// hooks/usePreguntas.js
import { useState, useEffect } from "react";
import { apiFetch } from "../api/apiFetch.js";

const usePreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // 🟢 Obtener todas las preguntas
  const fetchPreguntas = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch("preguntas");
      setPreguntas(data || []);
      return data; // 🔥 Ahora sí devuelve datos
    } catch (err) {
      setError("Error al obtener las preguntas");
      return null;
    } finally {
      setCargando(false);
    }
  };

  // 🟢 Crear nueva pregunta
  const crearPregunta = async (pregunta) => {
    setCargando(true);
    setError(null);
    try {
      const nuevaPregunta = await apiFetch("preguntas", {
        method: "POST",
        body: JSON.stringify(pregunta),
      });
      setPreguntas((prev) => [...prev, nuevaPregunta]);
      return nuevaPregunta; // 🔥 Retorna la pregunta creada
    } catch (err) {
      setError("Error al crear la pregunta");
      return null;
    } finally {
      setCargando(false);
    }
  };

  // 🟢 Obtener una pregunta específica por ID
  const obtenerPregunta = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const pregunta = await apiFetch(`preguntas/${id}`);
      return pregunta;
    } catch (err) {
      setError("Error al obtener la pregunta");
      return null;
    } finally {
      setCargando(false);
    }
  };

  // 🟢 Eliminar una pregunta por ID
  const removePregunta = async (id) => {
    setCargando(true);
    setError(null);
    try {
      await apiFetch(`preguntas/${id}`, { method: "DELETE" });
      setPreguntas((prev) => prev.filter((p) => p.id !== id));
      return true; // 🔥 Retorna `true` si se eliminó con éxito
    } catch (err) {
      setError("Error al eliminar la pregunta");
      return false;
    } finally {
      setCargando(false);
    }
  };

  // Cargar preguntas al inicio
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
    removePregunta,
  };
};

// 🔥 Ahora la exportación es por defecto
export default usePreguntas;