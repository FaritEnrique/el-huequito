// pages/PromotionForm.jsx

import React, { useState, useEffect } from "react";

const PromotionForm = ({ onSave, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    isActive: false,
    image: "",
    discount: "",
    terms: ""
  });

  useEffect(() => {
    if (isEditing && initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        startDate: initialData.startDate || "",
        endDate: initialData.endDate || "",
        isActive: initialData.isActive || false,
        image: initialData.image || "",
        discount: initialData.discount || "",
        terms: initialData.terms || ""
      });
    } else {
      setFormData({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        isActive: false,
        image: "",
        discount: "",
        terms: ""
      });
    }
  }, [initialData, isEditing]);

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
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {isEditing ? "Editar Promoción" : "Crear Promoción"}
      </h2>

      <div className="mb-2">
        <label className="block">Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        ></textarea>
      </div>

      <div className="mb-2">
        <label className="block">Fecha de Inicio</label>
        <input
          type="datetime-local"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block">Fecha de Fin</label>
        <input
          type="datetime-local"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block">Descuento (%)</label>
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block">Términos y Condiciones</label>
        <textarea
          name="terms"
          value={formData.terms}
          onChange={handleChange}
          className="border p-2 w-full"
        ></textarea>
      </div>

      <div className="mb-2">
        <label className="block">Imagen (URL)</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            className="mr-2"
          />
          Promoción Activa
        </label>
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Actualizar" : "Crear"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default PromotionForm;