import React, {  useState } from 'react';
import { Card, Divider, Collapse } from '@blueprintjs/core';
import { VTabsPanel } from 'gsi-ui';
import { DefaultTableBlueprintSample } from './DefaultTable';
import {
  ContainerEditor,
  H4Pointer,
  ImportTag,
  NoteTag
} from '../../../style';
import { TagCode } from '../../../Edito';

export const DefaultTableDocs = () => {
  const [defaultCollapse, setDefaultCollapse] = useState<boolean>(true);
  const code = () => {
    return (
      <ContainerEditor style={{ height: '60vh', overflowY: 'auto' }}>
        <pre>
          {`const getData = () => {

        const data: any[] = [];
        for (let i = 0; i < 8; i++) {

            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();

            data.push({
                name: firstName,
                lastName: lastName,
                phone: faker.phone.phoneNumber(),
                company: faker.company.companyName(),
                email: faker.internet.email(firstName, lastName, 'generalsoftwareinc.com'),
                notes: faker.lorem.sentence(),

            })
        }
        return data;
    };`}
        </pre>
        <br />
        <pre>
          {` const getColumnsName = () => {
        return {
            name: 'Name',
            lastName: 'Last Name',
            phone: 'Phone',
            email: 'Email',
            company: 'Company',
            notes: 'Notes',
        }
    };`}
        </pre>
        <br />
        <br />
        <TagCode
          showPropertiesInPreTag
          name={'VTable'}
          property={` columns={['name', 'lastName', 'phone', 'email', 'company', 'notes']} \n data={getData()}\n columns_name={getColumnsName()}`}
          inline
        />
      </ContainerEditor>
    );
  };

  const toggleDefaultCollapse = (key: 'default') => {
    switch (key) {
      case 'default': {
        setDefaultCollapse(!defaultCollapse);
        break;
      }
    }
  };

  return (
    <>
      <H4Pointer
        onClick={() => toggleDefaultCollapse('default')}
        className="bp3-heading"
      >
        Default
      </H4Pointer>

      <Divider />
      <Collapse transitionDuration={1000} isOpen={defaultCollapse}>
        <VTabsPanel
          size="small"
          backgroundColor="white"
          padding="0px"
          tabList={[
            {
              label: 'Sample',
              key: 'sample',
              content: (
                <div style={{ padding: '10px ' }}>
                  <DefaultTableBlueprintSample />
                </div>
              )
            },
            {
              label: 'Code',
              key: 'code',
              content: <>{code()}</>
            }
          ]}
          activeBorderColor="#175dbf"
          active="sample"
          handleChange={() => {}}
        />
        <Card style={{ marginTop: '5px' }}>
          <p
            className="bp3-text-muted bp3-text-large"
            style={{ marginTop: '15px' }}
          >
            Para definir una tabla es necesario importar{' '}
            <ImportTag>{`import {VTable} from "gsi-ui"`}</ImportTag>. La tabla
            tiene 2 propiedades requeridas : <NoteTag> columns </NoteTag> ,
            arreglo con los key de las columnas que{' '}
            <NoteTag> tienen que ser únicos </NoteTag> y la propiedad{' '}
            <NoteTag>data</NoteTag> : que es un arreglo con un objeto de
            <NoteTag>{` { [key] : value}`}</NoteTag>, donde{' '}
            <NoteTag> {`key`}</NoteTag> tiene que correspoder con una de las key
            del arreglo <NoteTag> columns </NoteTag>
          </p>

          <p className="bp3-text-muted bp3-text-large">
            Para personalizar los encabezado solo tiene que setear la propiedad{' '}
            <NoteTag>columns_name </NoteTag>
            con un objeto <NoteTag>{`{ [key] : value}`}</NoteTag>, donde{' '}
            <NoteTag> {`key`}</NoteTag> tiene que correspoder con una de las key
            del arreglo <NoteTag> columns </NoteTag> como muestra el ejemplo
          </p>

          <p className="bp3-text-muted bp3-text-large">
            Para poner la tabla en modo stripped solo tiene que agregarle la
            propiedad <NoteTag> stripped </NoteTag>
            que es de tipo boolean como se muestra en el ejemplo de abajo
          </p>
          <ContainerEditor>
            <TagCode
              name={'VTable'}
              inline
              property={'{...otherProperties} striped'}
            />
          </ContainerEditor>
          <DefaultTableBlueprintSample countData={3} striped />
        </Card>
      </Collapse>
    </>
  );
};
