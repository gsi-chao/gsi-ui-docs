import React from 'react';
import styled from 'styled-components';

import CardNavigate from './card/CardNavigate';

export interface ICard {
  imgCard: JSX.Element;
  imgText: string;
  dir?: string;
}

export interface IListCard {
  list: ICard[];
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ListCard = (props: IListCard): JSX.Element => {
  return (
    <Container>
      {props.list.map((item: ICard, key: number) => (
        <CardNavigate
          key={key}
          inputImg={item.imgCard}
          inputText={item.imgText}
          navigateTo={item.dir}
        />
      ))}
    </Container>
  );
};

export default ListCard;
