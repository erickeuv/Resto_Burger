import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

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
    <section className="bg-gray-900"> {/* Fondo oscuro */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> {/* Fondo del formulario */}
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Iniciar Sesión
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Iniciar Sesión
              </button>
              <p className="text-sm font-light text-gray-400">
                ¿No tienes una cuenta? <Link to="/signup" className="font-medium text-blue-600 hover:underline">Regístrate aquí</Link> {/* Cambia el enlace */}
              </p>
            </form>
          </div>
        </div>

        <div className="hidden lg:block lg:h-[400px] md:h-[300px] md:ml-4"> {/* Espacio para la imagen */}
          <img src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg" className="w-full h-full object-cover rounded-lg" alt="Delicious Burger" />
        </div>
      </div>
    </section>
  );
}

export default Login;
