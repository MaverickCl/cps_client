import React from 'react'
import Navbar from '../../components/Navbar'
import ComponentDetailList from '../components/ComponentsDetails'
import TableComponent from '../../components/TableComponent'

const ComponentView = () => {
  return (
    <div>
      <Navbar/>
      <div className="py-3">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <img src="/CHZ221012179907.png" alt="Producto Imagen" className="img-fluid " style={{ width: '80%' }}/>
            </div>
            <div className="w-1/2 mt-16">
              <ComponentDetailList/>
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentView