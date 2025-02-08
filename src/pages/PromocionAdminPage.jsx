// src/pages/PromocionAdminPage.jsx

import React, { useState, useEffect } from "react";
import usePromociones from "../hooks/usePromociones";
import PromotionForm from "./PromotionForm";
import Swal from "sweetalert2";

const PromocionAdminPage = () => {
  const {
    promociones,
    cargando,
    error,
    fetchPromociones,
    crearPromocion,
    actualizarPromocion,
    eliminarPromocion,
  } = usePromociones();

  const [editarPromocion, setEditarPromocion] = useState(null);

  useEffect(() => {
    if (promociones.length === 0 && !cargando && !error) {
      fetchPromociones();
    }
  }, [promociones.length, cargando, error, fetchPromociones]);

  const handleCreatePromotion = async (newPromocion) => {
    if (!newPromocion.titulo || !newPromocion.fecha_inicio || !newPromocion.fecha_termino || !newPromocion.creado_por) {
      return Swal.fire("Error", "Todos los campos son obligatorios, incluido 'Creado por'.", "error");
    }
    try {
      const result = await crearPromocion(newPromocion);
      if (result) {
        Swal.fire("Guardado", "Promoción creada correctamente.", "success");
        fetchPromociones();
      }
    } catch {
      Swal.fire("Error", "Hubo un problema al crear la promoción.", "error");
    }
  };

  const handleUpdatePromotion = async (updatedFields) => {
    if (!updatedFields.titulo || !updatedFields.fecha_inicio || !updatedFields.fecha_termino || !updatedFields.creado_por) {
      return Swal.fire("Error", "Todos los campos son obligatorios, incluido 'Creado por'.", "error");
    }
    try {
      const result = await actualizarPromocion(editarPromocion.id, updatedFields);
      if (result) {
        Swal.fire("Actualizado", "Promoción actualizada correctamente.", "success");
        setEditarPromocion(null);
        fetchPromociones();
      }
    } catch {
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
          fetchPromociones();
        }
      } catch {
        Swal.fire("Error", "Hubo un problema al eliminar la promoción.", "error");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrar Promociones</h1>

      <PromotionForm
        onSave={editarPromocion ? handleUpdatePromotion : handleCreatePromotion}
        initialData={editarPromocion}
        isEditing={!!editarPromocion}
        onCancel={() => setEditarPromocion(null)}
      />

      {cargando && <p>Cargando promociones...</p>}
      {error && <p className="text-red-500">Error al cargar las promociones.</p>}
      {!cargando && !error && promociones.length === 0 && <p>No hay promociones disponibles.</p>}

      {!cargando && !error && promociones.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {promociones.map((promocion) => (
            <div key={promocion.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{promocion.titulo}</h2>
              <p>{promocion.descripcion}</p>
              <img src={promocion.imagen_url} alt="Promoción" className="w-full h-auto mt-2" />
              <p>Inicio: {new Date(promocion.fecha_inicio).toLocaleDateString()}</p>
              <p>Fin: {new Date(promocion.fecha_termino).toLocaleDateString()}</p>
              <p>Creado por: {promocion.creado_por}</p>
              <p>Estado: {promocion.is_active ? "Activa" : "Inactiva"}</p>
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