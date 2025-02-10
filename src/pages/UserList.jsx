// src/pages/UserList.jsx

import { useEffect, useState } from "react";
import useClientes from "../hooks/useClientes";

const UserList = () => {
    const { clientes, cargando, error, fetchClientes } = useClientes();
    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        setListaClientes(clientes);
    }, [clientes]);

    useEffect(() => {
        fetchClientes();
    }, []);

    if (cargando) return <p>Cargando clientes...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Lista de Clientes</h2>
            {listaClientes.length === 0 ? (
                <p>No hay clientes disponibles.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {listaClientes.map(cliente => (
                        <li key={cliente.id} className="mb-2">
                            {cliente.nombre} - {cliente.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
