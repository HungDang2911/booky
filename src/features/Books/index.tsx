import * as React from 'react';
import { Container } from 'reactstrap';
import { BooksList } from './BooksList/BooksList';
import Filters from './Filters/Filters';

export interface Props {
}

export function Books (props: Props) {
  return (
    <Container className="d-flex">
      <Filters />
      <BooksList />
    </Container>
  );
}
