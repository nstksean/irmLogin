import './style/index.css'
import LoginPage from './app/login/loginPage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './app/layout/Dashboard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        return userData.isAuthenticated || false
      } catch (error) {
        return false
      }
    }
    return false
  });

    

  const handleLogin = () => {
    setIsAuthenticated(true);
    return true;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    return false;
  }

  useEffect(() => {
    if (isAuthenticated) {
      const user = localStorage.getItem("user");
      if (user) {
        try {
          const userData = JSON.parse(user);
          userData.isAuthenticated = true;
          localStorage.setItem("user", JSON.stringify(userData));
        } catch (e) {
        }
      }
    }
  }, [isAuthenticated])
  

  return (
    <Router>
      <Routes>
        {/* public Route */}
        <Route
          path ="/login"
          element={ !isAuthenticated ? (
          <LoginPage handleLogin={handleLogin} />
        ) : (
          <Navigate to="/dashboard" replace />
        )}
          />
        {/* private Route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? (
            <Dashboard handleLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )}
        />

        <Route path="/" element={<Navigate to="/login" replace/>}/>

        <Route path="*" element={<h1>404 - 醒醒吧</h1>}/>


      </Routes>
    </Router>
  )
}

export default App
