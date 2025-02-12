import { apiFetch } from "../api/apiFetch";
import { useState, useEffect } from "react";

const useClientes = () => {
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
      cliente.dni = cliente.dni.toString().padStart(8, "0");
      // Asegurar que el celular tiene el prefijo +51
      if (!cliente.celular.startsWith("+51")) {
        cliente.celular = `+51${cliente.celular}`;
      }
      
      console.log("Enviando cliente con datos:", JSON.stringify(cliente, null, 2));
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
      console.log("Cliente obtenido:", cliente);
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
      console.log("Editando cliente con datos:", form);
      const clienteActualizado = await apiFetch(`clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log("Cliente actualizado recibido del servidor:", clienteActualizado);
      setClientes((prev) =>
        prev.map((cli) => (cli.id === id ? clienteActualizado : cli))
      );
      return clienteActualizado;
    } catch (err) {
      setError(`Error al editar el cliente: ${err.message}`);
      console.error("Error en editarCliente:", err);
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