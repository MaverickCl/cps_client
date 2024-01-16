import React from 'react'

const Details = ({descripcion, referencia, familia, stock, ubicacion}) => {
  return (
    <div>
        <p className='font-bold'>{descripcion}</p>
        <p className='text-sm text-gray-600'>{referencia}</p>
        <p className='text-sm text-black-600 mt-2'>Familia: {familia}</p>
        <p className='text-sm text-black-600'>Stock: {stock}</p>
        <p className='text-sm text-black-600'>Ubicacion: {ubicacion}</p>
    </div>
  )
}

const ComponentDetailList=() =>{
    const detailsData =[
        {
            descripcion:'SUPPORT 3M GEN GREY',
            referencia:'CHZ221012179907',
            familia:'Genesis',
            ubicacion: 'SB-06-D',
            stock: '1000',
        },
        
    ]
    return(
        <div className='space-x-4'>
            {detailsData.map((details, index)=>(
                <Details
                key={index}
                descripcion={details.descripcion}
                referencia={details.referencia}
                familia={details.familia}
                stock={details.stock}
                ubicacion={details.ubicacion}
                />
            ))}

        </div>
    )
}

export default ComponentDetailList;