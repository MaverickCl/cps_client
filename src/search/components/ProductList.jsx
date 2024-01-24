import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import Pagination from '../../components/Pagination.jsx';
import { getAllFinishgood } from '../../api/finishGoodService.js';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const [finishgoods, setFinishgoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const location = useLocation(); // Usa useLocation para acceder a la URL actual

  // Extrae el término de búsqueda de la URL
  const searchQuery = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
      async function loadData() {
          const res = await getAllFinishgood();
          setFinishgoods(res.data);
      }
      loadData();
  }, []);

  // Filtra los productos basados en el término de búsqueda cada vez que cambia
  useEffect(() => {
      setCurrentPage(0); // Reinicia a la primera página con cada nuevo término de búsqueda
  }, [searchQuery]);

  const filteredProducts = finishgoods.filter((product) =>
      product.Referencia.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalFilteredProducts = filteredProducts.length; // Obtener el total de productos filtrados

  const startIndex = currentPage * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
      <div>
          <div className='space-x-2'>
              {selectedProducts.map((details, index) => (
                  <ProductCard
                      key={index}
                      Referencia={details.Referencia}
                      Descripcion={details.Descripcion}
                      Estado={details.Estado}
                      Url={details.Url}
                  />
              ))}
          </div>
          <Pagination
              total={totalFilteredProducts} // Utilizar el total de productos filtrados
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
          />
      </div>
  );
};

export default ProductList;
