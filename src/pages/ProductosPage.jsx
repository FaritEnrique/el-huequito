import React, { useState, useMemo, useCallback } from "react";
import useProductos from "../hooks/useProductos";
import ProductoCard from "../components/ProductoCard";

const ProductosPage = () => {
    const { productos, cargando } = useProductos();
    const [busqueda, setBusqueda] = useState("");
    const [marcaFiltro, setMarcaFiltro] = useState("");

    const productosFiltrados = useMemo(() => {
        return productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
            (marcaFiltro ? producto.marca?.id?.toString() === marcaFiltro : true)
        );
    }, [productos, busqueda, marcaFiltro]);

    const marcasDisponibles = useMemo(() => {
        const marcasMap = {};
        productos.forEach((producto) => {
            if (producto.marca && producto.marca.id && producto.marca.nombre) {
                marcasMap[producto.marca.id] = producto.marca.nombre;
            }
        });
        return marcasMap;
    }, [productos]);

    const handleMarcaChange = useCallback((e) => {
        setMarcaFiltro(e.target.value);
    }, []);

    if (cargando) {
        return <p className="text-gray-500 text-center">Cargando productos...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Productos</h1>

            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border rounded-md p-2 w-full mb-4"
            />

            <select
                value={marcaFiltro}
                onChange={handleMarcaChange}
                className="border rounded-md p-2 w-full mb-4"
            >
                <option value="">Todas las marcas</option>
                {Object.entries(marcasDisponibles).map(([id, nombre]) => (
                    <option key={id} value={id}>
                        {nombre}
                    </option>
                ))}
            </select>

            {productosFiltrados.length === 0 ? (
                <p className="text-gray-500 text-center">No hay productos disponibles.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {productosFiltrados.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductosPage;

{/*import React from "react";
import useProductos from "../hooks/useProductos";
import ProductoCard from "../components/ProductoCard";

const ProductosPage = () => {
    const { productos, cargando } = useProductos();

    if (cargando) {
        return <p className="text-gray-500 text-center">Cargando productos...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Productos</h1>

            {productos.length === 0 ? (
                <p className="text-gray-500 text-center">No hay productos disponibles.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {productos.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductosPage;*/}