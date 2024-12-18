import React from 'react'
import "@fontsource/playfair-display/400-italic.css"; // Italic
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useElHuequito from '../hooks/useElHuequito';

const ContactoPage = () => {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { crearMensaje } = useElHuequito();

  const onSubmit = async (data) => {
    try {
      const respCrearMensaje = await crearMensaje(data);
      if (respCrearMensaje?.id) {
        reset();
        Swal.fire({
          title: 'Buen Trabajo',
          text: 'El registro de su mensaje se realizó con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          timer: 5000
        }).then(() => navigate('/'));
      } else {
        throw new Error('Error al crear el mensaje');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un problema al guardar el mensaje. Por favor, intente nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2 border-black">
      <section className="w-full max-w-[1200px] mx-auto flex-wrap rounded-lg">
        <div className="w-full min-h-10 aspect-[5/1] flex bg-custom-pattern bg-contain bg-center bg-no-repeat ring-4 ring-slate-200 rounded py-4 mb-4 items-center justify-end">
          <h1 className="w-1/3 bg-black py-2 font-extrabold font-playfair text-center text-white sm:text-xl md:text-2xl lg:text-3xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
            Contacta con Nosotros
          </h1>
        </div>

        <div className="w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 flex flex-wrap lg:flex-nowrap gap-4 mt-8">
          {/* Información de contacto */}
          <div className="w-full md:w-[49%] lg:w-[50%] bg-slate-300 rounded-xl ring-4 ring-sky-400 px-4 font-bold flex flex-col justify-center">
            <h2 className="w-full font-extrabold mb-4">INFORMACIÓN DE CONTACTO</h2>
            <div className="mb-2">
              <p className="font-semibold">Dirección:</p>
              <span>Jirón Arica N° 851</span>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Teléfono:</p>
              <span>(065) 234258</span>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Celular:</p>
              <span>+51 954 855 550</span>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Correo:</p>
              <span>elhuequito@gmail.com</span>
            </div>
            <p className="bg-white p-2 text-justify">
              El horario de atención es de lunes a sábado de 8:00 a.m. a 8:00 p.m. y los domingos de 8:00 a.m. a 1:00 p.m.
            </p>
            <Link to="/preguntas-frecuentes" className="font-extrabold text-sky-600 mt-4">
              Preguntas Frecuentes
            </Link>
          </div>

          {/* Mapa */}
          <div className="w-full md:w-[48%] lg:w-[50%] flex items-center justify-center rounded-xl ring-4 ring-sky-400 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1183.6323308558437!2d-73.24876103017895!3d-3.7559405870522773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1733866184851!5m2!1ses-419!2spe"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 lg:flex-nowrap mt-4">
          <h1 className="text-center py-2 text-xl text-white font-bold font-cormorant italic md:text-2xl lg:text-3xl">
            Escríbenos y te responderemos dentro de las próximas 24 horas
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="ring-4 ring-sky-400 mx-auto rounded-lg p-6 bg-slate-300 md:w-3/4 lg:w-1/2">
            {/* Nombre */}
            <div className="w-full mb-3">
              <label className="p-2" htmlFor="nombre">Nombre Completo:</label>
              <input
                id="nombre"
                placeholder="Ejem: Juan Pérez ...."
                className="py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full"
                type="text"
                {...register('nombre', { required: 'El nombre es obligatorio', maxLength: { value: 35, message: 'Máximo 35 caracteres' }, pattern: { value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s'-]+$/, message: 'El nombre solo debe contener letras y espacios' } })}
              />
              {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
            </div>
            {/* Celular */}
            <div className="w-full mb-4">
              <label className="p-2" htmlFor="celular">Número de Celular:</label>
              <input
                id="celular"
                placeholder="979951122"
                className="py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full"
                type="text"
                {...register('celular', { required: 'El número de celular es obligatorio', pattern: { value: /^[0-9]{9,12}$/, message: 'Debe contener entre 9 y 12 números' } })}
              />
              {errors.celular && <p className="text-red-500">{errors.celular.message}</p>}
            </div>
            {/* Correo */}
            <div className="w-full mb-3">
              <label className="p-2" htmlFor="correo">Correo:</label>
              <input
                id="correo"
                placeholder="ejemplo@dominio.com"
                className="py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full"
                type="email"
                {...register('correo', { required: 'El correo es obligatorio', pattern: { value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, message: 'Correo inválido' } })}
              />
              {errors.correo && <p className="text-red-500">{errors.correo.message}</p>}
            </div>
            {/* Medio de respuesta */}
            <div className="w-full mb-3">
              <label htmlFor="comunicacion" className="p-2">Medio de Respuesta:</label>
              <select id="comunicacion" {...register('comunicacion', { required: 'Seleccione un medio de respuesta' })}>
                <option value="">Seleccione una opción</option>
                <option value="0">Celular (WhatsApp)</option>
                <option value="1">Correo</option>
                <option value="2">Llamada</option>
              </select>
              {errors.comunicacion && <p className="text-red-500">{errors.comunicacion.message}</p>}
            </div>
            {/* Mensaje */}
            <div className="w-full mb-3">
              <label htmlFor="mensaje" className="p-2">Mensaje:</label>
              <textarea
                id="mensaje"
                placeholder="Tengo que pintar una pared nueva, quisiera que me orienten"
                className="h-[200px] py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full"
                {...register('mensaje', { required: 'Este campo es necesario', maxLength: { value: 400, message: 'Máximo 400 caracteres' }, pattern: { value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s',.!?;:-]+$/, message: 'Mensaje inválido' } })}
              />
              {errors.mensaje && <p className="text-red-500">{errors.mensaje.message}</p>}
            </div>
            <div className="w-full text-center">
              <input type="submit" value="Enviar" className="ring-white ring-4 bg-slate-600 rounded-lg font-bold py-2 px-4 text-white hover:bg-blue-400" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactoPage;