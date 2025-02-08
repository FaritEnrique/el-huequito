// pages/PromocionPage.jsx

import React, { useEffect, useState } from 'react';
import usePromociones from '../hooks/usePromociones';
import Swal from 'sweetalert2';

const PromocionPage = () => {
  const { promociones, cargando, error, fetchPromociones } = usePromociones();
  const [alertShown, setAlertShown] = useState(false); // Para evitar múltiples alertas

  useEffect(() => {
    if (error && !alertShown) {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error',
      });
      setAlertShown(true);
    }
  }, [error, alertShown]);

  useEffect(() => {
    if (!cargando && promociones.length === 0 && !error) {
      fetchPromociones();
    }
  }, [promociones.length, cargando, error, fetchPromociones]);

  if (cargando) {
    return <p>Cargando promociones...</p>;
  }

  if (promociones.length === 0) {
    return <p>No hay promociones disponibles.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Promociones Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {promociones.map((promocion) => (
          <div key={promocion.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{promocion.title}</h2>
            <p>{promocion.description}</p>
            <p className="text-sm text-gray-500">
              Fecha de inicio: {new Date(promocion.startDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Fecha de fin: {new Date(promocion.endDate).toLocaleDateString()}
            </p>
            <img
              src={promocion.image}
              alt={promocion.title}
              className="w-full h-auto mt-2"
            />
            <p className="text-sm text-gray-500">
              {promocion.isActive ? 'Activa' : 'Inactiva'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromocionPage;