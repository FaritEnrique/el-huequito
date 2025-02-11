import React, { useState } from 'react';

const RegistrarProducto = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    activo: true,
    imagenUrl: '',
    marcaId: '',
    tipoProductoId: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProducto({
      ...producto,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto a registrar:', producto);
    // Aquí iría la lógica para enviar los datos al backend
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center">Registro de Nuevo Producto</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block font-medium">Nombre del Producto:</label>
            <input type="text" id="nombre" name="nombre" value={producto.nombre} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label htmlFor="descripcion" className="block font-medium">Descripción:</label>
            <textarea id="descripcion" name="descripcion" value={producto.descripcion} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          </div>
          
          <div>
            <label htmlFor="precio" className="block font-medium">Precio:</label>
            <input type="number" id="precio" name="precio" value={producto.precio} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label htmlFor="imagenUrl" className="block font-medium">URL de la Imagen:</label>
            <input type="text" id="imagenUrl" name="imagenUrl" value={producto.imagenUrl} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label htmlFor="marcaId" className="block font-medium">Marca ID:</label>
            <input type="number" id="marcaId" name="marcaId" value={producto.marcaId} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label htmlFor="tipoProductoId" className="block font-medium">Tipo de Producto ID:</label>
            <input type="number" id="tipoProductoId" name="tipoProductoId" value={producto.tipoProductoId} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="activo" name="activo" checked={producto.activo} onChange={handleChange} className="mr-2" />
            <label htmlFor="activo" className="font-medium">Activo</label>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Registrar Producto</button>
        </form>
      </main>
    </div>
  );
};

export default RegistrarProducto;
