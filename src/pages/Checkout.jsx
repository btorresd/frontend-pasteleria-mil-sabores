import React, { useState, useEffect } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [direccionEnvio, setDireccionEnvio] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    api.getTotal()
      .then(response => {
        setTotal(parseFloat(response.data));
      })
      .catch(err => {
        console.error("Error al obtener el total:", err);
        setTotal(0);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (total <= 0) {
      setMensaje("El carrito está vacío. No se puede procesar el pedido.");
      return;
    }
    if (!direccionEnvio.trim()) {
      setMensaje("Por favor, ingresa una dirección de envío válida.");
      return;
    }

    setLoading(true);
    setMensaje("Procesando pedido...");

    api.finalizarCompra(direccionEnvio)
      .then(response => {
        setLoading(false);
        const pedido = response.data;
        
        setMensaje(`✅ ¡Pedido N° ${pedido.id} completado con éxito! Total pagado: $${pedido.total.toLocaleString('es-CL')}. Redirigiendo...`);
        
       
        setTimeout(() => {
          navigate('/'); 
        }, 5000);

      })
      .catch(err => {
        setLoading(false);
        const errorMsg = err.response?.data?.message || err.response?.headers['error'] || "Error desconocido al procesar el pago.";
        setMensaje(`❌ Error al finalizar la compra: ${errorMsg}`);
        console.error("Checkout fallido:", err.response);
      });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4 fs-3 fw-bold" style={{ color: '#e91e63' }}>
                Finalizar Compra
              </h1>
              
              {/* Mostrar el mensaje de estado con alertas de Bootstrap */}
              {mensaje && (
                <div className={`alert ${mensaje.startsWith('✅') ? 'alert-success' : 'alert-danger'} text-center`} role="alert">
                  {mensaje}
                </div>
              )}

              <div className="border-top pt-3 mb-4 text-center">
                <h2 className="fs-5 fw-bold mb-1">Total a Pagar:</h2>
                <p className="fs-1 fw-extrabold text-pink-600" style={{ color: '#e91e63' }}>
                  ${total.toLocaleString('es-CL')}
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="direccionEnvio" className="form-label fw-bold">
                    Dirección de Envío
                  </label>
                  <textarea
                    id="direccionEnvio"
                    value={direccionEnvio}
                    onChange={(e) => setDireccionEnvio(e.target.value)}
                    rows="3"
                    className="form-control"
                    placeholder="Ej: Calle Los Pasteles 123, Depto 4B, Ciudad"
                    required
                    disabled={loading || total <= 0}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || total <= 0}
                  className={`btn w-100 py-3 fs-5 fw-bold ${
                    loading || total <= 0 
                      ? 'btn-secondary' 
                      : 'btn-success'
                  }`}
                >
                  {loading ? 'Procesando...' : `Pagar y Confirmar Pedido`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;