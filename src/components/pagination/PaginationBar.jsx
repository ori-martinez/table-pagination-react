import React from 'react';
/* Components */
import { GotoPageSelect } from './GotoPageSelect';
/* Iconos */
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

// ESTILOS
/* Contenedores */
const mainDivStyle = "mt-4 mx-auto";
const divStyle = "inline-flex"
/* Botones de la Paginación */
const buttonStyle = "text-xl text-stone-900";
const buttonSquareLeftStyle = "ml-3 mr-6 text-3xl text-stone-900";
const buttonSquareRightStyle = "ml-6 mr-3 text-3xl text-stone-900";
/* Iconos */
const iconStyle = "hover:text-blue-500";
const iconDisabledStyle = "text-stone-400";

// FUNCIONES
/* Arreglo con las Propiedades de las Opciones de Página */
const arrayOptions = (qty) => {
    // VARIABLES
    /* Arreglo Vacío */
    let array = [];
    
    // CICLO
    /* Generación de las Propiedades de las Opciones de Página */
    for (let i = 0; i < qty; i ++) {
        /* Objeto de la Opción de la Página de la Iteración Actual */
        let page = {
            label: i + 1,
            value: i + 1,
        }
        
        /* Asignación de la Posición de la Iteración Actual */
        array[i] = page;
    }
        
    // RETORNO
    return array;
}

// COMPONENTES
/* Barra de Paginación */
export const PaginationBar = ({ pageQty, prev, prevCondition, next, nextCondition, gotoPage, pageCount }) => {
    // CONSTANTES
    /* Opciones para el Campo de Selección de Página Actual */
    const options = arrayOptions(pageQty);

    // RETORNO
    return (
        <div className={ mainDivStyle }>
            <div className={ divStyle }>
                {/* Botón para Ir a la Primera Página */}
                <button
                    className={ buttonStyle }
                    onClick={ () => gotoPage(0) }
                    disabled={ prevCondition }
                >
                    <FaAngleDoubleLeft className={ prevCondition ? iconDisabledStyle : iconStyle } />
                </button>
                {/* Botón para Ir a la Página Previa */}
                <button
                    className={ buttonSquareLeftStyle }
                    onClick={ prev }
                    disabled={ prevCondition }
                >
                    <BsFillArrowLeftSquareFill className={ prevCondition ? iconDisabledStyle : iconStyle } />
                </button>

                {/* Campo de Selección de la Página Actual */}
                <GotoPageSelect
                    nameSelect="pages"
                    options={ options }
                    gotoPage={ gotoPage }
                />

                {/* Botón para Ir a la Sigueinte Página */}
                <button
                    className={ buttonSquareRightStyle }
                    onClick={ next }
                    disabled={ nextCondition }
                >
                    <BsFillArrowRightSquareFill className={ nextCondition ? iconDisabledStyle : iconStyle } />
                </button>
                {/* Botón para Ir a la Última Página */}
                <button
                    className={ buttonStyle }
                    onClick={ () => gotoPage(pageCount-1) }
                    disabled={ nextCondition }
                >
                    <FaAngleDoubleRight className={ nextCondition ? iconDisabledStyle : iconStyle } />
                </button>
            </div>
        </div>
    );
}
