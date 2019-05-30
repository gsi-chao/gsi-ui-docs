import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LicenseManager } from 'ag-grid-enterprise';
import App from './App';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';

const licence = process.env.REACT_APP_AGGRID_LICENCE
  ? process.env.REACT_APP_AGGRID_LICENCE
  : '';
LicenseManager.setLicenseKey(licence);
ReactDOM.render(<App />, document.getElementById('root'));
