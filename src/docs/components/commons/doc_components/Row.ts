import styled from 'styled-components';

export const Row = styled('div')`
  display: flex;
  flex-flow: row;
  & > * {
    flex: 1 1 auto;
  }
`;
