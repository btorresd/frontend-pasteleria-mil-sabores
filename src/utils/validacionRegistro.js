// src/utils/validacionRegistro.js

/**
 * Valida los datos de registro según las reglas de negocio.
 * @param {object} data - Objeto con los datos del formulario.
 * @param {string} data.nombre
 * @param {string} data.email
 * @param {string} data.clave1 - Contraseña
 * @param {string} data.clave2 - Confirmación de contraseña
 * @param {string} data.comentario
 * @returns {Array<string>} - Lista de errores encontrados.
 */
export function validarDatosRegistro(data) {
    let errores = [];

    // Asegura que los campos existen y recorta espacios
    const nombre = (data.nombre || "").trim();
    const email = (data.email || "").trim();
    const comentario = (data.comentario || "").trim();
    const clave1 = data.clave1 || "";
    const clave2 = data.clave2 || "";

   
   1. //Validaciones de Nombre
    
    // Validacion nombre vacío
    if (nombre === "") {
        errores.push("El nombre no puede estar vacío.");
    }
    // Validacion nombre mayor a 100 caracteres
    if (nombre.length > 100) {
        errores.push("El nombre no puede ser mayor a 100 caracteres.");
    }

   
    // 2. Validaciones de Email
   
    // Validacion email mayor a 100 caracteres
    if (email.length > 100) {
        errores.push("El correo no puede ser mayor a 100 caracteres.");
    }
    // Validacion correos permitidos
    const correosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const esCorreoPermitido = correosPermitidos.some(dominio => email.includes(dominio));
    
    if (!esCorreoPermitido) {
        errores.push("Solo pueden ser correos @duoc.cl, @profesor.duoc.cl o @gmail.com");
    }

    
    // 3. Validaciones de Contraseña
   
    
    
    // Validacion longitud caracteres contraseña
    if (clave1.length < 4 || clave1.length > 10) {
        errores.push("La contraseña debe tener entre al menos 4 y 10 caracteres.");
    }
    // Validacion contraseña vacia
    if (clave1 === "") {
        errores.push("La contraseña no puede estar vacía");
    }
    
    // Validacion contraseñas iguales
    if (clave2 !== clave1) {
        errores.push("Las contraseñas no coinciden");
    }

   
    // Validaciones de Comentario
    
    // Validacion comentario vacio
    if (comentario === "") {
        errores.push("El comentario no puede estar vacío");
    }

    // Validacion comentario caracteres
    if (comentario.length > 500) {
        errores.push("No puede ser mayor a 500 caracteres");
    }
    
    return errores;
}