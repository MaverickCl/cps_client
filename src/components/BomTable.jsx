import React, { useState, useEffect } from 'react';
import { getBomByFinishGoodRef } from '../api/bomService'; // Asume la existencia de esta función

const BomTable = ({ finishGoodRef }) => {
    const [bomItems, setBomItems] = useState([]);

    useEffect(() => {
        const loadBomItems = async () => {
            try {
                const response = await getBomByFinishGoodRef(finishGoodRef);
                setBomItems(response.data);
            } catch (error) {
                console.error("Error fetching BOM data for", finishGoodRef, error);
            }
        };

        if (finishGoodRef) {
            loadBomItems();
        }
    }, [finishGoodRef]); // Este efecto se re-ejecuta si cambia finishGoodRef
    console.log(bomItems)
    return (
        <div className="flex justify-center">
            <div className="flex-col items-center py-2">
                <div className="w-full">
                    <table className="w-auto text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Referencia Componente
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Descripción
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Stock
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Necesidad
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bomItems.map((item, index) => (
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

export default BomTable;
