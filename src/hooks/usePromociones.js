// hooks/usePromociones.js
import { apiFetch } from '../api/apiFetch.js'
import { useState, useEffect } from 'react';

export const usePromociones = () => {
  const [promociones, setPromociones] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchPromociones = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch('/promociones');
      setPromociones(data);
    } catch (err) {
      setError("Error al obtener las promociones");
    } finally {
      setCargando(false);
    }
  };

  const crearPromocion = async (promocion) => {
    setCargando(true);
    setError(null);
    try {
      const nuevaPromocion = await apiFetch('/promociones', {
        method: 'POST',
        body: JSON.stringify(promocion),
      });
      setPromociones((prev) => [...prev, nuevaPromocion]);
    } catch (err) {
      setError("Error al crear la promoción");
    } finally {
      setCargando(false);
    }
  };

  const obtenerPromocion = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const promocion = await apiFetch(`/promociones/${id}`);
      return { promocion, cargando: false, error: null };
    } catch (err) {
      setError("Error al obtener la promoción");
      return { promocion: null, cargando: false, error: "Error al obtener la promoción" };
    } finally {
      setCargando(false);
    }
  };

  const removePromocion = async (id) => {
    setCargando(true);
    try {
      await apiFetch(`/promociones/${id}`, { method: 'DELETE' });
      setPromociones((prev) => prev.filter((promocion) => promocion.id !== id));
    } catch (err) {
      setError("Error al eliminar la promoción");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchPromociones();
  }, []);

  return {
    promociones,
    cargando,
    error,
    fetchPromociones,
    crearPromocion,
    obtenerPromocion,
    removePromocion
  };
};