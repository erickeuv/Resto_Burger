import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import '../src/css/tailwind.css'; // Estilos de Tailwind
import '../src/css/styles.css'; // Estilos personalizados
import Home from './views/Home';
import Menu from './views/Menu';
import Login from './views/Login';
import Signup from './views/Signup';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="flex flex-col min-h-screen"> 
      <Header/> 
      <div className="flex-grow"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Login" element={<Login onLoginSucces={handleLoginSuccess} />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
