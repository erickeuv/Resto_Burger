import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="w-full bg-gray-900 p-4 text-white sticky top-0 shadow-lg z-[9999]">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo alineado a la izquierda */}
        <Link to="/" className="cursor-pointer text-base font-semibold">
          <img
            src="https://tofuu.getjusto.com/orioneat-local/resized2/BAbPLCBTJhJkJJx5F-1400-x.webp"
            alt="Brand Logo"
            className="h-10" // Ajusta la altura según sea necesario
          />
        </Link>

        {/* Links centrados con espacio entre ellos */}
        <div className="flex-grow flex justify-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/Menu" className="text-white hover:text-gray-300 transition duration-300">Menu</Link>
          <Link to="/Signup" className="text-white hover:text-gray-300 transition duration-300">Sign Up</Link>
          <Link to="/Login" className="text-white hover:text-gray-300 transition duration-300">Login</Link>
        </div>

        {/* Botón de menú para dispositivos móviles (opcional) */}
        <button
          className="relative h-6 w-6 text-center align-middle text-xs font-medium uppercase text-white transition-all hover:bg-gray-700 focus:bg-gray-700 lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
