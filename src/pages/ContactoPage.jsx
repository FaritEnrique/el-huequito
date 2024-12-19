import React from 'react'
import "@fontsource/playfair-display/400-italic.css"; // Italic
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useElHuequito from '../hooks/useElHuequito';

const ContactoPage = () => {

  const navigate = useNavigate()

  const { register, formState: { errors } , handleSubmit, reset } = useForm();

  const { crearMensaje } = useElHuequito()

  const onSubmit = async (data) => {
    try {
      const respCrearMensaje = await crearMensaje(data);
      if (respCrearMensaje?.id) {
        reset();
        Swal.fire({
          title: 'Buen Trabajo',
          text: 'El registro de su Mensaje se realizó con éxito',
          icon: 'success',
          buttons: 'Aceptar',
          timer: 5000
        }).then(() => navigate('/')); // Navega tras mostrar el mensaje
      } else {
        throw new Error('Error al crear el mensaje');
      }
    } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un problema al guardar el Mensaje',
          icon: 'error',
          buttons: 'Aceptar',
        })
    }
  };
  
  return (
    <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2
    border-black">
      
      <section className='w-full max-w-[1200px] mx-auto flex-wrap rounded-lg'>
        
        <div className="w-full min-h-10 aspect-[5/1] flex bg-custom-pattern bg-contain bg-center bg-no-repeat
        ring-4 ring-slate-200 rounded py-4 mb-4 items-center justify-end">
          
          <h1 className='w-1/3 bg-black py-2 font-extrabold font-playfair text-center text-white sm:text-xl md:text-2xl
          md:w-1/3 lg:text-3xl' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
            Contacta con Nosotros
          </h1>
        </div>
        
        <div className='w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 flex flex-wrap lg:flex-nowrap gap-4 mt-8'>
          
          <div className='w-full md:w-[48%] bg-slate-300 rounded-xl ring-4 ring-sky-400 px-4 font-bold flex flex-col
          justify-center'>
            <div className='w-full font-extrabold'>
              INFORMACIÓN DE CONTACTO
            </div>
            <div className='w-full flex gap-10 my-2'>
              <p className ='w-20 '>Dirección:</p>
              <span>Jirón Arica N° 851</span>
            </div>
            <div className='w-full flex gap-10 my-2'>
              <p className='w-20'>Teléfono:</p><span>(065) 234258</span>
            </div>
            <div className='w-full flex gap-10 my-2'>
              <p className='w-20'>Teléfono:</p><span>(065) 234258</span>
            </div>
            <div className='w-full flex gap-10 my-2'>
              <p className='w-20'>Celular:</p><spam>+51 954 855 550</spam>
            </div>
            <div className='w-full flex gap-10 my-2'>
              <p className='w-20'>Correo:</p><span>elhuequito@gmail.com</span>
            </div>
            <div className='w-full flex gap-10 my-2'>
              <p className='bg-white p-2 text-justify'>El horario de atención es de lunes a sabado de 8:00 a.m a 8:00 p.m. 
                y los días domingos de 8:00 a.m. a 1:00 p.m.</p>
            </div>
            <Link to='/preguntas-frecuentes' className = 'font-extrabold text-sky-600'>
              Preguntas Frecuentes
            </Link>
          </div>
          
          <div className='w-full md:w-[48%] flex items-center justify-center rounded-xl ring-4 ring-sky-400 bg-white'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1183.6323308558437!2d-73.24876103017895!3d-3.7559405870522773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1733866184851!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
              className='rounded-xl'>
            </iframe>
          </div>
          
          <div className='w-full ring-4 ring-sky-400 rounded-xl mx-auto flex justify-around
          md:p-4 bg-white lg:flex-col
          lg:w-[120px]'>
            <div className='w-[80px] h-[80px] bg-slate-500 flex items-center justify-center rounded-xl'>
              <a 
                className="hover:bg-green-300 p-2 rounded-full bg-green-100 ring ring-gray-500 flex items-center
                justify-center transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
                href="https://api.whatsApp.com/send?phone=+51943871693&text=Hola"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp El Huequito"
                style={{
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.8)" // Sombra doble
                }}
              >
                <img
                  className="rounded-lg w-12 h-12"
                  src="./images/imagenRedes/whatsApp.png"
                  alt="Logo WhatsApp Contacto Huequito"
                />
              </a>
            </div>
            <div className='w-[80px] h-[80px] bg-slate-500 flex items-center justify-center rounded-xl'>
              <a
                className="hover:bg-blue-300 p-2 rounded-full bg-blue-100 ring ring-gray-500 flex items-center
                justify-center transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
                href="https://web.facebook.com/profile.php?id=100057419862464&mibextid=LQQJ4d&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook El Huequito"
                style={{
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.8)"
                }}
              >
                <img
                  className="rounded-lg w-12 h-12"
                  src="./images/imagenRedes/facebook.png"
                  alt="Logo Facebook Pagina Huequito"
                />
              </a>
            </div>
            <div className='w-[80px] h-[80px] bg-slate-500 flex items-center justify-center rounded-xl'>
              <a
                className="hover:bg-orange-300 p-2 rounded-full bg-orange-100 ring ring-gray-500 flex items-center
                justify-center transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
                href="https://www.instagram.com/p/DA5C54tO16m/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram El Huequito"
                style={{
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.8)"
                }}
              >
                <img
                  className="rounded-lg w-12 h-12"
                  src="./images/imagenRedes/Instagram-Icon.png"
                  alt="Logo Instagram El Huequito"
                />
              </a>
            </div>
            <div className='w-[80px] h-[80px] bg-slate-500 flex items-center justify-center rounded-xl'>
              <a
                className="hover:bg-red-300 p-2 rounded-full bg-red-100 ring ring-gray-500 flex items-center
                justify-center transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
                href="https://www.youtube.com/@danikahtravelsac7404"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube El Huequito"
                style={{
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.8)"
                }}
              >
                <img
                  className="rounded-lg w-12 h-12"
                  src="./images/imagenRedes/youtube.png"
                  alt="Logo Youtube El Huequito"
                />
              </a>
            </div>
          </div>
        </div>
        <div className='w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 lg:flex-nowrap mt-4'>
          <h1 className='text-center py-2 text-xl text-white font-bold font-cormorant italic md:text-2xl lg:text-3xl'>
            Escríbenos y te responderemos dentro de las próximas 24 horas
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className='ring-4 ring-sky-400 mx-auto rounded-lg p-6 bg-slate-300 md:w-3/4 lg:w-1/2'>
            <div className='w-full mb-3'>
              <label className='p-2' htmlFor="">Nombre Completo:</label>
              <br />
              <input placeholder='Ejem: Juan Pérez ....' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
              w-full' type="text" {...register('nombre', { required: true, maxLength: 35, pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s'-]+$/ })} />
              {errors.nombre?.type === 'required' && <p className='text-red-500'>El nombre es obligatorio</p>}
              {errors.nombre?.type === 'maxLength' && <p className='text-red-500'>El DNI no puede superar los 35 dígitos</p>}
              {errors.nombre?.type === 'pattern' && <p className='text-red-500'>El nombre solo debe contener letras y espacios</p>}
            </div >
            <div className='w-full mb-4'>
              <label className='p-2' htmlFor="">Número de Celular:</label>
              <br />
              <input placeholder='979951122' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
              w-full' type="text" {...register('celular', { required: true, pattern: /^[0-9]{9,12}$/ })} />
              {errors.celular?.type === 'required' && <p className='text-red-500'>El número de celular es obligatorio</p>}
              {errors.celular?.type === 'minLength' && <p className='text-red-500'>El celular debe tener 9 dígitos</p>}
              {errors.celular?.type === 'pattern' && <p className='text-red-500'>El celular debe contener solo números</p>}
            </div>
            <div className='w-full mb-3'>
              <label className='p-2' htmlFor="">Correo:</label>
              <br />
              <input placeholder='ejemplo@dominio.com' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
              w-full' type="email" {...register('correo', {required: true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})} />
              {errors.correo?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
            </div>
            <div className='w-full mb-3'>
              <label htmlFor="" className='mr-10 p-2'>Medio de Respuesta:</label>
              <br />
              <select {...register('comunicacion', {required: true})}>
                <option value=""></option>
                <option value="Celular">Celular (WhatsApp)</option>
                <option value="Correo">Correo</option>
                <option value="Llamada">Llamada</option>
              </select>
              {errors.comunicacion?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
            </div>
            <div className='w-full mb-3'>
              <label className='p-2' htmlFor="">Mensaje:</label>
                <p className='text-red-500 text-justify'>Se recomienda revisar previamente el link de preguntas frecuentes</p>
                <br />
              <textarea 
                placeholder='Tengo que pintar una pared nueva, quisiera que me orienten' 
                className='h-[200px] py-2 border border-black rounded-lg px-4 hover:border-blue-600 w-full resize-none focus:ring-4 focus:ring-blue-500 focus:outline-none'
                {...register('mensaje', { required: true, maxLength: 400, pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s',.!?;:-]+$/ })}
              />
              {errors.mensaje?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
              {errors.mensaje?.type === 'pattern' && <p className='text-red-500'>Sólo debe contener letras y espacios</p>}
            </div>
            <div className='w-full text-center'>
              <input type="submit" value='Enviar' className='ring-white ring-4 bg-slate-600 rounded-lg text-bold py-2 px-4 text-white hover:bg-blue-400' />
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactoPage