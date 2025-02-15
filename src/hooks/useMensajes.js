// hooks/useMensajes.js
import { apiFetch } from '../api/apiFetch.js'
import { useState, useEffect } from 'react';

export const useMensajes = () => {

  const [mensajes, setMensajes] = useState([]);
  const [ cargando, setCargando ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchMensajes = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch('mensajes');
      setMensajes(data);
    } catch (err) {
      setError("Error al obtener los mensajes");
    } finally {
      setCargando(false);
    }
  };

  const crearMensaje = async (mensaje) => {
    setCargando(true);
    setError(null);
    try {
      const nuevoMensaje = await apiFetch('mensajes', {
        method: 'POST',
        body: JSON.stringify(mensaje),
      });
      setMensajes((prev) => [...prev, nuevoMensaje]);
    } catch (err) {
      setError("Error al crear el mensaje");
    } finally {
      setCargando(false);
    }
  };

  const obtenerMensaje = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const mensaje = await apiFetch(`mensajes/${id}`);
      return {mensaje, cargando: false, error: null};
    } catch (err) {
      setError("Error al obtener el mensaje");
      return {mensaje: null, cargando: false, error: "Error al obtener el mensaje"};
    } finally {
      setCargando(false);
    }
  };

  const removeMensaje = async (id) => {
    setCargando(true);
    try {
      await apiFetch(`mensajes/${id}`, { method: 'DELETE' });
      setMensajes((prev) => prev.filter((mensaje) => mensaje.id !== id));
    } catch (err) {
      setError("Error al eliminar el mensaje");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchMensajes();
  }, []);

  return {
    mensajes,
    cargando,
    error,
    fetchMensajes,
    crearMensaje,
    obtenerMensaje,
    removeMensaje
  };
};