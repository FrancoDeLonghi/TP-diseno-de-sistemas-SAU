import React, { useState } from 'react';
import Login from './Components/auth/Login';
import SignUp from './Components/auth/SignUp';
import InternshipList from './Components/internships/InternshipList';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [userType, setUserType] = useState('estudiante');
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
    career: '',
    studentId: ''
  });

  return (
    <div className="app-container">
      {currentView !== 'login' && currentView !== 'signup' && (
        <Header setCurrentView={setCurrentView} />
      )}
      
      <main className="main-content">
        {currentView === 'login' && (
          <Login 
            setCurrentView={setCurrentView}
            userType={userType}
            setUserType={setUserType}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        
        {currentView === 'signup' && (
          <SignUp 
            setCurrentView={setCurrentView}
            userType={userType}
            setUserType={setUserType}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        
        {currentView === 'internships' && (
          <InternshipList />
        )}
      </main>
      
      {currentView !== 'login' && currentView !== 'signup' && <Footer />}
    </div>
  );
}

export default App;