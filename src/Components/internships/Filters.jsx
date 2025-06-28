import React from 'react';

const Filters = ({ filterArea, setFilterArea, filterModality, setFilterModality }) => {
  const areas = ['Todas', 'Ingeniería de Software', 'Marketing', 'Ciencia de Datos', 'Gestión de Productos'];
  const modalities = ['Todas', 'Remoto', 'Presencial', 'Híbrido'];
  
  return (
    <div className="filters-panel">
      <h3>Filtrar Ofertas</h3>
      
      <div className="filter-group">
        <label>Área</label>
        <select 
          value={filterArea} 
          onChange={(e) => setFilterArea(e.target.value)}
        >
          {areas.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Modalidad</label>
        <select 
          value={filterModality} 
          onChange={(e) => setFilterModality(e.target.value)}
        >
          {modalities.map(modality => (
            <option key={modality} value={modality}>{modality}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Requisitos</label>
        <div className="checkboxes">
          <div className="checkbox-item">
            <input type="checkbox" id="english" />
            <label htmlFor="english">Inglés Avanzado</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="experience" />
            <label htmlFor="experience">Experiencia Previa</label>
          </div>
        </div>
      </div>
      
      <div className="filter-group">
        <label>Período</label>
        <input
          type="text"
          placeholder="Ej: 6 meses"
        />
      </div>
      
      <button className="apply-filters-btn">Aplicar Filtros</button>
      
      <div className="featured-offers">
        <h3>Ofertas de Pasantías</h3>
        {[
          { id: 1, title: "Desarrollador Frontend Jr.", company: "Tech Solutions Inc." },
          { id: 2, title: "Pasante de Marketing Digital", company: "Innovatech Corp." },
          { id: 3, title: "Analista de Datos Junior", company: "Data Insights Co." }
        ].map(offer => (
          <div key={offer.id} className="offer-item">
            <h4>{offer.title}</h4>
            <p>{offer.company}</p>
            <button className="view-offer-btn">Ver Detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;