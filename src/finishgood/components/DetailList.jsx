import React from 'react'

const Details = ({Descripcion, Referencia, Estado, Stock}) => {
  return (
    <div>
        <p className='font-bold'>{Descripcion}</p>
        <p className='text-sm text-gray-600'>{Referencia}</p>
        <p className='text-sm text-black-600 mt-2'>Estado: {Estado}</p>
        <p className='text-sm text-black-600'>Stock: {Stock}</p>
    </div>
  )
}

const DetailList = ({ details }) => {
    // Verifica si hay detalles disponibles antes de intentar renderizar
    if (!details) {
        return <div>Loading...</div>; // o cualquier otro manejo de carga o error
    }

    return (
        <div className='space-x-4'>
            <Details
                Descripcion={details.Descripcion}
                Referencia={details.Referencia}
                Estado={details.Estado}
                Stock={details.Stock}
            />
        </div>
    );
}

export default DetailList;