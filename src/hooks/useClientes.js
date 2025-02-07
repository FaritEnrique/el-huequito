// hooks/useClientes.js
import { apiFetch } from "../api/apiFetch";
import { useState, useEffect } from "react";

export const useClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const fetchClientes = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await apiFetch("/clientes");
      setClientes(data);
    } catch (err) {
      setError("Error al obtener los clientes");
    } finally {
      setCargando(false);
    }
  };

  const crearCliente = async (cliente) => {
    setCargando(true);
    setError(null);
    try {
      const nuevoCliente = await apiFetch("/clientes", {
        method: "POST",
        body: JSON.stringify(cliente),
      });
      setClientes((prev) => [...prev, nuevoCliente]);
    } catch (err) {
      setError("Error al crear el cliente");
    } finally {
      setCargando(false);
    }
  };

  const obtenerCliente = async (id) => {
    setCargando(true);
    setError(null);
    try {
      const cliente = await apiFetch(`/clientes/${id}`);
      return { cliente, cargando: false, error: null };
    } catch (err) {
      setError("Error al obtener el cliente");
      return { cliente: null, cargando: false, error: "Error al obtener el cliente" };
    } finally {
      setCargando(false);
    }
  };

  const editarCliente = async (id, form) => {
    setCargando(true);
    setError(null);
    try {
      const clienteActualizado = await apiFetch(`/clientes/${id}`, {
        method: "PUT",
        body: JSON.stringify(form),
      });
      setClientes((prev) => prev.map((cli) => (cli.id === id ? clienteActualizado : cli)));
    } catch (err) {
      setError("Error al editar el cliente");
    } finally {
      setCargando(false);
    }
  };

  const removeCliente = async (id) => {
    setCargando(true);
    try {
      await apiFetch(`/clientes/${id}`, { method: "DELETE" });
      setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
    } catch (err) {
      setError("Error al eliminar el cliente");
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