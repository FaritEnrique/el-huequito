// src/components/ProductoCard.jsx
import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ProductoCard = ({ producto }) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log("Producto en ProductoCard:", producto);

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img
                src={producto.imagenUrl || "https://dummyimage.com/150x150/cccccc/000000.png&text=Producto"}
                alt={producto.nombre}
                className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{producto.nombre}</h2>
            <p className="text-gray-600">{producto.marca?.nombre || "Sin marca"}</p>
            <p className="bg-green-100 border border-green-300 rounded-md p-2 text-green-700 font-bold text-xl mt-2">
                <span role="img" aria-label="Precio"></span>Precio: S/ {producto.precio}</p>
            <button
                onClick={() => setIsOpen(true)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Ver detalles
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
                    <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <DialogTitle className="text-lg font-bold">{producto.nombre}</DialogTitle>
                        <img
                            src={producto.imagenUrl || "https://dummyimage.com/150x150/cccccc/000000.png&text=Producto"}
                            alt={producto.nombre}
                            className="w-full h-40 object-cover rounded-md mt-2"
                        />
                        <p className="mt-2 text-gray-600">{producto.descripcion || "Sin descripción"}</p>
                        <p className="text-gray-700 font-semibold mt-2">Marca: {producto.marca?.nombre || "Desconocido"}</p>
                        <p className="text-gray-700 font-semibold mt-2">Tipo: {producto.tipoProducto?.nombre || "Desconocido"}</p>
                        <p className="text-gray-700 font-semibold mt-2">Precio: S/ {producto.precio}</p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                            Cerrar
                        </button>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default React.memo(ProductoCard);

{/* src/components/ProductoCard.jsx
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ProductoCard = ({ producto }) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log("Producto en ProductoCard:", producto);

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img
                src={producto.imagen || "https://dummyimage.com/150x150/cccccc/000000.png&text=Producto"}
                alt={producto.nombre}
                className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{producto.nombre}</h2>
            <p className="text-gray-600">{producto.marca?.nombre || "Sin marca"}</p>
            <p className="text-gray-700 font-semibold mt-1">Precio: S/ {producto.precio}</p>
            <button
                onClick={() => setIsOpen(true)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Ver detalles
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
                    <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <DialogTitle className="text-lg font-bold">{producto.nombre}</DialogTitle>
                        <img
                            src={producto.imagen || "https://dummyimage.com/150x150/cccccc/000000.png&text=Producto"}
                            alt={producto.nombre}
                            className="w-full h-40 object-cover rounded-md mt-2"
                        />
                        <p className="mt-2 text-gray-600">{producto.descripcion || "Sin descripción"}</p>
                        <p className="text-gray-700 font-semibold mt-2">Marca: {producto.marca?.nombre || "Desconocido"}</p>
                        <p className="text-gray-700 font-semibold mt-2">Precio: S/ {producto.precio}</p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                            Cerrar
                        </button>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default ProductoCard;*/}