

import React from 'react';

import LogoPasteleria from '../assets/logo.png'; 

const Nosotros = () => {
    return (
        <div className="container mt-5">
            {/* Contenedor del Logo */}
            <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                    <img 
                        src={LogoPasteleria} 
                        alt="Logo Dulce Tentación" 
                        
                        style={{ maxWidth: '150px', height: 'auto', marginBottom: '20px' }} 
                        className="img-fluid rounded-circle shadow-sm"
                    />
                </div>
            </div>
            
            <h2 className="mb-4 text-center" style={{ color: '#5D3E24' }}>
                Nuestra Historia
            </h2>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <p className="lead text-center">
                        En Pastelería Mil Sabores, nuestra pasión es el arte de la repostería. 
                        Nacimos de un sueño simple: llevar la alegría de los sabores caseros 
                        y la calidez de la tradición a cada hogar.
                    </p>
                    <hr className="my-4" />
                    
                    <h4 style={{ color: '#794D2C' }}>Compromiso con la Calidad</h4>
                    <p>
                        Desde el primer día, nos comprometemos a utilizar solo los ingredientes 
                        más frescos y de la más alta calidad. Cada pastel, galleta y postre es 
                        preparado con dedicación, asegurando que cada bocado sea una verdadera 
                        tentación. Creemos que la repostería es más que comida; es una forma 
                        de celebrar los momentos especiales.
                    </p>

                    <h4 style={{ color: '#794D2C' }}>Nuestro Equipo</h4>
                    <p>
                        Contamos con un equipo de chefs pasteleros expertos y creativos que 
                        constantemente innovan, ofreciendo tanto clásicos atemporales como 
                        creaciones modernas. Estamos aquí para endulzar tu vida y ser parte 
                        de tus celebraciones.
                    </p>
                    
                    <p className="text-muted mt-5 text-end">
                        *¡Gracias por ser parte de nuestra dulce historia!*
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;