import React from 'react';
import { IRiftRoute } from 'rift-router';
import { VSelectUnselectItemsDemo } from './components/forms/SelectUnselectItemsDemo';
import VAgGridDoc from './components/table/VAgGrid';
import VPaginationDocs from './components/table/VPagination';
import VColorPickerDoc from './components/forms/VColorPicker';
import VInputsDoc from './components/forms/VInputs';
import VDragAndDropDoc from './components/forms/VDragAndDrop';
import VNotificationToastDocs from './components/notifications/VNotificationToast';
import VCarouselDoc from './components/carousel/VCarousel';
import VLoadProgressDoc from './components/load-progress/VLoadProgress';
import VSuspenseDoc from './components/suspense/VSuspense';
import VTabsPanelDoc from './components/tabs/VTabsPanel';
import VOrgChartDoc from './components/org-chart/VOrgChart';
import Home from './template/Home';
import VTableDocs from "./components/table/VTableDocs";
import {FormFieldContainer} from "gsi-ui/lib/types/Form/Inputs/FormFieldContainer";
import FormLayout from "./components/forms/FormLayout";

export const routes: IRiftRoute[] = [
  {
    component: () => '',
    onEnter: () => '/',
    path: '*'
  },
  { path: '/', component: <Home /> },
  { path: '/table/ag-grid', component: <VAgGridDoc /> },
  { path: '/table/blueprint', component: <VTableDocs /> },
  { path: '/table/blueprint/suspense', component: <VSuspenseDoc /> },
  { path: '/table/pagination', component: <VPaginationDocs /> },
  { path: '/example', component: () => <VInputsDoc /> },
  { path: '/forms', component: () => <FormLayout /> },
  { path: '/forms/select', component: () => <>{'Select'}</>},
  { path: '/forms/color-picker', component: () => <VColorPickerDoc /> },
  {
    path: '/forms/select-unselect',
    component: () => <VSelectUnselectItemsDemo />
  },
  { path: '/forms/dnd', component: () => <VDragAndDropDoc /> },
  { path: '/tabs-panel', component: () => <VTabsPanelDoc /> },
  { path: '/toast', component: () => <VNotificationToastDocs /> },
  { path: '/load-progress', component: () => <VLoadProgressDoc /> },
  { path: '/hierarchy', component: () => <VOrgChartDoc /> },
  { path: '/carousel', component: () => <VCarouselDoc /> }
];
