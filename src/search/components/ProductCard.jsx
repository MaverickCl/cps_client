import React from 'react';
const ProductCard = ({referencia, descripcion, estado}) => {
    return (
        <div className='mt-6'>
      <div className="max-w-lg mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden ">
        <div className="flex justify-center items-center bg-gray-100 p-4">
          <img className="h-40 mx-auto" src="/MWD60604.png" alt="Product" />
        </div>
        <div className="p-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{referencia}</h5>
          <p className="text-gray-700 text-base mb-4">
          {descripcion}
          </p>
          <p className="text-gray-600 text-xs"> Estado: {estado}</p>
        </div>
      </div>
      </div>
    );
  };

const ProductList=() =>{
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
        
    ]
    return(
        <div className='space-x-4'>
            {productData.map((details, index)=>(
                <ProductCard
                    key={index}
                    referencia={details.referencia}
                    descripcion={details.descripcion}
                    estado={details.estado}

                />
            ))}

        </div>
    )
}
export default ProductList;




