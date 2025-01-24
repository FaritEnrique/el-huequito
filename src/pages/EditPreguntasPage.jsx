import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePreguntas } from '../hooks/usePreguntas';
import { useNavigate } from 'react-router-dom'
import { TbEdit } from "react-icons/tb";
import { TfiTrash } from "react-icons/tfi";
import Swal from 'sweetalert2'

const PreguntasFrecuentesPage = () => {

    const navigate = useNavigate()

    const { fetchPreguntas, removePregunta } = usePreguntas();

    const [ pregunta, setPregunta ] = useState([])

    useEffect(() => {
        fetchPreguntas()
            .then(data => setPregunta(data))
            .catch(err => console.error('Error al cargar preguntas:', err));
    }, [])

    const handleEditPregunta = (id) => {
        Swal.fire({
            title: "¿Está Seguro de Hacer Modificaciones?",
            text: "No podrá revertir las Modificaciones",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, deseo Editar"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/edit/pregunta/${id}`)
            }
        });
    }
    
    const handleRemovePregunta = (id) => {
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
                removePregunta(id)
                    .then(() => {
                        fetchPreguntas()
                            .then(data => setPregunta(data))
                            .catch(err => console.error('Error al actualizar preguntas:', err))
                        toast.success('La pregunta ha sido eliminada')
                    })
                    .catch(err => {
                        console.error('Error al eliminar pregunta:', err)
                        toast.error('No se pudo eliminar la pregunta')
                    });
            }
        });
    }
    
    const actualizarPregunta = () => {
        fetchPreguntas()
            .then(data => setPregunta(data))
    }

    return (
        <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2
        border-black">
            <section className='w-full max-w-[1200px] mx-auto flex-wrap rounded-lg bg-slate-200 px-4 py-4'>
                <div className='text-xl font-bold text-center mb-4'>
                    PREGUNTAS FRECUENTES
                </div>
                <div className='w-full flex justify-between'>
                    <Link to='/new-question' className='w-1/2 md:w-1/4 p-2'>
                        <button className='w-full bg-sky-500 text-center text-white font-bold p-2 rounded-xl mb-4 border-2 border-black'>
                            Crear Pregunta
                        </button>
                    </Link>
                    <Link to='/admin' className='w-1/2 md:w-1/4 p-2'>
                        <button className='w-full bg-sky-500 text-center text-white font-bold p-2 rounded-xl mb-4 border-2 border-black'>
                            Volver
                        </button>
                    </Link>
                </div>

                
                    {pregunta.map(pregunta => {
                        return (
                            <div key={pregunta.docId} className='border-2 border-blue-300 p-6 rounded-xl mb-4'>
                                <p className='mb-2'>
                                    <strong className='text-justify'>{ pregunta.pregunta }</strong>
                                </p>
                                <p className='text-justify mb-4'>
                                    { pregunta.respuesta}
                                </p>
                                <div className='flex justify-end space-x-4'>
                                    <button
                                        className='p-4 cursor-pointer bg-white border-2 border-black rounded-xl'
                                        title='Editar'
                                        onClick={() => handleEditPregunta(pregunta.id)}>
                                        <TbEdit size={30} />
                                    </button>
                                    <button
                                        className='p-4 cursor-pointer bg-white border-2 border-black rounded-xl'
                                        title='Borrar'
                                        onClick={() => handleRemovePregunta(pregunta.id)}>
                                        <TfiTrash size={30} />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
            </section>
        </main>
    )
}

export default PreguntasFrecuentesPage