import { useState } from "react";
import { apiFetch } from "../api/apiFetch";

const useMarcas = () => {
  const [marcas, setMarcas] = useState([]);

  const obtenerMarcas = async () => {
    const data = await apiFetch("/marcas");
    setMarcas(data);
  };

  const crearMarca = async (marca) => {
    await apiFetch("/marcas", { method: "POST", body: JSON.stringify(marca) });
    obtenerMarcas();
  };

  const actualizarMarca = async (id, marca) => {
    await apiFetch(`/marcas/${id}`, { method: "PUT", body: JSON.stringify(marca) });
    obtenerMarcas();
  };

  const eliminarMarca = async (id) => {
    await apiFetch(`/marcas/${id}`, { method: "DELETE" });
    obtenerMarcas();
  };

  return { marcas, obtenerMarcas, crearMarca, actualizarMarca, eliminarMarca };
};

export default useMarcas;