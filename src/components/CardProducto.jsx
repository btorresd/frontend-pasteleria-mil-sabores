import React from 'react';
import { api } from '../api/api';

const CardProducto = ({ producto }) => {
  const handleAddToCart = () => {
    api.agregarItem(producto.id, 1)
      .then(response => {
        alert(`${producto.nombre} agregado al carrito!`);
      })
      .catch(error => {
        alert("Hubo un error al agregar el producto.");
        console.error("Error al agregar al carrito:", error);
      });
  };

  return (
    // Usamos la clase card de Bootstrap
    <div className="card h-100"> 
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-pink-700">{producto.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{producto.codigo}</h6>
        <p className="card-text text-success fw-bold fs-5 mb-1">
          ${producto.precio.toLocaleString('es-CL')}
        </p>
        <p className="card-text text-sm mb-3">{producto.descripcion.substring(0, 100)}...</p>

        <div className="mt-auto"> {/* Esto empuja el stock y el botón al final */}
            <span className={`badge bg-${producto.stock > 5 ? 'success' : 'danger'} mb-3`}>
                Stock: {producto.stock}
            </span>
            <button 
                onClick={handleAddToCart}
                disabled={producto.stock === 0}
                className={`btn w-100 ${producto.stock === 0 ? 'btn-secondary' : 'btn-primary bg-pink-600 border-0'}`}
                style={{ backgroundColor: '#e91e63' }} // Estilo personalizado para el color
            >
                {producto.stock === 0 ? 'Agotado' : 'Añadir al Carrito'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;