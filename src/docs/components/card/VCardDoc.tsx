import { VStep, VSteps, VCardPanel } from 'gsi-ui';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ComponentDocCard } from '../commons/doc_components/ComponentDocCard';
import { Icon } from '@blueprintjs/core';
import { ComponentApi } from '../commons/doc_components/ComponentApi';
import { Row } from '../commons/doc_components/Row';

export const VCardDoc = () => {
  return (
    <>
      <ReactMarkdown>
        {`
# VCardPanel
**VCardPanel** an extension of the blueprints Card. A card is a bounded unit of UI content with a solid background color.
### When to use
When users need to organize information, make groups or empathize in something.

### Examples`}
      </ReactMarkdown>

      <Row>
        <ComponentDocCard
          component={
            <VCardPanel>
              <h2>This is a VCardPanel in blank</h2>
            </VCardPanel>
          }
          componentString={`
            <VCardPanel>
                <h2>This is a VCardPanel in blank</h2>
            </VCardPanel>
            `}
        />

        <ComponentDocCard
          component={
            <VCardPanel
              height={'150px'}
              width={'300px'}
              headerIcon={'cross'}
              headerText={'Header white text with icon'}
              headerColor={'#f6f3f3'}
              headerBackgroundColor={'#137cbd'}
              backgroundColor={'#dee1e9'}
            >
              <p>
                This is a VCardPanel with fixed size, header and background
                colors
              </p>
            </VCardPanel>
          }
          componentString={`
            <VCardPanel
                height={'150px'}
                width={'300px'}
                headerIcon={'cross'}
                headerText={'Header white text with icon'}
                headerColor={'#f6f3f3'}
                headerBackgroundColor={'#137cbd'}
                backgroundColor={'#dee1e9'}
                >
                <p>
                    This is a VCardPanel with fixed size, header and background colors
                </p>
            </VCardPanel>
            `}
        />
      </Row>

      <ComponentDocCard
        component={
          <VCardPanel
            closeIcon={'cross'}
            headerBackgroundColor={'#bc1616'}
            backgroundColor={'#ffffdd'}
            headerCustomComponent={
              <div>
                <Icon icon={'document'} /> This is a custom header
              </div>
            }
          >
            <p>Another card</p>
          </VCardPanel>
        }
        componentString={`
            <VCardPanel
                closeIcon={'cross'}
                headerBackgroundColor={'#bc1616'}
                backgroundColor={'#ffffdd'}
                headerCustomComponent={
                    <div>
                    <Icon icon={'document'} /> This is a custom header
                    </div>
                }
                >
                <p>Another card</p>
            </VCardPanel>
            `}
      />

      <Row>
        <ComponentDocCard
          component={
            <VCardPanel
              bodyPadding={'50px'}
              headerTextBold
              cardElevation={4}
              headerText={'Bold header text'}
            >
              <h2>
                Card with header text bold, elevation and extra body padding
              </h2>
            </VCardPanel>
          }
          componentString={`
            <VCardPanel
                bodyPadding={'50px'}
                headerTextBold
                cardElevation={4}
                headerText={'Bold header text'}
                >
                <h2>
                    Card with header text bold, elevation and extra body padding
                </h2>
            </VCardPanel>
            `}
        />

        <ComponentDocCard
          component={
            <VCardPanel
              cardElevation={4}
              headerTextUppercase
              headerText={'Uppercase text'}
            >
              <h2>Another elevated card</h2>
            </VCardPanel>
          }
          componentString={`
            <VCardPanel
                cardElevation={4}
                headerTextUppercase
                headerText={'Uppercase text'}
                >
                <h2>Another elevated card</h2>
            </VCardPanel>
            `}
        />
      </Row>

      <ReactMarkdown>{`# VCardPanel`}</ReactMarkdown>
      <ComponentApi
        params={[
          {
            property: 'noHeader',
            type: `boolean`,
            description: 'Card with no header',
            default: 'false'
          },
          {
            property: 'headerText',
            type: `string`,
            description: 'Header text'
          },
          {
            property: 'headerIcon',
            type: `any`,
            description:
              'React component for the header Icon, it will be appear at left'
          },
          {
            property: 'headerBackgroundColor',
            type: `string`,
            description: 'Header background color'
          },
          {
            property: 'backgroundColor',
            type: `string`,
            description: 'Card background color',
            default: '#E8E8E8'
          },
          {
            property: 'headerColor',
            type: `string`,
            description: 'Header text color',
            default: '#5D5D5D'
          },
          {
            property: 'headerHorizontalAlign',
            type: `FlexJustify`,
            description: 'Header horizontal alignment',
            default: 'start'
          },
          {
            property: 'cardElevation',
            type: `Elevation`,
            description: 'Card elevation',
            default: '0'
          },
          {
            property: 'height',
            type: `string`,
            description: 'Card height',
            default: '35px'
          },
          {
            property: 'width',
            type: `string`,
            description: 'Card width'
          },
          {
            property: 'collapse',
            type: `boolean`,
            description: 'Is the card collapsed',
            default: 'false'
          },
          {
            property: 'transitionDuration',
            type: `number`,
            description: 'animation duration'
          },
          {
            property: 'bodyPadding',
            type: `string`,
            description: 'Card body padding',
            default: '15px'
          },
          {
            property: 'keepChildrenMounted',
            type: `boolean`,
            description: ''
          },
          {
            property: 'openIcon',
            type: `IconName`,
            description: 'Expand icon'
          },
          {
            property: 'closeIcon',
            type: `IconName`,
            description: 'Collapse icon'
          },
          {
            property: 'headerOrientation',
            type: `HeaderOrientation`,
            description:
              'Orientation of header, for text, icon and custom component'
          },
          {
            property: 'headerTextJustify',
            type: `FlexJustify`,
            description: 'Header test justify'
          },
          {
            property: 'headerTextUppercase',
            type: `boolean`,
            description: 'Sets the header text in uppercase'
          },
          {
            property: 'headerTextBold',
            type: `boolean`,
            description: 'Sets the header text bold'
          },
          {
            property: 'className',
            type: `string`,
            description: 'Class for the card component'
          },
          {
            property: 'defaultActive',
            type: `boolean`,
            description: 'For collapsing behavior'
          },
          {
            property: 'headerCustomComponent',
            type: `any`,
            description: 'React component for the right side of header'
          },
          {
            property: 'heigthHeaderPx',
            type: `number`,
            description: 'Header height',
            default: '35'
          },
          {
            property: 'headerCustomButton',
            type: `any`,
            description: 'Header custom button'
          },
          {
            property: 'onHeaderMouseDrag',
            type: `() => void`,
            description: 'Callback function on header mouse drag'
          },
          {
            property: 'onHeaderFocus',
            type: `() => void`,
            description: 'Callback function on header mouse focus'
          },
          {
            property: 'id',
            type: `string`,
            description: 'Component Id'
          },
          {
            property: 'headerTextComponent',
            type: `any`,
            description: 'React text component for replacing headerText'
          },
          {
            property: 'headerClass',
            type: `string`,
            description: 'Header class'
          }
        ]}
      />
    </>
  );
};
