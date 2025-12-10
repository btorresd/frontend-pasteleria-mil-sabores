import React, { useState, useEffect } from 'react';
import { api } from '../api/api';
import CardProducto from '../components/CardProducto';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    api.getProductos()
      .then(response => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener productos:", err);
       
        setError("Error al cargar los productos. Asegúrate que el backend esté corriendo y que CORS esté habilitado.");
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="container text-center my-5">
      <div className="spinner-border text-pink-600" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className="mt-2">Cargando deliciosos pasteles...</p>
    </div>
  );
  
  if (error) return (
    <div className="container my-5">
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 text-4xl font-weight-bold" style={{ color: '#e91e63' }}>
        🎂 Nuestros Productos
      </h1>
      
      {/* Sistema de cuadrícula responsiva de Bootstrap: 1 columna en móvil, 3 en tablet, 4 en desktop */}
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {productos.map(producto => (
          <div key={producto.id} className="col">
            {/* El CardProducto es el que tiene la lógica del botón Añadir */}
            <CardProducto producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProductos;