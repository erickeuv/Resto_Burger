import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import LoginImage from '../assets/img/Burger_Login.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión:', { email, password });
    // Aquí puedes manejar el inicio de sesión, como enviar datos a un backend
    setEmail('');
    setPassword('');
  };

  return (
    <section className="bg-white"> {/* Fondo blanco para la sección */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 px-6 lg:px-8"> {/* Alineación y espaciado */}
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg"> {/* Fondo claro para el formulario */}
          <div className="p-8 space-y-4"> {/* Espaciado uniforme */}
            <h1 className="text-2xl font-bold text-center text-gray-800"> {/* Título centrado */}
              Iniciar Sesión
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                Iniciar Sesión
              </button>
              <p className="text-sm font-light text-gray-500 text-center">
                ¿No tienes una cuenta? <Link to="/signup" className="font-medium text-slate-800 hover:underline">Regístrate aquí</Link> {/* Cambiado para incluir clases de color */}
              </p>
            </form>
          </div>
        </div>

        <div className="hidden lg:block lg:h-[400px] md:h-[300px] md:ml-4"> {/* Espacio para la imagen */}
          <img src={LoginImage} className="w-full h-full object-cover rounded-lg" alt="Delicious Burger" />
        </div>
      </div>
    </section>
  );
}

export default Login;
