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

  // Nueva función para editar un mensaje
  const editarMensaje = async (id, form) => {
    // Verificar que 'form' sea un objeto válido
    if (!form || typeof form !== "object") {
      console.error("Error: El formulario está indefinido o no es un objeto válido.");
      return;
    }
    setCargando(true);
    setError(null);
    try {
      console.log("Editando mensaje con datos originales:", form);
      
      // Preparar los datos limpios para enviar
      const mensajeEditado = {
        nombre: form.nombre ? form.nombre.trim() : undefined,
        celular: form.celular ? form.celular.trim() : undefined,
        correo: form.correo ? form.correo.trim().toLowerCase() : undefined,
        comunicacion: form.comunicacion,  // Asumimos que este campo ya viene en un valor válido
        mensaje: form.mensaje ? form.mensaje.trim() : undefined,
      };

      // Envolver los datos en la propiedad "response", ya que el backend espera req.body.response
      const bodyToSend = { response: mensajeEditado };

      console.log("Datos limpios para enviar:", bodyToSend);

      const mensajeActualizado = await apiFetch(`mensajes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyToSend),
      });

      console.log("Mensaje actualizado con éxito:", mensajeActualizado);
      setMensajes((prev) =>
        prev.map((msg) => (msg.id === id ? mensajeActualizado : msg))
      );
      return mensajeActualizado;
    } catch (err) {
      console.error("Error en editarMensaje:", err);
      setError(`Error al editar el mensaje: ${err.message || "Error desconocido"}`);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const removeMensaje = async (id) => {
    setCargando(true);
    setError(null);
    try {
      await apiFetch(`mensajes/${id}`, { method: "DELETE" });
      setMensajes((prev) => prev.filter((mensaje) => mensaje.id !== id));
    } catch (err) {
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
    editarMensaje,  // Retornamos la función de edición
    removeMensaje,
  };
};

export default useMensajes;