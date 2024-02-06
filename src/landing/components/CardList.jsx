import React from 'react';
import{ useEffect, useState } from 'react';
import { getAllFinishgood } from '../../api/finishGoodService.js'
import { Card } from './Card';


const CardList = () => {
  // Asumiendo que estos datos podrían venir de una API o similar.
  const [highestNeedFinishGoods, setHighestNeedFinishGoods] = useState([]);

    useEffect(() => {
        getAllFinishgood()
            .then(response => {
                const finishGoods = response.data;
                // Asumiendo que los datos de 'Necesidad' están directamente en los objetos de 'finishGoods'
                // y que quieres encontrar los X elementos con mayor necesidad, donde X es un número definido por ti
                
                  // Calcula la 'diferencia' para cada FinishGood y lo almacena en un nuevo campo
                  
                
                const sortedFinishGoods = finishGoods.sort((a, b) => b.Necesidad - a.Necesidad); // Ordena por Necesidad de mayor a menor
                const topFinishGoods = sortedFinishGoods.slice(0, 3); // Cambia X por el número de elementos que deseas
                setHighestNeedFinishGoods(topFinishGoods);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    }, []);


  return (
    <div className="flex justify-center items-center space-x-4 mb-7">
      {highestNeedFinishGoods.map((finishGood , index) => (
        <Card
          key={index}
          Referencia={finishGood.Referencia}
          Estado={finishGood.Estado}
          Necesidad={finishGood.Necesidad}
          Url={finishGood.Url}
        />

      ))}
    </div>
  );
};

export default CardList;

