// src/hooks/useClientes.js
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

      // Asegurar que el celular no tiene el prefijo +51 antes de enviarlo
      let celularLimpio = cliente.celular.startsWith("+51")
        ? cliente.celular.replace("+51", "")
        : cliente.celular;

      console.log("Enviando cliente con datos:", JSON.stringify(cliente, null, 2));
      const nuevoCliente = await apiFetch("clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cliente, celular: celularLimpio }),
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

  const editarCliente = async (id, form, clienteOriginal) => {
    setCargando(true);
    setError(null);
    try {
      
      console.log("Editando cliente con datos originales:", clienteOriginal);

      // Remover +51 si ya está presente
      let celularLimpio = form.celular.replace(/\D/g, "");

      if (!/^(\+51)?\d{9}$/.test(celularLimpio)) {
        console.error("Error: Número de celular inválido");
        return;
      }

      if (celularLimpio.startsWith("51")) {
        celularLimpio = celularLimpio.substring(2);
      }

      const dniLimpio = String(form.dni).padStart(8, "0");

      const clienteEditado = {
        nombre: form.nombre.trim(),
        dni: dniLimpio,
        direccion: form.direccion.trim(),
        celular: celularLimpio, // Solo los 9 dígitos
        correo: form.correo.trim().toLowerCase(),
        condicion: form.condicion,
      };

      /*if (Object.values(clienteEditado).every((v) => v === "" || v === undefined)) {
        console.error("Error: No se están enviando datos válidos para actualizar.");
        return;
      }*/

      //console.log("Datos limpios para enviar:", clienteEditado);
      
      const datosActualizados = {};
      Object.keys(clienteEditado).forEach((key) => {
        if (clienteEditado[key] !== clienteOriginal[key]) {
          datosActualizados[key] = clienteEditado[key];
        }
      });

      if (Object.keys(datosActualizados).length === 0) {
        console.warn("No se han realizado cambios. No se enviará la solicitud.");
        return;
      }

      console.log("Datos limpios para enviar:", datosActualizados);

      const clienteActualizado = await apiFetch(`clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosActualizados),
      });

      console.log("Cliente actualizado con éxito:", clienteActualizado);
      setClientes((prev) =>
        prev.map((cli) => (cli.id === id ? clienteActualizado : cli))
      );
      return clienteActualizado;
    } catch (err) {
      console.log("Error en editarCliente:", err);
      if (err.response) {
        console.error("Respuesta del backend:", await err.response.json());
      }
      setError(`Error al editar el cliente: ${err.message || "Error desconocido"}`);
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