import React from 'react'
import { useEffect, useState } from "react"
import { useIdeas } from '../hooks/useIdeas'

const IdeasPage = () => {

  const { fetchIdeas } = useIdeas()

  const [ ideasPhoto, setIdeasPhoto ] = useState([])

  useEffect(() => {
    fetchIdeas()
        .then(data => setIdeasPhoto(data))
        .catch(err => console.error('Error al obtener ideas:', err))
    }, [])

  return (
    <main>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black bg-slate-800">
        <div className='w-full max-w-[1200px] text-center mx-auto bg-blue-100 my-4 rounded-xl py-4'>
          <h1 className='font-playfair font-bold'>
            COMBINACIONES PARA AMBIENTES
          </h1>
          <div className='w-full p-2'>
            <div className='w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ring-2 gap-4 ring-slate-800
              rounded-xl'>
              {ideasPhoto.map(ideasPhoto => {
                return (
                  <div key={ideasPhoto.id} className='flex flex-col ring-2 ring-slate-400 rounded-xl items-center justify-center'>
                    <img 
                      src={ideasPhoto.photo} alt="Foto Combinación de Colores"
                      className='rounded-xl border object-contain'/>
                    <button className='hidden w-1/2 bg-blue-600 hover:bg-blue-200 rounded-lg my-2 text-white font-bold
                    md:block'>
                      Ampliar
                    </button>
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

export default IdeasPage