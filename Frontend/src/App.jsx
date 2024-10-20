import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../src/css/tailwind.css'; 
import '../src/css/styles.css'; 
import Home from './views/Home';
import Menu from './views/Menu';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile'; // Asegúrate de que este componente esté importado
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; // Importa PrivateRoute

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="flex flex-col min-h-screen"> 
      <Header/> 
      <div className="flex-grow"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/perfil" 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
