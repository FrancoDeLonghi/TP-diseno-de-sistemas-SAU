import React, { useState } from 'react';
import '../styles/StudentFeed.css';

export default function StudentFeed({ onLogout }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const internships = [
    { title: 'Pasantia', company: 'Nombre de empresa', location: 'Lugar' },
    { title: 'Pasantia', company: 'Nombre de empresa', location: 'Lugar' },
    { title: 'Pasantia', company: 'Nombre de empresa', location: 'Lugar' },
    { title: 'Pasantia', company: 'Nombre de empresa', location: 'Lugar' },
  ];

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setShowApplication(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <>
      <nav className="topbar">
        <div className="logo">SAU</div>
        <div className="user-info">
          <img src="/avatar.png" alt="avatar" className="avatar" />
          <span className="username">Alumno</span>
          <span className="role">Estudiante</span>
        </div>
        <ul className="nav-links">
          <li>Perfil</li>
          <li>Postulaciones</li>
          <li className="active">Pasantías</li>
        </ul>
        <div className="actions">
          <input type="text" placeholder="Buscar pasantías..." className="search" />
          <button className="btn-icon" onClick={() => setShowNotifications(!showNotifications)}>🔔</button>
          <button className="btn-secondary-small" onClick={onLogout}>Cerrar Sesión</button>
        </div>
        {showNotifications && (
          <div className="notification-box">
            <p>Notificación 1</p>
          </div>
        )}
        {showSuccessMessage && (
          <div className="notification-box success">
            <p>✅ Postulación enviada</p>
          </div>
        )}
      </nav>

      <header>
        <h1>Pasantías</h1>
        <div className="filters">
          <select><option>Ubicación</option></select>
          <select><option>Industria</option></select>
          <select><option>Duración</option></select>
          <select><option>Fecha de Inicio</option></select>
          <button className="btn-primary-small">Aplicar Filtros</button>
        </div>
      </header>

      <div className="cards">
        {internships.map((i, idx) => (
          <article className="card" key={idx}>
            <div className="info">
              <h3>{i.title}</h3>
              <p>{i.company}</p>
              <p className="location">{i.location}</p>
            </div>
            <div className="actions">
              <button className="btn-secondary-small" onClick={() => setShowDetail(true)}>Ver Detalles</button>
              <button className="btn-primary-small" onClick={() => setShowApplication(true)}>Postularse</button>
            </div>
          </article>
        ))}
      </div>

      {showDetail && (
        <div className="modal-overlay" onClick={() => setShowDetail(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Detalle de la Pasantía</h2>
            <p>Párrafo detalle</p>
            <button className="btn-primary-small" onClick={() => setShowDetail(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {showApplication && (
        <div className="modal-overlay" onClick={() => setShowApplication(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Formulario de Postulación</h2>
            <form onSubmit={handleSubmitApplication} className="application-form">
              <input type="text" placeholder="Nombre Completo" required />
              <input type="email" placeholder="Correo Electrónico" required />
              <input type="text" placeholder="Número de Legajo" required />
              <textarea placeholder="Mensaje adicional (opcional)" rows="4"></textarea>
              <button type="submit" className="btn-primary-small">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
