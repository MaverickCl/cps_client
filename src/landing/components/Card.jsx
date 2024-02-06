import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ Referencia, Estado, Necesidad, Url }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg mt-8 max-w-sm w-full">
        <Link to={`/finish_good/${Referencia}`}>
          <img className="h-40 mx-auto" src={Url} alt="producto" />
        </Link>
        <Link to={`/finish_good/${Referencia}`} className="text-lg font-bold block mx-auto mt-4 w-max">
          {Referencia}
        </Link>
        <p className="text-sm text-gray-600 text-center mt-2">{Estado}</p>
        <p className="text-sm text-gray-600 text-center">Necesidad: {Necesidad}</p>
      </div>
    );
};