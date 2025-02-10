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
      const data = (await apiFetch("clientes")) || [];
      setClientes(data);
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
      const nuevoCliente = await apiFetch("clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente),
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
      if (actualizarEstado) {
        setClientes((prev) =>
          prev.map((cli) => (cli.id === id ? cliente : cli))
        );
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
      const clienteActualizado = await apiFetch(`clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setClientes((prev) =>
        prev.map((cli) => (cli.id === id ? clienteActualizado : cli))
      );
      return clienteActualizado;
    } catch (err) {
      setError(`Error al editar el cliente: ${err.message}`);
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