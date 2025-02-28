// src/hooks/useProductos.js

import { useState, useEffect, useMemo } from "react";
import { apiFetch } from "../api/apiFetch";
import Swal from "sweetalert2";

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [tiposProducto, setTiposProducto] = useState([]);
    const [cargando, setCargando] = useState(true); // Nuevo estado para controlar la carga

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([obtenerProductos(), obtenerMarcas(), obtenerTiposProducto()]);
                setCargando(false); // Datos cargados
            } catch (error) {
                console.error("Error al cargar datos iniciales:", error);
                setCargando(false); // Error al cargar datos
            }
        };

        fetchData();
    }, []);

    const obtenerProductos = async () => {
        try {
            const data = await apiFetch("productos");
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
                    imagenUrl: producto.imagenUrl || null,
                    descripcion: producto.descripcion || null,
                    marcaId: Number(producto.marcaId),
                    tipoProductoId: Number(producto.tipoProductoId),
                    precio: Number(producto.precio),
                }),
            });

            setProductos(prevProductos => [...prevProductos, {
                ...nuevoProducto,
                precio: parseFloat(nuevoProducto.precio).toFixed(2)
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

            setProductos(prevProductos => prevProductos.map((p) =>
                p.id === id ? { ...productoActualizado, precio: parseFloat(productoActualizado.precio).toFixed(2) } : p
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
            setProductos(prevProductos => prevProductos.filter((p) => p.id !== id));

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

    const marcasMemorizadas = useMemo(() => marcas, [marcas]);
    const tiposProductoMemorizados = useMemo(() => tiposProducto, [tiposProducto]);

    return {
        productos,
        marcas: marcasMemorizadas,
        tiposProducto: tiposProductoMemorizados,
        obtenerProductos,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
        cargando, // Exponemos el estado de carga
    };
};

export default useProductos;