import { useState } from "react";
import GestionListaProductos from "../components/GestionListaProductos";
import GestionMarcas from "../components/GestionMarcas";
import GestionTiposProducto from "../components/GestionTiposProducto";

const GestionProductos = () => {
  const [seccionActiva, setSeccionActiva] = useState("productos");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>

      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${seccionActiva === "productos" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSeccionActiva("productos")}
        >
          Productos
        </button>
        <button
          className={`px-4 py-2 rounded ${seccionActiva === "marcas" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSeccionActiva("marcas")}
        >
          Marcas
        </button>
        <button
          className={`px-4 py-2 rounded ${seccionActiva === "tiposProducto" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSeccionActiva("tiposProducto")}
        >
          Tipos de Producto
        </button>
      </div>

      <div className="border p-4 rounded-lg">
        {seccionActiva === "productos" && <GestionListaProductos />}
        {seccionActiva === "marcas" && <GestionMarcas />}
        {seccionActiva === "tiposProducto" && <GestionTiposProducto />}
      </div>
    </div>
  );
};

export default GestionProductos;