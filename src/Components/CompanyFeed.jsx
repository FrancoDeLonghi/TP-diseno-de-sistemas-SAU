import React, { useState } from 'react';
import '../styles/CompanyFeed.css';

export default function CompanyFeed({ onLogout }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const offers = [
    {
      title: 'Titulo de pasantia',
      area: 'Area',
      modality: 'Modalidad',
      date: 'Fecha',
      requirements: ['Conocimiento de HTML, CSS, JavaScript.', 'Experiencia con React o Vue.js (deseable).', 'Capacidad para trabajar en equipo.', 'Inglés intermedio.']
    },
    {
      title: 'Titulo de pasantia',
      area: 'Area',
      modality: 'Modalidad',
      date: 'Fecha',
      requirements: ['Conocimientos en SEO/SEM.', 'Manejo de redes sociales.', 'Creatividad y proactividad.']
    },
    {
      title: 'Titulo de pasantia',
      area: 'Area',
      modality: 'Modalidad',
      date: 'Fecha',
      requirements: ['Conocimiento de Python y SQL.', 'Experiencia con herramientas de BI.', 'Mentalidad analítica.']
    },
  ];

  return (
    <>
      <nav className="topbar">
        <div className="logo">SAU</div>
        <ul className="nav-links">
          <li>Perfil</li>
          <li className="active">Ofertas</li>
          <li>Postulantes</li>
        </ul>
        <div className="actions">
          <button className="btn-icon" onClick={() => setShowNotifications(!showNotifications)}>🔔</button>
          <button className="btn-secondary-small" onClick={onLogout}>Cerrar Sesión</button>
        </div>
        {showNotifications && (
          <div className="notification-box">
            <p>Notificación 1</p>
          </div>
        )}
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <h2>Filtrar Ofertas</h2>
          <div className="filter-group">
            <label>Área</label>
            <select><option>Todas</option></select>
          </div>
          <div className="filter-group">
            <label>Modalidad</label>
            <select><option>Todas</option></select>
          </div>
          <div className="filter-group">
            <label>Requisitos</label>
            <label><input type="checkbox" /> Inglés Avanzado</label>
            <label><input type="checkbox" /> Experiencia Previa</label>
            <label><input type="checkbox" /> Portfolio</label>
          </div>
          <button className="btn-primary-small">Aplicar Filtros</button>
        </aside>
        <div className="cards">
          {offers.map((o, i) => (
            <article className="card" key={i}>
              <div className="header">
                <h3>{o.title}</h3>
                <span className="date">{o.date}</span>
              </div>
              <p><strong>Área:</strong> {o.area}</p>
              <p><strong>Modalidad:</strong> {o.modality}</p>
              <ul>{o.requirements.map((r, j) => <li key={j}>{r}</li>)}</ul>
              <div className="actions">
                <button className="btn-secondary-small" onClick={() => setShowDetail(true)}>Ver Detalles</button>
                <button className="btn-primary-small">Gestionar Oferta</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showDetail && (
        <div className="modal-overlay" onClick={() => setShowDetail(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Detalle de la Oferta</h2>
            <p>Párrafo detalle</p>
            <button className="btn-primary-small" onClick={() => setShowDetail(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
