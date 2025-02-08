import React, { useState, useEffect } from "react";

const PromotionForm = ({ onSave, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    imagen_url: "",
    fecha_inicio: "",
    fecha_termino: "",
    creado_por: "",
    is_active: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        titulo: initialData.titulo || "",
        descripcion: initialData.descripcion || "",
        imagen_url: initialData.imagen_url || "",
        fecha_inicio: initialData.fecha_inicio ? new Date(initialData.fecha_inicio).toISOString().split("T")[0] : "",
        fecha_termino: initialData.fecha_termino ? new Date(initialData.fecha_termino).toISOString().split("T")[0] : "",
        creado_por: initialData.creado_por || "",
        is_active: initialData.is_active || false,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <div className="mb-2">
        <label className="block font-bold">Título</label>
        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} className="border w-full p-2" />
      </div>

      <div className="mb-2">
        <label className="block font-bold">Descripción</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="border w-full p-2"></textarea>
      </div>

      <div className="mb-2">
        <label className="block font-bold">Imagen URL</label>
        <input type="text" name="imagen_url" value={formData.imagen_url} onChange={handleChange} className="border w-full p-2" />
      </div>

      <div className="mb-2">
        <label className="block font-bold">Fecha de inicio</label>
        <input type="date" name="fecha_inicio" value={formData.fecha_inicio} onChange={handleChange} className="border w-full p-2" />
      </div>

      <div className="mb-2">
        <label className="block font-bold">Fecha de término</label>
        <input type="date" name="fecha_termino" value={formData.fecha_termino} onChange={handleChange} className="border w-full p-2" />
      </div>

      <div className="mb-2">
        <label className="block font-bold">Activo</label>
        <input type="checkbox" name="is_active" checked={formData.is_active} onChange={handleChange} />
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">{isEditing ? "Actualizar" : "Crear"}</button>
      {isEditing && <button type="button" onClick={onCancel} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>}
    </form>
  );
};

export default PromotionForm;