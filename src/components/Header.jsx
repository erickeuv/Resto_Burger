import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="w-full bg-gray-900 p-8 text-white sticky top-3 shadow-lg z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo alineado a la izquierda */}
        <Link to="/" className="mr-4 block cursor-pointer text-base font-semibold">
          <img
            src="https://tofuu.getjusto.com/orioneat-local/resized2/BAbPLCBTJhJkJJx5F-1400-x.webp"
            alt="Brand Logo"
            className="h-10" // Ajusta la altura según sea necesario
          />
        </Link>

        {/* Links "Home" y "Menu" centrados */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2">
              <Link to="/Menu" className="text-white hover:text-gray-300">Menu</Link>
            </li>
          </ul>
        </div>

        {/* Links "Sign Up" y "Login" alineados a la derecha */}
        <div className="ms-auto">
          <Link to="/Signup" className="flex items-center p-1 text-sm gap-x-2 text-white hover:text-gray-300">
            Sign Up
          </Link>
          <Link to="/Login" className="flex items-center p-1 text-sm gap-x-2 text-white hover:text-gray-300">
            Login
          </Link>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-white transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
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
