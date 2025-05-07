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

  const renderFeed = () => (
    <div className="container">
      <header className="header">
        <h1>Panel de {userType === 'estudiante' ? 'Estudiante' : 'Empresa'}</h1>
        <button className="btn-logout" onClick={() => setPantalla('login')}>
          Cerrar Sesión
        </button>
      </header>
      {userType === 'estudiante' ? (
        <>
          <h2>Pasantías Disponibles</h2>
          {[0, 1].map((_, idx) => (
            <div className="card" key={idx}>
              <h3>📌 Pasantía en Empresa {idx + 1}</h3>
              <p>
                Área: Sistemas |{' '}
                {idx % 2 === 0 ? 'Remota' : 'Presencial'}
              </p>
              <div className="buttons">
                <button onClick={() => setPantalla('notificaciones')}>
                  Ver Notificaciones
                </button>
                <button onClick={() => setPantalla('postulante')}>
                  Ver Detalle Postulante
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>Mis Ofertas Activas</h2>
          {[0, 1].map((_, idx) => (
            <div className="card" key={idx}>
              <h3>📌 Oferta {idx + 1}</h3>
              <p>Publicada: 10/05/2025 | Postulantes: {3 + idx}</p>
              <div className="buttons">
                <button onClick={() => setPantalla('notificaciones')}>
                  Ver Notificaciones
                </button>
                <button onClick={() => setPantalla('postulante')}>
                  Detalle de Postulante
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );

  const renderPostulante = () => (
    <div className="container">
      <h1>Detalle de Postulante</h1>
      <div className="card">
        <h3>Juan Pérez</h3>
        <p>Carrera: Ingeniería en Sistemas</p>
        <p>Promedio: 8.5 | Año: 4°</p>
        <div className="buttons">
          <button onClick={() => setPantalla('feed')}>Volver</button>
        </div>
      </div>
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
      <button onClick={() => setPantalla('feed')}>Volver al Feed</button>
    </div>
  );

  switch (pantalla) {
    case 'login':
      return renderLogin();
    case 'registro':
      return renderRegistro();
    case 'feed':
      return renderFeed();
    case 'postulante':
      return renderPostulante();
    case 'notificaciones':
      return renderNotificaciones();
    default:
      return renderLogin();
  }
}

export default App;