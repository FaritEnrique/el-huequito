import { useState, useEffect } from "react";
import useMarcas from "../hooks/useMarcas";

const GestionMarcas = () => {
  const { marcas, obtenerMarcas, crearMarca, actualizarMarca, eliminarMarca } = useMarcas();
  const [form, setForm] = useState({ nombre: "" });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [marcaEditada, setMarcaEditada] = useState(null);

  useEffect(() => {
    obtenerMarcas();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modoEdicion) {
      await actualizarMarca(marcaEditada, form);
    } else {
      await crearMarca(form);
    }
    setForm({ nombre: "" });
    setModoEdicion(false);
    obtenerMarcas();
  };

  const handleEditar = (marca) => {
    setForm(marca);
    setModoEdicion(true);
    setMarcaEditada(marca.id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Gestión de Marcas</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre de la marca" required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{modoEdicion ? "Actualizar" : "Crear"}</button>
      </form>

      {/* Lista de marcas */}
      <ul>
        {marcas.map((marca) => (
          <li key={marca.id} className="border p-2 mb-2 flex justify-between">
            {marca.nombre}
            <div>
              <button onClick={() => handleEditar(marca)} className="text-yellow-500 mr-2">Editar</button>
              <button onClick={() => eliminarMarca(marca.id)} className="text-red-500">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionMarcas;