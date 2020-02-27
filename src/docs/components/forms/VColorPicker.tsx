import React, { Component } from 'react';
import {
  TypePickerColor,
  VColorPicker,
  VColorResult,
  VHSLColor,
  VRGBColor
} from 'gsi-ui';
import ReactMarkdown from 'react-markdown';
import { ComponentDocCard } from '../commons/doc_components/ComponentDocCard';
import { Row } from '../commons/doc_components/Row';
import { ComponentApi } from '../commons/doc_components/ComponentApi';

interface IState {
  typePickerColor: TypePickerColor;
  color: string | VHSLColor | VRGBColor;
  disable: boolean;
}

const VColorPickerDoc = () => {
  return (
    <>
      <ReactMarkdown>
        {`
# VColorPicker
**VColorPicker** interface for [react-color](https://casesandberg.github.io/react-color/ "react-color") library. It is restricted only for SketchPicker and ChromePicker
### When to use
Select a color, it allows several color formats.

### Examples`}
      </ReactMarkdown>

      <Row>
        <div>
          <ReactMarkdown>{`SketchPicker`}</ReactMarkdown>
          <ComponentDocCard
            component={
              <div>
                <VColorPicker
                  onChange={(color: any) => {
                    console.log(color);
                  }}
                  typePickerColor={'SketchPicker'}
                  Color={'#ff3333'}
                />
              </div>
            }
            componentString={`
              <VColorPicker
                onChange={(color: any) => {
                  console.log(color);
                }}
                typePickerColor={'SketchPicker'}
                Color={'#ff3333'}
              />
            `}
          />
        </div>
        <div>
          <ReactMarkdown>{`ChromePicker`}</ReactMarkdown>
          <ComponentDocCard
            component={
              <VColorPicker
                onChange={(color: any) => {
                  console.log(color);
                }}
                typePickerColor={'ChromePicker'}
                Color={'#449933'}
                width={50}
                height={50}
              />
            }
            componentString={`
            <VColorPicker
              onChange={(color: any) => {
                console.log(color);
              }}
              typePickerColor={'ChromePicker'}
              Color={'#449933'}
              width={50}
              height={50}
            />
          `}
          />
        </div>
        <div>
          <ReactMarkdown>{`ChromePicker with alpha disabled and Ok button`}</ReactMarkdown>
          <ComponentDocCard
            component={
              <VColorPicker
                onChange={(color: any) => {
                  console.log(color);
                }}
                typePickerColor={'ChromePicker'}
                Color={'#443388'}
                width={100}
                height={100}
                disableAlpha
                addButton={{ intent: 'primary', text: 'Ok' }}
                position={'left'}
              />
            }
            componentString={`
            <VColorPicker
                onChange={(color: any) => {
                  console.log(color);
                }}
                typePickerColor={'ChromePicker'}
                Color={'#443388'}
                width={100}
                height={100}
                disableAlpha
                addButton={{intent: 'primary', text: 'Ok'}}
                position={'left'}
              />
          `}
          />
        </div>
      </Row>

      <ReactMarkdown>{`# VColorPicker`}</ReactMarkdown>
      <ComponentApi
        params={[
          {
            property: 'typePickerColor',
            type: `'SketchPicker' | 'ChromePicker'`,
            description: 'Type of color picker'
          },
          {
            property: 'Color',
            type: 'Color | string',
            description: 'Starting color'
          },
          {
            property: 'onChange',
            type: '(color: VColorResult) => void',
            description: 'Trigger when color is changed'
          },
          {
            property: 'width',
            type: 'number',
            description: 'Colored square width',
            default: '40'
          },
          {
            property: 'height',
            type: `number`,
            description: 'Colored square height',
            default: '40'
          },
          {
            property: 'position',
            type: `'left' | 'right' | 'bottom' | 'top' | 'auto'`,
            description: 'Position where color picker will shows',
            default: 'right'
          },
          {
            property: 'disable',
            type: `boolean`,
            description: 'If is editable or not',
            default: 'false'
          },
          {
            property: 'addButton',
            type: `{ text: string; intent: Intent; }`,
            description: 'Confirmation button on color picker',
          },
          {
            property: 'disableAlpha',
            type: `boolean`,
            description: 'Disable the alpha color',
            default: 'false',
          },
          {
            property: 'boundary',
            type: `'scrollParent' | 'viewport' | 'window'`,
            description: 'Boundary for this element',
          }
        ]}
      />
    </>
  );
};

export default VColorPickerDoc;
