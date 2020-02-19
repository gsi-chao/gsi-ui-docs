import React from 'react';
import styled from 'styled-components';

import { default as ListCard, ICard } from '../commons/list_card/ListCard';

const TextTitle = styled.h1`
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  color: #576574;
  margin-top: 2.5rem;
  margin-left: 0.8rem;
`;

const IMG = styled.img`
  width: 100%;
`;

const FormLayout = (): JSX.Element => {
  const list: ICard[] = [
    {
      dir: '/forms/select',
      imgCard: <IMG src={require('../assets/form/VSelectMultiple.png')} />,
      imgText: 'Select Multiple'
    },
    {
      dir: '/forms/file-upload',
      imgCard: (
        <IMG
          src={require('../assets/form/FileUpload.png')}
          style={{ height: '5.6rem', width: '5rem' }}
        />
      ),
      imgText: 'File Upload'
    },
    {
      dir: '/forms/input-field',
      imgCard: (
        <IMG
          src={require('../assets/form/VInputField.png')}
          style={{ width: '100%', height: '2.3rem' }}
        />
      ),
      imgText: 'Input Field'
    },
    {
      dir: '/forms/select-field',
      imgCard: <IMG src={require('../assets/form/VSelectField.png')} />,
      imgText: 'Select Field'
    },
    {
      dir: '/forms/text-area',
      imgCard: <IMG src={require('../assets/form/VTextAreaField.png')} />,
      imgText: 'Text Area'
    },
    {
      dir: '/forms/checkbox',
      imgCard: <IMG src={require('../assets/form/VCheckboxField.png')} />,
      imgText: 'Checkbox'
    },
    {
      dir: '/forms/numeric-field',
      imgCard: <IMG src={require('../assets/form/VNumericField.png')} />,
      imgText: 'Checkbox'
    },
    {
      dir: '/forms/radio-group',
      imgCard: <IMG src={require('../assets/form/VRadioGroupField.png')} />,
      imgText: 'Radio Group'
    },
    {
      dir: '/forms/basic-slider',
      imgCard: <IMG src={require('../assets/form/VBasicSliderField.png')} />,
      imgText: 'Basic Slider'
    },
    {
      dir: '/forms/date-picker',
      imgCard: <IMG src={require('../assets/form/VDateTimePicker.png')} />,
      imgText: 'Date Picker'
    }
  ];
  return (
    <>
      <TextTitle>Forms</TextTitle>
      <ListCard list={list} />
    </>
  );
};

export default FormLayout;
