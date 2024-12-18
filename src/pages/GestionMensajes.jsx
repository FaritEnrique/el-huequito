import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegTrashAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const GestionMensajes = () => {
  return (
    <main>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        <div className="max-w-[1200px] w-full bg-black rounded-xl flex flex-col p-4 mx-auto my-4 md:flex-row items-center">
          <div className='w-full bg-slate-300'>
            <div className='w-full flex justify-end p-2'>
              <Link>
                <button className='font-bold text-white bg-blue-500 border-2 border-black rounded-xl p-2'>
                  Ir Gestión
                </button>
              </Link>
            </div>
            <div className='w-full mb-4 px-1 md:px-4'>
              <h1 className='w-full mb-4 text-center font-bold md:text-xl lg:text-2xl'>
                Listado de Mensajes
              </h1>
              <div className='w-full mx-auto ring-2 ring-sky-400 space-y-2 rounded-xl'>
                <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
                  <div className='flex gap-4'>
                    <span>Nombre:</span><p>Farit Enrique Espinoza Tuesta</p>
                  </div>
                  <div className='w-64'>
                    <div className='flex justify-between'>
                        <span>Celular:</span><p>900569803</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
                  <div className='flex gap-4'>
                    <span>Correo:</span><p>faritespinoza@gmail.com</p>
                  </div>
                  <div className='w-64'>
                    <div className='flex justify-between'>
                      <span>Comunicación:</span><p>WhatsApp</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-wrap justify-between items-center px-4 md:text-xl'>
                  <div className='flex gap-7'>
                    <span>Fecha:</span><p>24/12/2024</p>
                  </div>
                </div>
                <div className='w- full mt-4 text-justify p-2 lg:p-4'>
                  <textarea name="" id="" className='ring-2 ring-black w-full bg-white rounded-xl p-2'>
                    Texto de Mensaje
                  </textarea>
                </div>
                <div className='flex justify-end p-1 md:p-4'>
                  <div className='w-52 flex justify-between'>
                    <button className='p-4 bg-white rounded-xl border-2 border-black'>
                      <FaRegTrashAlt size='25' className='text-red-500' />
                    </button>
                    <button className='p-4 bg-white rounded-xl border-2 border-black'>
                      <BiMailSend size='25' className='text-black' />
                    </button>
                    <button className='p-4 bg-white rounded-xl border-2 border-black'>
                      <FaWhatsapp size='25' className='text-black' />
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GestionMensajes