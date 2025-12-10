import React from 'react';

const Contacto = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Contáctanos</h2>
            <p>¡Nos encantaría escuchar tus comentarios y pedidos especiales!</p>
            
            <div className="card p-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombreContacto" className="form-label">Nombre</label>
                        <input type="text" id="nombreContacto" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailContacto" className="form-label">Correo electrónico</label>
                        <input type="email" id="emailContacto" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensajeContacto" className="form-label">Mensaje</label>
                        <textarea id="mensajeContacto" className="form-control" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                </form>
            </div>
            
            <h3 className="mt-5">Nuestra Ubicación</h3>
            <p>Dirección ficticia: Avenida de las Delicias, 1234, Santiago, Chile.</p>
        </div>
    );
};

export default Contacto;