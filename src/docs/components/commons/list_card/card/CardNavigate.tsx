import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { useRouter } from 'rift-router';
import styled from 'styled-components';

import './style.css';

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(16, 22, 26, 0.15);
  height: 6rem;
  width: 100%;
  & img {
    border-radius: 8px;
    opacity: 0.6;
  }
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 100%;
`;

interface ICardNavigate {
  inputImg: JSX.Element;
  inputText: string;
  navigateTo?: string;
}

const CardNavigate = (props: ICardNavigate): JSX.Element => {
  const router = useRouter();

  const onClick = () => {
    props.navigateTo && router.to(props.navigateTo);
  };

  return (
    <div style={{ margin: 10 }}>
      <Card
        interactive
        elevation={Elevation.ONE}
        className={'cardClass'}
        onClick={onClick}
      >
        <ContainerImage>{props.inputImg}</ContainerImage>
        <ContainerText>{props.inputText}</ContainerText>
      </Card>
    </div>
  );
};

export default CardNavigate;
