// src/hooks/useClientes.js
import { useState, useEffect } from "react";
import { apiFetch } from "../api/apiFetch";

const useClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchClientes = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch("clientes");
      setClientes(data || []);
      return data;
    } catch (err) {
      setError(`Error al obtener los clientes: ${err.message}`);
      setClientes([]);
      return [];
    } finally {
      setCargando(false);
    }
  };

  const crearCliente = async (cliente) => {
    setCargando(true);
    setError(null);
    try {
      const dniLimpio = cliente.dni ? cliente.dni.toString().padStart(8, "0") : null;

      const celularLimpio =
        cliente.celular && !cliente.celular.startsWith("+51")
          ? `+51${cliente.celular}`
          : cliente.celular;

      const clienteData = {
        nombre: cliente.nombre,
        dni: dniLimpio,
        direccion: cliente.direccion,
        celular: celularLimpio,
        correo: cliente.correo,
        condicion: cliente.condicion,
      };

      console.log("Enviando cliente con datos:", JSON.stringify(clienteData, null, 2));
      const nuevoCliente = await apiFetch("clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clienteData),
      });

      setClientes((prev) => [...prev, nuevoCliente]);
      return nuevoCliente;
    } catch (err) {
      setError(`Error al crear el cliente: ${err.message}`);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const obtenerCliente = async (id, actualizarEstado = false) => {
    setCargando(true);
    setError(null);
    try {
      const cliente = await apiFetch(`clientes/${id}`);
      console.log("Cliente obtenido:", cliente);
      if (actualizarEstado) {
        setClientes((prev) => prev.map((cli) => (cli.id === id ? cliente : cli)));
      }
      return cliente;
    } catch (err) {
      setError(`Error al obtener el cliente: ${err.message}`);
      return {};
    } finally {
      setCargando(false);
    }
  };

  const editarCliente = async (id, form) => {
    setCargando(true);
    setError(null);
    try {
      console.log("Editando cliente con datos:", form);

      const celularLimpio =
        form.celular && !form.celular.startsWith("+51")
          ? `+51${form.celular.replace("+51", "")}`
          : form.celular;

      const dniLimpio = form.dni ? String(form.dni).padStart(8, "0") : null;

      const clienteEditado = {
        nombre: form.nombre,
        dni: dniLimpio,
        direccion: form.direccion,
        celular: celularLimpio,
        correo: form.correo,
        condicion: form.condicion,
      };

      const clienteActualizado = await apiFetch(`clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clienteEditado),
      });

      console.log("Cliente actualizado con éxito:", clienteActualizado);
      setClientes((prev) => prev.map((cli) => (cli.id === id ? clienteActualizado : cli)));

      return clienteActualizado;
    } catch (err) {
      console.log("Error en editarCliente:", err);
      const mensajeError = err?.message || "Error desconocido al editar el cliente";
      setError(`Error al editar el cliente: ${mensajeError}`);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const removeCliente = async (id) => {
    setCargando(true);
    setError(null);
    try {
      await apiFetch(`clientes/${id}`, { method: "DELETE" });
      console.log("Cliente eliminado con ID:", id);
      setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
    } catch (err) {
      setError(`Error al eliminar el cliente: ${err.message}`);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return {
    clientes,
    cargando,
    error,
    fetchClientes,
    crearCliente,
    obtenerCliente,
    editarCliente,
    removeCliente,
  };
};

export default useClientes;