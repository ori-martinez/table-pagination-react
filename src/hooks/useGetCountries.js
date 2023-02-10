import axios from 'axios';
/* Hooks */
import { useEffect, useState } from 'react';

// HOOKS
/* Obtención de los Datos de Países con la Llamada del API */
export const useGetCountries = () => {
    // CONSTANTES
    /* Variable para los Datos de la Tabla */
    const [ data, setData ] = useState([]);

    // FUNCIONES
    /* Captura de los Datos (Response) en un Array */
    const getCountries = () => {
        /* URL del Response */
        const url = "https://api.sampleapis.com/countries/countries";
        
        /* Asignacion del Response en la Variable */
        axios.get(url).then((response) => {
            setData(response.data);
        });
    }

    // HOOKS
    /* Ejecución de la Captura del Response */
    useEffect(() => {
        getCountries();
    }, []);

    return data;
}
    