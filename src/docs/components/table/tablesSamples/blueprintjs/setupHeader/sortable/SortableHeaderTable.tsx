import React, { useState} from 'react';
import {VTable} from "gsi-ui";

export const faker = require('faker');

export interface IProps {
    striped?: boolean
    countData?: number
}

export const SortableTableBlueprintSample = (props: IProps) => {


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

   const onSort = (index: any) => {
        console.log(index);
    };

    return (<>
        <VTable
            columns={columns}
            data={getData()}
            columns_name={getColumnsName()}
            striped
            sortable={{
                columns: 'ALL',
                onSort: onSort,
                setupsOrden: [
                    {
                        order: 'ASC',
                        columnName: 'name',
                        columnIndex: 0
                    }
                ]
            }}
        />
    </>)
};