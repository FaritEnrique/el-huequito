import { useState, useEffect } from "react";
import useProductos from "../hooks/useProductos";
import { apiFetch } from "../api/apiFetch";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const GestionListaProductos = () => {
    const { productos, obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();
    const [form, setForm] = useState({
        nombre: "",
        imagenUrl: "",
        descripcion: "",
        marcaId: "",
        tipoProductoId: "",
        precio: "" });
    const [modoEdicion, setModoEdicion] = useState(false);
    const [productoEditado, setProductoEditado] = useState(null);
    const [marcas, setMarcas] = useState([]);
    const [tiposProducto, setTiposProducto] = useState([]);
    const [modalProducto, setModalProducto] = useState(null); // Estado para el modal

    useEffect(() => {
        obtenerProductos();
        cargarMarcas();
        cargarTiposProducto();
    }, []);

    const cargarMarcas = async () => {
        try {
            const data = await apiFetch("marcas");
            setMarcas(data);
        } catch (error) {
            console.error("Error al obtener marcas:", error);
        }
    };

    const cargarTiposProducto = async () => {
        try {
            const data = await apiFetch("tipos-producto");
            setTiposProducto(data);
        } catch (error) {
            console.error("Error al obtener tipos de productos:", error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.nombre || !form.marcaId || !form.tipoProductoId || !form.precio) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        try {
            if (modoEdicion) {
                await actualizarProducto(productoEditado, form);
            } else {
                await agregarProducto(form);
            }

            setForm({ nombre: "", marcaId: "", tipoProductoId: "", precio: "" });
            setModoEdicion(false);
            setProductoEditado(null);
            obtenerProductos();
        } catch (error) {
            console.error("Error al guardar el producto:", error);
        }
    };

    const handleEditar = (producto) => {
        setForm({
            nombre: producto.nombre || "",
            imagenUrl: producto.imagenUrl || "",
            descripcion: producto.descripcion || "",
            marcaId: producto.marcaId ? producto.marcaId.toString() : "",
            tipoProductoId: producto.tipoProductoId ? producto.tipoProductoId.toString() : "",
            precio: producto.precio ? producto.precio.toString() : "",
        });
        setModoEdicion(true);
        setProductoEditado(producto.id);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">
                {modoEdicion ? "Editar Producto" : "Agregar Producto"}
            </h2>

            <form onSubmit={handleSubmit} className="mb-4 space-y-2">
                <input 
                    type="text" 
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange} 
                    placeholder="Nombre del producto" 
                    required 
                    className="w-full p-2 border rounded"
                />
                <input 
                    type="text" 
                    name="imagenUrl" 
                    value={form.imagenUrl} 
                    onChange={handleChange} 
                    placeholder="URL de la imagen (opcional)" 
                    className="w-full p-2 border rounded"
                />
                <textarea 
                    name="descripcion" 
                    value={form.descripcion} 
                    onChange={handleChange} 
                    placeholder="Descripción del producto (opcional)" 
                    className="w-full p-2 border rounded"
                />
                <input 
                    type="number" 
                    name="precio" 
                    value={form.precio} 
                    onChange={handleChange} 
                    placeholder="Precio" 
                    required 
                    className="w-full p-2 border rounded"
                />
                
                <select 
                    name="marcaId" 
                    value={form.marcaId} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border rounded"
                >
                    <option value="">Selecciona una marca</option>
                    {marcas.map((marca) => (
                        <option key={marca.id} value={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}
                </select>

                <select 
                    name="tipoProductoId" 
                    value={form.tipoProductoId} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border rounded"
                >
                    <option value="">Selecciona un tipo de producto</option>
                    {tiposProducto.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>
                            {tipo.nombre}
                        </option>
                    ))}
                </select>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    {modoEdicion ? "Actualizar" : "Crear"}
                </button>
            </form>

            <h2 className="text-lg font-semibold mb-2">Lista de Productos</h2>
            <ul className="divide-y">
                {productos.map((producto) => (
                    <li
                        key={producto.id}
                        className="flex justify-between items-center py-2 bg-gray-100 p-2 rounded-md shadow-sm"
                    >
                        <span className="font-medium">
                            {producto.nombre} - {producto.marca?.nombre || ""} - S/ {Number(producto.precio).toFixed(2)}
                        </span>
                        <div className="flex space-x-3">
                            <button 
                                onClick={() => setModalProducto(producto)} 
                                className="text-blue-500 hover:underline"
                            >
                                Ver
                            </button>
                            <button 
                                onClick={() => handleEditar(producto)} 
                                className="text-yellow-500 hover:underline"
                            >
                                Editar
                            </button>
                            <button 
                                onClick={() => eliminarProducto(producto.id)} 
                                className="text-red-500 hover:underline"
                            >
                                Borrar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {modalProducto && (
                <Dialog open={true} onClose={() => setModalProducto(null)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
                        <DialogPanel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:min-w-[600px]">
                            <DialogTitle className="text-lg font-bold">
                                {modalProducto.nombre}
                            </DialogTitle>
                            <img
                                src={(modalProducto.imagenUrl && modalProducto.imagenUrl.trim() !== "")
                                    ? modalProducto.imagenUrl
                                    : "https://dummyimage.com/600x400/ccc/fff.png&text=Sin+Imagen"}
                                alt={modalProducto.nombre}
                                className="w-full h-60 object-cover rounded-md mt-2"
                            />
                            <p className="mt-2 text-gray-600">
                                {modalProducto.descripcion || "Sin descripción disponible"}
                            </p>
                            <p className="text-gray-700 font-semibold mt-2">
                                Precio: S/ {Number(modalProducto.precio).toFixed(2)}
                            </p>
                            <p className="text-gray-700 font-semibold mt-2">
                                Marca: {modalProducto.marca?.nombre || "Desconocido"}
                            </p>
                            <p className="text-gray-700 font-semibold mt-2">
                                Tipo: {modalProducto.tipoProducto?.nombre || "Desconocido"}
                            </p>
                            <p className="text-gray-700 font-semibold mt-2">
                                Activo: {modalProducto.activo ? "Sí" : "No"}
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                Creado: {new Date(modalProducto.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Actualizado: {new Date(modalProducto.updatedAt).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => setModalProducto(null)}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full"
                            >
                                Cerrar
                            </button>
                        </DialogPanel>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default GestionListaProductos;