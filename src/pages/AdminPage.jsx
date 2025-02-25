import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <main className="max-w-[1300px] w-full mx-auto my-8 py-8 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-lg">
            {/* Sección de gestión general */}
            <section className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-center gap-6 bg-gray-900 p-6 rounded-lg">
                <h1 className="w-full text-center text-white text-2xl font-bold mb-4">Panel de Administración</h1>
                
                <Link to="/edit-preg">
                    <button className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 transition rounded-lg border-2 border-gray-700 shadow-md">
                        Editar Preguntas
                    </button>
                </Link>

                <Link to="/admin/promociones">
                    <button className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 transition rounded-lg border-2 border-gray-700 shadow-md">
                        Gestión de Promociones
                    </button>
                </Link>

                <Link to="/manage/messages">
                    <button className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 transition rounded-lg border-2 border-gray-700 shadow-md">
                        Gestión de Mensajes
                    </button>
                </Link>

                <Link to="/gestionProductos">
                    <button className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 transition rounded-lg border-2 border-gray-700 shadow-md">
                        Gestión de Productos
                    </button>
                </Link>
            </section>

            {/* Sección de gestión de usuarios */}
            <section className="w-full max-w-[1200px] mt-6 mx-auto bg-gray-900 p-6 rounded-lg">
                <h2 className="text-center text-white text-xl font-bold mb-4">Gestión de Usuarios</h2>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <Link to="/admin/user-list">
                        <button className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 transition rounded-lg border-2 border-gray-700 shadow-md">
                            Listado de Usuarios
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default AdminPage;