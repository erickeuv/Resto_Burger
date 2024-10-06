import { Routes, Route } from 'react-router-dom';  // Importación corregida
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import '../src/css/tailwind.css'; // Estilos de Tailwind
import '../src/css/styles.css'; // Estilos personalizados
import Home from './views/Home';
import Menu from './views/Menu'
import Login from './views/Login'
import Signup from './views/Signup'
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/> {/* Asegúrate de que NavBar esté cerrado correctamente */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
