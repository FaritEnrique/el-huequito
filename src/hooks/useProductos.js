import { useState, useEffect } from "react";
import { apiFetch } from "../api/apiFetch";

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            try {
                const data = await apiFetch("productos");
                console.log("Productos cargados:", data); // ✅ Debug
                setProductos(data);
            } catch (err) {
                console.error("Error al cargar productos:", err); // ✅ Debug
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProductos();
    }, []);

    const agregarProducto = async (nuevoProducto) => {
        try {
            const data = await apiFetch("productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoProducto),
            });
            setProductos([...productos, data]);
        } catch (err) {
            console.error("Error al agregar producto:", err); // ✅ Debug
            setError(err.message);
        }
    };

    const actualizarProducto = async (id, productoActualizado) => {
        try {
            const data = await apiFetch(`productos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productoActualizado),
            });
            setProductos(productos.map((p) => (p.id === id ? data : p)));
        } catch (err) {
            console.error("Error al actualizar producto:", err); // ✅ Debug
            setError(err.message);
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await apiFetch(`productos/${id}`, { method: "DELETE" });
            setProductos(productos.filter((p) => p.id !== id));
        } catch (err) {
            console.error("Error al eliminar producto:", err); // ✅ Debug
            setError(err.message);
        }
    };

    return {
        productos,
        loading,
        error,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
    };
};

export default useProductos;