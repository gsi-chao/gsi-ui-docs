import React, { useState} from 'react';
import {VTable} from "gsi-ui";

export const faker = require('faker');

export interface IProps {
    striped?: boolean
    countData?: number
}

export const HeaderSetupTableBlueprintSample = (props: IProps) => {


    const [columns,setColumns]=useState<string[]>(['name', 'lastName', 'phone', 'email', 'company', 'notes']);
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
                email: faker.internet.email(firstName, lastName, 'generalsoftwareinc.com'),
                notes: faker.lorem.sentence(),

            })
        }
        return data;
    };

    const getConfigStyleHeader = () => {
        return [
            {
                column: 'name',
                textColor: 'white',
                backgroundColor: '#DB2C6F',
                textAlign: 'left'
            },
            {
                column: 'lastName',
                textColor: 'white',
                backgroundColor: '#634DBF'
            },
            {
                column: 'phone',
                textColor: 'white',
                backgroundColor: '#D13913'
            },
            {
                column: 'email',
                textColor: 'white',
                backgroundColor: '#308c8a',
                textAlign: 'end'
            },
            {
                column: 'company',
                textColor: 'white',
                backgroundColor: '#e5504f',
                textAlign: 'end'
            },
            {
                column: 'notes',
                textColor: 'white',
                backgroundColor: '#238C2C',
                textAlign: 'end'
            }
        ]
    };

    const getColumnsName = () => {
        return {
            name: 'Name',
            lastName: 'Last Name',
            phone: 'Phone',
            email: 'Email',
            company: 'Company',
            notes: 'Notes',
        }
    };

    return (<>
        <VTable
            columns={columns}
            data={getData()}
            columns_name={getColumnsName()}
            configColumnsHeader={getConfigStyleHeader()}
            reordering={true}
            onOrderColumns={(columns: string[]) => setColumns(columns)}
            enableColumnResizing={true}
            columnWidths={[250, 125, 150, 200]}
            striped

        />
    </>)
};