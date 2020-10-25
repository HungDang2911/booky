import React from 'react';
import { Container } from 'reactstrap';
import { PickedByReaders } from './pickedByReaders/pickedByReaders';

interface Props {
  
}

export const HomePage = (props: Props) => {
  return (
    <Container>
      <PickedByReaders />
    </Container>
  )
}
