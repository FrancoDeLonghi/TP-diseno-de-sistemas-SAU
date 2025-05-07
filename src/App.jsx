import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pantalla, setPantalla] = useState('login');
  const [userType, setUserType] = useState('estudiante');

  const renderLogin = () => (
    <div className="container">
      <h1>SAU - Iniciar Sesión</h1>
      <div className="toggle">
        <button
          className={userType === 'estudiante' ? 'active' : ''}
          onClick={() => setUserType('estudiante')}
        >
          Estudiante
        </button>
        <button
          className={userType === 'empresa' ? 'active' : ''}
          onClick={() => setUserType('empresa')}
        >
          Empresa
        </button>
      </div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={() => setPantalla('feed')}>Ingresar</button>
      <p>
        ¿No tenés cuenta?{' '}
        <span className="link" onClick={() => setPantalla('registro')}>
          Registrate
        </span>
      </p>
    </div>
  );

  const renderRegistro = () => (
    <div className="container">
      <h1>SAU - Registro</h1>
      <div className="toggle">
        <button
          className={userType === 'estudiante' ? 'active' : ''}
          onClick={() => setUserType('estudiante')}
        >
          Estudiante
        </button>
        <button
          className={userType === 'empresa' ? 'active' : ''}
          onClick={() => setUserType('empresa')}
        >
          Empresa
        </button>
      </div>
      <input type="text" placeholder="Nombre completo" />
      {userType === 'estudiante' ? (
        <input type="text" placeholder="Legajo" />
      ) : (
        <input type="text" placeholder="CUIT" />
      )}
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={() => setPantalla('login')}>Registrar</button>
      <p>
        ¿Ya tenés cuenta?{' '}
        <span className="link" onClick={() => setPantalla('login')}>
          Iniciar sesión
        </span>
      </p>
    </div>
  );

  const renderStudentFeed = () => (
    <div className="container feed">
      <header className="feed-header">
        <h1>Panel del Estudiante</h1>
        <button className="btn-notif" onClick={() => setPantalla('notificaciones')}>
          🔔
        </button>
      </header>
      <nav className="feed-nav">
        <button>Mis postulaciones</button>
        <button>Mi perfil</button>
        <button>Buscar pasantía</button>
      </nav>
      <div className="feed-body">
        <div className="offers-list">
          {[1, 2, 3].map((i) => (
            <div className="card" key={i}>
              <h3>📌 Pasantía en Empresa {i}</h3>
              <p>Área: Sistemas | Modalidad: {i % 2 === 0 ? 'Remota' : 'Presencial'}</p>
              <div className="buttons">
                <button onClick={() => setPantalla('postulante')}>Postularme</button>
              </div>
            </div>
          ))}
        </div>
        <aside className="filters">
          <h3>Filtros</h3>
          <label>
            Carrera:
            <select>
              <option>Sistemas</option>
              <option>Administración</option>
            </select>
          </label>
          <label>
            Modalidad:
            <select>
              <option>Remota</option>
              <option>Presencial</option>
            </select>
          </label>
        </aside>
      </div>
      <div className="logout-footer">
        <button className="btn-logout" onClick={() => setPantalla('login')}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );

  const renderCompanyFeed = () => (
    <div className="container feed">
      <header className="feed-header">
        <button className="btn-publish">➕ Publicar oferta</button>
        <h1>Panel de Empresa</h1>
        <button className="btn-notif" onClick={() => setPantalla('notificaciones')}>
          🔔
        </button>
      </header>
      <nav className="feed-nav">
        <button>Mis ofertas</button>
        <button>Postulantes</button>
        <button>Mi perfil</button>
      </nav>
      <div className="feed-body single-column">
        <div className="offers-list">
          {[1, 2].map((i) => (
            <div className="card" key={i}>
              <h3>📌 Oferta {i}</h3>
              <p>Publicada: 10/05/2025 | Postulantes: {i * 3}</p>
              <div className="buttons">
                <button onClick={() => setPantalla('postulante')}>Detalle Postulante</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="logout-footer">
        <button className="btn-logout" onClick={() => setPantalla('login')}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );

  const renderPostulante = () => (
    <div className="container">
      <h1>Detalle de Postulante</h1>
      <div className="card">
        <h3>Franco Longhi</h3>
        <p>Carrera: Ingeniería en Sistemas</p>
        <p>Promedio: 8.5 | Año: 4°</p>
      </div>
      <button onClick={() => setPantalla('feed')}>Volver</button>
    </div>
  );

  const renderNotificaciones = () => (
    <div className="container">
      <h1>Panel de Notificaciones</h1>
      <ul className="notifications">
        <li>✔️ Tu postulación fue enviada correctamente.</li>
        <li>📅 Entrevista agendada para 15/05 – 10:00.</li>
        <li>❌ Fuiste descartado de la oferta “Beca UX”.</li>
        <li>✔️ Fuiste aceptado en la oferta “Data Jr.”.</li>
      </ul>
      <button onClick={() => setPantalla('feed')}>Volver</button>
    </div>
  );

  if (pantalla === 'login') return renderLogin();
  if (pantalla === 'registro') return renderRegistro();
  if (pantalla === 'feed') {
    return userType === 'estudiante' ? renderStudentFeed() : renderCompanyFeed();
  }
  if (pantalla === 'postulante') return renderPostulante();
  if (pantalla === 'notificaciones') return renderNotificaciones();
  return renderLogin();
}

export default App;