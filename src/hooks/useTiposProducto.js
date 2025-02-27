import { useState } from "react";
import { apiFetch } from "../api/apiFetch";

const useTiposProducto = () => {
  const [tiposProducto, setTiposProducto] = useState([]);

  const obtenerTiposProducto = async () => {
    const data = await apiFetch("tipos-producto");
    setTiposProducto(data);
  };

  const crearTipoProducto = async (tipo) => {
    await apiFetch("tipos-producto", { method: "POST", body: JSON.stringify(tipo) });
    obtenerTiposProducto();
  };

  const actualizarTipoProducto = async (id, tipo) => {
    await apiFetch(`tipos-producto/${id}`, { method: "PUT", body: JSON.stringify(tipo) });
    obtenerTiposProducto();
  };

  const eliminarTipoProducto = async (id) => {
    await apiFetch(`tipos-producto/${id}`, { method: "DELETE" });
    obtenerTiposProducto();
  };

  return { tiposProducto, obtenerTiposProducto, crearTipoProducto, actualizarTipoProducto, eliminarTipoProducto };
};

export default useTiposProducto;