// src/components/GestionTiposProducto.jsx

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useTiposProducto from "../hooks/useTiposProducto";

const GestionTiposProducto = () => {
  const { tiposProducto, obtenerTiposProducto, crearTipoProducto, actualizarTipoProducto, eliminarTipoProducto } = useTiposProducto();
  const [form, setForm] = useState({ nombre: "" });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tipoProductoEditado, setTipoProductoEditado] = useState(null);

  useEffect(() => {
    obtenerTiposProducto();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modoEdicion) {
        const idNumerico = Number(tipoProductoEditado); // Convertir ID a número antes de enviarlo
        await actualizarTipoProducto(idNumerico, form);
        Swal.fire("Actualizado", "El tipo de producto se actualizó correctamente", "success");
      } else {
        await crearTipoProducto(form);
        Swal.fire("Creado", "El tipo de producto se creó correctamente", "success");
      }
      setForm({ nombre: "" });
      setModoEdicion(false);
      obtenerTiposProducto();
    } catch (error) {
      Swal.fire("Error", "Ocurrió un error al guardar el tipo de producto", "error");
    }
  };

  const handleEditar = (tipoProducto) => {
    setForm({ nombre: tipoProducto.nombre });
    setModoEdicion(true);
    setTipoProductoEditado(Number(tipoProducto.id)); // Asegurar conversión a número
  };

  const handleEliminar = async (id) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirmacion.isConfirmed) {
      try {
        await eliminarTipoProducto(Number(id)); // Convertir a número antes de enviarlo
        Swal.fire("Eliminado", "El tipo de producto ha sido eliminado", "success");
        obtenerTiposProducto();
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar el tipo de producto", "error");
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Gestión de Tipos de Producto</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input 
          type="text" 
          name="nombre" 
          value={form.nombre} 
          onChange={handleChange} 
          placeholder="Nombre del tipo de producto" 
          required 
          className="border p-2 w-full" 
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {modoEdicion ? "Actualizar" : "Crear"}
        </button>
      </form>

      {/* Lista de tipos de producto */}
      <ul>
        {tiposProducto.map((tipoProducto) => (
          <li key={tipoProducto.id} className="border p-2 mb-2 flex justify-between">
            {tipoProducto.nombre}
            <div>
              <button 
                onClick={() => handleEditar(tipoProducto)} 
                className="text-yellow-500 mr-2"
              >
                Editar
              </button>
              <button 
                onClick={() => handleEliminar(tipoProducto.id)} 
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionTiposProducto;