// pages/PromocionAdminPage.jsx

import React, { useState, useEffect } from "react";
import usePromociones from "../hooks/usePromociones";
import PromotionForm from "./PromotionForm";
import Swal from "sweetalert2";

const PromocionAdminPage = () => {
  const { promociones, cargando, error, fetchPromociones, crearPromocion, actualizarPromocion, eliminarPromocion } = usePromociones();
  const [editarPromocion, setEditarPromocion] = useState(null);

  useEffect(() => {
    const cargaPromociones = async () => {
      try {
        await fetchPromociones();
      } catch (error) {
        Swal.fire("Error", "No se pudieron cargar las promociones.", "error");
      }
    };
    cargaPromociones();
  }, [fetchPromociones]);

  const handleCreatePromotion = async (newPromocion) => {
    try {
      const result = await crearPromocion(newPromocion);
      if (result) {
        Swal.fire("Guardado", "Promoción creada correctamente.", "success");
      }
    } catch (error) {
      Swal.fire("Error", "Hubo un problema al crear la promoción.", "error");
    }
  };

  const handleUpdatePromotion = async (updatedFields) => {
    try {
      const result = await actualizarPromocion(editarPromocion.id, updatedFields);
      if (result) {
        Swal.fire("Actualizado", "Promoción actualizada correctamente.", "success");
        setEditarPromocion(null);
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
        const success = await eliminarPromocion(id);
        if (success) {
          Swal.fire("Eliminado", "Promoción eliminada correctamente.", "success");
        }
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar la promoción.", "error");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrar Promociones</h1>

      {editarPromocion ? (
        <PromotionForm
          onSave={handleUpdatePromotion}
          initialData={editarPromocion}
          isEditing
          onCancel={() => setEditarPromocion(null)}
        />
      ) : (
        <PromotionForm onSave={handleCreatePromotion} />
      )}

      {cargando ? (
        <p>Cargando promociones...</p>
      ) : error ? (
        <p>Error al cargar las promociones.</p>
      ) : promociones.length === 0 ? (
        <p>No hay promociones disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {promociones.map((promocion) => (
            <div key={promocion.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{promocion.title}</h2>
              <p>{promocion.description}</p>
              <p>Inicio: {new Date(promocion.startDate).toLocaleString()}</p>
              <p>Fin: {new Date(promocion.endDate).toLocaleString()}</p>
              <p>Estado: {promocion.isActive ? "Activa" : "Inactiva"}</p>
              <img src={promocion.image} alt="Promoción" className="w-full h-auto mt-2" />
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => setEditarPromocion(promocion)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeletePromotion(promocion.id)}
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