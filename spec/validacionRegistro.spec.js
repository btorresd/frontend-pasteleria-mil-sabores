// spec/validacionRegistro.spec.js
// Requiere la configuración de Karma para importar validacionRegistro.js

// Importamos la función refactorizada
// NOTA: Asegúrate de que Karma esté configurado para cargar este archivo correctamente.
// En un entorno modular, sería: import { validarDatosRegistro } from '../src/utils/validacionRegistro.js';
// Para Jasmine/Karma de JS puro, asume que la función es global o usa require si tienes Webpack.
// Usaremos la versión de importación estándar para un proyecto modular de React.

import { validarDatosRegistro } from '../src/utils/validacionRegistro'; 

describe("Pruebas Unitarias para la Validación de Registro (IE2.3)", function() {
    
    let datosBase;

    beforeEach(function() {
        // Datos de un formulario válido (punto de partida)
        datosBase = {
            nombre: "Juan Pérez",
            email: "juan.perez@duoc.cl",
            clave1: "clave123", // 8 caracteres (válido)
            clave2: "clave123",
            comentario: "Esto es un comentario breve."
        };
    });

    // =================================================================
    // Prueba de caso exitoso
    // =================================================================
    it("Debería retornar un array vacío para datos válidos", function() {
        const errores = validarDatosRegistro(datosBase);
        expect(errores.length).toBe(0);
    });

    // =================================================================
    // Pruebas de Nombre
    // =================================================================
    it("Debería retornar error si el nombre está vacío", function() {
        const datos = { ...datosBase, nombre: "" };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("El nombre no puede estar vacío.");
    });

    it("Debería retornar error si el nombre excede los 100 caracteres", function() {
        // 101 caracteres
        const nombreLargo = 'a'.repeat(101); 
        const datos = { ...datosBase, nombre: nombreLargo };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("El nombre no puede ser mayor a 100 caracteres.");
    });
    
    // =================================================================
    // Pruebas de Email
    // =================================================================
    it("Debería retornar error si el correo excede los 100 caracteres", function() {
        // 90 caracteres + @gmail.com (10 caracteres) = 100.
        // Debemos exceder 100. Usaremos 91 + @gmail.com = 101.
        const emailLargo = 'a'.repeat(91) + "@gmail.com"; 
        const datos = { ...datosBase, email: emailLargo };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("El correo no puede ser mayor a 100 caracteres.");
    });
    
    it("Debería ser válido con correo @duoc.cl", function() {
        const datos = { ...datosBase, email: "test@duoc.cl" };
        const errores = validarDatosRegistro(datos);
        // Debe ser válido, por lo que no debe contener el mensaje de error.
        expect(errores).not.toContain("Solo pueden ser correos @duoc.cl, @profesor.duoc.cl o @gmail.com");
    });
    
    it("Debería ser válido con correo @profesor.duoc.cl", function() {
        const datos = { ...datosBase, email: "test@profesor.duoc.cl" };
        const errores = validarDatosRegistro(datos);
        expect(errores).not.toContain("Solo pueden ser correos @duoc.cl, @profesor.duoc.cl o @gmail.com");
    });

    it("Debería retornar error con un dominio no permitido (ej: @hotmail.com)", function() {
        const datos = { ...datosBase, email: "test@hotmail.com" };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("Solo pueden ser correos @duoc.cl, @profesor.duoc.cl o @gmail.com");
    });
    
    // =================================================================
    // Pruebas de Contraseña
    // =================================================================
    it("Debería retornar error si la contraseña está vacía (regla 1)", function() {
        const datos = { ...datosBase, clave1: "" };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("La contraseña no puede estar vacía");
    });

    it("Debería retornar error si la contraseña es menor a 4 caracteres (regla 2)", function() {
        const datos = { ...datosBase, clave1: "123" }; // 3 caracteres
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("La contraseña debe tener entre al menos 4 y 10 caracteres.");
    });
    
    it("Debería retornar error si la contraseña es mayor a 10 caracteres (regla 2)", function() {
        const datos = { ...datosBase, clave1: "1234567890A" }; // 11 caracteres
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("La contraseña debe tener entre al menos 4 y 10 caracteres.");
    });
    
    it("Debería retornar DOS errores si la contraseña está vacía (longitud y vacío, según lógica original)", function() {
        const datos = { ...datosBase, clave1: "" };
        const errores = validarDatosRegistro(datos);
        // Contraseña vacía falla la longitud (< 4) Y la validación de vacío
        expect(errores.length).toBe(3); // Error de clave1, clave2 (no coinciden) y vacío (2 errores de clave1)
        expect(errores).toContain("La contraseña debe tener entre al menos 4 y 10 caracteres.");
        expect(errores).toContain("La contraseña no puede estar vacía");
    });

    it("Debería retornar error si las contraseñas no coinciden", function() {
        const datos = { ...datosBase, clave2: "claveDiferente" };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("Las contraseñas no coinciden");
    });
    
    // =================================================================
    // Pruebas de Comentario
    // =================================================================
    it("Debería retornar error si el comentario está vacío", function() {
        const datos = { ...datosBase, comentario: "" };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("El comentario no puede estar vacío");
    });
    
    it("Debería retornar error si el comentario excede los 500 caracteres", function() {
        // 501 caracteres
        const comentarioLargo = 'c'.repeat(501);
        const datos = { ...datosBase, comentario: comentarioLargo };
        const errores = validarDatosRegistro(datos);
        expect(errores).toContain("No puede ser mayor a 500 caracteres");
    });

});