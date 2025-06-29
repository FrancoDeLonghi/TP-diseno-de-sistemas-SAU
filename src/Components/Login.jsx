import React, { useState } from 'react';
import '../styles/Login.css';

export default function Login({ onLogin, onSwitch }) {
  const [role, setRole] = useState('student');

  return (
    <section className="auth-card">
      <h2>Iniciar Sesión</h2>
      <div className="tabs">
        <button className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>Estudiante</button>
        <button className={role === 'company' ? 'active' : ''} onClick={() => setRole('company')}>Empresa</button>
      </div>
      <form onSubmit={e => { e.preventDefault(); onLogin(role); }}>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit" className="btn-primary">Iniciar Sesión</button>
      </form>
      <button className="btn-secondary" onClick={onSwitch}>Registrarse</button>
      <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
    </section>
  );
}
