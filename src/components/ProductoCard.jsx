// src/components/ProductoCard.jsx

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ProductoCard = ({ producto }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img
                src={producto.imagen || "https://via.placeholder.com/150"}
                alt={producto.nombre}
                className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{producto.nombre}</h2>
            <p className="text-gray-600">{producto.marca}</p>
            <p className="text-gray-700 font-semibold mt-1">Precio: S/ {producto.precio}</p>
            <button
                onClick={() => setIsOpen(true)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Ver detalles
            </button>

            {/* Modal */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
                    <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <DialogTitle className="text-lg font-bold">{producto.nombre}</DialogTitle>
                        <img
                            src={producto.imagen || "https://via.placeholder.com/150"}
                            alt={producto.nombre}
                            className="w-full h-40 object-cover rounded-md mt-2"
                        />
                        <p className="mt-2 text-gray-600">{producto.descripcion}</p>
                        <p className="text-gray-700 font-semibold mt-2">Marca: {producto.marca}</p>
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

export default ProductoCard;