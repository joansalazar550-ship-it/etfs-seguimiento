import './ETFCard.css';

function ETFCard() {
  return (
    <div className="etf-card">
      {/* Encabezado */}
      <div className="card-header">
        <div className="symbol-info">
          <h3>AAPL</h3>
          <p>Apple Inc.</p>
        </div>
        <button className="btn-delete">×</button>
      </div>

      {/* Cuerpo */}
      <div className="card-body">
        <div className="price-section">
          <span className="label">Precio</span>
          <span className="price">$150.25</span>
        </div>
        
        <div className="change-section positive">
          <span className="label">Cambio</span>
          <span className="change">+2.5%</span>
        </div>
        
        <div className="time-section">
          <span className="label">Actualizado</span>
          <span className="time">10:30 AM</span>
        </div>
      </div>

      {/* Pie */}
      <div className="card-footer">
        <button className="btn-invest">Invertir</button>
      </div>
    </div>
  );
}

export default ETFCard;
