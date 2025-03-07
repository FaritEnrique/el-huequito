import React from 'react';
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp, FaRegTrashAlt } from "react-icons/fa";

const MensajeList = ({ mensajes, respuesta, handleRespuestaChange, handleEnviarEmail, handleEnviarWhatsApp, handleDeleteMensaje }) => {
  return (
    <div className='w-full mb-4 px-1 md:px-4'>
      <h1 className='w-full mb-4 text-center font-bold md:text-xl lg:text-2xl'>
        Listado de Mensajes
      </h1>
      {mensajes.map(mensaje => (
        <div key={mensaje.docId} className='w-full mx-auto ring-2 ring-sky-400 space-y-2 rounded-xl mt-4'>
          <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
            <div className='flex gap-4'>
              <span>Nombre:</span><p>{mensaje.nombre}</p>
            </div>
            <div className='w-64 flex justify-between'>
              <span>Celular:</span><p>{mensaje.celular}</p>
            </div>
          </div>
          <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
            <div className='flex gap-4'>
              <span>Correo:</span><p>{mensaje.correo}</p>
            </div>
            <div className='w-64 flex justify-between'>
              <span>Comunicación:</span><p>{mensaje.comunicacion}</p>
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
              value={mensaje.mensaje}
              readOnly
              className='ring-2 ring-black w-full bg-white rounded-xl p-2' />
          </div>
          {mensaje.mensaje.trim() !== "" && (
            <div className='w-full mt-4 text-justify p-2 lg:p-4'>
              <textarea
                value={respuesta[mensaje.docId] || ""}
                onChange={(e) => handleRespuestaChange(mensaje.docId, e.target.value)}
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
                onClick={() => handleDeleteMensaje(mensaje.id)}
                className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
                <FaRegTrashAlt size='20' /> Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MensajeList;