import React, { useState } from 'react';
import '../styles/Register.css';

export default function Register({ onRegister, onSwitch }) {
  const [role, setRole] = useState('student');
  return (
    <section className="auth-card">
      <h2>Crear una cuenta</h2>
      <div className="tabs">
        <button className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>Estudiante</button>
        <button className={role === 'company' ? 'active' : ''} onClick={() => setRole('company')}>Empresa</button>
      </div>
      <form onSubmit={e => { e.preventDefault(); onRegister(role); }}>
        <input type="text" placeholder="Nombre Completo" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        {role === 'student' && <>
          <select required>
            <option value="">Selecciona tu carrera</option>
            <option>Ingeniería de Software</option>
            <option>Marketing</option>
            <option>Ciencia de Datos</option>
          </select>
          <input type="text" placeholder="Número de Legajo" required />
        </>}
        <button type="submit" className="btn-primary">Registrarse</button>
      </form>
      <div className="switch-login">
        ¿Ya tienes una cuenta? <a href="#" onClick={onSwitch}>Inicia sesión</a>
      </div>
    </section>
  );
}