import axios from 'axios';

// La URL base de tu API; ajusta esto según tu configuración
const BASE_URL = 'http://127.0.0.1:8000/cps/api/v1';

// Función para obtener los detalles de un FinishGood por su referencia
export const getFinishgoodByReference = (reference) => {
    return axios.get(`${BASE_URL}/finishgood/${reference}/`);
}

// Función para obtener los datos de FinishGood paginados desde la API ficticia
export const getFinishGoodsPaginated = async (page, itemsPerPage) => {
    try {
        // Calcula el índice de inicio en función de la página actual
        const startIndex = (page - 1) * itemsPerPage;

        // Realiza una solicitud GET a la API para obtener los datos paginados
        const response = await axios.get(`${BASE_URL}/finishgood/`, {
            params: {
                _start: startIndex, // Índice de inicio
                _limit: itemsPerPage, // Cantidad de elementos por página
            },
        });

        // Retorna la respuesta de la API
        return response.data;
    } catch (error) {
        // Manejo de errores
        throw error;
    }
}

export const getAllFinishgood = () => {
    return axios.get(`${BASE_URL}/finishgood/`);
}