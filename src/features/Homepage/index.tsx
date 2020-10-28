import React from 'react';
import { Container } from 'reactstrap';
import { PickedByReaders } from './PickedByReaders/PickedByReaders';

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <Container>
      <PickedByReaders />
    </Container>
  );
};
