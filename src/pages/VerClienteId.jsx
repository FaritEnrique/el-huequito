// src/pages/VerClienteId.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useClientes } from '../hooks/useClientes';
import Swal from 'sweetalert2';

const VerClienteId = () => {
  const { id } = useParams();
  const { obtenerCliente } = useClientes();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    obtenerCliente(id).then(setCliente);
  }, [id]);

  if (!cliente) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Cliente: {cliente.name}</h1>
      <p>DNI: {cliente.dni}</p>
      <Link to='/admin'>Volver</Link>
    </div>
  );
};

export default VerClienteId;