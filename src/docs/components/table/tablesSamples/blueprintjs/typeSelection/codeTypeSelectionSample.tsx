import React from "react";


export const codeSample=()=>{

    return `
// NOTE: CellSelectionType : 'FREE', 'CELL', 'ENTIRE_ROW', 'MULTIPLE_ENTIRE_ROWS'

import { CellSelectionType } from 'gsi-ui';
import { IRegion } from '@blueprintjs/table';

  const typeSelection: CellSelectionType = 'FREE';
  const regions: IRegions[] = [{ cols: [0, 5], rows: [5, 5] }];
  const [styleSelection, setStyleSelection] = useState();

              
 const onSelectionChange = (value: any) => {
    setElementSelected(value);
  };

  const onRegionsChange = (regions: IRegion[]) => {
    setRegionSelected(regions);
  };

  const onDoubleClick = ( value: any, rowIndex: number, columnIndex: number, columnName: string ) => {
    setDoubleClick({ value, rowIndex, columnIndex,  columnName });
  };`
};

export const codeProperties=()=>{
    return `{...otherProperties\n cellSelectionType={typeSelection}\n actionsSelection={{
        onSelectionChange: onSelectionChange,
        onRegionsChange: onRegionsChange,
        onDoubleClick: onDoubleClick
                }}
regions={regions}
selectionStyle={styleSelection}`

};