import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({Referencia, Descripcion, Estado, Url}) => {
    return (
        <div className=' mt-5'>
      <div className="flex max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden ">
        <div className="w-1/2 justify-center items-center bg-gray-100 p-1">
        <Link to={`/finish_good/${Referencia}`}>
          <img className="h-32 mx-auto" src={Url} alt="producto" />
        </Link>
        </div>
        <div className="w-1/2 p-3">
          <Link to={`/finish_good/${Referencia}`} className="text-gray-900 text-lg font-medium mb-2">
            {Referencia}
          </Link>
          <p className="text-gray-700 text-sm mb-4">
          {Descripcion}
          </p>
          <p className="text-gray-600 text-xs"> Estado: {Estado}</p>
        </div>
      </div>
      </div>
    );
  };
  export default ProductCard;





