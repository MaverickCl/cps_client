import React,  { useState }  from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  // Función para determinar la clase basada en si el enlace está activo
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold" : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";
  };
// Función para manejar la redirección a la página de búsqueda
  const redirectToSearch = () => {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };
    // Función para manejar el cambio en el input de búsqueda
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
    redirectToSearch();
  };

   // Función para manejar la pulsación de teclas en el input de búsqueda
  const onSearchKeyPress = (event) => {
    
    if (event.key === 'Enter') {
      redirectToSearch();
    }
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            <div>
              <NavLink to="/" className="flex items-center mb-2 px-2 mr-6">
                <img src="/logo.png" alt="Logo" className="h-[60px]" />
              </NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" className={getNavLinkClass}>
                Inicio
              </NavLink>
              <NavLink to="/stocks" className={getNavLinkClass}>
                Stocks
              </NavLink>
              <NavLink to="/invoice" className={getNavLinkClass}>
                Invoice
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex bg-gray-100 p-2 rounded-full">
              <MagnifyingGlassIcon className="text-gray-400 h-5 w-5" onClick={redirectToSearch} />
              <input  className="bg-transparent outline-none ml-3" type="text" placeholder="Buscar" value={searchTerm} onChange={onSearchChange} onKeyPress={onSearchKeyPress}/>
            </div>
            <a href="#" className="py-2 px-2 flex items-center">
              <img src="/perfil.jpg" alt="Perfil" className="h-8 w-8 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;