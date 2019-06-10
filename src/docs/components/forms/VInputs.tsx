import React, { useState } from 'react';

import { FieldState, FormState } from 'formstate';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import { Button } from '@blueprintjs/core';

import {
  FileUpload,
  Validators,
  VBasicSliderField,
  VCheckboxField,
  VDateTimePicker,
  VInputField,
  VNumericField,
  VRadioGroupField,
  VSelectField,
  VSelectMultiple,
  VTagInputField,
  VTextAreaField
} from 'gsi-ui';

const store = [
  {
    label: 'This is a store with a very big large text',
    value: 0
  },
  {
    label: 'Store 2',
    value: 1
  }
];

const sex = [
  {
    label: 'Male',
    value: 'm',
    rep: 'M'
  },
  {
    label: 'Female',
    value: 'f',
    rep: 'F'
  }
];

const VInputsDoc = observer(() => {
  const [selectValue, setSelectValue] = useState(store[0].value);
  const form = new FormState<any>({
    username: new FieldState(''),
    search: new FieldState(''),
    description: new FieldState(''),
    store: new FieldState(''),
    tags: new FieldState(''),
    age: new FieldState(null),
    have_job: new FieldState(''),
    sex: new FieldState(''),
    range: new FieldState(0),
    places: new FieldState(sex[0].value),
    date: new FieldState(moment().toDate()),
    multiple: new FieldState([]),
    movies: new FieldState([])
  });

  const searchingAnime = (value: any) =>
    value.toString().indexOf('anime') !== -1 &&
    `Can't search anime in work dude!!!!`;

  const setSelectedValue = (value: any) => {
    setSelectValue(value);
  };

  const handleSave = (element: any) => {
    console.log(element);
  };

  const changeValueSelect = (value: any) => {
    form.$.places.onChange('f');
  };

  const rightButton = <Button minimal icon="lock" />;
  return (
    <React.Fragment>
      <Button
        text="Change Movies Value"
        onClick={() => {
          form.$.movies.onChange([1]);
        }}
      />
      <VSelectMultiple
        inline
        fill
        required
        label="Select movies:"
        options={[
          { label: 'The Shawshank Redemption', value: 1 },
          { label: 'The Godfather', value: 2 },
          { label: 'The Godfather: Part II', value: 3 },
          { label: 'The Dark Knight', value: 4 }
        ]}
        id="selectMultipleTags"
        layer={{
          labelWidth: 6,
          inputWidth: 5,
          labelOrientation: 'end',
          inputOrientation: 'center'
        }}
        placeholder="evil placeholder..."
        fieldState={form.$.movies}
        onChange={() => {
          console.log(form.$.movies.value);
        }}
      />

      <FileUpload />
      <VInputField
        fieldState={form.$.username}
        fill
        tipLabel="Username"
        layer={{
          labelWidth: 6,
          inputWidth: 5,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        rightElement={rightButton}
        id="username"
        noLabel
        inline
      />
      <VInputField
        required
        layer={{
          labelWidth: 6,
          inputWidth: 6,
          labelOrientation: 'end',
          inputOrientation: 'center'
        }}
        fieldState={form.$.username}
        id="username"
        label="Username"
        inline
      />
      <VInputField
        required
        validators={[searchingAnime, Validators.lt(10), Validators.exact(9)]}
        fill
        layer={{
          labelWidth: 6,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        fieldState={form.$.search}
        id="username"
        label="Search"
        inline
        type="search"
        leftIcon="search"
      />
      <VSelectField
        minimal
        defaultText="Please enter a text"
        fill
        tipLabel="Movies"
        layer={{
          labelWidth: 6,
          inputWidth: 6,
          labelOrientation: 'end',
          inputOrientation: 'center'
        }}
        options={store}
        inline
        label="Store List"
        value={selectValue}
        id="store"
        icon="search"
        onChange={setSelectedValue}
      />
      <Button
        text="Change Select"
        onClick={() => {
          setSelectedValue('s2');
        }}
      />
      <VTextAreaField
        fill
        layer={{
          labelWidth: 6,
          inputWidth: 3,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        id="description"
        label="Description"
        inline
        fieldState={form.$.description}
      />
      <VTagInputField
        fill
        limit={5}
        tagValidation={{
          regex: /[a-z0-9]/,
          errorMessage: 'Is a not valid value'
        }}
        layer={{
          labelWidth: 6,
          inputWidth: 4,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        id="tags"
        fieldState={form.$.tags}
        inline
        label="Tags"
      />
      <VNumericField
        id="age"
        fieldState={form.$.age}
        label=""
        noLabel
        layer={{
          labelOrientation: 'end',
          inputOrientation: 'center'
        }}
        inline
      />
      <VCheckboxField
        checkBoxAtLeft
        layer={{
          labelWidth: 6,
          labelOrientation: 'start',
          inputOrientation: 'end'
        }}
        fieldState={form.$.have_job}
        id="have_job"
        label="Have a job?"
        inline
        alignIndicator="right"
      />
      <VRadioGroupField
        layer={{
          labelWidth: 6,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        id="Sex"
        options={sex}
        label="Sex"
        inline
        fieldState={form.$.sex}
      />
      <VBasicSliderField
        fill
        layer={{
          labelWidth: 6,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        id="range"
        fieldState={form.$.range}
        label="Range"
        inline
      />
      <VDateTimePicker
        required
        fill
        inline
        layer={{
          inputWidth: 5,
          labelWidth: 6,
          labelOrientation: 'end',
          inputOrientation: 'start'
        }}
        label="TimePicker"
        dateType="DATE"
        format="MM/DD/YYYY"
        id="date"
        fieldState={form.$.date}
        icon={{ iconName: 'calendar' }}
      />
      <div>
        <VSelectField
          defaultText="Please enter a text"
          layer={{
            labelWidth: 6,
            inputWidth: 2,
            labelOrientation: 'end',
            inputOrientation: 'start'
          }}
          iconOnly
          icon="search"
          inline
          label="Places"
          options={sex}
          id="places"
          fieldState={form.$.places}
        />
        <button onClick={changeValueSelect}>change value select</button>
      </div>
    </React.Fragment>
  );
});
export default VInputsDoc;
