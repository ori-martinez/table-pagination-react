import React from 'react';
/* Components */
import { TablePagination } from './components/TablePagination';
/* Hooks */
import { useGetCountries } from './hooks/useGetCountries';

// ESTILOS
/* Contenedor */
const divStyle = "p-8 flex flex-col";
/* Título */
const titleStyle = "pb-6 text-3xl text-center text-blue-500 font-bold";
/* Separador */
const hrStyle = "p-2";

// COMPONENTE
/* Vista Principal */
export const App = () => {
    // CONSTANTES
    /* Obtención de los Datos de los Países */
    const countries = useGetCountries();

    // RETORNO
    return (
        <div className={ divStyle }>
            {/* Título */}
            <h1 className={ titleStyle }> Lista de Prueba </h1>

            {/* Separador */}
            <hr className={ hrStyle } />

            {/* Tabla Paginada */}
            <TablePagination data={ countries }/>
        </div>
    );
}
