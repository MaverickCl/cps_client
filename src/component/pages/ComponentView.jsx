import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import ComponentDetailList from '../components/ComponentsDetails'
import { useParams } from 'react-router-dom';
import { getComponentesByReference } from '../../api/componentesService'

const ComponentView = () => {
  const { referencia } = useParams(); // Obtiene la referencia de la URL
  const [componentDetails, setComponentDetails] = useState(null);
  useEffect(() => {
    if (referencia) {
      getComponentesByReference(referencia)
        .then(response => {
          setComponentDetails(response.data); // Asume que los datos vienen en response.data
        })
        .catch(error => {
          console.error("Error fetching FinishGood details", error);
        });
    }
  }, [referencia]);
  const imageUrl = componentDetails?.Url
  console.log(imageUrl)
  return (
    <div>
      <Navbar/>
      <div className="py-3">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <img src={imageUrl} alt="Producto Imagen" className="img-fluid " style={{ width: '80%' }}/>
            </div>
            <div className="w-1/2 mt-16">
              <ComponentDetailList details={componentDetails}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentView