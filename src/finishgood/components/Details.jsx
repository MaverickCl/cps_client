import React from 'react'

const Details = ({descripcion, referencia, familia, stock}) => {
  return (
    <div>
        <p className='font-bold'>{descripcion}</p>
        <p className='text-sm text-gray-600'>{referencia}</p>
        <p className='text-sm text-black-600 mt-2'>Familia: {familia}</p>
        <p className='text-sm text-black-600'>Stock: {stock}</p>
    </div>
  )
}

const DetailList=() =>{
    const detailsData =[
        {
            descripcion:'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
            referencia:'MWD60604',
            familia:'Genesis',
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
                />
            ))}

        </div>
    )
}

export default DetailList;