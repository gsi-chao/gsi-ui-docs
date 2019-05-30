import React from 'react';
import {Divider, H1, H2, Pre} from "@blueprintjs/core";
import {HomeContainer} from "./styled";

const Home = () => {
    return (
        <HomeContainer>
            <H1 className="bp3-heading">
                GSI-VX-UI
            </H1>
            <Divider/>
            <p className="bp3-text-muted bp3-text-large">It's an extension of the blueprint framework. It has other components that are not included in blueprintjs.</p>
            <H2 className="bp3-heading">Components</H2>
            <Divider/>
            <Pre>
            <ul className="bp3-list">
                <li>VTable - Extension of @blueprintjs/table, added multiple functionalities.</li>
                <li>VBadge - Native component, not libraries.</li>
                <li>VCardPanel - Configurable Card, uses Card @blueprintjs/core.</li>
                <li>VColorPicker - Color Picker Component uses the library react-color.</li>
                <li>VDragAndDropList - Drag and Drop List Component use the library react-beautiful-dnd.</li>
                <li>VPaginator - Native Paginator Component, not libraries.</li>
                <li>VProgressLabel - Native Component, not libraries. Useful to represent multiples progress bar.</li>
                <li>VCarousel - Native Component, uses react-pose for animations.</li>
                <li>VSelectionList - Native Component.</li>
                <li>VSelectUnselectItems - Native Component to switch items between lists.</li>
                <li>VSpinner - Extension of @blueprintjs/core Spinner.</li>
                <li>VSuspenseLoadint - Extension of Suspense component of React.</li>
                <li>VTabsMenu - Extension of @blueprintjs/core Tabs. added customizable functions.</li>
                <li>VToastNotification - Extension of @blueprintjs/core Toaster.</li>
                <li>VOrgChart - Native Component uses orgchart library. Useful to represent hierarchies.</li>
            </ul>
            </Pre>
        </HomeContainer>
    );
};
export default Home;