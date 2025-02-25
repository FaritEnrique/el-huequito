import { useState } from "react";
import useProductos from "../hooks/useProductos";

const GestionProductos = () => {
    const { productos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();
    const [form, setForm] = useState({ nombre: "", precio: "", descripcion: "" });
    const [editando, setEditando] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editando) {
            actualizarProducto(editando, form);
        } else {
            agregarProducto(form);
        }
        setForm({ nombre: "", precio: "", descripcion: "" });
        setEditando(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
            <form onSubmit={handleSubmit} className="mb-4 space-y-2">
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="border p-2 w-full" required />
                <input type="number" name="precio" value={form.precio} onChange={handleChange} placeholder="Precio" className="border p-2 w-full" required />
                <input type="text" name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" className="border p-2 w-full" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">{editando ? "Actualizar" : "Agregar"}</button>
            </form>

            <ul>
                {productos.map((producto) => (
                    <li key={producto.id} className="border p-2 flex justify-between items-center">
                        <span>{producto.nombre} - ${producto.precio}</span>
                        <div>
                            <button onClick={() => { setForm(producto); setEditando(producto.id); }} className="bg-yellow-500 text-white px-2 py-1 mr-2">Editar</button>
                            <button onClick={() => eliminarProducto(producto.id)} className="bg-red-500 text-white px-2 py-1">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GestionProductos;
