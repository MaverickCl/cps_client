import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TableComponent from '../components/TableComponent';
import DetailList from './components/DetailList';
import { getFinishgoodByReference } from '../api/finishGoodService';
import { useParams } from 'react-router-dom';


function Finishgood() {
  const { referencia } = useParams(); // Obtiene la referencia de la URL
  const [finishGoodDetails, setFinishGoodDetails] = useState(null);
  useEffect(() => {
    if (referencia) {
      getFinishgoodByReference(referencia)
        .then(response => {
          setFinishGoodDetails(response.data); // Asume que los datos vienen en response.data
        })
        .catch(error => {
          console.error("Error fetching FinishGood details", error);
        });
    }
  }, [referencia]);
  const imageUrl = finishGoodDetails?.Url
  return (
    <div>
      <Navbar/>
      <div className="py-3">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <img src={imageUrl} alt="Producto Imagen" className="img-fluid" style={{ width: '80%' }}/>
            </div>
            <div className="w-1/2 mt-16">

               {/* Detalle del Finishgood */}
              <DetailList details={finishGoodDetails}/>

              {/* tabla de componentes */}
              <TableComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finishgood