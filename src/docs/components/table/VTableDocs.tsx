import React from 'react';
import {Container} from "./style";
import {DefaultTableDocs} from "./tablesSamples/blueprintjs/defaultTable/DefaultTableDocs";
import {VCardPanel} from "gsi-ui";
import {TypeSelectionTableTableDocs} from "./tablesSamples/blueprintjs/typeSelection/TypeSelectionTableDocs";
import {HeaderStupTableDocs} from "./tablesSamples/blueprintjs/setupHeader/SetupHeaderTableDocs";




const VTableDocs=()=>{


    return <Container>
       <VCardPanel
           headerText={'Table'}
           headerBackgroundColor={'#175dbf'}
           headerColor={'whitesmoke'}
       >

           <p  className="bp3-text-muted bp3-text-large" style={{marginTop:'15px'}}> La tabla a continuación es una extension de la tabla del framewor ui <a>blueprintjs</a> en el ejemplo de
               les mostramos las cofiguraciones que se pueden realizar con esta extesión.</p>

           <DefaultTableDocs/>
           <br/>
           <TypeSelectionTableTableDocs/>
           <br/>
           <HeaderStupTableDocs />
       </VCardPanel>
      <br/>
      <br/>
      <br/>
        {/*<VTableWithWidgetDoc/>*/}
    </Container>
};

export default VTableDocs;

