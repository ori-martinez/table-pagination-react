import React from 'react';

// ESTILOS
/* Contenedor */
const divStyle = "w-full"
/* Campo de Selección de Páginas */
const selectStyle = "p-2 m-1 text-lg border border-stone-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-500";

// COMPONENTE
/* Campo de Selección de Página Actual */
export const GotoPageSelect = ({ nameSelect, options, gotoPage }) =>
// RETORNO
(<div className={ divStyle }>
    {/* Campo de Selección de Página */}
    <select
        name={ nameSelect }
        className={ selectStyle }
        defaultValue={ options[0] }
        onChange={ e => {
            // CONSTANTES
            /* Número de la Página Seleccionada */
            const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0

            // FUNCIONES
            /* Función para Ir a la Página Seleccionada */
            gotoPage(pageNumber);
        }}
    >
        { options.map((option) => (
            <option
                key={ option.value } 
                value={ option.value }
            > 
                { option.label } 
            </option>
        ))}
    </select>
</div>);
