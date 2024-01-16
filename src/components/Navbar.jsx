import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Importando el icono de búsqueda

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            <div>
              {/* Logo */}
              <a href="/" className="flex items-center mb-2 px-2 mr-6">
                <img src="/logo.png" alt="Logo" className="h-[60px]"/>
              </a>
            </div>
            {/* Links de navegación */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Inicio</a>
              <a href="/stocks/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Stocks</a>
              <a href="/invoice/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Invoice</a>
            </div>
          </div>
          {/* Barra de búsqueda y perfil */}
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="flex bg-gray-100 p-2 rounded-full">
              <MagnifyingGlassIcon className="text-gray-400 h-5 w-5" />
              <input className="bg-transparent outline-none ml-3" type="text" placeholder="Buscar"/>
            </div>
            <a href="#" className="py-2 px-2 flex items-center">
              <img src="/perfil.jpg" alt="Perfil" className="h-8 w-8 rounded-full"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
