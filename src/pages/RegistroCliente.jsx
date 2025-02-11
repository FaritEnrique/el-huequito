// src/pages/RegistroCliente.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import useClientes from '../hooks/useClientes';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegistroCliente = () => {
  const navigate = useNavigate();
  const { crearCliente } = useClientes();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const nuevoCliente = await crearCliente(data);
      if (nuevoCliente?.id) {
        reset();
        Swal.fire({
          title: 'Buen Trabajo',
          text: 'El registro de un Nuevo Cliente se realizó con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          timer: 5000,
          timerProgressBar: true,
        }).then(() => navigate('/'));
      } else {
        throw new Error('Error al crear cliente');
      }
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un problema al guardar el Cliente',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <section className='container mx-auto my-12 w-full md:w-3/4 lg:w-1/2 p-6 bg-green-200 rounded-2xl shadow-2xl shadow-blue-400'>
      <h1 className='font-extrabold text-center p-4'>REGISTRO DE CLIENTES</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black rounded-lg p-6'>
        <InputField label="DNI N°" name="dni" register={register} errors={errors}
          validation={{ required: true, pattern: /^[0-9]{8}$/ }} placeholder="Ejem: 05245...."
        />
        <InputField label="Nombre Completo" name="nombre" register={register} errors={errors}
          validation={{ required: true, pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s'-]+$/ }} placeholder="Juan Perez"
        />
        <InputField label="Dirección" name="direccion" register={register} errors={errors}
          validation={{ required: true, maxLength: 100 }} placeholder="Calle Morona N° 728"
        />
        <InputField label="Correo" name="correo" register={register} errors={errors}
          validation={{ required: true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ }} placeholder="ejemplo@dominio.com"
        />
        <InputField label="Número de Celular" name="celular" register={register} errors={errors}
          validation={{ required: true, pattern: /^[0-9]{9}$/ }} placeholder="900569803"
        />
        <div className='w-full mb-4'>
          <label className='p-2'>Condición:</label>
          <select {...register('condicion', { required: true })} className='border-2 border-black'>
            <option value="">Seleccione...</option>
            <option value="Propietario">Dueño de Obra</option>
            <option value="Pintor">Pintor</option>
            <option value="Maestro">Maestro de Obra</option>
          </select>
          {errors.condicion && <p className='text-red-500'>Este campo es obligatorio</p>}
        </div>
        <div className='w-full text-center'>
          <button type="submit" className='bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-blue-400'>
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};

const InputField = ({ label, name, register, errors, validation, placeholder }) => (
  <div className='w-full mb-3'>
    <label className='p-2'>{label}:</label>
    <input
      placeholder={placeholder}
      className='w-full py-2 border border-black rounded-lg px-4 hover:border-blue-600'
      type="text"
      {...register(name, validation)}
    />
    {errors[name] && <p className='text-red-500'>{`El campo ${label} es inválido`}</p>}
  </div>
);

export default RegistroCliente;