import React, { useEffect, useState } from 'react';
import useElHuequito from '../hooks/useElHuequito';

const PromocionPage = () => {
  const { fetchPromotions } = useElHuequito();
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPromotions = async () => {
      setLoading(true);
      const data = await fetchPromotions();
      setPromotions(data);
      setLoading(false);
    };
    loadPromotions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Promociones Disponibles</h1>
      {loading ? (
        <p>Cargando promociones...</p>
      ) : promotions.length === 0 ? (
        <p>No hay promociones disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {promotions.map((promotion) => (
            <div key={promotion.docId} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{promotion.title}</h2>
              <p>{promotion.description}</p>
              <p className="text-sm text-gray-500">Fecha de inicio: {new Date(promotion.startDate).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500">Fecha de fin: {new Date(promotion.endDate).toLocaleDateString()}</p>
              <img src={promotion.image} alt={promotion.title} className="w-full h-auto mt-2" />
              <p className="text-sm text-gray-500">{promotion.isActive ? 'Activa' : 'Inactiva'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromocionPage;