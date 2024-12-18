import React from 'react'
import { useState, useEffect } from 'react'
import useElHuequito from '../hooks/useElHuequito'
import { useNavigate } from 'react-router-dom'

const PreguntasFrecuentesPage = () => {

  const navigate = useNavigate()

  const { fetchPreguntas } = useElHuequito()
  
  const [ pregunta, setPregunta ] = useState([])
  
  useEffect(() => {
    fetchPreguntas()
      .then(data => setPregunta(data))
    }, [])

  return (
    <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2
    border-black">
      <section className='w-full max-w-[1200px] mx-auto flex-wrap rounded-lg bg-slate-200 px-4 py-4'>
        <div className='text-xl font-bold text-center mb-4'>
          PREGUNTAS FRECUENTES
        </div>
          {pregunta.map(pregunta => {
            return (
              <div key={pregunta.docId} className='border-2 border-blue-300 p-6 rounded-xl mb-4'>
                <p className='mb-2'>
                  <strong className='text-justify'>{ pregunta.pregunta }</strong>
                </p>
                <p className='text-justify'>
                  { pregunta.respuesta}
                </p>    
              </div>
            )
          })}
      </section>
    </main>
  )
}

export default PreguntasFrecuentesPage