import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useElHuequito from '../hooks/useElHuequito';
import { FaRegTrashAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const GestionMensajes = () => {

  const { fetchMensajesContacto, obtenerMensaje, deleteMensaje } = useElHuequito()

  const [ mensaje, setMensaje] = useState([])

  const [ respuesta, setRespuesta ] = useState({})

  useEffect(() => {
    fetchMensajesContacto()
      .then(data => setMensaje(data))
  }, [])

  const handleRespuestaChange = (docId, value) => {
    setRespuesta(prev => ({ ...prev, [docId]: value }));
  };

  

  return (
    <main>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        <div className="max-w-[1200px] w-full bg-black rounded-xl flex flex-col p-4 mx-auto my-4 md:flex-row items-center">
          <div className='w-full bg-slate-300'>
            <div className='w-full flex justify-end p-2'>
              <Link to='/admin'>
                <button className='font-bold text-white bg-blue-500 border-2 border-black rounded-xl p-2'>
                  Ir Gestión
                </button>
              </Link>
            </div>
            <div className='w-full mb-4 px-1 md:px-4'>
              <h1 className='w-full mb-4 text-center font-bold md:text-xl lg:text-2xl'>
                Listado de Mensajes
              </h1>
              {mensaje.map(mensaje => {
                return(
                  <div key={mensaje.docId} className='w-full mx-auto ring-2 ring-sky-400 space-y-2 rounded-xl'>
                    <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
                      <div className='flex gap-4'>
                        <span>Nombre:</span><p>{mensaje.nombre}</p>
                      </div>
                      <div className='w-64'>
                        <div className='flex justify-between'>
                            <span>Celular:</span><p>{mensaje.celular}</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
                      <div className='flex gap-4'>
                        <span>Correo:</span><p>{mensaje.correo}</p>
                      </div>
                      <div className='w-64'>
                        <div className='flex justify-between'>
                          <span>Comunicación:</span><p>{mensaje.comunicacion}</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
                      <div className='flex gap-7'>
                        <span>Fecha:</span><p>{new Date(mensaje.fecha.seconds * 1000).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className='w- full mt-4 text-justify p-2 lg:p-4'>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        value={mensaje.mensaje}
                        readOnly
                        className='ring-2 ring-black w-full bg-white rounded-xl p-2' />
                    </div>
                    {mensaje.mensaje.trim() !== "" && (
                        <div className='w- full mt-4 text-justify p-2 lg:p-4'>
                          <textarea
                            name="respuestaMensaje"
                            id="respuestaMensaje"
                            value=""
                            placeholder="Escribe tu respuesta aquí..."
                            className='ring-2 ring-black w-full bg-white rounded-xl p-2' />
                        </div>
                      )}
                    <div className='flex justify-end p-1 md:p-4'>
                      <div className='w-96 flex justify-between'>
                        <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                          <BiMailSend size='25' /> Enviar Mail
                        </button>
                        <button className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
                          <FaWhatsapp size='25' /> Enviar WhatsApp
                        </button>
                        <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
                          <FaRegTrashAlt size='20' /> Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GestionMensajes