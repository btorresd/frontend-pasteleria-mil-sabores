import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { agregarProductoAlCarrito } from '../api/carritoApi'; 
import { Link } from 'react-router-dom';



const mockProductos = [
    { id: 1, codigo: "TC001", nombre: "Torta Cuadrada de Chocolate", precio: 45000, imagenUrl: "https://via.placeholder.com/300x200/A0522D/FFFFFF?text=Chocolate" },
    { id: 2, codigo: "TT001", nombre: "Torta Circular de Vainilla", precio: 40000, imagenUrl: "https://via.placeholder.com/300x200/F5DEB3/000000?text=Vainilla" },
    { id: 3, codigo: "PI001", nombre: "Mousse de Chocolate", precio: 5000, imagenUrl: "https://via.placeholder.com/300x200/D2B48C/000000?text=Mousse" },
    { id: 4, codigo: "PSA001", nombre: "Torta Sin Azúcar de Naranja", precio: 48000, imagenUrl: "https://via.placeholder.com/300x200/FF8C00/000000?text=Sin+Azucar" },
];
// ---------------------------------------------------------------------


const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(''); 

    
    useEffect(() => {
        const fetchProductos = async () => {
            try {
               
                const response = await api.get('/productos'); 
                setProductos(response.data);
                setError(null);
            } catch (err) {
                console.error("Error al cargar los productos:", err);
                setError("Error al cargar los productos. Usando datos de prueba.");
                setProductos(mockProductos); 
            } finally {
                setLoading(false);
            }
        };
        fetchProductos();
    }, []);

   
    const handleAddToCart = async (productoId, nombreProducto) => {
        setMessage(''); 
        try {
           
            await agregarProductoAlCarrito(productoId, 1); // Agregar 1 unidad
            setMessage(`✅ ${nombreProducto} ha sido añadido al carrito.`);
            
            
            setTimeout(() => setMessage(''), 3000); 

        } catch (err) {
            setMessage(`❌ Error al añadir ${nombreProducto} al carrito.`);
            console.error("Error en la solicitud:", err);
        }
    };
    
    if (loading) {
        return <div className="container mt-5 text-center">Cargando productos...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{ color: '#5D3E24' }}>Nuestros Productos</h2>

            {/* Mensaje de confirmación o error (visible por 3 segundos) */}
            {message && (
                <div className={`alert ${message.startsWith('✅') ? 'alert-success' : 'alert-danger'} fade show`} role="alert">
                    {message}
                </div>
            )}
            
            {error && <div className="alert alert-warning">{error}</div>}

            <div className="row">
                {productos.map(producto => (
                    <div key={producto.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100">
                            <img 
                                
                                src={producto.imagenUrl} 
                                className="card-img-top" 
                                alt={producto.nombre} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">
                                    Precio: **${producto.precio ? producto.precio.toLocaleString('es-CL') : 'N/D'}**
                                </p>
                                <div className="mt-auto">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleAddToCart(producto.id, producto.nombre)}
                                        style={{ backgroundColor: '#794D2C', borderColor: '#794D2C' }} // Color marrón
                                    >
                                        Añadir al Carrito
                                    </button>
                                    {/* Enlace para ver el detalle del producto (opcional si tienes esa página) */}
                                    <Link to={`/productos/${producto.id}`} className="btn btn-outline-secondary ms-2">
                                        Ver Detalle
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;