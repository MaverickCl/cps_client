import React, { useState, useEffect } from 'react';
import { getAllComponentes } from '../api/componentesService.js';

const TableComponent = () => {
    const [componentes, setComponentes] = useState([]);
    const [HighestNeedComponentes, setHighestNeedComponentes] = useState([]);

    useEffect(() => {
        const loadComponentes = async () => {
            try {
                const response = await getAllComponentes();
                const data = response.data;
                setComponentes(data);
                // Ahora ordenamos y filtramos usando data directamente
                const sortedComponentes = data.sort((a, b) => b.Necesidad - a.Necesidad);
                const topComponentes = sortedComponentes.slice(0, 3); // Asume que quieres los 3 componentes de mayor necesidad
                setHighestNeedComponentes(topComponentes);
            } catch (error) {
                console.error("Error fetching Componentes data", error);
            }
        };
        loadComponentes();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex-col items-center py-2">
                <div className="w-full">
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
                                    Necesidad
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {HighestNeedComponentes.map((item, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-[#B2EBBD] hover:text-black">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        <a href={`/component_view/${item.Referencia}`}>{item.Referencia}</a>
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.Descripcion}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.Stock}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.Necesidad}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;