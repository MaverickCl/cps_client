import React from 'react'
import Navbar from '../../components/Navbar'
import TableComponents from '../components/TableComponents'
import TableFinishgood from '../components/TableFinishgood'

const Stocks = () => {
  return (
    <div>
      <Navbar/>
      <div className='py-8'>

        <p className='font-bold text-center mt-6'>Finish Good</p>
        <TableFinishgood />

        <p className='font-bold text-center mt-6'>Componentes</p>
        <TableComponents />
        

      </div>
    </div>
    
  )
}

export default Stocks