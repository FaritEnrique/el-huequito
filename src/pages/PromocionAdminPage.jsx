import React, { useState, useEffect } from "react";
import useElHuequito from "../hooks/useElHuequito";
import PromotionForm from "./PromotionForm";
import Swal from "sweetalert2";

const PromocionAdminPage = () => {
  const { fetchPromotions, createPromotion, updatePromotion, deletePromotion } = useElHuequito();
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPromotion, setEditPromotion] = useState(null);

  useEffect(() => {
    loadPromotions();
  }, []);

  const loadPromotions = async () => {
    setLoading(true);
    const data = await fetchPromotions();
    setPromotions(data);
    setLoading(false);
  };

  const handleCreatePromotion = async (newPromotion) => {
    const result = await createPromotion(newPromotion);
    if (result) {
      Swal.fire("Guardado", "Promoción creada correctamente.", "success");
      loadPromotions();
    }
  };

  const handleUpdatePromotion = async (updatedFields) => {
    console.log("Actualizando promoción con datos:", updatedFields); // Depuración
    const success = await updatePromotion(editPromotion.docId, updatedFields);
    if (success) {
      Swal.fire("Actualizado", "Promoción actualizada correctamente.", "success");
      setEditPromotion(null);
      loadPromotions();
    }
  };

  const handleDeletePromotion = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar promoción?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    });

    if (result.isConfirmed) {
      const success = await deletePromotion(id);
      if (success) {
        Swal.fire("Eliminado", "Promoción eliminada correctamente.", "success");
        loadPromotions();
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrar Promociones</h1>

      {/* Formulario de creación o edición */}
      {editPromotion ? (
        <PromotionForm
          onSave={handleUpdatePromotion}
          initialData={editPromotion}
          isEditing
          onCancel={() => setEditPromotion(null)}
        />
      ) : (
        <PromotionForm onSave={handleCreatePromotion} />
      )}

      {/* Lista de promociones */}
      {loading ? (
        <p>Cargando promociones...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {promotions.map((promotion) => (
            <div key={promotion.docId} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{promotion.title}</h2>
              <p>{promotion.description}</p>
              <p>Inicio: {new Date(promotion.startDate).toLocaleString()}</p>
              <p>Fin: {new Date(promotion.endDate).toLocaleString()}</p>
              <p>Estado: {promotion.isActive ? "Activa" : "Inactiva"}</p>
              <img src={promotion.image} alt="Promoción" className="w-full h-auto mt-2" />
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => {
                    console.log("Editando promoción:", promotion); // Validación
                    setEditPromotion(promotion);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeletePromotion(promotion.docId)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromocionAdminPage;