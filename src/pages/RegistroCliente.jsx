import React from 'react'
import { useForm } from 'react-hook-form'
import { useClientes } from '../hooks/useClientes';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegistroCliente = () => {

  const navigate = useNavigate()

  const { crearCliente } = useClientes();

  const { register, formState: { errors } , handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const respCrearCliente = await crearCliente(data);
      if (respCrearCliente?.id) {
        reset();
        Swal.fire({
          title: 'Buen Trabajo',
          text: 'El registro de un Nuevo Cliente se realizó con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          timer: 5000,
          timerProgressBar: true,
        }).then(() => navigate('/')); // Navega tras mostrar el mensaje
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un problema al guardar el Cliente',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        })
      }
    };

  return (
    <section className='container w-full bg-green-200 mx-auto my-12 rounded-2xl p-6 shadow-2xl shadow-blue-400 md:w-3/4 lg:w-1/2'>
        <h1 className='font-extrabold text-center p-4'>REGISTRO DE CLIENTES</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black rounded-lg p-6'>
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">DNI N°:</label>
            <br />
            <input placeholder='Ejem: 05245....' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('dni', { required: true, maxLength: 8, pattern: /^[0-9]{8}$/ })} />
            {errors.dni?.type === 'required' && <p className='text-red-500'>El DNI es obligatorio</p>}
            {errors.dni?.type === 'minLength' && <p className='text-red-500'>El DNI debe tener 8 dígitos</p>}
            {errors.dni?.type === 'maxLength' && <p className='text-red-500'>El DNI no puede superar los 8 dígitos</p>}
            {errors.dni?.type === 'pattern' && <p className='text-red-500'>El DNI debe contener solo números</p>}
          </div >
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">Nombre Completo:</label>
            <br />
            <input placeholder='Ejem: Juan Perez' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('name', { required: true, maxLength: 35, pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s'-]+$/ })} />
            {errors.name?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
            {errors.name?.type === 'pattern' && <p className='text-red-500'>El nombre solo debe contener letras y espacios</p>}
          </div >
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">Dirección:</label>
            <br />
            <input placeholder='Calle Morona N° 728' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('direccion', {required: true, maxLength: 30})} />
            {errors.direccion?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">Correo:</label>
            <br />
            <input placeholder='ejemplo@dominio.com' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="email" {...register('correo', {required: true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})} />
            {errors.correo?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full mb-4'>
            <label className='p-2' htmlFor="">Número de Celular:</label>
            <br />
            <input placeholder='900569803' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('celular', { required: true, pattern: /^[0-9]{9,12}$/ })} />
            {errors.celular?.type === 'required' && <p className='text-red-500'>El número de celular es obligatorio</p>}
            {errors.celular?.type === 'minLength' && <p className='text-red-500'>El celular debe tener 9 dígitos</p>}
            {errors.celular?.type === 'pattern' && <p className='text-red-500'>El celular debe contener solo números</p>}
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="" className='mr-10 p-2'>Condición:</label>
            <select {...register('condicion', {required: true})} className='border-2 border-black'>
              <option value=""></option>
              <option value="Propietario">Dueño de Obra</option>
              <option value="Pintor">Pintor</option>
              <option value="Maestro">Maestro de Obra</option>
            </select>
            {errors.nacionalidad?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full text-center'>
            <input
                type="submit" value='Guardar'
                className='ring-white ring-4 bg-slate-600 rounded-lg text-bold py-2 px-4 text-white hover:bg-blue-400'/>
          </div>
        </form>
    </section>
  )
}

export default RegistroCliente
