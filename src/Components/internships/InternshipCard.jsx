import React from 'react';

const InternshipCard = ({ internship }) => {
  return (
    <div className="internship-card">
      <div className="card-header">
        <h3>{internship.title}</h3>
        <span className="company">{internship.company}</span>
      </div>
      
      <div className="card-details">
        <div className="detail-item">
          <span className="label">Área:</span>
          <span>{internship.area}</span>
        </div>
        <div className="detail-item">
          <span className="label">Modalidad:</span>
          <span>{internship.modality}</span>
        </div>
        <div className="detail-item">
          <span className="label">Duración:</span>
          <span>{internship.duration}</span>
        </div>
      </div>
      
      <div className="requirements">
        <h4>Requisitos:</h4>
        <ul>
          {internship.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      
      <div className="card-footer">
        <button className="view-details-btn">Ver Detalles</button>
        <button className="apply-btn">Aplicar</button>
      </div>
    </div>
  );
};

export default InternshipCard;