//scr/hooks/useProductos.js

import { useState, useEffect } from "react";
import { apiFetch } from "../api/apiFetch";

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [tiposProducto, setTiposProducto] = useState([]);

    useEffect(() => {
        obtenerProductos();
        obtenerMarcas();
        obtenerTiposProducto();
    }, []);

    const obtenerProductos = async () => {
        try {
            const data = await apiFetch("productos");
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    const obtenerMarcas = async () => {
        try {
            const data = await apiFetch("marcas");
            setMarcas(data);
        } catch (error) {
            console.error("Error al obtener marcas:", error);
        }
    };

    const obtenerTiposProducto = async () => {
        try {
            const data = await apiFetch("tipo-productos");
            setTiposProducto(data);
        } catch (error) {
            console.error("Error al obtener tipos de producto:", error);
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const nuevoProducto = await apiFetch("productos", {
                method: "POST",
                body: JSON.stringify(producto),
            });
            setProductos([...productos, nuevoProducto]);
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    const actualizarProducto = async (id, producto) => {
        try {
            const productoActualizado = await apiFetch(`productos/${id}`, {
                method: "PUT",
                body: JSON.stringify(producto),
            });
            setProductos(productos.map((p) => (p.id === id ? productoActualizado : p)));
        } catch (error) {
            console.error("Error al actualizar producto:", error);
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await apiFetch(`productos/${id}`, { method: "DELETE" });
            setProductos(productos.filter((p) => p.id !== id));
        } catch (error) {
            console.error("Error al eliminar producto:", error);
        }
    };

    return { 
        productos, 
        marcas, 
        tiposProducto, 
        obtenerProductos, 
        agregarProducto, 
        actualizarProducto, 
        eliminarProducto 
    };
};

export default useProductos;