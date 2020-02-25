import { ColDef, ColGroupDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

export const ComponentApi = () => {
  const gridOptions: (ColDef | ColGroupDef)[] = [];

  return <AgGridReact columnDefs={gridOptions} />;
};
