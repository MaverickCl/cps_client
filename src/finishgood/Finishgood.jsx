import React from 'react'
import Navbar from '../components/Navbar';
import TableComponent from '../components/TableComponent';
import DetailList from './components/Details';
function Finishgood() {
  return (
    <div>
      <Navbar/>
      <div className="py-3">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <img src="/MWD60604.png" alt="Producto Imagen" className="img-fluid" style={{ width: '80%' }}/>
            </div>
            <div className="w-1/2 mt-16">
              <DetailList/>
              <TableComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finishgood