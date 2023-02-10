import React from 'react';
/* Components */
import { InputSearcher } from './inputs/InputSearcher';
import { PageSizeSelect, PaginationBar } from './pagination/index';
/* Hooks */
import { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
/* Utils */
import { Columns } from '../utils/Columns';
/* Icons */
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';

// ESTILOS
/* Generales */
const mainDivStyle = "mt-4 mx-auto w-4/5 relative overflow-x-auto shadow-2xl rounded-xl";
const divStyle = "inline-flex";
const tableStyle = "w-full table-content";
const pTopStyle = "mt-3 text-center";
const pBottomStyle = "mt-6 text-center";
/* Cabecera */
const theadStyle = "bg-stone-900";
const trTheadStyle = "text-center text-white text-xl font-bold";
const thStyle = "p-1";
const divThStyle = "flex flex-row items-center justify-center";
const iconsSortingStyle = "ml-1 font-bold";
/* Filas */
const trStyle = "text-center text-lg border-b";
/* Datos */
const tdStyle = "p-2";
const tdActionsStyle = "p-2 w-full flex flex-row items-center justify-center";
const iconsActionsStyle = "my-auto mx-4 text-blue-500 text-2xl";

// CONSTANTES
/* Opciones para el Campo de Selección del Tamaño de Página */
const options = [
    { value: 25, label: "Veinticinco - 25" },
    { value: 50, label: "Cincuenta - 50" },
    { value: 75, label: "Setenta y cinco - 75" },
];

// COMPONENTE
/* Tabla Paginada con Buscador de Registros y Ordenamiento por Columnas */
export const TablePagination = ({ data }) => {
    // HOOKS
    /* Recálculo de los Datos de las Columnas */
    const columns = useMemo(() => Columns, []);
    /* Propiedades de la Instancia de Tabla + Plugins */
    const { 
        /* Estructura + Estado */
        getTableProps, getTableBodyProps, headerGroups, prepareRow, state,
        /* Buscador de Registros */
        setGlobalFilter,
        /* Paginación */
        page, previousPage, nextPage, canPreviousPage, canNextPage, pageOptions, gotoPage, pageCount, setPageSize,
    } = useTable(
        /* Estructura + Estado Inicial */
        { columns, data, initialState: { pageSize : 25 } },
        /* Filtro Global */
        useGlobalFilter,
        /* Ordenamiento */
        useSortBy,
        /* Páginación */
        usePagination,
    );

    // CONSTANTES
    /* Estados para la Tabla */ 
    const { globalFilter, pageIndex, pageSize } = state;

    // RETORNO
    return (
        <React.Fragment>
            <div className={ divStyle }>
                {/* Buscador de Registros */}
                <InputSearcher
                    placeholder={ "Buscar..." }
                    filter={ globalFilter } 
                    setFilter={ setGlobalFilter }
                />

                {/* Campo de Selección de Tamaño de la Página */}
                <PageSizeSelect 
                    nameSelect="page_size"
                    options={ options }
                    pageSize={ pageSize }
                    setPageSize={ setPageSize }
                />
            </div>

            {/* Mensaje de Ubicación entre las Páginas */}
            <p className={ pTopStyle }> Página <b> { pageIndex + 1 } de { pageOptions.length } </b> </p>

            <div className={ mainDivStyle }>
                {/* TABLA */}
                <table 
                    { ...getTableProps() }
                    className={ tableStyle }
                >
                    {/* Cabecera */}
                    <thead className={ theadStyle }>
                        { headerGroups.map(headerGroup =>(
                            <tr 
                                { ...headerGroup.getHeaderGroupProps() }
                                className={ trTheadStyle }
                            >
                                { headerGroup.headers.map((column) => (
                                    <th 
                                        { ...column.getHeaderProps(column.getSortByToggleProps()) }
                                        className={ thStyle }
                                    >
                                        <div className={ divThStyle }>
                                            {/* Nombre de la Columna */}
                                            { column.render("Header") }

                                            {/* Iconos para Indicar la Dirección del Orden */}
                                            <span> { column.isSorted 
                                                ? (column.isSortedDesc 
                                                    ? <IoIosArrowDropdownCircle className={ iconsSortingStyle } /> 
                                                    : <IoIosArrowDropupCircle className={ iconsSortingStyle } />)
                                                : " "
                                            } </span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                        
                    </thead>

                    {/* Cuerpo */}
                    <tbody { ...getTableBodyProps() } >
                        { page.map(row => {
                            prepareRow(row)

                            return (
                                <tr 
                                    { ...row.getRowProps() }
                                    className={ trStyle }
                                >
                                    { row.cells.map(cell => {
                                        /* Condicional para Rellenar la Columna "Acciones" */
                                        return (cell.column.Header === "Acciones")
                                            ? <td
                                                { ...cell.getCellProps() }
                                                className={ tdActionsStyle }
                                            >
                                                <TbEdit className={ iconsActionsStyle } /> 
                                                <AiOutlineDelete className={ iconsActionsStyle } /> 
                                            </td>
                                            : <td
                                                { ...cell.getCellProps() }
                                                className={ tdStyle }
                                            > 
                                                { (cell.value === '' || cell.value === ' ' || cell.value === null) ? ' - ' : cell.render("Cell") }
                                            </td>
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Mensaje de Ubicación entre las Páginas */}
            <p className={ pBottomStyle }> Página <b> { pageIndex + 1 } de { pageOptions.length } </b> </p>

            {/* Barra de Páginación */}
            <PaginationBar
                pageQty={ pageOptions.length }
                prev={ () => previousPage() }
                prevCondition={ !canPreviousPage }
                next={ () => nextPage() }
                nextCondition={ !canNextPage }
                gotoPage={ gotoPage }
                pageCount={ pageCount }
            />
        </React.Fragment>
    );
}
