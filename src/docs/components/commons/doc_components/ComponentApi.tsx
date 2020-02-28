import React from 'react';
import styled from 'styled-components';

interface IApiParam {
  property: string;
  description: string;
  type: 'string' | 'number' | 'boolean' | string;
  default?: string;
}

export interface IComponentApi {
  params: IApiParam[];
}

const STable = styled('table')`
  border: solid 1px #dddddd;
  width: 100%;
  & > tr {
    text-align: left;
  }
  & > tr:nth-child(even) {
    background-color: #dddddd;
  }
  & > tr > th {
    padding: 10px 15px;
    font-weight: normal;
    font-family: none;
  }
  & > tr > td {
    padding: 10px 15px;
  }
`;

export const ComponentApi = (props: IComponentApi) => {
  return (
    <STable>
      <tr>
        <th style={{ width: '20%' }}>Property</th>
        <th style={{ width: '35%' }}>Description</th>
        <th style={{ width: '25%' }}>Type</th>
        <th style={{ width: '10%' }}>Default</th>
      </tr>
      {props.params.map((e: IApiParam) => (
        <tr>
          <td style={{ fontWeight: 'bold' }}>{e.property}</td>
          <td>{e.description}</td>
          <td style={{ color: '#137cbd' }}>{e.type}</td>
          <td>{e.default ?? '-'}</td>
        </tr>
      ))}
    </STable>
  );
};
