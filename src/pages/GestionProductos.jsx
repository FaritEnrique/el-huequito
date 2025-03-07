import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GestionListaProductos from "../components/GestionListaProductos";
import GestionMarcas from "../components/GestionMarcas";
import GestionTiposProducto from "../components/GestionTiposProducto";

const GestionProductos = () => {
  const navigate = useNavigate();
  const [seccionActiva, setSeccionActiva] = useState("productos");

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow rounded-lg">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Gestión de Productos</h1>

      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-4">
        <button
          className={`px-4 py-2 rounded transition ${
            seccionActiva === "productos" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSeccionActiva("productos")}
        >
          Productos
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            seccionActiva === "marcas" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSeccionActiva("marcas")}
        >
          Marcas
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            seccionActiva === "tiposProducto" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSeccionActiva("tiposProducto")}
        >
          Tipos de Producto
        </button>
        <button
          onClick={() => navigate("/admin")}
          className="px-4 py-2 rounded bg-gray-500 text-white transition hover:bg-gray-700"
        >
          Regresar
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