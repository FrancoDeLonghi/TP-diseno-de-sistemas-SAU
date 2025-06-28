import React from 'react';

const SignUp = ({ setCurrentView, userType, setUserType, userData, setUserData }) => {
  const { fullName, email, password, career, studentId } = userData;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentView('login');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="auth-container">
      <h1>Crear una cuenta</h1>
      
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
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
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
        
        {userType === 'estudiante' && (
          <>
            <div className="form-group">
              <label htmlFor="career">Carrera</label>
              <select
                id="career"
                value={career}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu carrera</option>
                <option value="Ingeniería de Software">Ingeniería de Software</option>
                <option value="Marketing">Marketing</option>
                <option value="Ciencia de Datos">Ciencia de Datos</option>
                <option value="Gestión de Productos">Gestión de Productos</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="studentId">Número de Legajo</label>
              <input
                type="text"
                id="studentId"
                value={studentId}
                onChange={handleChange}
                placeholder="Ingresa tu número de legajo"
                required
              />
            </div>
          </>
        )}
        
        <button type="submit" className="auth-btn primary">Registrarse</button>
      </form>
      
      <div className="auth-footer">
        <p>
          ¿Ya tienes una cuenta?{' '}
          <button className="link-btn" onClick={() => setCurrentView('login')}>
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;