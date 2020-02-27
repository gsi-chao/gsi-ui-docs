import { VStep, VSteps } from 'gsi-ui';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ComponentDocCard } from '../commons/doc_components/ComponentDocCard';
import { Icon } from '@blueprintjs/core';
import { ComponentApi } from '../commons/doc_components/ComponentApi';

export const VStepsDoc = () => {
  return (
    <>
      <ReactMarkdown>
        {`
# VSteps
**VSteps** is a navigation bar that guides users through the steps of a task.
### When to use
Users want to accomplish a goal that has many steps or must complete steps in a specific sequence.

### Examples`}
      </ReactMarkdown>

      <ComponentDocCard
        component={
          <VSteps>
            <VStep stepKey={1} title={'first'}>
              <p>{'First step'}</p>
            </VStep>
            <VStep stepKey={2} description={'second description'}>
              <p>{'Second step'}</p>
            </VStep>
            <VStep stepKey={3}>
              <p>{'Third step'}</p>
            </VStep>
          </VSteps>
        }
        componentString={`
          <VSteps>
            <VStep stepKey={1} title={'first'}>
              <p>{'First step'}</p>
            </VStep>
            <VStep stepKey={2} description={'second description'}>
              <p>{'Second step'}</p>
            </VStep>
            <VStep stepKey={3}>
              <p>{'Third step'}</p>
            </VStep>
          </VSteps>
      `}
      />

      <ComponentDocCard
        component={
          <VSteps>
            <VStep
              stepKey={1}
              title={'first title'}
              description={'Description..'}
              icon={<Icon icon={'airplane'} />}
            >
              <p>{'First step'}</p>
            </VStep>
            <VStep
              stepKey={2}
              title={'This is a title'}
              description={'this is a description'}
              icon={<Icon icon={'camera'} />}
            >
              <p>{'Second step'}</p>
            </VStep>
            <VStep stepKey={3} icon={<Icon icon={'office'} />}>
              <p>{'Third step'}</p>
            </VStep>
          </VSteps>
        }
        componentString={`
        <VSteps>
          <VStep
            stepKey={1}
            title={'first title'}
            description={'Description..'}
            icon={<Icon icon={'airplane'} />}
          >
            <p>{'First step'}</p>
          </VStep>
          <VStep
            stepKey={2}
            title={'This is a title'}
            description={'this is a description'}
            icon={<Icon icon={'camera'} />}
          >
            <p>{'Second step'}</p>
          </VStep>
          <VStep stepKey={3} icon={<Icon icon={'office'} />}>
            <p>{'Third step'}</p>
          </VStep>
        </VSteps>
      `}
      />

      <ReactMarkdown>{`# VSteps`}</ReactMarkdown>
      <ComponentApi
        params={[
          {
            property: 'mainColor',
            type: 'string',
            description: 'Steps main color',
            default: '#137cbd'
          },
          {
            property: 'secondaryColor',
            type: 'string',
            description: 'Steps secondary color',
            default: '#7b7d82'
          },
          {
            property: 'textMainColor',
            type: 'string',
            description: 'Steps text main color'
          },
          {
            property: 'textSecondaryColor',
            type: 'string',
            description: 'Steps text secondary color'
          },
          {
            property: 'onChange',
            type: `(currentStep?: string | number | undefined, buttonClick?: 'next' | 'previous') => void`,
            description:
              'Trigger when Step is changed, it returns the currentStep key and the button who triggered the action'
          }
        ]}
      />

      <ReactMarkdown>{`# VStep`}</ReactMarkdown>
      <ComponentApi
        params={[
          {
            property: 'stepKey',
            type: `string | number`,
            description: 'Unique key for the step'
          },
          {
            property: 'title',
            type: 'string',
            description: 'Title shown on progress bar'
          },
          {
            property: 'description',
            type: 'string',
            description: 'Description shown with the title  of step'
          },
          {
            property: 'icon',
            type: 'JSX.Element',
            description: 'Icon to be shown on step progress bar'
          },
          {
            property: 'component',
            type: `FunctionComponent<{}>;`,
            description: 'The component of the step, it can be passed has a child too'
          }
        ]}
      />
    </>
  );
};
