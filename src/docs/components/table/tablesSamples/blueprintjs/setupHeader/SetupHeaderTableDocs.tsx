import React, {  useState } from 'react';
import {  Divider, Collapse } from '@blueprintjs/core';
import {
  ContainerEditor,
  H4Pointer,
} from '../../../style';
import { TagCode } from '../../../Edito';
import { SetupColorHeaderTableDocs } from './colorHeader/setupColorHeaderTableDocs';
import {SetupSortableHeaderTableDocs} from "./sortable/SortableHeaderTableDocs";

export const HeaderStupTableDocs = () => {
  const [defaultCollapse, setDefaultCollapse] = useState<boolean>(true);
  const [headerColorCollapse, setHeaderColorCollapse] = useState<boolean>(
    false
  );
  const code = () => {
    return (
      <ContainerEditor style={{ height: '60vh', overflowY: 'auto' }}>
        <TagCode
          showPropertiesInPreTag
          name={'VTable'}
          property={` columns={['name', 'lastName', 'phone', 'email', 'company', 'notes']} \n data={getData()}\n columns_name={getColumnsName()}`}
          inline
        />
      </ContainerEditor>
    );
  };

  const toggleDefaultCollapse = (
    key: 'header_setting' | 'headerColorCollapse'
  ) => {
    switch (key) {
      case 'header_setting': {
        setDefaultCollapse(!defaultCollapse);
        break;
      }
      case 'headerColorCollapse': {
        setHeaderColorCollapse(!headerColorCollapse);
        break;
      }
    }
  };

  return (
    <>
      <H4Pointer
        onClick={() => toggleDefaultCollapse('header_setting')}
        className="bp3-heading"
      >
        Header Setting
      </H4Pointer>
      <Divider />
      <Collapse transitionDuration={1000} isOpen={defaultCollapse}>
        <p
          className="bp3-text-muted bp3-text-large"
          style={{ marginTop: '15px' }}
        >
          La tabla se le puede personalizar el encabezado, ya sea el background
          color, color y alineación del texto reordenamiento de columnas ...
        </p>
        <SetupColorHeaderTableDocs />
         <br />
        <SetupSortableHeaderTableDocs />
      </Collapse>
    </>
  );
};
