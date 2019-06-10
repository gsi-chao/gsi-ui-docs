import {ContainerEditor, H3Pointer} from "../../../../style";
import {TagCode} from "../../../../Edito";
import React, {useState} from "react";
import {Card, Collapse, Divider} from "@blueprintjs/core";
import {VTabsPanel} from "gsi-ui";
import {SortableTableBlueprintSample} from "./SortableHeaderTable";
import {codeProperties, codeSample} from "./codeSortableHeaderTableSample";



export const SetupSortableHeaderTableDocs =()=>{

    const [headerColorCollapse, setHeaderColorCollapse] = useState<boolean>(true);

    const toggleDefaultCollapse = (key: 'headerColorCollapse') => {
        switch (key) {

            case 'headerColorCollapse': {
                setHeaderColorCollapse(!headerColorCollapse);
                break;
            }
        }
    };

    const code = () => {
        return (
            <ContainerEditor style={{ height: '60vh', overflowY: 'auto' }}>

                <pre style={{margin:'0px'}}>
                    {codeSample()}
                </pre>

                <TagCode
                    showPropertiesInPreTag
                    name={'VTable'}
                    property={codeProperties()}
                    inline
                />
            </ContainerEditor>
        );
    };

    return (<>

        <H3Pointer
            onClick={() => toggleDefaultCollapse('headerColorCollapse')}
            className="bp3-heading"
        >
            Sortable Header Setting
        </H3Pointer>
        <Divider />
        <Collapse transitionDuration={1000} isOpen={headerColorCollapse}>

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
                                <SortableTableBlueprintSample />
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
                >
                    En el ejemplo anterior ...
                </p>
            </Card>

        </Collapse>
    </>)


};