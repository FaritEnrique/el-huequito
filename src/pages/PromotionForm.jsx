// src/pages/PromotionForm.jsx

import React, { useState, useEffect } from "react";

const PromotionForm = ({ onSave, initialData, isEditing, onCancel }) => {
  const initialState = {
    titulo: "",
    descripcion: "",
    imagen_url: "",
    fecha_inicio: "",
    fecha_termino: "",
    creado_por: "",
    is_active: false,
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (isEditing && initialData) {
      setFormData(initialData);
    } else {
      setFormData(initialState);
    }
  }, [initialData, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let formattedValue = value;

    if (type === "date") {
      const date = new Date(value);
      formattedValue = date.toISOString().split("T")[0]; // Obtiene solo la parte de la fecha (YYYY-MM-DD)
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : formattedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.creado_por) {
      alert("El campo 'Creado por' es obligatorio.");
      return;
    }

    console.log(formData);

    onSave(formData);
    setFormData(initialState);
  };

  const handleCancel = () => {
    setFormData(initialState);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-xl font-bold mb-2">{isEditing ? "Editar Promoción" : "Crear Promoción"}</h2>

      <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Título" className="w-full p-2 border rounded mb-2" required />

      <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" className="w-full p-2 border rounded mb-2" required />

      <input type="text" name="imagen_url" value={formData.imagen_url} onChange={handleChange} placeholder="URL de la imagen" className="w-full p-2 border rounded mb-2" required />

      <input type="date" name="fecha_inicio" value={formData.fecha_inicio} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />

      <input type="date" name="fecha_termino" value={formData.fecha_termino} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />

      <input type="text" name="creado_por" value={formData.creado_por} onChange={handleChange} placeholder="Creado por" className="w-full p-2 border rounded mb-2" required />

      <label className="flex items-center"><input type="checkbox" name="is_active" checked={formData.is_active} onChange={handleChange} /><span className="ml-2">Activa</span></label>

      <div className="flex gap-2 mt-4"><button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">{isEditing ? "Actualizar" : "Crear"}</button>{isEditing && (<button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-3 py-1 rounded">Cancelar</button>)}</div>
    </form>
  );
};

export default PromotionForm;