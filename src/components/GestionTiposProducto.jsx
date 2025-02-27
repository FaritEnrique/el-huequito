import { useState, useEffect } from "react";
import useTiposProducto from "../hooks/useTiposProducto";

const GestionTiposProducto = () => {
  const { tiposProducto, obtenerTiposProducto, crearTipoProducto, actualizarTipoProducto, eliminarTipoProducto } = useTiposProducto();
  const [form, setForm] = useState({ nombre: "" });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tipoProductoEditado, setTipoProductoEditado] = useState(null);

  useEffect(() => {
    obtenerTiposProducto();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modoEdicion) {
      await actualizarTipoProducto(tipoProductoEditado, form);
    } else {
      await crearTipoProducto(form);
    }
    setForm({ nombre: "" });
    setModoEdicion(false);
    obtenerTiposProducto();
  };

  const handleEditar = (tipoProducto) => {
    setForm(tipoProducto);
    setModoEdicion(true);
    setTipoProductoEditado(tipoProducto.id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Gestión de Tipos de Producto</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre del tipo de producto" required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{modoEdicion ? "Actualizar" : "Crear"}</button>
      </form>

      {/* Lista de tipos de producto */}
      <ul>
        {tiposProducto.map((tipoProducto) => (
          <li key={tipoProducto.id} className="border p-2 mb-2 flex justify-between">
            {tipoProducto.nombre}
            <div>
              <button onClick={() => handleEditar(tipoProducto)} className="text-yellow-500 mr-2">Editar</button>
              <button onClick={() => eliminarTipoProducto(tipoProducto.id)} className="text-red-500">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionTiposProducto;