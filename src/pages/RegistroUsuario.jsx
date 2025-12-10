import React, { useState } from 'react';

const RegistroUsuario = () => {
   
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        clave1: '',
        clave2: '',
        comentario: ''
    });
    
   
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        
        setMessage({ type: '', text: '' }); 
    };

    
    const validarFormularioRegistro = (e) => {
        e.preventDefault(); // Evita el envío estándar del formulario
        const { nombre, email, clave1, clave2, comentario } = formData;
        let errores = [];
        
        const correos_validos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
        
       
        if (nombre.trim() === "") {
            errores.push("El nombre no puede estar vacío.");
        } else if (nombre.length > 100) {
            errores.push("El nombre no puede ser mayor a 100 caracteres.");
        }

        
        if (email.trim() === "") {
            errores.push("El correo electrónico no puede estar vacío.");
        } else if (email.length > 100) {
            errores.push("El correo no puede ser mayor a 100 caracteres.");
        } else if (!correos_validos.some(suffix => email.includes(suffix))) {
            errores.push("Solo pueden ser correos @duoc.cl, @profesor.duoc.cl o @gmail.com");
        }
        
        
        if (clave1 === "") {
            errores.push("La contraseña no puede estar vacía.");
        } else if (clave1.length < 4 || clave1.length > 10) {
            errores.push("La contraseña debe tener entre al menos 4 y 10 caracteres.");
        }
        
       
        if (clave2 !== clave1) {
            errores.push("Las contraseñas no coinciden.");
        }
        
        
        if (comentario.trim() === "") {
            errores.push("El comentario no puede estar vacío.");
        } else if (comentario.length > 500) {
            errores.push("No puede ser mayor a 500 caracteres.");
        }
        
       
        if (errores.length > 0) {
            setMessage({ 
                type: 'danger', 
                text: <ul>{errores.map((e, i) => <li key={i}>{e}</li>)}</ul> 
            });
        } else {
            setMessage({ type: 'success', text: '✅ Registro exitoso' });
           
            console.log("Formulario válido, listo para enviar:", formData);
        }
    };

   
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Registro de Usuario</h2>
            
            {/* Mensajes de error/éxito */}
            {message.type && (
                <div className={`alert alert-${message.type}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={validarFormularioRegistro}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="clave1" className="form-label">Contraseña</label>
                    <input type="password" id="clave1" className="form-control" value={formData.clave1} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="clave2" className="form-label">Confirmar contraseña</label>
                    <input type="password" id="clave2" className="form-control" value={formData.clave2} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                    <input type="text" id="nombre" className="form-control" value={formData.nombre} onChange={handleChange} />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="comentario" className="form-label">Comentario</label>
                    <input type="text" id="comentario" className="form-control" value={formData.comentario} onChange={handleChange} />
                </div>
                
                <button type="submit" className="btn btn-success">
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default RegistroUsuario;