import React from 'react';
import { VCarousel, VInputField, VTextAreaField } from 'gsi-ui';
import ReactMarkdown from 'react-markdown';
import { ComponentDocCard } from '../commons/doc_components/ComponentDocCard';
import { Row } from '../commons/doc_components/Row';

const elements = [
  <div>
    <h1>{'This is the carousel first element'}</h1>
    <p>{'Bottom buttons aligned center'}</p>
  </div>,
  <div>
    <h1>{'With a table inside'}</h1>
    <table>
      <tr>
        <th>{'Attribute'}</th>
        <th>{'Color'}</th>
        <th>{'Width'}</th>
        <th>{'Height'}</th>
      </tr>
      <tr>
        <td>{'house'}</td>
        <td>{'black'}</td>
        <td>{'10m'}</td>
        <td>{'4m'}</td>
      </tr>
      <tr>
        <td>{'tower'}</td>
        <td>{'white'}</td>
        <td>{'5m'}</td>
        <td>{'15m'}</td>
      </tr>
    </table>
  </div>,
  <div>
    <h1>{'With a form inside'}</h1>
    <VInputField id="name" label="name" value="" inline />
    <VTextAreaField id="description" label="description" value="" inline />
  </div>
];

const VCarouselDoc = () => {
  return (
    <div style={{ width: '100%' }}>
      <ReactMarkdown>
        {`
# VCarousel
**VCarousel** An animated carousel component. Scales with its container. 
### When to use
- When there is a group of content on the same level.
- When there is insufficient content space, it can be used to save space in the form of a revolving door.
- Commonly used for a group of pictures/cards.

### Examples`}
      </ReactMarkdown>

      <Row>
        <div style={{ width: '50%' }}>
          <ComponentDocCard
            component={
              <VCarousel elements={elements} buttonsJustify={'center'} />
            }
            componentString={`
        const elements = [
          <div>
            <h1>{'This is the carousel first element'}</h1>
            <p>{'Bottom buttons aligned center'}</p>
          </div>,
          <div>
            <h1>{'With a table inside'}</h1>
            <table>
              <tr>
                <th>{'Attribute'}</th>
                <th>{'Color'}</th>
                <th>{'Width'}</th>
                <th>{'Height'}</th>
              </tr>
              <tr>
                <td>{'house'}</td>
                <td>{'black'}</td>
                <td>{'10m'}</td>
                <td>{'4m'}</td>
              </tr>
              <tr>
                <td>{'tower'}</td>
                <td>{'white'}</td>
                <td>{'5m'}</td>
                <td>{'15m'}</td>
              </tr>
            </table>
          </div>,
          <div>
            <h1>{'With a form inside'}</h1>
            <VInputField id="name" label="name" value="" inline />
            <VTextAreaField id="description" label="description" value="" inline />
          </div>
        ];

        <VCarousel elements={elements} />
      `}
          />
        </div>

        <div style={{ width: '50%' }}>
          <ComponentDocCard
            component={
              <VCarousel
                elements={[
                  <div>
                    <h1>{'You can also pass to carousel width and height'}</h1>
                  </div>,
                  <div>
                    <h1>{'Buttons are aligned to start here'}</h1>
                  </div>
                ]}
                width={'400px'}
                height={'200px'}
                buttonsJustify={'flex-start'}
              />
            }
            componentString={`
          <VCarousel
            elements={[
              <div>
                <h1>{'You can also pass to carousel width and height'}</h1>
              </div>,
              <div>
                <h1>{'Buttons are aligned to start here'}</h1>
              </div>
            ]}
            width={'400px'}
            height={'200px'}
            buttonsJustify={'flex-start'}
          />
      `}
          />
        </div>
      </Row>
    </div>
  );
};

export default VCarouselDoc;
