import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Asegura que esta sea la base URL correcta

// Función para obtener los componentes de un FinishGood
export const getBomByFinishGoodRef = async (finishGoodRef) => {
    try {
        const response = await axios.get(`${BASE_URL}/cps/api/v1/finishgoodbom/${finishGoodRef}`);
        return response;
    } catch (error) {
        console.error('Error al obtener los componentes del BOM:', error);
        throw error;
    }
};