import { VStep, VSteps } from 'gsi-ui';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ComponentDocCard } from '../commons/doc_components/ComponentDocCard';
import { Icon } from '@blueprintjs/core';

export const VStepsDoc = () => {
  return (
    <>
      <ReactMarkdown>
        {`
# Steps
**Steps** is a navigation bar that guides users through the steps of a task.
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
    </>
  );
};
