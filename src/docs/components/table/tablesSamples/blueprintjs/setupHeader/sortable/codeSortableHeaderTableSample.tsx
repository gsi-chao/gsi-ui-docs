import React from "react";


export const codeSample=()=>{

    return `
   const onSort = (index: any) => {
        console.log(index);
    };
  `
};

export const codeProperties=()=>{
    return `{...otherProperties\n  
 sortable={{
          columns: 'ALL',
          onSort: onSort,
          setupsOrden: [
              {
                  order: 'ASC',
                  columnName: 'name',
                  columnIndex: 0
              }
          ]
      }}
`
};