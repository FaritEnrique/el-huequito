import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useElHuequito from '../hooks/useElHuequito';
import Swal from 'sweetalert2';


const EditarPreguntaPage = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { obtenerPregunta, editarPregunta } = useElHuequito()

    const [ form, setForm ] = useState({
        pregunta: '',
        respuesta: ''
    })

    useEffect(() => {
        obtenerPregunta(id)
            .then(data => 
                //console.log(data)
                setForm(data)
            )
            .catch(error => console.error('Error obteniendo pregunta: ', error))
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm ({ ...form, [name]: value })
    }

    const handleSave = async (event) => {
        event.preventDefault();

        try {
            const respEditarPregunta = await editarPregunta(form, id);
            console.log(respEditarPregunta);
            if (respEditarPregunta && respEditarPregunta.success) {
                setForm({
                    pregunta: '',
                    respuesta: ''
                });
                
                navigate('/edit-preg');

                Swal.fire({
                    title: 'Buen Trabajo',
                    text: 'La Modificación de los Datos de la Pregunta, se realizó con éxito',
                    icon: 'success',
                    buttons: 'Aceptar',
                    timer: 5000
                })
            }
        } catch (error) {
            console.error("Error al editar pregunta:", error)
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al editar los datos',
                icon: 'error',
                timer: 3000
            })
        }

    }

    return (
        <div className='flex justify-center mx-auto'>
            <div className='w-full bg-slate-400 py-4 px-2 mx-auto rounded-xl my-4 sm:w-3/4 md:w-3/4 md:px-6 lg:w-1/2 lg:px-6'>
                <div className='bg-white py-2'>
                    <h2 className='mb-2 font-extrabold text-2xl text-center'>EDITAR PREGUNTA: {id}</h2>
                </div>
                <form onSubmit={handleSave} className='mt-4 p-2 w-full bg-black rounded-xl'>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Pregunta</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text"
                            name='pregunta'
                            required
                            onChange={handleChange}
                            value={form.pregunta}
                        />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Respuesta</span>
                        <textarea className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black'
                            name='respuesta'
                            required
                            onChange={handleChange}
                            value={form.respuesta}
                        />
                    </label>
                        <div className='flex justify-center'>
                            <input type="submit" value="Guardar" className='bg-blue-500 border border-black hover:bg-red-200 ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                        </div>
                </form>
            </div>
        </div>
    )
}

export default EditarPreguntaPage