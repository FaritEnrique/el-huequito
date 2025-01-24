import React, { useState, useEffect } from "react";
import { usePromociones } from "../hooks/usePromociones";
import PromotionForm from "./PromotionForm";
import Swal from "sweetalert2";

const PromocionAdminPage = () => {
  const { fetchPromociones, crearPromocion, editarPromocion, removePromocion } = usePromociones();
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPromotion, setEditPromotion] = useState(null);

  useEffect(() => {
    loadPromotions();
  }, []);

  const loadPromotions = async () => {
    setLoading(true);
    try {
      const data = await fetchPromociones();
      setPromotions(data);
    } catch (error) {
      Swal.fire("Error", "No se pudieron cargar las promociones.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePromotion = async (newPromotion) => {
    try {
      const result = await crearPromocion(newPromotion);
      if (result) {
        Swal.fire("Guardado", "Promoción creada correctamente.", "success");
        setPromotions([...promotions, result]); // Añadir nueva promoción directamente al estado
      }
    } catch (error) {
      Swal.fire("Error", "Hubo un problema al crear la promoción.", "error");
    }
  };

  const handleUpdatePromotion = async (updatedFields) => {
    try {
      const success = await editarPromocion(editPromotion.id, updatedFields); // Cambiado docId a id
      if (success) {
        Swal.fire("Actualizado", "Promoción actualizada correctamente.", "success");
        setEditPromotion(null);
        // Actualizar la promoción directamente en el estado
        setPromotions(promotions.map(promotion => 
          promotion.id === editPromotion.id ? { ...promotion, ...updatedFields } : promotion
        ));
      }
    } catch (error) {
      Swal.fire("Error", "Hubo un problema al actualizar la promoción.", "error");
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
      try {
        const success = await removePromocion(id);
        if (success) {
          Swal.fire("Eliminado", "Promoción eliminada correctamente.", "success");
          // Eliminar la promoción directamente del estado
          setPromotions(promotions.filter(promotion => promotion.id !== id));
        }
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar la promoción.", "error");
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
            <div key={promotion.id} className="border p-4 rounded shadow"> {/* Cambiado docId a id */}
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
                  onClick={() => handleDeletePromotion(promotion.id)} // Cambiado docId a id
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