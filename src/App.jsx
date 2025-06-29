import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import StudentFeed from './components/StudentFeed';
import CompanyFeed from './components/CompanyFeed';

export default function App() {
  const [view, setView] = useState('login');
  const [role, setRole] = useState('student');

  const onLogin = (selectedRole) => {
    setRole(selectedRole);
    setView(selectedRole === 'student' ? 'student' : 'company');
  };

  const onRegister = (selectedRole) => {
    setRole(selectedRole);
    setView('login');
  };

  const onLogout = () => {
    setRole('student');
    setView('login');
  };

  if (view === 'login') return <Login onLogin={onLogin} onSwitch={() => setView('register')} />;
  if (view === 'register') return <Register onRegister={onRegister} onSwitch={() => setView('login')} />;
  if (view === 'student') return <StudentFeed onLogout={onLogout} />;
  return <CompanyFeed onLogout={onLogout} />;
}