import React, { useState } from 'react';

const IniciarSesion = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Intentando iniciar sesión con:", formData);
        alert('Funcionalidad de login pendiente de implementar en el backend y front.');
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Iniciar Sesión</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <button type="submit" className="btn btn-success w-100 mt-3">
                    Ingresar
                </button>
            </form>

            <div className="text-center mt-3">
                <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
            </div>
        </div>
    );
};

export default IniciarSesion;