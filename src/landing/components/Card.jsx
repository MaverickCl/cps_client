import React from 'react';

const Card = ({ title, status, difference, lastUpdated, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg mt-8 max-w-sm w-full">
      <a href='/finish_good/'>
      <img className="h-40 mx-auto" src={url} alt="producto" />
      </a>
      <a href='/finish_good/' className="text-lg font-bold block mx-auto mt-4 w-max">{title}</a>
      <p className="text-sm text-gray-600 text-center mt-2">{status}</p>
      <p className="text-sm text-gray-600 text-center">Diferencia de unidades: {difference}</p>
      <p className="text-xs text-gray-400 text-center py-4">Last updated {lastUpdated}</p>
    </div>
  );
};

const CardList = () => {
  // Asumiendo que estos datos podrían venir de una API o similar.
  const cardsData = [
    {
      title: 'MWD60604',
      status: 'Estado: En proceso de facturación',
      difference: '100',
      lastUpdated: '3 mins ago',
      url:'/MWD60604.png' ,
      
    },
    {
      title: 'MWD60604',
      status: 'Estado: En proceso de facturación',
      difference: '100',
      lastUpdated: '3 mins ago',
      url:'/MWD60604.png',
      
    },
    {
      title: 'MWD60604',
      status: 'Estado: En proceso de facturación',
      difference: '100',
      lastUpdated: '3 mins ago',
      url:'/MWD60604.png',
    },
    // datos de tarjetas
  ];

  return (
    <div className="flex justify-center items-center space-x-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          status={card.status}
          difference={card.difference}
          lastUpdated={card.lastUpdated}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default CardList;

