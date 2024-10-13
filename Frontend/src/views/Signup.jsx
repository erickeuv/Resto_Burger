import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrando:', { username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className="bg-white"> {/* Fondo blanco */}
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 lg:px-8"> {/* Ajustar el padding */}
        <div className="flex items-center mb-6 text-3xl font-semibold text-black"> {/* Aumentar tamaño de texto y logo */}
          <img className="w-12 h-12 mr-2" src="https://www.shutterstock.com/image-vector/burger-sushi-logo-concept-japanese-260nw-1569048382.jpg" alt="logo" /> {/* Aumentar tamaño del logo */}
          <span>Sushi & Burger</span>
        </div>
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg"> {/* Fondo claro para el formulario */}
          <div className="p-8 space-y-4"> {/* Espaciado uniforme */}
            <h1 className="text-2xl font-bold text-center text-gray-800"> {/* Título centrado */}
              Regístrate en tu cuenta
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-800">Nombre:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5" // Cambiado para incluir clases de color
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5" // Cambiado para incluir clases de color
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5" // Cambiado para incluir clases de color
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" // Cambiado para incluir clases de color
              >
                Registrar
              </button>
              <p className="text-sm font-light text-gray-500 text-center">
                ¿Tienes una cuenta? 
                <Link to="/login" className="font-medium text-slate-800 hover:underline"> Inicia sesión</Link> {/* Cambiado para incluir clases de color */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
