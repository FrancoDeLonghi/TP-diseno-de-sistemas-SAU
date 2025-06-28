import React from 'react';

const Login = ({ setCurrentView, userType, setUserType, userData, setUserData }) => {
  const { email, password } = userData;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentView('internships');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>
      
      <div className="user-type-selector">
        <button 
          className={`user-type-btn ${userType === 'estudiante' ? 'active' : ''}`}
          onClick={() => setUserType('estudiante')}
        >
          Estudiante
        </button>
        <button 
          className={`user-type-btn ${userType === 'empresa' ? 'active' : ''}`}
          onClick={() => setUserType('empresa')}
        >
          Empresa
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        
        <button type="submit" className="auth-btn primary">Iniciar Sesión</button>
      </form>
      
      <div className="auth-footer">
        <p>
          <button className="link-btn" onClick={() => setCurrentView('signup')}>
            Registrarse
          </button>
        </p>
        <p>
          <button className="link-btn">¿Olvidaste tu contraseña?</button>
        </p>
      </div>
    </div>
  );
};

export default Login;