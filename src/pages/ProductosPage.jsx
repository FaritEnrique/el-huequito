import { useState } from "react";
import useProductos from "../hooks/useProductos";
import ProductoCard from "../components/ProductoCard";

const ProductosPage = () => {
    const { productos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();
    const [busqueda, setBusqueda] = useState("");
    const [marcaFiltro, setMarcaFiltro] = useState("");

    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
        (marcaFiltro ? producto.marca === marcaFiltro : true)
    );

    console.log("Productos completos:", productos);
    console.log("Productos filtrados:", productosFiltrados);

    const marcasDisponibles = [...new Set(productos.map((p) => p.marca))];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Productos</h1>

            {/* Buscador */}
            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border rounded-md p-2 w-full mb-4"
            />

            {/* Filtro por marca */}
            <select
                value={marcaFiltro}
                onChange={(e) => setMarcaFiltro(e.target.value)}
                className="border rounded-md p-2 w-full mb-4"
            >
                <option value="">Todas las marcas</option>
                {marcasDisponibles.map((marca) => (
                    <option key={marca} value={marca}>
                        {marca}
                    </option>
                ))}
            </select>

            {/* Lista de productos */}
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