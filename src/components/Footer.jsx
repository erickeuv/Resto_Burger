import React from 'react';


function Footer() {
  return (
    <footer className="w-full bg-gray-900 p-8 text-white"> {/* Fondo oscuro y texto blanco */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-x-12"> {/* Contenedor principal */}
        <img 
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png" 
          alt="logo-ct" 
          className="w-10" 
        />

        <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8"> {/* Lista de enlaces */}
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-500" /> {/* Línea de separación */}
      <p className="text-center font-normal">
        &copy; 2024 Sushi & Burger Home
      </p>
    </footer>
  );
}

export default Footer; 
