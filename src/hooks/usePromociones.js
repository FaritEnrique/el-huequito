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
    try {
      return await apiFetch(`/promociones/${id}`);
    } catch (err) {
      setError(err.message || "Error al obtener la promoción");
      return null;
    }
  };

  const crearPromocion = async (nuevaPromocion) => {
    try {
      const data = await apiFetch("/promociones", {
        method: "POST",
        body: JSON.stringify(nuevaPromocion),
      });
      setPromociones((prev) => [...prev, data]);
      return data;
    } catch (err) {
      setError(err.message || "Error al crear la promoción");
      return null;
    }
  };

  const actualizarPromocion = async (id, datosActualizados) => {
    try {
      const data = await apiFetch(`/promociones/${id}`, {
        method: "PUT",
        body: JSON.stringify(datosActualizados),
      });
      setPromociones((prev) => prev.map((promo) => (promo.id === id ? data : promo)));
      return data;
    } catch (err) {
      setError(err.message || "Error al actualizar la promoción");
      return null;
    }
  };

  const eliminarPromocion = async (id) => {
    try {
      await apiFetch(`/promociones/${id}`, { method: "DELETE" });
      setPromociones((prev) => prev.filter((promo) => promo.id !== id));
      return true;
    } catch (err) {
      setError(err.message || "Error al eliminar la promoción");
      return false;
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