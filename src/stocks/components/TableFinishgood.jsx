import React from 'react';

const TableFinishgood = () => {
  const data = [
    {
      referencia: 'MWD60604',
      descripcion: 'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
      stockPlanta: 100,
      stockProveedor: 100,
      necesidad: 1000,
    },
    {
        referencia: 'MWD60604',
        descripcion: 'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
        stockPlanta: 100,
        stockProveedor: 100,
        necesidad: 1000,
      },
      {
        referencia: 'MWD60604',
        descripcion: 'PLACA TMACTE STD USA DUPLX 15A MISTIC BL',
        stockPlanta: 100,
        stockProveedor: 100,
        necesidad: 1000,
      },
    // ... más datos
  ];

  return (
    <div className="flex justify-center py-2">
      <table className="w-auto text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="py-3 px-6">
              Referencia
            </th>
            <th scope="col" className="py-3 px-6">
              Descripción
            </th>
            <th scope="col" className="py-3 px-6">
              Stock en planta
            </th>
            <th scope="col" className="py-3 px-6">
              Stock en proveedor
            </th>
            <th scope="col" className="py-3 px-6">
              Necesidad
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-[#B2EBBD] hover:text-black">
              <th  scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                <a href='/finish_good/' >{item.referencia}</a>
              </th>
              <td className="py-4 px-6">
                {item.descripcion}
              </td>
              <td className="py-4 px-6">
                {item.stockPlanta}
              </td>
              <td className="py-4 px-6">
                {item.stockProveedor}
              </td>
              <td className="py-4 px-6">
                {item.necesidad}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFinishgood;