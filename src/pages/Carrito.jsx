import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCarrito, eliminarItemCarrito } from '../api/carritoApi'; 

const Carrito = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    
    const loadCarrito = async () => {
        setLoading(true);
        setError(null);
        try {
           
            const items = await fetchCarrito(); 
            
           
            setCartItems(Array.isArray(items) ? items : []); 
            
        } catch (err) {
            console.error("Error al cargar el carrito:", err);
            setError("No se pudo cargar el carrito. Asegúrese que el backend está corriendo y que las rutas coincidan.");
            setCartItems([]);
        } finally {
            setLoading(false);
        }
    };

   
    useEffect(() => {
        loadCarrito();
    }, []);

    
    const handleRemoveItem = async (itemId, nombreProducto) => {
        setMessage('');
        try {
            await eliminarItemCarrito(itemId);
            setMessage(` ${nombreProducto} eliminado del carrito.`);
            await loadCarrito(); 
            setTimeout(() => setMessage(''), 3000);
        } catch (err) {
            setMessage(` Error al eliminar ${nombreProducto} del carrito.`);
            console.error(err);
        }
    };
    
   
    const totalCarrito = cartItems.reduce((acc, item) => 
       
        acc + (item.producto.precio * item.cantidad), 0
    );

    if (loading) {
        return <div className="container mt-5 text-center">Cargando carrito...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{ color: '#5D3E24' }}>Carro de Compras</h2>

            {/* Mensaje de confirmación o error */}
            {message && (
                <div className={`alert ${message.startsWith('❌') ? 'alert-danger' : 'alert-success'} fade show`} role="alert">
                    {message}
                </div>
            )}
            
            {error && <div className="alert alert-warning">{error}</div>}
            
            <div className="row">
                {/* Columna de la Lista de Ítems */}
                <div className="col-lg-8">
                    {cartItems.length === 0 ? (
                        <div className="alert alert-info text-center">
                            El carrito está vacío. <Link to="/productos" className="alert-link">¡Añade algunos productos!</Link>
                        </div>
                    ) : (
                        <ul className="list-group mb-3">
                            {cartItems.map(item => (
                                
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        {/* 🛑 item.producto.nombre */}
                                        <h6 className="my-0">{item.producto.nombre}</h6>
                                        <small className="text-muted">
                                            {/* 🛑 item.producto.precio */}
                                            Cantidad: {item.cantidad} x ${item.producto.precio.toLocaleString('es-CL')}
                                        </small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="text-success fw-bold me-3">
                                            {/* 🛑 item.producto.precio */}
                                            ${(item.producto.precio * item.cantidad).toLocaleString('es-CL')}
                                        </span>
                                        {/* Botón para eliminar */}
                                        <button 
                                            className="btn btn-sm btn-outline-danger" 
                                            // 🛑 Usar item.id para la eliminación y item.producto.nombre
                                            onClick={() => handleRemoveItem(item.id, item.producto.nombre)}
                                        >
                                            <i className="bi bi-trash"></i> Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Columna de Resumen y Checkout */}
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-header text-white" style={{ backgroundColor: '#794D2C' }}>
                            <h5 className="mb-0">Resumen del Pedido</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <strong>${totalCarrito.toLocaleString('es-CL')}</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between text-success">
                                    <span>Total (CLP)</span>
                                    <strong className="h5">${totalCarrito.toLocaleString('es-CL')}</strong>
                                </li>
                            </ul>
                            <Link 
                                to="/checkout" 
                                className={`btn btn-success w-100 mt-3 ${cartItems.length === 0 ? 'disabled' : ''}`}
                            >
                                Proceder al Pago
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrito;