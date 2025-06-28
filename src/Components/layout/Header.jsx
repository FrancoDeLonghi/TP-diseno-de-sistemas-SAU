import React from 'react';

const Header = ({ setCurrentView }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="logo">SAU</h1>
        
        <nav className="main-nav">
          <button onClick={() => setCurrentView('internships')}>Pasantías</button>
          <button>Perfil</button>
          <button>Ofertas</button>
          <button>Postulaciones</button>
        </nav>
        
        <div className="user-actions">
          <button className="icon-btn">🔔</button>
          <button className="avatar">U</button>
        </div>
      </div>
    </header>
  );
};

export default Header;