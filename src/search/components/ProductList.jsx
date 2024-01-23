import React, { useState } from 'react';
import ProductCard from "./ProductCard";
import Pagination from './Pagination';

const ProductList=() =>{
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
  
    const productData =[
        {
            referencia:'MWD60604',
            descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
            estado:'En proceso de facturación',
        },
        {
            referencia:'MWD60604',
            descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
            estado:'En proceso de facturación',
        },
        {
          referencia:'MWD60604',
          descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
          estado:'En proceso de facturación',
        },
        {
          referencia:'MWD60604',
          descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
          estado:'En proceso de facturación',
        },
        {
          referencia:'MWD60604',
          descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
          estado:'En proceso de facturación',
        },
        {
            referencia:'MWD60604',
            descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
            estado:'En proceso de facturación',
          },
          {
            referencia:'MWD60604',
            descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
            estado:'En proceso de facturación',
          },
        
    ]
    const startIndex = currentPage * itemsPerPage;
    const selectedProducts = productData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className='space-x-4'>
                {selectedProducts.map((details, index) => (
                <ProductCard
                    key={index}
                    referencia={details.referencia}
                    descripcion={details.descripcion}
                    estado={details.estado}
                />
                ))}
            </div>
        <Pagination
            total={productData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
        />
        </div>
  );
};

export default ProductList;
