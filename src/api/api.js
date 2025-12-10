import axios from 'axios';

// Configuración base de Axios apuntando a tu backend de Spring Boot
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para interactuar con los endpoints de la API
export const api = {
  // --- PRODUCTOS ---
  getProductos: () => apiClient.get('/productos'),
  
  // --- CARRITO ---
  // Obtiene el carrito del usuario (usando el ID fijo 1 que tiene el DataLoader)
  getCarrito: () => apiClient.get('/carrito'),
  
  // Agrega un producto al carrito
  agregarItem: (productoId, cantidad) => apiClient.post('/carrito/agregar', {
    productoId, 
    cantidad
  }),
  
  // Finaliza el pedido/checkout
  finalizarCompra: (direccionEnvio) => apiClient.post('/carrito/checkout', {
    direccionEnvio
  }),

  // Obtener el total del carrito
  getTotal: () => apiClient.get('/carrito/total'),
};

export default apiClient;