import React from 'react';
const ProductCard = ({referencia, descripcion, estado}) => {
    return (
        <div className=' mt-6'>
      <div className="flex max-w-xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden ">
        <div className="w-1/2 justify-center items-center bg-gray-100 p-1">
          <img className="h-28 mx-auto" src="/MWD60604.png" alt="Product" />
        </div>
        <div className="w-1/2 p-3">
          <h5 className="text-gray-900 text-lg font-medium mb-2">{referencia}</h5>
          <p className="text-gray-700 text-sm mb-4">
          {descripcion}
          </p>
          <p className="text-gray-600 text-xs"> Estado: {estado}</p>
        </div>
      </div>
      </div>
    );
  };
  export default ProductCard;





