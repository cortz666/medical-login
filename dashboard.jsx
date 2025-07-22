import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to the Medical Application</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;