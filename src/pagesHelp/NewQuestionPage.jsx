import React from 'react';
import useElHuequito from '../hooks/useElHuequito';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const NewQuestionPage = () => {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { crearPregunta } = useElHuequito();

  const onSubmit = async (data) => {
    try {
      const respCrearPregunta = await crearPregunta(data);
      console.log('Respuesta de crearPregunta:', respCrearPregunta);
      if (respCrearPregunta) {
        reset();
        Swal.fire({
          title: 'Buen Trabajo',
          text: 'El registro de su Pregunta se realizó con éxito',
          icon: 'success',
          timer: 5000,
        });
        navigate('/edit-preg'); // Redirección tras mensaje de éxito
      } else {
        throw new Error('Error al crear la Pregunta');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un problema al guardar la Pregunta',
        icon: 'error',
      });
    }
  };

  return (
    <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2 border-black">
      <section className="w-full max-w-[1200px] mx-auto flex-wrap rounded-lg bg-slate-200 px-4 py-4 md:w-3/4">
        <h1 className="font-bold text-center w-full p-4">AGREGAR PREGUNTA FRECUENTE</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="ring-4 ring-sky-400 mx-auto rounded-lg p-6 bg-slate-300 md:w-3/4">
          {/* Campo Pregunta */}
          <div className="w-full mb-3">
            <label className="p-2" htmlFor="pregunta">Ingresar Pregunta:</label>
            <input
              id="pregunta"
              placeholder="Ejem: ¿Qué pintura utilizo? ...."
              className="py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full"
              type="text"
              {...register('pregunta', {
                required: 'El campo de pregunta es obligatorio',
                maxLength: {
                  value: 150,
                  message: 'El campo de pregunta no puede superar los 150 caracteres',
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s¿?'’\-]+$/,
                  message: 'La pregunta solo debe contener letras, espacios y signos de interrogación',
                },
              })}
            />
            {errors.pregunta && <p className="text-red-500 mt-2">{errors.pregunta.message}</p>}
          </div>

          {/* Campo Respuesta */}
          <div className="w-full mb-3">
            <label className="p-2" htmlFor="respuesta">Respuesta:</label>
            <textarea
              id="respuesta"
              placeholder="Se recomienda utilizar ..."
              className="h-[200px] py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full"
              {...register('respuesta', {
                required: 'El campo de respuesta es obligatorio',
                maxLength: {
                  value: 400,
                  message: 'El campo de respuesta no puede superar los 400 caracteres',
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9\s',.!?;:\-()"]+$/,
                  message: 'La respuesta solo debe contener letras, números y caracteres válidos',
                },
              })}
            />
            {errors.respuesta && <p className="text-red-500 mt-2">{errors.respuesta.message}</p>}
          </div>

          {/* Botón Enviar */}
          <div className="w-full text-center">
            <input
              type="submit"
              value="Enviar"
              className="ring-white ring-4 bg-slate-600 rounded-lg text-bold py-2 px-4 text-white hover:bg-blue-400"
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default NewQuestionPage;