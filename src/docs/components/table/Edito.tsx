import React from 'react';
import { PropertyEditor, TagEditor} from "./style";

export interface IProps {
    name:string,
    property?:string
    children?: any,
    inline?:boolean,
    showPropertiesInPreTag?:boolean
}

export const TagCode =(props:IProps)=>{


    if(props.inline){
        return (<>
            <TagEditor>
                {`<${props.name} `}
                <PropertyEditor>
                    {props.showPropertiesInPreTag?(  <pre style={{margin:'0px'}}>
                    {props.property}
                    </pre>):  props.property}

                </PropertyEditor>
                {' />'}

            </TagEditor>

        </>)
    }

    return (<>
        <TagEditor>
            {`<${props.name} `}
            <PropertyEditor>
                {props.property}
            </PropertyEditor>
            {' >'}
            <div style={{padding:'5px 24px'}}>
                {props.children}
            </div>
            <TagEditor> {`</${props.name}>`}</TagEditor>



        </TagEditor>

    </>)

};