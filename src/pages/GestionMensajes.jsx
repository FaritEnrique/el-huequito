import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useElHuequito from '../hooks/useElHuequito';
import { FaRegTrashAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const GestionMensajes = () => {

  const { fetchMensajesContacto, obtenerMensaje, deleteMensaje } = useElHuequito()

  const [ mensaje, setMensaje] = useState([])

  const [ respuesta, setRespuesta ] = useState({})

  useEffect(() => {
    fetchMensajesContacto()
      .then(data => {
        if (Array.isArray(data)) {
          setMensaje(data);
        } else {
          throw new Error("Datos no válidos");
        }
      })
      .catch(err => {
        console.error("Error al obtener los mensajes:", err);
        toast.error("Hubo un problema al cargar los mensajes.");
      });
  }, []);

  const handleRespuestaChange = (docId, value) => {
    setRespuesta(prev => ({ ...prev, [docId]: value }));
  };

  const handleEnviarEmail = (correo, docId) => {
    if (!respuesta[docId]) {
      toast.warning('Por favor escribe una respuesta antes de enviar el email.');
      return;
    }
    const subject = encodeURIComponent("Respuesta a tu mensaje");
    const body = encodeURIComponent(respuesta[docId]);
    window.location.href = `mailto:${correo}?subject=${subject}&body=${body}`;
  };

  const handleEnviarWhatsApp = (celular, docId) => {
    if (!respuesta[docId]) {
      toast.warning('Escribe una respuesta antes de enviar el mensaje de WhatsApp.');
      return;
    }
    const mensajeWhatsApp = encodeURIComponent(respuesta[docId]);
    window.open(`https://wa.me/${celular}?text=${mensajeWhatsApp}`, "_blank");
  };

  const handleDeleteMensaje = (id) => {
    Swal.fire({
      title: "¿Estás Seguro?",
      text: "¡No lo podrás revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMensaje(id)
          .then(() => {
            setMensaje(prevMensajes => prevMensajes.filter(m => m.docId !== id));
            toast.success("El mensaje ha sido eliminado.");
          })
          .catch((error) => {
            console.error("Error eliminando el mensaje:", error);
            toast.error("No se pudo eliminar el mensaje.");
          });
      }
    });
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
                  <div key={mensaje.docId} className='w-full mx-auto ring-2 ring-sky-400 space-y-2 rounded-xl mt-4'>
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
                        <span>Fecha:</span>
                        <p>
                        {mensaje.fecha 
                          ? mensaje.fecha.seconds 
                            ? new Date(mensaje.fecha.seconds * 1000).toLocaleDateString()
                            : new Date(mensaje.fecha).toLocaleDateString()
                          : "Fecha no disponible"}
                        </p>
                      </div>
                    </div>
                    <div className='w-full mt-4 text-justify p-2 lg:p-4'>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        value={mensaje.mensaje}
                        readOnly
                        className='ring-2 ring-black w-full bg-white rounded-xl p-2' />
                    </div>
                    {mensaje.mensaje.trim() !== "" && (
                        <div className='w-full mt-4 text-justify p-2 lg:p-4'>
                          <textarea
                            name="respuestaMensaje"
                            id={`respuestaMensaje-${mensaje.docId}`}
                            value={respuesta[mensaje.docId] || ""}
                            onChange={(e) => handleRespuestaChange(mensaje.docId, e.target.value)}
                            aria-label={`Respuesta para el mensaje de ${mensaje.nombre}`}
                            aria-labelledby={`label-respuesta-${mensaje.docId}`}
                            placeholder="Escribe tu respuesta aquí..."
                            className='ring-2 ring-black w-full bg-white rounded-xl p-2' />
                        </div>
                      )}
                    <div className='flex justify-end p-1 md:p-4'>
                      <div className='w-96 flex justify-between'>
                        <button
                          onClick={() => handleEnviarEmail(mensaje.correo, mensaje.docId)}
                          className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                          <BiMailSend size='25' /> Enviar Mail
                        </button>
                        <button
                          onClick={() => handleEnviarWhatsApp(mensaje.celular, mensaje.docId)}
                          className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
                          <FaWhatsapp size='25' /> Enviar WhatsApp
                        </button>
                        <button
                          onClick={() => handleDeleteMensaje(mensaje.docId)}
                          className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
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