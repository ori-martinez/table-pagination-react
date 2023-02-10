import React from "react";

// ESTILOS
/* Contenedor */
const divStyle = "mx-auto inline-flex items-center"
/* Campo de Selección del Tamaño de la Página */
const labelStyle = "mr-3 text-md font-bold";
const selectStyle = "p-1 text-md border border-stone-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-500";

// COMPONENTE
/* Campo de Selección del Tamaño de la Página */
export const PageSizeSelect = ({ nameSelect, options, pageSize, setPageSize }) => 
// RETORNO
(<div className={ divStyle }>
    {/* Título del Input */}
    <label className= { labelStyle }> Tamaño de la Página: </label>

    {/* Campo de Selección del Tamaño de Página */}
    <select
        name={ nameSelect }
        className={ selectStyle }
        defaultValue={ pageSize }
        onChange={ e => {
            /* Asignación del Tamaño de Página Seleccionado  */
            setPageSize(Number(e.target.value));
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
