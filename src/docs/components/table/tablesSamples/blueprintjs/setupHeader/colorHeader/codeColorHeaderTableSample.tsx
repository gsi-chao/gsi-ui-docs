

export const codeSample=()=>{

    return `
const [columns,setColumns]=useState<string[]>(['name', 'lastName', 'phone', 'email', 'company', 'notes']);

const getConfigStyleHeader = () => {
        return [
            {
                column: 'name',
                textColor: 'white',
                backgroundColor: '#DB2C6F',
                textAlign: 'left'
            },
            {
                column: 'lastName',
                textColor: 'white',
                backgroundColor: '#634DBF'
            },
            {
                column: 'phone',
                textColor: 'white',
                backgroundColor: '#D13913'
            },
            {
                column: 'email',
                textColor: 'white',
                backgroundColor: '#308c8a',
                textAlign: 'end'
            },
            {
                column: 'company',
                textColor: 'white',
                backgroundColor: '#e5504f',
                textAlign: 'end'
            },
            {
                column: 'notes',
                textColor: 'white',
                backgroundColor: '#238C2C',
                textAlign: 'end'
            }
        ]
    };`
};

export const codeProperties=()=>{
    return `{...otherProperties\n  
    columns={columns}
    configColumnsHeader={getConfigStyleHeader()}
    reordering={true}
    onOrderColumns={(columns: string[]) => setColumns(columns)}
    enableColumnResizing={true}
    columnWidths={[250, 125, 150, 200]}

`
};