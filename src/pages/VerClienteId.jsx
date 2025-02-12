// src/pages/VerClienteId.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useClientes from '../hooks/useClientes';
import Swal from 'sweetalert2';

const VerClienteId = () => {
  const { id } = useParams();
  const { obtenerCliente, editarCliente } = useClientes();

  const [cliente, setCliente] = useState({
    dni: '',
    nombre: '',
    direccion: '',
    celular: '',
    correo: '',
    condicion: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerCliente(id)
      .then((data) => {
        if (data) {
          // Asegurar que los datos estén limpios antes de mostrar
          setCliente({
            ...data,
            nombre: data.nombre.trim(),
            direccion: data.direccion.trim(),
            correo: data.correo.trim().toLowerCase(),
            celular: data.celular.replace(/\D/g, '').startsWith('51')
              ? data.celular.replace(/\D/g, '').substring(2)
              : data.celular.replace(/\D/g, ''),
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'No se encontró el cliente.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener el cliente', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo cargar la información del cliente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await editarCliente(id, cliente);
      Swal.fire({
        title: 'Éxito',
        text: 'Cliente actualizado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error al actualizar cliente', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al actualizar el cliente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando información...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Detalle del Cliente</h1>
        <form className="space-y-4">
          <InputField label="DNI" name="dni" value={cliente.dni} disabled />
          <InputField label="Nombre" name="nombre" value={cliente.nombre} onChange={handleChange} editable={isEditing} />
          <InputField label="Dirección" name="direccion" value={cliente.direccion} onChange={handleChange} editable={isEditing} />
          <InputField label="Celular" name="celular" value={cliente.celular} onChange={handleChange} editable={isEditing} />
          <InputField label="Correo" name="correo" value={cliente.correo} onChange={handleChange} editable={isEditing} />

          <div>
            <label className="block text-sm font-semibold text-gray-700">Condición</label>
            {isEditing ? (
              <select
                name="condicion"
                value={cliente.condicion}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Seleccione una opción</option>
                <option value="Propietario">Dueño de Obra</option>
                <option value="Pintor">Pintor</option>
                <option value="Maestro">Maestro de Obra</option>
              </select>
            ) : (
              <p className="p-2 border rounded bg-gray-100">{cliente.condicion || 'No especificado'}</p>
            )}
          </div>
        </form>

        <div className="flex justify-between items-center mt-6">
          <Link to="/admin">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition-all duration-200">
              Volver
            </button>
          </Link>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition-all duration-200"
            >
              Guardar
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition-all duration-200"
            >
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, editable = false, disabled = false }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    {editable ? (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
    ) : (
      <p className="p-2 border rounded bg-gray-100">{value || 'No especificado'}</p>
    )}
  </div>
);

export default VerClienteId;