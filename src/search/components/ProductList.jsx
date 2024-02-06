import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import Pagination from '../../components/Pagination.jsx';
 // Asegúrate de tener esta función
import { useLocation } from 'react-router-dom';
import { getAllComponentes } from '../../api/componentesService.js';
import { getAllFinishgood } from '../../api/finishGoodService.js';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    async function loadData() {
        const resFinishGood = await getAllFinishgood();
        const finishGoods = resFinishGood.data.map(product => ({ ...product, type: 'finishgood' }));
        const resComponentes = await getAllComponentes();
        const componentes = resComponentes.data.map(component => ({ ...component, type: 'componente' }));
        
        // Combina y actualiza el estado con ambos, finishgoods y componentes
        setProducts([...finishGoods, ...componentes]);
    }
    loadData();
  }, []);

  useEffect(() => {
    setCurrentPage(0); // Reinicia a la primera página con cada nuevo término de búsqueda
  }, [searchQuery]);

  //filtros de busqueda
  const filteredProducts = products.filter((product) =>
      product.Referencia.toLowerCase().includes(searchQuery.toLowerCase())||
      product.Descripcion.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //set variables para paginacion
  const totalFilteredProducts = filteredProducts.length;
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
                      type={details.type} // Pasar el tipo de producto
                  />
              ))}
          </div>
          <Pagination
              total={totalFilteredProducts}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
          />
      </div>
  );
};

export default ProductList;