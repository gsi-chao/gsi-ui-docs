import React from 'react';
import {VTable} from "gsi-ui";

export const faker = require('faker');

export interface IProps {
    striped?: boolean
    countData?:number
}

export const DefaultTableBlueprintSample = (props:IProps) => {

    const getData = () => {

        const count = props.countData?props.countData : 8;
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

    return (<>
        <VTable
            columns={['name', 'lastName', 'phone', 'email', 'company', 'notes']}
            data={getData()}
            columns_name={getColumnsName()}
            striped={props.striped}

        />
    </>)
};