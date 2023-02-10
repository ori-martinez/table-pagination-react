// CONSTANTES
/* Propiedades de las Columnas */
export const Columns = [
    { 
        Header: "ID",
        accessor: "id"
    },
    { 
        Header: "Nombre",
        accessor: "name"
    },
    {
        Header: "Abreviatura",
        accessor: "abbreviation"
    },
    {
        Header: "Capital", 
        accessor: "capital"
    },
    {
        Header: "Teléfono",
        accessor: "phone"
    },
    {
        Header: "Acciones"
    }
];

/* __________________________________________________________________________________________________________

NOTAS:
    1. Por cada nueva columna se agrega un nuevo objeto al arreglo Columns
    2. Cada objeto debe definir una propiedad Header, que será el nombre representado en la tabla para dicha
columna
    3. Otra propiedad es accessor. Esta indica con que propiedad de los datos, contenidos en el archivo
JSON, se relaciona la columna
__________________________________________________________________________________________________________ */
