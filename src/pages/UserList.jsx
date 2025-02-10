// src/pages/UserList.jsx

// src/pages/UserList.jsx
import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { TfiTrash } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useClientes } from '../hooks/useClientes';
import { toast } from 'sonner';

const UserList = () => {
  const { clientes, fetchClientes, removeCliente } = useClientes();
  const [listaClientes, setListaClientes] = useState([]);

  // Actualiza listaClientes cada vez que 'clientes' cambie en el hook
  useEffect(() => {
    setListaClientes(clientes);
  }, [clientes]);

  // Realiza el fetch inicial (aunque el hook ya lo hace internamente)
  useEffect(() => {
    fetchClientes();
  }, []);

  const handleRemoveCliente = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No lo podrás revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      try {
        await removeCliente(id);
        // El hook actualiza 'clientes' y a través del useEffect, 'listaClientes' también se actualiza.
        toast.success('Cliente eliminado con éxito');
      } catch {
        toast.error('Error al eliminar el cliente');
      }
    }
  };

  return (
    <main className="max-w-5xl mx-auto my-4 py-8 bg-slate-700 rounded-xl border-2 border-black">
      <section className="w-full mx-auto bg-slate-300 p-4 rounded-xl">
        <h1 className="text-center text-2xl font-bold mb-4">Listado de Clientes Registrados</h1>
        <table className="w-full bg-white mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border">DNI</th>
              <th className="py-2 px-4 border">Nombre</th>
              <th className="py-2 px-4 border">Celular</th>
              <th className="py-2 px-4 border">Ver</th>
              <th className="py-2 px-4 border">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {listaClientes && listaClientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="py-2 px-4 border">{cliente.dni}</td>
                <td className="py-2 px-4 border">{cliente.nombre}</td>
                <td className="py-2 px-4 border">{cliente.celular}</td>
                <td className="py-2 px-4 border text-center">
                  <Link to={`/ver/cliente/${cliente.id}`}>
                    <FaEye size={20} />
                  </Link>
                </td>
                <td className="py-2 px-4 border text-center">
                  <button onClick={() => handleRemoveCliente(cliente.id)}>
                    <TfiTrash size={20} className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/admin">
          <button className="bg-sky-500 p-2 rounded-xl text-white">Retornar Administración</button>
        </Link>
      </section>
    </main>
  );
};

export default UserList;