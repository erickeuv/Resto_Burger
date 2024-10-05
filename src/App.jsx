import { Routes, Route } from 'react-router-dom';  // Importación corregida
import Home from './views/Home';
import Menu from './views/Menu'
import Login from './views/Login'
import Signup from './views/Signup'
import '../src/css/styles.css';
import '../src/css/tailwind.css';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/> {/* Asegúrate de que NavBar esté cerrado correctamente */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
