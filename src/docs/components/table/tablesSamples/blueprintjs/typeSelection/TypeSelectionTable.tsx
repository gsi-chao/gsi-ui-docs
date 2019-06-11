import React, {  useState } from 'react';
import { CellSelectionType, VSelectField, VTable } from 'gsi-ui';
import { IRegion } from '@blueprintjs/table';
import { Button } from '@blueprintjs/core';

export const faker = require('faker');

export interface IProps {
  countData?: number;
}

const optionsTypeSelection = () => {
  return ['FREE', 'CELL', 'ENTIRE_ROW', 'MULTIPLE_ENTIRE_ROWS'];
};

export const TypeSelectionTableBlueprintSample = (props: IProps) => {
  const [typeSelection, setTypeSelection] = useState<CellSelectionType>('FREE');
  const [elementSelected, setElementSelected] = useState();
  const [regionSelected, setRegionSelected] = useState();
  const [regions, setRegions] = useState();
  const [doubleClick, setDoubleClick] = useState();
  const [styleSelection, setStyleSelection] = useState();

  const getData = () => {
    const count = props.countData ? props.countData : 8;
    const data: any[] = [];
    for (let i = 0; i < count; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();

      data.push({
        name: firstName,
        lastName: lastName,
        phone: faker.phone.phoneNumber(),
        company: faker.company.companyName(),
        email: faker.internet.email(
          firstName,
          lastName,
          'generalsoftwareinc.com'
        ),
        notes: faker.lorem.sentence()
      });
    }
    return data;
  };

  const getColumnsName = () => {
    return {
      name: 'Name',
      lastName: 'Last Name',
      phone: 'Phone',
      email: 'Email',
      company: 'Company',
      notes: 'Notes'
    };
  };

  const handleChangeType = (value: any) => {
    setTypeSelection(value);
  };

  const onSelectionChange = (value: any) => {
    setElementSelected(value);
  };

  const onRegionsChange = (regions: IRegion[]) => {
    setRegionSelected(regions);
  };
  const onDoubleClick = (
    value: any,
    rowIndex: number,
    columnIndex: number,
    columnName: string
  ) => {
    setDoubleClick({
      value,
      rowIndex,
      columnIndex,
      columnName
    });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '5px', width: ' 500px' }}>
          <VSelectField
            value={typeSelection}
            label={'Type selection'}
            filterable={false}
            options={optionsTypeSelection().map(x => {
              return { label: x, value: x };
            })}
            onChange={handleChangeType}
            id={'type'}
            layer={{
              inputWidth: 6,
              labelWidth: 6
            }}
          />
        </div>
        <div style={{ padding: '5px' }}>
          <Button
            onClick={() => {
              setRegions([{ cols: [0, 5], rows: [5, 5] }]);
            }}
          >
            {' '}
            seleccionar fila 5
          </Button>
        </div>
          <div style={{ padding: '5px' }}>
              <Button
                  onClick={() => {
                    setStyleSelection({
                        backgroundColor: 'rgba(34, 220, 72, 0.16);',
                        borderColor: 'green',
                        borderRadius: '15'
                    })
                  }}
              >
                  {' '}
                  Change style selection
              </Button>
          </div>
      </div>

      <VTable
        columns={['name', 'lastName', 'phone', 'email', 'company', 'notes']}
        data={getData()}
        columns_name={getColumnsName()}
        striped
        cellSelectionType={typeSelection}
        actionsSelection={{
          onSelectionChange: onSelectionChange,
          onRegionsChange: onRegionsChange,
          onDoubleClick: onDoubleClick
        }}
        regions={regions}
        selectionStyle={styleSelection}
      />
      <br />
      <div style={{ display: 'flex' }}>
        <strong> Seleccionado : </strong>
        {!elementSelected ? (
          <span style={{ marginRight: '5px' }}> no seleccionado </span>
        ) : (
          <pre
            style={{
              height: '100px',
              overflowY: 'auto',
              margin: '0px'
            }}
          >
            {JSON.stringify(elementSelected, undefined, 2)}
          </pre>
        )}

        <strong> Región : </strong>
        {!regionSelected ? (
          <span style={{ marginRight: '5px' }}> no seleccionada </span>
        ) : (
          <pre
            style={{
              height: '100px',
              overflowY: 'auto',
              width: '20%',
              margin: '0px'
            }}
          >
            {JSON.stringify(regionSelected, undefined, 2)}
          </pre>
        )}
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <strong> Double click : </strong>
        {!doubleClick ? (
          <span style={{ marginRight: '5px' }}> no seleccionado </span>
        ) : (
          <pre
            style={{
              height: '100px',
              overflowY: 'auto',
              margin: '0px'
            }}
          >
            {JSON.stringify(doubleClick, undefined, 2)}
          </pre>
        )}
      </div>
    </>
  );
};
