import React, {useState, useEffect} from 'react'
import { FaEye } from "react-icons/fa";
import { TfiTrash } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useElHuequito from '../hooks/useElHuequito'; 
import { toast } from 'sonner';

const UserList = () => {

    const { fetchCliente, removeCliente } = useElHuequito()

    const [cliente, setCliente] = useState([])

    useEffect(() => {
        fetchCliente()
            .then(data => setCliente(data))
    }, [])

    const handleRemoveCliente = (id) => {
        Swal.fire({
            title: "¿Estás Seguro?",
            text: "¡No lo podrás revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¿Sí, Borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeCliente(id)
                    .then(() => {
                        setCliente(cliente.filter(c => c.docId !== id));
                        toast.success('El cliente ha sido eliminado')
                    })
                    .catch(() => {
                        toast.error('Hubo un error al eliminar el cliente')
                    })
            }
        });
    }

    return (
        <main className="max-w-[1300px] w-full mx-auto my-4 py-8 bg-slate-700 rounded-xl border-2
        border-black">
            <section className='w-full max-w-[1200px] mx-auto bg-slate-300 p-4 rounded-xl'>
                <h1 className='w-full text-center md:text-xl lg:text-2xl font-bold mb-4'>
                    Listado de Clientes Registrados
                </h1>
                <table className='w-full bg-white mb-4'>
                    <thead>
                        <tr className=''>
                            <th className='hidden py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 w-[90px] h-full md:block md:text-base'>
                                DNI
                            </th>
                            <th className='py-2 px-1 text-sm ring-2 ring-blue-300 w-[1500px] md:p-2 md:text-base'>
                                Nombre
                            </th>
                            <th className='py-2 px-1 text-sm ring-2 ring-blue-300 w-24 md:p-2 md:text-base'>
                                Celular
                            </th>
                            <th className='py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 md:text-base'>
                                Ver
                            </th>
                            <th className='text-sm ring-2 ring-blue-300 p-2 md:text-base'>
                                Borrar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cliente.map(cliente => {
                            return (
                                <tr key={cliente.docId} className=''>
                                    <td className='hidden py-0 px-1 text-sm ring-2 ring-blue-300 md:p-2 w-[90px] text-justify md:block md:text-base'>
                                        <div className='w-full h-9 flex items-center'>
                                            <p className='text-sm md:text-base'>{cliente.dni}</p>
                                        </div>
                                    </td>
                                    <td className='py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 text-justify md:text-base'>
                                        {cliente.name}
                                    </td>
                                    <td className='py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 w-24 text-center md:text-base'>
                                        {cliente.celular}
                                    </td>
                                    <td className='p-0 ring-2 ring-blue-300 w-20 text-center md:p-2 md:text-base'>
                                        <Link to = {`/ver/cliente/${cliente.docId}`}>
                                            <div
                                                className='p-0 flex justify-center md:p-2 bg-cyan-200 text-center rounded-lg rin-2 ring-gray-500'>
                                                <FaEye size={20} />
                                            </div>
                                        </Link>
                                    </td>
                                    <td className='p-0 ring-2 ring-blue-300 w-20 text-center md:p-2 md:text-base'>
                                        <div
                                            onClick={() => handleRemoveCliente(cliente.docId)}
                                            className='p-0 flex justify-center md:p-2 bg-cyan-200 rounded-lg rin-2 ring-gray-500'>
                                            <TfiTrash className='text-red-600' size={20} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to='/admin'>
                    <button className='font-bold text-center text-white bg-sky-500 p-2 rounded-xl border-2 border-black'>
                        Retornar Administración
                    </button>
                </Link>
            </section>
        </main>
    )
}

export default UserList