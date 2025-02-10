// src/pages/UserList.jsx

import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { TfiTrash } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useClientes } from '../hooks/useClientes';
import { toast } from 'sonner';

const UserList = () => {
  const { clientes, fetchClientes, removeCliente } = useClientes();
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    fetchClientes().then(setListaClientes);
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
        setListaClientes(prev => prev.filter(cliente => cliente.id !== id));
        toast.success('Cliente eliminado con éxito');
      } catch {
        toast.error('Error al eliminar el cliente');
      }
    }
  };

  return (
    <main className="max-w-5xl mx-auto my-4 py-8 bg-slate-700 rounded-xl">
      <section className='w-full mx-auto bg-slate-300 p-4 rounded-xl'>
        <h1 className='text-center text-2xl font-bold mb-4'>Listado de Clientes</h1>
        <table className='w-full bg-white mb-4'>
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Ver</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {listaClientes.map(({ id, dni, name, celular }) => (
              <tr key={id}>
                <td>{dni}</td>
                <td>{nombre}</td>
                <td>{celular}</td>
                <td><Link to={`/ver/cliente/${id}`}><FaEye size={20} /></Link></td>
                <td><TfiTrash size={20} className='text-red-600 cursor-pointer' onClick={() => handleRemoveCliente(id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/admin'>
          <button className='bg-sky-500 p-2 rounded-xl text-white'>Retornar</button>
        </Link>
      </section>
    </main>
  );
};

export default UserList;