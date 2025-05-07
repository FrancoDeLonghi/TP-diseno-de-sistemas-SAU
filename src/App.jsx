import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userType, setUserType] = useState('estudiante');

  return (
    <div className="app-container">
      <header className="header">
        <h1>SAU - Gestión de Pasantías</h1>
      </header>

      <main className="main-content">
        {/* Login Section */}
        <section className="login-box">
          <h2>Iniciar Sesión</h2>
          <div className="toggle-buttons">
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
          <button className="btn-submit">Ingresar</button>
          <p className="register-text">
            ¿No tenés cuenta? <a href="#">Registrate</a>
          </p>
        </section>

        {/* Feed Section */}
        <section className="feed-box">
          <h2>Pasantías Disponibles</h2>
          {['Empresa X', 'Empresa Y'].map((company, idx) => (
            <div className="card" key={idx}>
              <h3>📌 Pasantía en {company}</h3>
              <p>
                Área: Sistemas | Modalidad:{' '}
                {idx % 2 === 0 ? 'Remota' : 'Presencial'}
              </p>
              <p>
                Requisitos:{' '}
                {idx % 2 === 0
                  ? '4° año, promedio 7+, JS básico'
                  : 'Promedio 8+, Inglés técnico'}
              </p>
              <div className="buttons">
                <button>Ver Detalles</button>
                <button>Postularme</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;