// src/hooks/useProductos.js

import { useState, useEffect } from "react";
import { apiFetch } from "../api/apiFetch";
import Swal from "sweetalert2";

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
            // Formatear precio con "S/" y eliminar cualquier otro símbolo previo
            const productosFormateados = data.map(producto => ({
                ...producto,
                precio: parseFloat(producto.precio).toFixed(2)
            }));
            setProductos(productosFormateados);
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
            const data = await apiFetch("tipos-producto");
            setTiposProducto(data);
        } catch (error) {
            console.error("Error al obtener tipos de producto:", error);
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const nuevoProducto = await apiFetch("productos", {
                method: "POST",
                body: JSON.stringify({
                    ...producto,
                    marcaId: Number(producto.marcaId),
                    tipoProductoId: Number(producto.tipoProductoId),
                    precio: Number(producto.precio),
                }),
            });

            setProductos([...productos, {
                ...nuevoProducto,
                precio: `S/ ${parseFloat(nuevoProducto.precio).toFixed(2)}`
            }]);

            Swal.fire({
                icon: "success",
                title: "Producto agregado",
                text: "El producto se agregó correctamente",
            });

        } catch (error) {
            console.error("Error al agregar producto:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo agregar el producto",
            });
        }
    };

    const actualizarProducto = async (id, producto) => {
        try {
            const productoActualizado = await apiFetch(`productos/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    ...producto,
                    marcaId: Number(producto.marcaId),
                    tipoProductoId: Number(producto.tipoProductoId),
                    precio: Number(producto.precio),
                }),
            });

            setProductos(productos.map((p) =>
                p.id === id ? { ...productoActualizado, precio: `S/ ${parseFloat(productoActualizado.precio).toFixed(2)}` } : p
            ));

            Swal.fire({
                icon: "success",
                title: "Producto actualizado",
                text: "El producto se actualizó correctamente",
            });

        } catch (error) {
            console.error("Error al actualizar producto:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo actualizar el producto",
            });
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await apiFetch(`productos/${id}`, { method: "DELETE" });
            setProductos(productos.filter((p) => p.id !== id));

            Swal.fire({
                icon: "success",
                title: "Producto eliminado",
                text: "El producto se eliminó correctamente",
            });

        } catch (error) {
            console.error("Error al eliminar producto:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo eliminar el producto",
            });
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