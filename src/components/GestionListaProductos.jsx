import { useState, useEffect } from "react";
import useProductos from "../hooks/useProductos";

const GestionListaProductos = () => {
    const { productos, obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();
    const [form, setForm] = useState({ nombre: "", marcaId: "", tipoProductoId: "", precio: "" });
    const [modoEdicion, setModoEdicion] = useState(false);
    const [productoEditado, setProductoEditado] = useState(null);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (modoEdicion) {
            await actualizarProducto(productoEditado, form);
        } else {
            await agregarProducto(form);
        }
        setForm({ nombre: "", marcaId: "", tipoProductoId: "", precio: "" });
        setModoEdicion(false);
        obtenerProductos();
    };

    const handleEditar = (producto) => {
        setForm(producto);
        setModoEdicion(true);
        setProductoEditado(producto.id);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Gestión de Productos</h2>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="mb-4 space-y-2">
                <input 
                    type="text" 
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange} 
                    placeholder="Nombre del producto" 
                    required 
                    className="border p-2 w-full" 
                />
                <input 
                    type="number" 
                    name="precio" 
                    value={form.precio} 
                    onChange={handleChange} 
                    placeholder="Precio" 
                    required 
                    className="border p-2 w-full" 
                />
                <input 
                    type="text" 
                    name="marcaId" 
                    value={form.marcaId} 
                    onChange={handleChange} 
                    placeholder="ID Marca" 
                    required 
                    className="border p-2 w-full" 
                />
                <input 
                    type="text" 
                    name="tipoProductoId" 
                    value={form.tipoProductoId} 
                    onChange={handleChange} 
                    placeholder="ID Tipo Producto" 
                    required 
                    className="border p-2 w-full" 
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {modoEdicion ? "Actualizar" : "Crear"}
                </button>
            </form>

            {/* Lista de productos */}
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id} className="border p-2 mb-2 flex justify-between">
                        {producto.nombre} - ${producto.precio}
                        <div>
                            <button onClick={() => handleEditar(producto)} className="text-yellow-500 mr-2">
                                Editar
                            </button>
                            <button onClick={() => eliminarProducto(producto.id)} className="text-red-500">
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GestionListaProductos;