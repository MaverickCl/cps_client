import React, { useState, useEffect } from 'react';
import { getAllFinishgood } from '../../api/finishGoodService.js';
import Pagination from '../../components/Pagination.jsx';


const TableFinishgood = () => {
    const [finishgoods, setFinishgoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // Ajustamos a 0 basado en tu ejemplo
    const itemsPerPage = 3;

    useEffect(() => {
        const loadFinishGoods = async () => {
            try {
                const response = await getAllFinishgood();
                setFinishgoods(response.data);
            } catch (error) {
                console.error("Error fetching FinishGood data", error);
            }
        };

        loadFinishGoods();
    }, []);

    // Calcula los productos a mostrar en la página actual
    const startIndex = currentPage * itemsPerPage;
    const selectedFinishGoods = finishgoods.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex justify-center">
        <div className=" flex-col items-center py-2">
            <div className="w-full">
                {/* Aquí iría tu código para mostrar los finishgoods, como una tabla o una lista de tarjetas */}
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
                    {selectedFinishGoods.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-[#B2EBBD] hover:text-black">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                <a href={`/finish_good/${item.Referencia}`}>{item.Referencia}</a>
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
            <Pagination
                total={finishgoods.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
        </div>
    );
};

export default TableFinishgood;