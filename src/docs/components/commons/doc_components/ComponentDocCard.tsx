import { Button } from '@blueprintjs/core';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const SCardDiv = styled('div')`
  margin-bottom: 40px;
`;

const SComponentDocCard = styled('div')`
  border: solid 1px #dee1e9;
  padding: 15px;
  margin: 10px 10px 0;
`;

const SCodeDiv = styled('div')`
  position: relative;
`;

const SSeeDiv = styled('div')`
  text-align-last: center;
`;

interface IComponentDocCard {
  component: React.ReactElement;
  componentString?: string;
}

export const ComponentDocCard = (props: IComponentDocCard) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <SCardDiv>
      <SComponentDocCard>
        <>{props.component}</>
        <SCodeDiv>
          {showCode && props.componentString && (
            <SyntaxHighlighter language="typescript" style={atomDark}>
              {props.componentString}
            </SyntaxHighlighter>
          )}
        </SCodeDiv>
      </SComponentDocCard>
      <SSeeDiv>
        <Button
          onClick={() => {
            setShowCode(!showCode);
          }}
          small
        >
          {!showCode ? `<Show Code>` : `<Hide Code />`}
        </Button>
      </SSeeDiv>
    </SCardDiv>
  );
};
