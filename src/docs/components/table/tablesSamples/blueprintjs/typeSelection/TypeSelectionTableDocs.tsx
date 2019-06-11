import React, {useState} from 'react';
import {Card, Divider, Collapse, Pre} from '@blueprintjs/core';
import {VCardPanel, VTable, VTabsPanel} from 'gsi-ui';
import {
    ContainerEditor,
    H4Pointer,
    NoteTag
} from '../../../style';
import {TagCode} from '../../../Edito';
import {TypeSelectionTableBlueprintSample} from './TypeSelectionTable';
import {codeProperties, codeSample} from "./codeTypeSelectionSample";

export const TypeSelectionTableTableDocs = () => {
    const [defaultCollapse, setDefaultCollapse] = useState<boolean>(true);

    const code = () => {
        return (
            <ContainerEditor style={{height: '60vh', overflowY: 'auto'}}>
          <pre style={{margin: '0px'}}>
              {codeSample()}
          </pre>

                <TagCode
                    name={'VTable'}
                    property={codeProperties()}
                    inline
                    showPropertiesInPreTag
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
                Type Selection
            </H4Pointer>

            <Divider/>
            <Collapse transitionDuration={1000} isOpen={defaultCollapse}>
                <p
                    className="bp3-text-muted bp3-text-large"
                    style={{marginTop: '15px'}}
                >
                    La tabla posee varios tipo de selección, para configurarla solo tiene
                    que setear la propiedad
                    <NoteTag> cellSelectionType</NoteTag> la cual posee los siguiente
                    tipos{' '}
                </p>
                <Pre>
          <ul className="bp3-list">
            <li>FREE: Puede seleccionar ......</li>
            <li>CELL: Puede seleccionar ......</li>
            <li>MULTIPLE_ENTIRE_ROWS: Puede seleccionar ......</li>
            <li>DISABLED: Puede seleccionar ......</li>
          </ul>
        </Pre>

                <p
                    className="bp3-text-muted bp3-text-large"
                    style={{marginTop: '15px'}}
                >
                    En el ejemplo de abajo se muestra una tabla con las configuraciónes que se le pueden adcionar, con
                    respecto a todo lo relacionado con la selección
                </p>

                <VTabsPanel
                    size="small"
                    backgroundColor="white"
                    padding="0px"
                    tabList={[
                        {
                            label: 'Sample',
                            key: 'sample',
                            content: (
                                <div style={{padding: '10px '}}>
                                    <TypeSelectionTableBlueprintSample/>
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
                    handleChange={() => {
                    }}
                />
                <Card style={{marginTop: '5px'}}>
                    <p
                        className="bp3-text-muted bp3-text-large"
                        style={{marginTop: '15px'}}
                    >
                        En el ejemplo de anterior .....
                    </p>
                </Card>
            </Collapse>
        </>
    );
};
