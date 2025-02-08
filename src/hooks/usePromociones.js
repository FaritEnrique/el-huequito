// hooks/usePromociones.js
import { useState, useEffect } from "react";
import { apiFetch } from "../api/apiFetch";

const usePromociones = () => {
  const [promociones, setPromociones] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchPromociones = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch("/promociones");
      setPromociones(data);
    } catch (err) {
      setError(err.message || "Error al cargar promociones");
    } finally {
      setCargando(false);
    }
  };

  const obtenerPromocion = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch(`/promociones/${id}`);
      return data;
    } catch (err) {
      setError(err.message || "Error al obtener la promoción");
      return null;
    } finally {
      setCargando(false);
    }
  };

  const crearPromocion = async (nuevaPromocion) => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch("/promociones", {
        method: "POST",
        body: JSON.stringify(nuevaPromocion),
      });
      setPromociones([...promociones, data]);
      return data;
    } catch (err) {
      setError(err.message || "Error al crear la promoción");
      return null;
    } finally {
      setCargando(false);
    }
  };

  const actualizarPromocion = async (id, datosActualizados) => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch(`/promociones/${id}`, {
        method: "PUT",
        body: JSON.stringify(datosActualizados),
      });
      setPromociones(promociones.map((promo) => (promo.id === id ? data : promo)));
      return data;
    } catch (err) {
      setError(err.message || "Error al actualizar la promoción");
      return null;
    } finally {
      setCargando(false);
    }
  };

  const eliminarPromocion = async (id) => {
    setCargando(true);
    setError(null);
    try {
      await apiFetch(`/promociones/${id}`, { method: "DELETE" });
      setPromociones(promociones.filter((promo) => promo.id !== id));
      return true;
    } catch (err) {
      setError(err.message || "Error al eliminar la promoción");
      return false;
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
    obtenerPromocion,
    crearPromocion,
    actualizarPromocion,
    eliminarPromocion,
  };
};

export default usePromociones;