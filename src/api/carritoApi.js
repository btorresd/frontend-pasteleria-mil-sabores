// src/api/carritoApi.js (CÓDIGO CORREGIDO)

import api from './api'; 

/**
 * 1. OBTENER CARRITO (Read) - Ruta: GET /api/v1/carrito
 */
export const fetchCarrito = async () => {
    try {
        const response = await api.get('/carrito'); 
        
        // 🛑 CORRECCIÓN CLAVE: Extraer la lista de ítems de la respuesta completa.
        // Si la propiedad que contiene la lista se llama diferente a 'items', 
        // ¡ajústala aquí! (Ej: response.data.productos)
        return response.data.items || []; 
        
    } catch (error) {
        console.error("Error al obtener el carrito:", error);
        return []; 
    }
};

/**
 * 2. AÑADIR ÍTEM al Carrito (Create) - Ruta: POST /api/v1/carrito/agregar
 */
export const agregarProductoAlCarrito = async (productoId, cantidad = 1) => {
    try {
        const response = await api.post('/carrito/agregar', {
            productoId: productoId, 
            cantidad: cantidad 
        });
        return response.data; 
    } catch (error) {
        console.error("Error al agregar producto:", error);
        throw error; 
    }
};

/**
 * 3. ELIMINAR ÍTEM del Carrito (Delete) - Ruta: DELETE /api/v1/carrito/item/{itemId}
 */
export const eliminarItemCarrito = async (itemId) => {
    try {
        await api.delete(`/carrito/item/${itemId}`);
        return { success: true, itemId: itemId };
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        throw error;
    }
};