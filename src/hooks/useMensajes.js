// hooks/useMensajes.js
import { apiFetch } from "../api/apiFetch";
import { useState, useEffect } from "react";

export const useMensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchMensajes = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch("mensajes");
      console.log("📩 Mensajes cargados:", data);
      setMensajes(data);
      return data;
    } catch (err) {
      setError(`Error al obtener los mensajes: ${err.message}`);
    } finally {
      setCargando(false);
    }
  };

  const crearMensaje = async (mensaje) => {
    setCargando(true);
    setError(null);
    try {
      const nuevoMensaje = await apiFetch("mensajes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mensaje),
      });
      setMensajes((prev) => [...prev, nuevoMensaje]);
      return nuevoMensaje;
    } catch (err) {
      setError(`Error al crear el mensaje: ${err.message}`);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const obtenerMensaje = async (id) => {
    if (!id) {
      console.error("❌ Error: ID del mensaje no definido.");
      return null;
    }
    setCargando(true);
    setError(null);
    try {
      const mensaje = await apiFetch(`mensajes/${id}`);
      return mensaje;
    } catch (err) {
      setError(`Error al obtener el mensaje: ${err.message}`);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const editarMensaje = async (id, form) => {
    if (!id) {
      console.error("❌ Error: ID del mensaje no definido.");
      return null;
    }
    if (!form || typeof form !== "object") {
      console.error("❌ Error: El formulario está indefinido o no es un objeto válido.");
      return null;
    }
    setCargando(true);
    setError(null);
    try {
      console.log("Editando mensaje con datos originales:", form);

      const mensajeEditado = {
        nombre: form.nombre.trim(),
        celular: form.celular.trim(),
        correo: form.correo.trim().toLowerCase(),
        comunicacion: form.comunicacion,
        mensaje: form.mensaje.trim(),
      };

      console.log("Datos limpios para enviar:", mensajeEditado);

      const mensajeActualizado = await apiFetch(`mensajes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mensajeEditado),
      });

      console.log("Mensaje actualizado con éxito:", mensajeActualizado);
      setMensajes((prev) =>
        prev.map((msg) => (msg.id === id ? mensajeActualizado : msg))
      );
      return mensajeActualizado;
    } catch (err) {
      console.error("❌ Error en editarMensaje:", err);
      setError(`Error al editar el mensaje: ${err.message || "Error desconocido"}`);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const removeMensaje = async (id) => {
    if (!id) {
      console.error("❌ Error: ID del mensaje no definido.");
      return;
    }

    console.log(`🗑️ Eliminando mensaje con ID: ${id}`);

    setCargando(true);
    setError(null);
    try {
      await apiFetch(`mensajes/${id}`, { method: "DELETE" });
      setMensajes((prev) => prev.filter((mensaje) => mensaje.id !== id));
      console.log(`✅ Mensaje con ID ${id} eliminado correctamente.`);
    } catch (err) {
      console.error(`❌ Error al eliminar el mensaje con ID ${id}:`, err);
      setError(`Error al eliminar el mensaje: ${err.message}`);
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
    editarMensaje,
    removeMensaje,
  };
};

export default useMensajes;