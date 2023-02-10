import React from 'react';
/* Hooks */
import { useAsyncDebounce } from 'react-table';

// ESTILOS
const divStyle = "mx-auto";
const inputStyle = "p-1 text-md border border-stone-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-500";

// COMPONENTE
/* Buscador de Registros */
export const InputSearcher = ({ placeholder, filter, setFilter }) => {
    // CONSTANTES
    /* Búsqueda con Actualización Asíncrona al Detectar un Cambio */
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined);
    }, 1000);

    // RETORNO
    return (
        <div className={ divStyle }>
            <input 
                className={ inputStyle }
                placeholder={ placeholder }
                value={ filter || "" }
                onChange={ (e) => {
                    setFilter(e.target.value);
                    onChange(e.target.value);
                }}
            />
        </div>
    );
}
